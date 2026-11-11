import type { PlanetData } from '../types';

export const backEndData: PlanetData = {
  key: 'back-end-data',
  name: {
    en: 'Back-end & data',
    it: 'Back-end e dati',
  },
  type: 'service',
  kind: {
    en: 'Advanced in SQL Server · growing on .NET',
    it: 'Avanzato in SQL Server · in crescita su .NET',
  },
  desc: {
    en: 'Databases and APIs for the apps I build.',
    it: 'Database e API per le app che sviluppo.',
  },
  c: 'gold',
  size: 32,
  lead: {
    en: 'On the back end my strongest skill is SQL Server: queries, views and stored procedures for management software.',
    it: 'Sul back end la mia competenza più forte è SQL Server: query, viste e stored procedure per i gestionali.',
  },
  body: {
    en: 'With ASP.NET Core, EF Core, PHP and Node.js I’m getting started. I use ASP.NET Core and EF Core on my most recent projects at TXT and keep learning them.',
    it: 'Con ASP.NET Core, EF Core, PHP e Node.js sono agli inizi. Uso ASP.NET Core ed EF Core nei progetti più recenti in TXT e continuo a studiarli.',
  },
  itemsTitle: {
    en: 'What I use',
    it: 'Cosa uso',
  },
  items: [
    {
      n: '01',
      t: {
        en: 'SQL Server',
        it: 'SQL Server',
      },
      d: {
        en: 'Queries, views, stored procedures and database emails.',
        it: 'Query, viste, stored procedure ed email inviate dal database.',
      },
      lv: 3,
    },
    {
      n: '02',
      t: {
        en: 'Management software',
        it: 'Software gestionali',
      },
      d: {
        en: 'Business rules and data for ERP-style products.',
        it: 'Regole di business e dati per prodotti gestionali.',
      },
      lv: 3,
    },
    {
      n: '03',
      t: {
        en: 'ASP.NET Core',
        it: 'ASP.NET Core',
      },
      d: {
        en: 'REST APIs on recent projects.',
        it: 'API REST nei progetti più recenti.',
      },
      lv: 1,
    },
    {
      n: '04',
      t: {
        en: 'Entity Framework Core',
        it: 'Entity Framework Core',
      },
      d: {
        en: 'Data access and migrations, certified on Udemy.',
        it: 'Accesso ai dati e migrazioni, con certificato Udemy.',
      },
      lv: 1,
    },
    {
      n: '05',
      t: {
        en: 'PHP',
        it: 'PHP',
      },
      d: {
        en: 'First steps at NSS, with Smarty templates.',
        it: 'Primi passi in NSS, con i template Smarty.',
      },
      lv: 1,
    },
    {
      n: '06',
      t: {
        en: 'Node.js',
        it: 'Node.js',
      },
      d: {
        en: 'Studied at Epicode.',
        it: 'Studiato in Epicode.',
      },
      lv: 1,
    },
  ],
  related: [
    {
      sys: 'projects',
      planet: 'txt-group',
      project: 'erp-database',
      label: {
        en: 'ERP database',
        it: 'Database del gestionale',
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
      sys: 'projects',
      planet: 'txt-group',
      project: 'merchant-onboarding',
      label: {
        en: 'Merchant onboarding',
        it: 'Onboarding esercenti',
      },
    },
  ],
};
