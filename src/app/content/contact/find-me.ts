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
    en: 'Email, LinkedIn, GitHub and my CV, as a developer or as a designer.',
    it: 'Email, LinkedIn, GitHub e il mio CV, da sviluppatore o da designer.',
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
        en: 'Software developer · PDF',
        it: 'Software developer · PDF',
      },
      href: {
        en: '/cv/Cristian_Musto_CV_Developer_EN.pdf',
        it: '/cv/Cristian_Musto_CV_Developer_IT.pdf',
      },
      blank: true,
      plain: false,
    },
    {
      k: 'CV',
      v: {
        en: 'UI/UX designer · PDF',
        it: 'UI/UX designer · PDF',
      },
      href: {
        en: '/cv/Cristian_Musto_CV_Designer_EN.pdf',
        it: '/cv/Cristian_Musto_CV_Designer_IT.pdf',
      },
      blank: true,
      plain: false,
    },
  ],
};
