import type { PlanetData } from '../types';

export const personalProjects: PlanetData = {
  key: 'personal-projects',
  name: {
    en: 'Personal projects',
    it: 'Progetti personali',
  },
  type: 'company',
  kind: {
    en: 'Design and code · 2026 – today',
    it: 'Design e codice · 2026 – oggi',
  },
  desc: {
    en: 'What I design and build on my own time.',
    it: 'Quello che progetto e sviluppo nel mio tempo.',
  },
  c: 'cyan',
  size: 34,
  lead: {
    en: 'Projects I design and build outside of work, to try ideas, tools and design.',
    it: 'Progetti che progetto e sviluppo fuori dal lavoro, per provare idee, strumenti e design.',
  },
  body: {
    en: 'NightSky, this site, is the first. Others are on the way.',
    it: 'NightSky, questo sito, è il primo. Altri sono in arrivo.',
  },
  facts: [
    {
      k: {
        en: 'Role',
        it: 'Ruolo',
      },
      v: {
        en: 'Design and development',
        it: 'Design e sviluppo',
      },
    },
    {
      k: {
        en: 'Period',
        it: 'Periodo',
      },
      v: {
        en: '2026 – today',
        it: '2026 – oggi',
      },
    },
    {
      k: 'Stack',
      v: 'Angular, TypeScript, Figma',
    },
  ],
  cardsTitle: {
    en: 'Projects',
    it: 'Progetti',
  },
  factsTitle: {
    en: 'Details',
    it: 'Dettagli',
  },
};
