/**
 * Places the HTML layer over the canvas every frame: system labels and halos, route lines,
 * the hero text and the planets orbiting in the system view.
 */
import { SYS, TILT, clamp, rnd } from './data';
import type { EngineCtx } from './types';

/** Screen x, screen y and perspective scale of a projected point. */
type ScreenPoint = [number, number, number];
/** Projects a galaxy-space point; null when it is behind the camera. */
type Project = (x: number, y: number, z: number) => ScreenPoint | null;

/** Labels flip to the left side when closer than this to the right edge. */
const FLIP_MARGIN = 175;
/** Staggered fade-in of system labels after the intro. */
const LABEL_DELAY = 150;
const LABEL_STAGGER = 110;
const LABEL_FADE = 420;
const ROUTES_DELAY = 900;
const ROUTES_FADE = 700;
const REVEAL_END = 2600;
const HERO_DELAY = 150;
const HERO_FADE = 650;
const HERO_END = 900;
const HERO_RISE_PX = 12;
/** How often the hero and hint boxes are measured again (ms). */
const RECT_REFRESH = 400;
/** Planets grow out of the star over this time when entering a system (ms). */
const EMERGE_MS = 1300;
const TAU = Math.PI * 2;

/** Fields and elements of the engine that the overlay reads or writes. */
interface OverlayCtx extends EngineCtx {
  navEl?: HTMLElement | null;
  /** Idle and active route paths in the SVG layer. */
  pIdle?: SVGPathElement | null;
  pAct?: SVGPathElement | null;
  bhBtn?: HTMLElement | null;
  /** Black hole position and radius on screen, set by the scene. */
  bhScr?: { x: number; y: number; R: number } | null;
  /** One label wrapper and halo per system. */
  wraps: (HTMLElement | null)[];
  halos: (HTMLElement | null)[];
  hero?: HTMLElement | null;
  hint?: HTMLElement | null;
  /** Marker for the system the ship is at. */
  orig?: HTMLElement | null;
  /** Start of the label reveal: a timestamp, Infinity = hidden, null = done. */
  revealAt: number | null;
  heroAt: number | null;
  rc?: (DOMRect | null)[];
  rcT: number;
  /** Systems whose label sits on the other side of the dot, so it does not cover another label. */
  labelFlip?: Set<number>;

  /** System view layout: centre and orbit radii. */
  lay: { cx: number; cy: number; rx: number[] };
  orbSvg?: SVGElement | null;
  phalos: (HTMLElement | null)[];
  starEl?: HTMLElement | null;
  orb: (number | null)[];
  orb0: number | null;
}

/**
 * Planet label with the side it is flipped to, whether it shows only its number,
 * and its full size (measured while the name is shown).
 */
type PlanetLabel = HTMLElement & { _fl?: boolean; _cm?: boolean; _full?: { w: number; h: number } };
/** A planet label for this frame: screen centre of its planet, scaled sizes (full and number only) and default side. */
type PlanetLabelPos = {
  i: number;
  label: PlanetLabel;
  x: number;
  y: number;
  w: number;
  h: number;
  cw: number;
  ch: number;
  gap: number;
  depth: number;
  edge: boolean;
  scale: number;
  /** Selected or hovered: never gives way. */
  focus: boolean;
};

/** Screen box of a label. */
type Box = { x0: number; x1: number; y0: number; y1: number };
const boxesOverlap = (a: Box, b: Box) =>
  a.x0 < b.x1 + 4 && b.x0 < a.x1 + 4 && a.y0 < b.y1 + 2 && b.y0 < a.y1 + 2;

/**
 * Last resort for labels that still overlap (narrow screens, where neither side has room).
 * Labels are placed by priority (`yieldOf` names the one that gives way); each takes the smallest
 * vertical offset, within [minY, maxY], that clears the labels already placed. Keeping the direction
 * of the previous offset (`prev`) is preferred, so a label does not cross over its neighbour.
 */
