import type { PlanetData } from '../types';

export const frontEnd: PlanetData = {
  key: 'front-end',
  name: 'Front-end',
  type: 'service',
  kind: {
    en: 'Advanced · Angular, TypeScript',
    it: 'Avanzato · Angular, TypeScript',
  },
  desc: {
    en: 'My strongest area: web applications in Angular and TypeScript.',
    it: 'La mia area più forte: applicazioni web in Angular e TypeScript.',
  },
  c: 'cyan',
  size: 38,
  lead: {
    en: 'Front-end is where I’m strongest. Angular, TypeScript, DevExtreme and HTML, CSS and Sass are my everyday tools.',
    it: 'Il front end è dove sono più forte. Angular, TypeScript, DevExtreme e HTML, CSS e Sass sono i miei strumenti di ogni giorno.',
  },
  body: {
    en: 'I have a lot of experience with jQuery and Bootstrap from NSS and earlier projects, and an intermediate level in React, studied with courses and used on my own.',
    it: 'Ho molta esperienza con jQuery e Bootstrap, da NSS e dai progetti precedenti, e un livello intermedio in React, studiato con corsi e usato per conto mio.',
  },
  itemsTitle: {
    en: 'What I use',
    it: 'Cosa uso',
  },
  items: [
    {
      n: '01',
      t: {
        en: 'Angular & Angular Material',
        it: 'Angular e Angular Material',
      },
      d: {
        en: 'My daily framework for web applications.',
        it: 'Il mio framework quotidiano per le applicazioni web.',
      },
      lv: 3,
    },
    {
      n: '02',
      t: {
        en: 'TypeScript & JavaScript',
        it: 'TypeScript e JavaScript',
      },
      d: {
        en: 'Typed code first, vanilla JavaScript when it’s enough.',
        it: 'Prima il codice tipizzato, JavaScript puro quando basta.',
      },
      lv: 3,
    },
    {
      n: '03',
      t: {
        en: 'DevExtreme',
        it: 'DevExtreme',
      },
      d: {
        en: 'Data grids, forms and components for management software.',
        it: 'Griglie dati, form e componenti per i gestionali.',
      },
      lv: 3,
    },
    {
      n: '04',
      t: {
        en: 'HTML & CSS',
        it: 'HTML e CSS',
      },
      d: {
        en: 'Semantic, accessible markup and modern layouts.',
        it: 'Markup semantico e accessibile, layout moderni.',
      },
      lv: 3,
    },
    {
      n: '05',
      t: {
        en: 'Sass & Less',
        it: 'Sass e Less',
      },
      d: {
        en: 'Styles organised to scale with the product.',
        it: 'Stili organizzati per crescere con il prodotto.',
      },
      lv: 3,
    },
    {
      n: '06',
      t: {
        en: 'Bootstrap',
        it: 'Bootstrap',
      },
      d: {
        en: 'Fast, consistent layouts.',
        it: 'Layout veloci e coerenti.',
      },
      lv: 3,
    },
    {
      n: '07',
      t: {
        en: 'jQuery',
        it: 'jQuery',
      },
      d: {
        en: 'The editorial stack I used every day at NSS.',
        it: 'Lo stack editoriale che usavo ogni giorno in NSS.',
      },
      lv: 3,
    },
    {
      n: '08',
      t: {
        en: 'React',
        it: 'React',
      },
      d: {
        en: 'Studied with courses and used in personal projects.',
        it: 'Studiato con corsi e usato in progetti personali.',
      },
      lv: 2,
    },
    {
      n: '09',
      t: {
        en: 'Tailwind CSS',
        it: 'Tailwind CSS',
      },
      d: {
        en: 'Utility-first styling for quick prototypes.',
        it: 'Stili utility-first per prototipi veloci.',
      },
      lv: 2,
    },
    {
      n: '10',
      t: {
        en: 'HTML email',
        it: 'Email HTML',
      },
      d: {
        en: 'Newsletters that render across email clients.',
        it: 'Newsletter che si vedono bene in ogni client di posta.',
      },
      lv: 2,
    },
  ],
  related: [
    {
      sys: 'projects',
      planet: 'txt-group',
      project: 'component-library',
      label: {
        en: 'Component library',
        it: 'Libreria di componenti',
      },
    },
    {
      sys: 'projects',
      planet: 'nss-magazine',
      project: 'gucci',
      label: 'Gucci',
    },
    {
      sys: 'projects',
      planet: 'personal-projects',
      project: 'nightsky',
      label: 'NightSky',
    },
  ],
};
