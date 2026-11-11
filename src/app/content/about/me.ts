import type { PlanetData } from '../types';

export const me: PlanetData = {
  key: 'me',
  name: {
    en: 'Me',
    it: 'Profilo',
  },
  type: 'about',
  kind: 'Cristian Musto',
  desc: {
    en: 'Software developer and UI/UX designer from Grignasco, Italy.',
    it: 'Software developer e UI/UX designer di Grignasco.',
  },
  c: 'green',
  size: 34,
  lead: {
    en: 'I’m Cristian Musto. I build web applications and design the interfaces they run on.',
    it: 'Sono Cristian Musto. Sviluppo applicazioni web e ne progetto le interfacce.',
  },
  blocks: [
    {
      n: '01',
      t: {
        en: 'Developer first',
        it: 'Prima developer',
      },
      d: {
        en: 'Over four years building for the web, at NSS first and now at TXT. Angular, TypeScript and SQL Server are where I’m strongest.',
        it: 'Più di quattro anni di sviluppo web, prima in NSS e ora in TXT. Angular, TypeScript e SQL Server sono dove sono più forte.',
      },
    },
    {
      n: '02',
      t: {
        en: 'Designer, growing',
        it: 'Designer in crescita',
      },
      d: {
        en: 'Design is newer for me: I’m at an intermediate level with UI/UX and Figma, and I design some of the products I build.',
        it: 'Il design è più recente per me: sono a un livello intermedio con UI/UX e Figma, e progetto alcuni dei prodotti che sviluppo.',
      },
    },
    {
      n: '03',
      t: {
        en: 'Always learning',
        it: 'Sempre in formazione',
      },
      d: {
        en: 'Right now I’m getting started with ASP.NET Core and EF Core, after courses in React, UX/UI and web design.',
        it: 'In questo momento sto iniziando con ASP.NET Core ed EF Core, dopo i corsi di React, UX/UI e web design.',
      },
    },
  ],
};
