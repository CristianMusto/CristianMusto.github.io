import { frontEnd } from './front-end';
import { backEndData } from './back-end-data';
import { uiUxDesign } from './ui-ux-design';
import { mobile } from './mobile';
import { toolsAi } from './tools-ai';
import { softSkills } from './soft-skills';
import type { PlanetData } from '../types';

// Order = order of the planets in the system and in the page navigation.
export const skills: PlanetData[] = [frontEnd, backEndData, uiUxDesign, mobile, toolsAi, softSkills];
