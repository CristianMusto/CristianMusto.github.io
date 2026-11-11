import { beforeAll, describe, expect, it, vi } from 'vitest';
import { planetsFor, projectsFor } from '../content';
import { ENGINE_STRINGS } from '../i18n/engine-strings';
import { PJ, PL, SYS, initData } from './data';
import { router } from './router';
import type { PlanetView, ProjectView } from './types';

/** Minimal engine stand-in: only what parseRoute / pathForState / syncRoute read. */
function fakeEngine(overrides: Record<string, unknown> = {}) {
  const state = {
    intro: null,
    phase: 'map',
    sel: -1,
    psel: -1,
    proj: null,
    ...((overrides['state'] as object) ?? {}),
  };
  const engine: any = {
    routePath: '/',
    warp: null,
    egg: null,
    popping: false,
    deps: { navigate: vi.fn(), send: vi.fn(), switchLang: vi.fn() },
    ...overrides,
    state,
  };
  // syncRoute calls this.pathForState(), so the router methods must live on the fake engine.
  for (const [name, fn] of Object.entries(router)) engine[name] ??= (fn as Function).bind(engine);
  return engine;
}

const parse = (path: string) => router.parseRoute.call(fakeEngine({ routePath: path }));
const pathFor = (state: Record<string, unknown>, extra: Record<string, unknown> = {}) =>
  router.pathForState.call(fakeEngine({ state, ...extra }));

beforeAll(() => {
  initData(
    ENGINE_STRINGS.en,
    planetsFor('en') as unknown as Record<string, PlanetView[]>,
    projectsFor('en') as unknown as ProjectView[],
  );
});

describe('parseRoute', () => {
  const projects = () => SYS.findIndex(s => s.id === 'projects');
  const txt = () => PL['projects'].findIndex(p => p.key === 'txt-group');

  it('reads the galaxy map from / and /home', () => {
    expect(parse('/')).toEqual({ system: -1, planet: -1, project: null, bad: null });
    expect(parse('/home')).toEqual({ system: -1, planet: -1, project: null, bad: null });
  });

  it('reads a system', () => {
    expect(parse('/projects')).toEqual({ system: projects(), planet: -1, project: null, bad: null });
  });

  it('reads a planet inside a system', () => {
    expect(parse('/projects/txt-group')).toEqual({
      system: projects(),
      planet: txt(),
      project: null,
      bad: null,
    });
  });

  it('reads a project inside its company planet', () => {
    expect(parse('/projects/txt-group/erp-database')).toEqual({
      system: projects(),
      planet: txt(),
      project: 'erp-database',
      bad: null,
    });
  });

  it('marks unknown systems, planets and projects as 404', () => {
    expect(parse('/nowhere').bad).toBe('nowhere');
    expect(parse('/projects/nowhere').bad).toBe('projects/nowhere');
    expect(parse('/projects/txt-group/nowhere').bad).toBe('projects/txt-group/nowhere');
    // A project exists only under its own company.
    expect(parse('/projects/nss-magazine/erp-database').bad).toBe('projects/nss-magazine/erp-database');
  });

  it('does not route to empty orbits', () => {
    const ghost = PL['projects'].find(p => p.ghost);
    expect(ghost).toBeDefined();
    expect(parse('/projects/' + ghost!.key).bad).not.toBeNull();
  });

  it('treats a malformed escape as the map instead of throwing', () => {
    expect(() => parse('/%E0%A4%A')).not.toThrow();
  });
});

describe('pathForState', () => {
  it('returns / on the map', () => {
    expect(pathFor({ phase: 'map' })).toBe('/');
  });

  it('returns the system, planet and project paths', () => {
    const projects = SYS.findIndex(s => s.id === 'projects');
    const personal = PL['projects'].findIndex(p => p.key === 'personal-projects');
    expect(pathFor({ phase: 'arrive', sel: projects })).toBe('/projects');
    expect(pathFor({ phase: 'page', sel: projects, psel: personal })).toBe('/projects/personal-projects');
    expect(pathFor({ phase: 'page', sel: projects, psel: personal, proj: 'nightsky' })).toBe(
      '/projects/personal-projects/nightsky',
    );
  });

  it('returns null while in transit', () => {
    expect(pathFor({ phase: 'map', intro: 'ready' })).toBeNull();
    expect(pathFor({ phase: 'map' }, { warp: {} })).toBeNull();
    expect(pathFor({ phase: 'jump', sel: 0 })).toBeNull();
  });

  it('round-trips every real planet through parseRoute', () => {
    SYS.forEach((system, s) => {
      if (system.id === 'home') return;
      (PL[system.id] ?? []).forEach((planet, p) => {
        if (planet.ghost) return;
        const path = pathFor({ phase: 'page', sel: s, psel: p })!;
        expect(parse(path)).toEqual({ system: s, planet: p, project: null, bad: null });
      });
    });
  });

  it('round-trips every project through parseRoute', () => {
    const s = SYS.findIndex(x => x.id === 'projects');
    expect(PJ.length).toBeGreaterThan(0);
    for (const project of PJ) {
      const p = PL['projects'].findIndex(x => x.key === project.parent);
      expect(p, project.key + ' has a company planet').toBeGreaterThanOrEqual(0);
      const path = pathFor({ phase: 'page', sel: s, psel: p, proj: project.key })!;
      expect(parse(path)).toEqual({ system: s, planet: p, project: project.key, bad: null });
    }
  });
});

describe('syncRoute', () => {
  it('pushes a new path once and skips unchanged ones', () => {
    const projects = SYS.findIndex(s => s.id === 'projects');
    const engine = fakeEngine({ state: { phase: 'arrive', sel: projects } });
    router.syncRoute.call(engine);
    router.syncRoute.call(engine);
    expect(engine.deps.navigate).toHaveBeenCalledTimes(1);
    expect(engine.deps.navigate).toHaveBeenCalledWith('/projects', false);
  });

  it('replaces history while a URL is being applied', () => {
    const engine = fakeEngine({ state: { phase: 'map' }, routePath: '/projects', popping: true });
    router.syncRoute.call(engine);
    expect(engine.deps.navigate).toHaveBeenCalledWith('/', true);
  });
});
