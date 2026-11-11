import type { PlanetData } from '../types';

export const toolsAi: PlanetData = {
  key: 'tools-ai',
  name: {
    en: 'Tools & AI',
    it: 'Strumenti e AI',
  },
  type: 'service',
  kind: {
    en: 'Git, prompt engineering, Excel',
    it: 'Git, prompt engineering, Excel',
  },
  desc: {
    en: 'The tools around the code that keep work moving.',
    it: 'Gli strumenti attorno al codice che fanno andare avanti il lavoro.',
  },
  c: 'coral',
  size: 26,
  lead: {
    en: 'Good tools save hours. I use Git every day and AI as a daily assistant.',
    it: 'Gli strumenti giusti fanno risparmiare ore. Uso Git ogni giorno e l’AI come assistente quotidiano.',
  },
  body: {
    en: 'Around the code: Excel automation and support for the people who use our software.',
    it: 'Attorno al codice: automazioni in Excel e supporto a chi usa il nostro software.',
  },
  itemsTitle: {
    en: 'What I use',
    it: 'Cosa uso',
  },
  items: [
    {
      n: '01',
      t: {
        en: 'Git',
        it: 'Git',
      },
      d: {
        en: 'Branches, reviews and clean history.',
        it: 'Branch, revisioni e una cronologia pulita.',
      },
      lv: 3,
    },
    {
      n: '02',
      t: {
        en: 'Technical support',
        it: 'Supporto tecnico',
      },
      d: {
        en: 'Help desk for the software we ship.',
        it: 'Help desk per il software che rilasciamo.',
      },
      lv: 3,
    },
    {
      n: '03',
      t: {
        en: 'Prompt engineering',
        it: 'Prompt engineering',
      },
      d: {
        en: 'AI assistants for code, writing and research.',
        it: 'Assistenti AI per codice, testi e ricerca.',
      },
      lv: 2,
    },
    {
      n: '04',
      t: {
        en: 'Excel macros & queries',
        it: 'Macro e query in Excel',
      },
      d: {
        en: 'Automations and reports for the team.',
        it: 'Automazioni e report per il team.',
      },
      lv: 2,
    },
  ],
};
