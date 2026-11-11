import type { PlanetData } from '../types';

export const experience: PlanetData = {
  key: 'experience',
  name: {
    en: 'Experience',
    it: 'Esperienza',
  },
  type: 'about',
  kind: {
    en: 'Path',
    it: 'Percorso',
  },
  desc: {
    en: 'From self-taught to software developer.',
    it: 'Da autodidatta a software developer.',
  },
  c: 'sand',
  size: 28,
  lead: {
    en: 'Over four years of work, between editorial and software, after starting on my own.',
    it: 'Più di quattro anni di lavoro, tra editoria e software, dopo aver iniziato da solo.',
  },
  blocks: [
    {
      n: '01',
      t: 'TXT Group',
      d: {
        en: 'Since Feb 2023 · LBA Consulting, a TXT Group company, Borgomanero (hybrid). SQL and front-end developer first, now software developer: advanced in Angular, DevExtreme and SQL Server, getting started with ASP.NET Core and EF Core.',
        it: 'Da feb 2023 · LBA Consulting, società del gruppo TXT, Borgomanero (ibrido). Prima SQL e front-end developer, ora software developer: avanzato in Angular, DevExtreme e SQL Server, agli inizi con ASP.NET Core ed EF Core.',
      },
      hasLogo: true,
      isTxt: true,
      logo: 'assets/about/txt-logo.png',
      logoW: 770,
      logoH: 372,
      hasLink: true,
      href: 'https://www.txtgroup.com/it/',
      linkLabel: 'txtgroup.com',
      linkAria: {
        en: 'txtgroup.com, TXT Group website (opens in a new tab)',
        it: 'txtgroup.com, sito di TXT Group (si apre in una nuova scheda)',
      },
    },
    {
      n: '02',
      t: 'NSS Magazine',
      d: {
        en: 'Mar – Sep 2022 · Junior Front-End Developer (internship), Milan. Editorial pages, maps and features: jQuery, Sass and Bootstrap became everyday tools.',
        it: 'Mar – set 2022 · Junior Front-End Developer (stage), Milano. Pagine editoriali, mappe e speciali: jQuery, Sass e Bootstrap sono diventati strumenti di tutti i giorni.',
      },
      hasLogo: true,
      isNss: true,
      logo: 'assets/about/nss-logo.png',
      logoW: 1340,
      logoH: 460,
      hasLink: true,
      href: 'https://www.nssmag.com/it',
      linkLabel: 'nssmag.com',
      linkAria: {
        en: 'nssmag.com, NSS Magazine website (opens in a new tab)',
        it: 'nssmag.com, sito di NSS Magazine (si apre in una nuova scheda)',
      },
    },
    {
      n: '03',
      t: {
        en: 'Before 2021',
        it: 'Prima del 2021',
      },
      d: {
        en: 'Self-taught: HTML and CSS first, then Swift, cloning well-known iOS apps, until I chose the web and enrolled at Epicode.',
        it: 'Da autodidatta: prima HTML e CSS, poi Swift clonando app iOS famose, finché ho scelto il web e mi sono iscritto in Epicode.',
      },
    },
  ],
};
