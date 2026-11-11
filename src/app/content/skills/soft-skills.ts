import type { PlanetData } from '../types';

export const softSkills: PlanetData = {
  key: 'soft-skills',
  name: {
    en: 'Soft skills',
    it: 'Soft skill',
  },
  type: 'service',
  kind: {
    en: 'Communication and languages',
    it: 'Comunicazione e lingue',
  },
  desc: {
    en: 'How I work with people, not just with code.',
    it: 'Come lavoro con le persone, non solo con il codice.',
  },
  c: 'green',
  size: 24,
  lead: {
    en: 'Most problems are solved by talking early and clearly.',
    it: 'La maggior parte dei problemi si risolve parlando presto e con chiarezza.',
  },
  body: {
    en: 'I handle client requests every day, so explaining technical choices simply is part of the job.',
    it: 'Gestisco ogni giorno richieste dei clienti, quindi spiegare le scelte tecniche in modo semplice fa parte del lavoro.',
  },
  itemsTitle: {
    en: 'What I bring',
    it: 'Cosa porto',
  },
  items: [
    {
      n: '01',
      t: {
        en: 'Problem solving',
        it: 'Problem solving',
      },
      d: {
        en: 'Break the problem down, then fix the right thing.',
        it: 'Scomporre il problema, poi risolvere la cosa giusta.',
      },
    },
    {
      n: '02',
      t: {
        en: 'Communication',
        it: 'Comunicazione',
      },
      d: {
        en: 'Clear updates for teams and clients.',
        it: 'Aggiornamenti chiari per team e clienti.',
      },
    },
    {
      n: '03',
      t: {
        en: 'Leadership',
        it: 'Leadership',
      },
      d: {
        en: 'Taking ownership of a feature from start to finish.',
        it: 'Prendermi in carico una funzione dall’inizio alla fine.',
      },
    },
    {
      n: '04',
      t: {
        en: 'Languages',
        it: 'Lingue',
      },
      d: {
        en: 'Italian, native. English, C1 (EF SET).',
        it: 'Italiano, madrelingua. Inglese, C1 (EF SET).',
      },
    },
  ],
};