function verticalNudges(
  boxes: (Box | null)[],
  yieldOf: (a: number, b: number) => number,
  prev: number[],
  minY: number,
  maxY: number,
): number[] {
  const dy = boxes.map(() => 0);
  const order = boxes
    .map((_, i) => i)
    .filter(i => boxes[i])
    .sort((a, b) => (yieldOf(a, b) === b ? -1 : 1));
  const placed: Box[] = [];
  for (const i of order) {
    const r = boxes[i] as Box;
    const shift = (d: number): Box => ({ x0: r.x0, x1: r.x1, y0: r.y0 + d, y1: r.y1 + d });
    const clear = (d: number) => {
      const s = shift(d);
      return (d === 0 || (s.y0 >= minY && s.y1 <= maxY)) && placed.every(o => !boxesOverlap(s, o));
    };
    if (!clear(0)) {
      // Candidates: just below or just above each label in the way.
      const candidates = placed
        .filter(o => r.x0 < o.x1 + 4 && o.x0 < r.x1 + 4)
        .flatMap(o => [o.y1 + 3 - r.y0, o.y0 - 3 - r.y1])
        .filter(clear);
      const cost = (d: number) => Math.abs(d) + (prev[i] && Math.sign(d) !== Math.sign(prev[i]) ? 24 : 0);
      candidates.sort((a, b) => cost(a) - cost(b));
      if (candidates.length) dy[i] = candidates[0];
    }
    placed.push(shift(dy[i]));
  }
  return dy;
}

/** Eases a label towards its vertical offset, so nudges do not jump between frames. */
type Nudged = HTMLElement & { _dy?: number };
function applyNudge(el: Nudged, target: number, unit = 1): void {
  const prev = el._dy ?? 0;
  const next = Math.abs(target - prev) < 0.5 ? target : prev + (target - prev) * 0.3;
  if (next === prev && el._dy !== undefined) return;
  el._dy = next;
  el.style.translate = next ? `0 ${(next / unit).toFixed(1)}px` : '';
}

/** Unscaled size of a planet label, full and with the number only. */
function planetLabelSize(label: PlanetLabel): { w: number; h: number; cw: number; ch: number } {
  if (!label._cm || !label._full) label._full = { w: label.offsetWidth || 120, h: label.offsetHeight || 36 };
  const idx = label.firstElementChild as HTMLElement | null;
  // 20 / 8 = the label's horizontal / vertical padding.
  return { ...label._full, cw: (idx?.offsetWidth ?? 20) + 20, ch: (idx?.offsetHeight ?? 14) + 8 };
}

/**
 * Planet labels sit right of the planet, or left near the right edge. When two labels overlap,
 * the one on the far side of the orbit (never the selected or hovered one) moves to the other side of its planet if it fits on screen;
 * if they still overlap (narrow screens) it shows only its number (the index under the map has the names),
 * and as a last resort it moves up or down.
 */
function placePlanetLabels(labels: PlanetLabelPos[]): void {
  const compact = labels.map(() => false);
  const left = labels.map(l => l.edge);
  const rect = (k: number, onLeft: boolean, grow = 0): Box => {
    const l = labels[k];
    const w = compact[k] ? l.cw : l.w;
    const h = compact[k] ? l.ch : l.h;
    const x0 = onLeft ? l.x - l.gap - w : l.x + l.gap;
    return { x0: x0 - grow, x1: x0 + w + grow, y0: l.y - h / 2 - grow, y1: l.y + h / 2 + grow };
  };
  const farSide = (a: number, b: number) =>
    labels[a].focus !== labels[b].focus
      ? labels[a].focus
        ? b
        : a
      : labels[a].depth < labels[b].depth
        ? a
        : b;
  const pairs = (fn: (a: number, b: number) => void) => {
    for (let a = 0; a < labels.length; a++) for (let b = a + 1; b < labels.length; b++) fn(a, b);
  };

  // 1. Swap sides.
  const moved = new Set<number>();
  pairs((a, b) => {
    if (!boxesOverlap(rect(a, left[a]), rect(b, left[b]))) return;
    const far = farSide(a, b);
    for (const k of [far, far === a ? b : a]) {
      const r = rect(k, !left[k]);
      if (!moved.has(k) && r.x0 >= 16 && r.x1 <= innerWidth - 16) {
        left[k] = !left[k];
        moved.add(k);
        break;
      }
    }
  });
  // 2. Number only. A label already compact keeps it until its full size clears by 6px, so it does not flicker.
  pairs((a, b) => {
    const far = farSide(a, b);
    const near = far === a ? b : a;
    const grow = labels[far].label._cm ? 6 : 0;
    if (boxesOverlap(rect(far, left[far], grow), rect(near, left[near]))) compact[far] = true;
  });
  // 3. Up or down.
  const dy = verticalNudges(
    labels.map((_, k) => rect(k, left[k])),
    farSide,
    labels.map(l => (l.label as Nudged)._dy ?? 0),
    8,
    innerHeight - 8,
  );

  labels.forEach((l, k) => {
    applyNudge(l.label, dy[k], l.scale);
    if (l.label._cm !== compact[k]) {
      l.label._cm = compact[k];
      const name = l.label.lastElementChild as HTMLElement | null;
      if (name) name.style.display = compact[k] ? 'none' : '';
    }
    const flip = left[k];
    if (l.label._fl === flip) return;
    l.label._fl = flip;
    l.label.style.left = flip ? 'auto' : 'calc(100% + 8px)';
    l.label.style.right = flip ? 'calc(100% + 8px)' : 'auto';
    l.label.style.textAlign = flip ? 'right' : 'left';
  });
}

