import type { PlanetData } from '../types';

export const education: PlanetData = {
  key: 'education',
  name: {
    en: 'Education',
    it: 'Formazione',
  },
  type: 'about',
  kind: {
    en: 'Courses and certificates',
    it: 'Corsi e certificati',
  },
  desc: {
    en: 'What I’ve studied, in class and on my own.',
    it: 'Cosa ho studiato, in aula e per conto mio.',
  },
  c: 'ice',
  size: 24,
  lead: {
    en: 'A front-end bootcamp first, then a steady habit of courses.',
    it: 'Prima un bootcamp di front end, poi l’abitudine costante ai corsi.',
  },
  blocks: [
    {
      n: '01',
      t: 'Epicode',
      d: {
        en: '2021 – 2022 · Front-end developer course, final grade 9.1/10: HTML, CSS, JavaScript, TypeScript and Angular.',
        it: '2021 – 2022 · Corso da front-end developer, voto finale 9.1/10: HTML, CSS, JavaScript, TypeScript e Angular.',
      },
    },
    {
      n: '02',
      t: 'Udemy',
      d: {
        en: 'React (2022), UX/UI Design Theory (2025), Web design (2025 – 2026) and EF Core (2026).',
        it: 'React (2022), UX/UI Design Theory (2025), Web design (2025 – 2026) ed EF Core (2026).',
      },
    },
    {
      n: '03',
      t: 'EF SET',
      d: {
        en: 'English certificate, C1 level.',
        it: 'Certificato di inglese, livello C1.',
      },
    },
  ],
};
