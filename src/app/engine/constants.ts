import type { Palette, Vec3 } from './types';

/** Index of the Home system in SYS. */
export const HOME = 5;

export const PC: Record<string, Palette> = {
  cyan: ['#E4FBFF', '#5FC8D8', '#0E3A48'],
  gold: ['#FFF4D6', '#E6B04E', '#4A300C'],
  coral: ['#FFE2DA', '#E2654F', '#4A1510'],
  green: ['#E6FFE9', '#5DC878', '#0F3A1C'],
  violet: ['#F0E8FF', '#9C7CF0', '#241452'],
  sand: ['#FFF0E0', '#D69A6A', '#3E2410'],
  ice: ['#F4F8FF', '#9FB6E6', '#1C2A4A'],
};

/** Tilt of the galaxy disc, in radians. */
export const TILT = 0.36;

/** The two shapes of the NightSky mark, moon and star (1000x1000 viewBox). */
export const LOGO: readonly string[] = [
  'M464.27 220.05A300 300 0 1 0 748.73 630.95A250 250 0 1 1 464.27 220.05Z',
  'M720 190C727 268 742 283 820 290C742 297 727 312 720 390C713 312 698 297 620 290C698 283 713 268 720 190Z',
];

export const ORIGIN: Vec3 = [-40, 0, 90];
/** Camera distance limits and presets. */
export const DMIN = 150;
export const DMAX = 2800;
export const DHOME = 1250;
export const DSYS = 340;
/** Galaxy radius. */
export const RG = 1150;

/** Star colours ("r,g,b") with their weights. */
export const TEMP: readonly (readonly [string, number])[] = [
  ['186,208,255', 0.12],
  ['222,230,255', 0.22],
  ['242,238,230', 0.3],
  ['255,236,194', 0.18],
  ['255,206,152', 0.12],
  ['255,162,128', 0.06],
];
export const NEB: readonly string[] = [
  '92,70,190',
  '60,100,210',
  '40,150,175',
  '183,164,255',
  '110,60,170',
  '255,150,120',
];
export const WARP: readonly string[] = [
  '242,238,230',
  '127,230,242',
  '255,210,122',
  '195,166,255',
  '140,240,160',
  '255,122,107',
];