const px = (x: number, y: number) => `${x.toFixed(1)}px ${y.toFixed(1)}px`;
const easeOut = (t: number, power: number) => 1 - Math.pow(1 - t, power);

export const overlay = {
  /** Galaxy map pass. `P` projects points, `s` is the time in seconds, `mo` the motion level (0 = reduced). */
  place(this: OverlayCtx, P: Project, s: number, mo: number): void {
    if (this.state.phase !== 'map') return;
    const now = performance.now();
    const reveal = this.revealAt;
    const hiddenByEgg = this.egg ? 'hidden' : '';
    if (this.navEl) this.navEl.style.visibility = hiddenByEgg;
    const routesLayer = this.pIdle?.parentNode as SVGElement | null | undefined;
    if (routesLayer) routesLayer.style.visibility = hiddenByEgg;
    placeBlackHoleButton(this);

    const { sel, here } = this.state;
    const showRoutes = this.props['routes'] ?? true;
    const origin = P(...SYS[here].p);
    let idleD = '';
    let activeD = '';
    const screen: [number, number][] = [];
    /** Perspective scale per system (smaller = farther), used to pick which label gives way. */
    const scales: number[] = [];
    this.scr = screen;

    SYS.forEach((system, i) => {
      const p = P(...system.p);
      const wrap = this.wraps[i];
      if (p) {
        screen[i] = [p[0], p[1]];
        scales[i] = p[2];
      }
      if (wrap) placeSystemLabel(this, wrap, p, !!system.home, !!this.labelFlip?.has(i));
      if (wrap && reveal != null) {
        const t =
          reveal === Infinity
            ? 0
            : clamp((now - reveal - LABEL_DELAY - i * LABEL_STAGGER) / LABEL_FADE, 0, 1);
        const opacity = t >= 1 ? '' : String(t);
        const [dot, label] = [wrap.firstElementChild, wrap.lastElementChild] as (HTMLElement | null)[];
        if (dot) dot.style.opacity = opacity;
        if (label) label.style.opacity = opacity;
      }
      const halo = this.halos[i];
      if (halo) {
        const pulse = 0.5 + 0.5 * Math.sin(s * 1.05 + i * 1.3);
        halo.style.opacity = (mo ? 0.35 + 0.5 * pulse : 0.6).toFixed(3);
        halo.style.transform = `scale(${(mo ? 1 + 0.35 * pulse : 1.1).toFixed(3)})`;
      }
      if (p && origin && i !== here) {
        const seg = `M${origin[0].toFixed(1)} ${origin[1].toFixed(1)} L${p[0].toFixed(1)} ${p[1].toFixed(1)} `;
        if (i === sel) activeD += seg;
        else idleD += seg;
      }
    });

    if (this.pIdle) {
      this.pIdle.setAttribute('d', showRoutes ? idleD : '');
      if (mo) this.pIdle.style.strokeDashoffset = (-s * 4).toFixed(1);
      if (reveal != null) {
        const t = reveal === Infinity ? 0 : clamp((now - reveal - ROUTES_DELAY) / ROUTES_FADE, 0, 1);
        this.pIdle.style.opacity = String(t);
        if (reveal !== Infinity && now - reveal > REVEAL_END) {
          this.revealAt = null;
          this.pIdle.style.opacity = '';
        }
      }
    }
    if (this.pAct) {
      this.pAct.setAttribute('d', activeD);
      if (sel >= 0) this.pAct.setAttribute('stroke', SYS[sel].hex);
      if (mo) this.pAct.style.strokeDashoffset = (-s * 14).toFixed(1);
    }

    fadeInHero(this, now);
    dimCoveredText(this, now);
    declutterLabels(this, now, scales);

    if (this.orig) {
      if (origin) {
        this.orig.style.translate = px(origin[0], origin[1]);
        this.orig.style.visibility = 'visible';
      } else this.orig.style.visibility = 'hidden';
    }
  },

  /** System view pass: moves the planets along their orbits. `dt` in seconds. */
  placePlanets(this: OverlayCtx, dt: number, s: number, mo: number): void {
    const layout = this.lay;
    const { psel, phover } = this.state;
    const count = layout.rx.length;
    const emerge = this.emerge;
    let grow = 1;
    let fade = 1;
    let starGrow = 1;
    if (emerge) {
      const q = clamp((performance.now() - emerge.start) / EMERGE_MS, 0, 1);
      grow = easeOut(q, 3);
      starGrow = easeOut(clamp(q / 0.8, 0, 1), 2.4);
      fade = clamp((q - 0.12) / 0.5, 0, 1);
      if (q >= 1) this.emerge = null;
    }
    if (this.orbSvg) {
      this.orbSvg.style.transformOrigin = `${layout.cx}px ${layout.cy}px`;
      this.orbSvg.style.transform = grow < 1 ? `scale(${grow.toFixed(3)})` : '';
      this.orbSvg.style.opacity = fade < 1 ? fade.toFixed(3) : '';
    }
    // Orbits slow to a stop while a planet is selected or hovered.
    const targetSpeed = psel >= 0 || phover >= 0 ? 0 : 1;
    this.ospd += (targetSpeed - this.ospd) * (1 - Math.pow(0.02, dt));

    const labels: PlanetLabelPos[] = [];
    for (let i = 0; i < count; i++) {
      if (this.orb[i] == null) {
        this.orb0 ??= rnd() * TAU;
        this.orb[i] = this.orb0 + i * 2.4 + rnd() * 0.35;
      }
      const angularSpeed = mo ? (0.16 * Math.min(mo, 2)) / Math.pow(i + 1, 0.75) : 0;
      this.orb[i] = (this.orb[i] as number) + dt * this.ospd * angularSpeed;
      const angle = (this.orb[i] as number) + (1 - grow) * 2.4;
      const x = layout.cx + Math.cos(angle) * layout.rx[i] * grow;
      const y = layout.cy + Math.sin(angle) * layout.rx[i] * TILT * grow;
      /** 0 = far side of the orbit, 1 = near side. */
      const depth = (Math.sin(angle) + 1) / 2;

      const halo = this.phalos[i];
      if (halo) {
        const pulse = 0.5 + 0.5 * Math.sin(s * 1.05 + i * 1.7);
        halo.style.scale = (mo ? 1 + 0.3 * pulse : 1.1).toFixed(3);
      }
      const wrap = this.pwraps[i];
      if (!wrap) continue;
      const label = wrap.lastElementChild as PlanetLabel | null;
      const scale = (0.8 + 0.28 * depth) * (0.35 + 0.65 * grow);
      if (label?.style) {
        const size = planetLabelSize(label);
        const [w, h, cw, ch] = [size.w * scale, size.h * scale, size.cw * scale, size.ch * scale];
        const gap = (wrap.offsetWidth / 2 + 8) * scale;
        const edge = x + gap + w > innerWidth - 16;
        labels.push({
          i,
          label,
          x,
          y,
          w,
          h,
          cw,
          ch,
          gap,
          depth,
          edge,
          scale,
          focus: i === psel || i === phover,
        });
      }
      wrap.style.translate = px(x, y);
      wrap.style.scale = scale.toFixed(3);
      wrap.style.zIndex = Math.sin(angle) > 0 ? '3' : '1';
      wrap.style.opacity = ((0.7 + 0.3 * depth) * fade).toFixed(3);
    }

    placePlanetLabels(labels);

    if (this.starEl) {
      const breathe = mo ? 1 + 0.05 * Math.sin(s * 1.3) : 1;
      const entry = emerge ? 1 + (emerge.s0 - 1) * (1 - starGrow) : 1;
      this.starEl.style.scale = (breathe * entry).toFixed(3);
    }
  },
};

