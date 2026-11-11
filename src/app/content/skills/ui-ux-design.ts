import type { PlanetData } from '../types';

export const uiUxDesign: PlanetData = {
  key: 'ui-ux-design',
  name: {
    en: 'UI/UX design',
    it: 'UI/UX design',
  },
  type: 'service',
  kind: {
    en: 'Intermediate · Figma, UX/UI',
    it: 'Intermedio · Figma, UX/UI',
  },
  desc: {
    en: 'Interfaces that are easy to understand and pleasant to use.',
    it: 'Interfacce facili da capire e piacevoli da usare.',
  },
  c: 'violet',
  size: 30,
  lead: {
    en: 'Design is a newer skill for me, at an intermediate level, and I use it on the products I build.',
    it: 'Il design è una competenza più recente per me, a livello intermedio, e la uso sui prodotti che sviluppo.',
  },
  body: {
    en: 'I design in Figma, studied UX/UI theory and web design, and designed the booking platforms for a hospitality client before building them.',
    it: 'Progetto in Figma, ho studiato teoria UX/UI e web design, e ho progettato le piattaforme di prenotazione per un cliente hospitality prima di svilupparle.',
  },
  itemsTitle: {
    en: 'What I do',
    it: 'Cosa faccio',
  },
  items: [
    {
      n: '01',
      t: {
        en: 'Figma',
        it: 'Figma',
      },
      d: {
        en: 'Wireframes, mockups and prototypes.',
        it: 'Wireframe, mockup e prototipi.',
      },
      lv: 2,
    },
    {
      n: '02',
      t: {
        en: 'User experience',
        it: 'User experience',
      },
      d: {
        en: 'User flows and hierarchy before visual detail.',
        it: 'Flussi utente e gerarchia prima del dettaglio visivo.',
      },
      lv: 2,
    },
    {
      n: '03',
      t: {
        en: 'UI design',
        it: 'UI design',
      },
      d: {
        en: 'Interfaces with clear type, color and spacing.',
        it: 'Interfacce con testo, colori e spaziature chiari.',
      },
      lv: 2,
    },
    {
      n: '04',
      t: {
        en: 'Design systems',
        it: 'Design system',
      },
      d: {
        en: 'Tokens and components that match the code.',
        it: 'Token e componenti che corrispondono al codice.',
      },
      lv: 2,
    },
    {
      n: '05',
      t: {
        en: 'Accessibility',
        it: 'Accessibilità',
      },
      d: {
        en: 'Contrast, keyboard navigation and readable type.',
        it: 'Contrasto, navigazione da tastiera e testo leggibile.',
      },
      lv: 2,
    },
  ],
  related: [
    {
      sys: 'projects',
      planet: 'txt-group',
      project: 'reservations',
      label: {
        en: 'Visit reservations',
        it: 'Prenotazione visite',
      },
    },
    {
      sys: 'projects',
      planet: 'txt-group',
      project: 'agent-portal',
      label: {
        en: 'Agent booking portal',
        it: 'Portale B2B agenti',
      },
    },
    {
      sys: 'lab',
      planet: 'nightsky-design',
      label: {
        en: 'NightSky case study',
        it: 'Case study NightSky',
      },
    },
  ],
};
