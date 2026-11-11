import type { PlanetData } from '../types';

export const workInProgress: PlanetData = {
  key: 'work-in-progress',
  name: {
    en: 'Work in progress',
    it: 'Lavori in corso',
  },
  type: 'about',
  kind: {
    en: 'Coming soon',
    it: 'In arrivo',
  },
  desc: {
    en: 'The Lab is being built. First pieces soon.',
    it: 'Il Lab è in costruzione. I primi lavori arrivano presto.',
  },
  c: 'gold',
  size: 30,
  lead: {
    en: 'This is where my design explorations will live: work that isn’t client projects, made to practise and try ideas.',
    it: 'Qui vivranno le mie esplorazioni di design: lavori che non sono progetti per clienti, fatti per esercitarmi e provare idee.',
  },
  blocks: [
    {
      n: '01',
      t: {
        en: 'Identity',
        it: 'Identità',
      },
      d: {
        en: 'Logos and marks, starting with the final NightSky logo.',
        it: 'Loghi e marchi, a partire dal logo definitivo di NightSky.',
      },
    },
    {
      n: '02',
      t: {
        en: 'Product design',
        it: 'Product design',
      },
      d: {
        en: 'The design of a side-project app, now in development.',
        it: 'Il design di un’app nata come progetto personale, ora in sviluppo.',
      },
    },
    {
      n: '03',
      t: {
        en: 'Concepts',
        it: 'Concept',
      },
      d: {
        en: 'UI studies and redesigns, to try ideas quickly.',
        it: 'Studi di interfaccia e redesign, per provare idee in fretta.',
      },
    },
  ],
};