/** A label on screen; edge = flipped left because it is near the right edge, px = x of its dot, off = extra gap from a large star. */
type Rect = Box & {
  off: number;
  w: number;
  nw: number;
  hud: number;
  edge: boolean;
  px: number;
};

/** Size of each system label (nw = width with the name only), measured every RECT_REFRESH ms with the secondary line visible. */
type LabelBox = { w: number; h: number; hud: number; nw: number; t: number };
const labelBoxes = new WeakMap<HTMLElement, LabelBox>();

/**
 * When two system labels overlap, the farther one hides its secondary line ("SYS-0x · n min")
 * and keeps only the name; if the names still overlap, one label moves to the other side of its dot,
 * and as a last resort up or down.
 * Labels sit right of the dot, or left when flipped near the edge.
 */
function declutterLabels(ctx: OverlayCtx, now: number, scales: number[]): void {
  const screen = ctx.scr ?? [];
  const rects: (Rect | null)[] = [];
  SYS.forEach((_, i) => {
    const p = screen[i];
    const wrap = ctx.wraps[i];
    const text = wrap?.lastElementChild as HTMLElement | null | undefined;
    if (!p || !wrap || !text) {
      rects[i] = null;
      return;
    }
    let box = labelBoxes.get(text);
    if (!box || now - box.t > RECT_REFRESH) {
      const hud = secondaryLine(text);
      const hidden = hud?.style.display === 'none';
      // Full size is measured with the secondary line shown, so the box does not shrink after hiding it.
      const name = text.firstElementChild as HTMLElement | null;
      box = {
        w: hidden && box ? box.w : text.offsetWidth,
        // 20 = the label's horizontal padding.
        nw: (name?.offsetWidth ?? 0) + 20,
        h: hidden && box ? box.h : text.offsetHeight,
        hud: hidden && box ? box.hud : (hud?.offsetHeight ?? 0),
        t: now,
      };
      labelBoxes.set(text, box);
    }
    const edge = p[0] > ctx.W - FLIP_MARGIN;
    const off = homeOffset(!!SYS[i].home, scales[i] ?? 0);
    const x0 = edge ? p[0] - 22 - off - box.w : p[0] + 22 + off;
    rects[i] = {
      off,
      x0,
      x1: x0 + box.w,
      y0: p[1] - 22,
      y1: p[1] - 22 + box.h,
      w: box.w,
      nw: box.nw,
      hud: box.hud,
      edge,
      px: p[0],
    };
  });

  const overlaps = boxesOverlap;
  const farther = (a: number, b: number) => ((scales[a] ?? 0) < (scales[b] ?? 0) ? a : b);

  // 1. The farther of two overlapping labels drops its secondary line.
  const compact = new Set<number>();
  for (let a = 0; a < rects.length; a++) {
    const ra = rects[a];
    if (!ra) continue;
    for (let b = a + 1; b < rects.length; b++) {
      const rb = rects[b];
      if (rb && overlaps(ra, rb)) compact.add(farther(a, b));
    }
  }

  // 2. If the names still overlap, one label moves to the other side of its dot (when it fits on screen).
  // Without the secondary line a label is as wide as its name, still against its dot.
  const shown = rects.map((r, i) =>
    r && compact.has(i)
      ? {
          ...r,
          w: r.nw,
          x0: r.edge ? r.x1 - r.nw : r.x0,
          x1: r.edge ? r.x1 : r.x0 + r.nw,
          y1: r.y1 - r.hud,
        }
      : r,
  );
  const sideSwap = (r: Rect): Rect => {
    const x0 = r.edge ? r.px + 22 + r.off : r.px - 22 - r.off - r.w;
    return { ...r, x0, x1: x0 + r.w };
  };
  const fits = (r: Rect) => r.x0 >= 8 && r.x1 <= ctx.W - 8;
  const flips = new Set<number>();
  for (let a = 0; a < shown.length; a++) {
    for (let b = a + 1; b < shown.length; b++) {
      const ra = shown[a];
      const rb = shown[b];
      if (!ra || !rb || !overlaps(ra, rb)) continue;
      const first = farther(a, b);
      for (const i of [first, first === a ? b : a]) {
        const moved = sideSwap(shown[i] as Rect);
        if (!flips.has(i) && fits(moved)) {
          flips.add(i);
          shown[i] = moved;
          break;
        }
      }
    }
  }
  ctx.labelFlip = flips;

  // 3. Names that still overlap: the farther label moves up or down.
  const texts = SYS.map((_, i) => ctx.wraps[i]?.lastElementChild as Nudged | null | undefined);
  const dy = verticalNudges(
    shown,
    farther,
    texts.map(t => t?._dy ?? 0),
    8,
    ctx.H - 8,
  );

  SYS.forEach((_, i) => {
    const text = texts[i];
    if (text) applyNudge(text, dy[i]);
    const hud = text ? secondaryLine(text) : null;
    if (!hud) return;
    const display = compact.has(i) ? 'none' : '';
    if (hud.style.display !== display) hud.style.display = display;
  });
}

