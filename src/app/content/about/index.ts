import { me } from './me';
import { experience } from './experience';
import { education } from './education';
import type { PlanetData } from '../types';

// Order = order of the planets in the system and in the page navigation.
export const about: PlanetData[] = [me, experience, education];
