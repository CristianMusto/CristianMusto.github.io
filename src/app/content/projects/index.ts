import { txtGroup } from './txt-group';
import { nssMagazine } from './nss-magazine';
import { personalProjects } from './personal-projects';
import { nextMission } from './next-mission';
import type { PlanetData } from '../types';

// Order = order of the planets in the system and in the page navigation.
export const projects: PlanetData[] = [txtGroup, nssMagazine, personalProjects, nextMission];

export { PROJECTS } from './items';