/** The Home star is drawn larger, so its label moves out past the star's radius. */
function homeOffset(isHome: boolean, scale: number): number {
  return isHome ? Math.max(0, clamp(24 * scale, 7, 260) - 8) : 0;
}

/** The "SYS-0x · n min" line inside a system label. */
function secondaryLine(text: HTMLElement): HTMLElement | null {
  return text.querySelector<HTMLElement>('.marker-hud');
}

/** Keeps the invisible black-hole button over the black hole, at least 44px wide. */
function placeBlackHoleButton(ctx: OverlayCtx): void {
  const button = ctx.bhBtn;
  if (!button) return;
  const bh = ctx.bhScr;
  if (!bh || ctx.egg) {
    button.style.visibility = 'hidden';
    return;
  }
  const size = clamp(bh.R * 2.6, 44, 220);
  button.style.width = button.style.height = `${size}px`;
  button.style.translate = px(bh.x - size / 2, bh.y - size / 2);
  button.style.visibility = 'visible';
}

/** Moves a system label to its star; near the right edge (or when swapped) the text goes to the left of the dot. */
function placeSystemLabel(
  ctx: OverlayCtx,
  wrap: HTMLElement,
  p: ScreenPoint | null,
  isHome: boolean,
  swapSide: boolean,
): void {
  if (!p) {
    wrap.style.visibility = 'hidden';
    return;
  }
  const edge = p[0] > ctx.W - FLIP_MARGIN;
  const flip = swapSide ? !edge : edge;
  wrap.style.translate = px(p[0], p[1]);
  wrap.style.visibility = 'visible';
  wrap.style.flexDirection = flip ? 'row-reverse' : 'row';
  wrap.style.transform = flip ? 'translate(calc(-100% + 22px),-22px)' : 'translate(-22px,-22px)';
  const text = wrap.lastElementChild as HTMLElement | null;
  if (!text?.style) return;
  text.style.textAlign = flip ? 'right' : 'left';
  const offset = `${homeOffset(isHome, p[2])}px`;
  text.style.marginLeft = flip ? '0px' : offset;
  text.style.marginRight = flip ? offset : '0px';
}

