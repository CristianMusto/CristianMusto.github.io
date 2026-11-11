import type { PlanetData } from '../types';

export const findMe: PlanetData = {
  key: 'find-me',
  name: {
    en: 'Find me',
    it: 'Dove trovarmi',
  },
  type: 'contact',
  kind: {
    en: 'Links',
    it: 'Link',
  },
  desc: {
    en: 'Email, LinkedIn and GitHub. My CV is on the way.',
    it: 'Email, LinkedIn e GitHub. Il CV è in arrivo.',
  },
  c: 'ice',
  size: 26,
  rows: [
    {
      k: 'Email',
      v: 'cristian.musto11@gmail.com',
      href: 'mailto:cristian.musto11@gmail.com',
      plain: false,
    },
    {
      k: 'LinkedIn',
      v: 'linkedin.com/in/cristian-musto',
      href: 'https://www.linkedin.com/in/cristian-musto/',
      plain: false,
    },
    {
      k: 'GitHub',
      v: 'github.com/CristianMusto',
      href: 'https://github.com/CristianMusto',
      plain: false,
    },
    {
      k: 'CV',
      v: {
        en: 'Coming soon',
        it: 'In arrivo',
      },
      plain: true,
    },
  ],
};
