import type { PlanetData } from '../types';

export const txtGroup: PlanetData = {
  key: 'txt-group',
  name: 'TXT Group',
  type: 'company',
  kind: {
    en: 'Software Developer · 2023 – today',
    it: 'Software Developer · 2023 – oggi',
  },
  desc: {
    en: 'Web applications for management software, payments, hospitality and retail.',
    it: 'Applicazioni web per gestionali, pagamenti, hospitality e retail.',
  },
  c: 'violet',
  size: 40,
  lead: {
    en: 'Since February 2023 I’ve worked at LBA Consulting, a TXT Group company. I started as SQL and front-end developer and I’m now a software developer: advanced in Angular, DevExtreme and SQL Server, getting started with ASP.NET Core and EF Core.',
    it: 'Da febbraio 2023 lavoro in LBA Consulting, società del gruppo TXT. Ho iniziato come SQL e front-end developer e ora sono software developer: avanzato in Angular, DevExtreme e SQL Server, agli inizi con ASP.NET Core ed EF Core.',
  },
  body: {
    en: 'I work in a five-person team: every project below is team work, and each page says what I did. Most clients are under NDA, so they are described without naming them.',
    it: 'Lavoro in un team di cinque persone: ogni progetto qui sotto è un lavoro di squadra, e ogni pagina dice cosa ho fatto io. La maggior parte dei clienti è coperta da NDA, quindi sono descritti senza nominarli.',
  },
  facts: [
    {
      k: {
        en: 'Role',
        it: 'Ruolo',
      },
      v: 'Software Developer',
    },
    {
      k: {
        en: 'Period',
        it: 'Periodo',
      },
      v: {
        en: 'Feb 2023 – today',
        it: 'Feb 2023 – oggi',
      },
    },
    {
      k: {
        en: 'Place',
        it: 'Sede',
      },
      v: {
        en: 'LBA Consulting · Borgomanero, hybrid',
        it: 'LBA Consulting · Borgomanero, ibrido',
      },
    },
    {
      k: 'Stack',
      v: 'Angular, TypeScript, DevExtreme, SQL Server, ASP.NET Core, EF Core',
    },
  ],
  site: {
    href: 'https://www.txtgroup.com/it/',
    label: 'txtgroup.com',
    aria: {
      en: 'txtgroup.com, TXT Group website (opens in a new tab)',
      it: 'txtgroup.com, sito di TXT Group (si apre in una nuova scheda)',
    },
  },
  cardsTitle: {
    en: 'Projects',
    it: 'Progetti',
  },
  factsTitle: {
    en: 'Role',
    it: 'Ruolo',
  },
};