function fadeInHero(ctx: OverlayCtx, now: number): void {
  const hero = ctx.hero;
  const start = ctx.heroAt;
  if (!hero || start == null) return;
  const t = start === Infinity ? 0 : clamp((now - start - HERO_DELAY) / HERO_FADE, 0, 1);
  hero.style.animation = 'none';
  hero.style.opacity = String(t);
  hero.style.transform = `translateY(${((1 - t) * HERO_RISE_PX).toFixed(1)}px)`;
  if (start !== Infinity && now - start > HERO_END) {
    ctx.heroAt = null;
    hero.style.opacity = '';
    hero.style.transform = '';
  }
}

/** Dims the hero text and hides the hint when a system label passes over them. */
function dimCoveredText(ctx: OverlayCtx, now: number): void {
  if (!ctx.rc || now - ctx.rcT > RECT_REFRESH) {
    ctx.rcT = now;
    ctx.rc = [ctx.hero, ctx.hint].map(el => (el?.isConnected ? el.getBoundingClientRect() : null));
  }
  const screen = ctx.scr ?? [];
  const covered = (rect: DOMRect | null) =>
    !!rect &&
    screen.some(
      p =>
        p &&
        p[0] + 170 > rect.left &&
        p[0] - 22 < rect.right &&
        p[1] + 20 > rect.top &&
        p[1] - 22 < rect.bottom,
    );
  const [heroRect, hintRect] = ctx.rc;
  const { sel, zoomed } = ctx.state;
  const approaching = !!ctx.approach && now - ctx.approach.start < ctx.approach.dur * 0.65;
  if (ctx.hero) {
    ctx.hero.style.opacity =
      ctx.egg || approaching ? '0' : sel >= 0 || zoomed || covered(heroRect) ? '.22' : '1';
  }
  if (ctx.hint) ctx.hint.style.opacity = covered(hintRect) ? '0' : '1';
}
