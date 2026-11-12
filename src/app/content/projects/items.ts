import type { ProjectData } from '../types';

/**
 * Projects shown as cards in their company planet (parent) and opened as detail pages:
 * /:lang/projects/:company/:project. Order = order of the cards and of the page navigation.
 * type 'project' opens the standard detail page ('case' would open a case study).
 */
export const PROJECTS: ProjectData[] = [
  {
    key: 'component-library',
    parent: 'txt-group',
    type: 'project',
    name: {
      en: 'Component library',
      it: 'Libreria di componenti',
    },
    kind: {
      en: 'Management software · 2025 – today',
      it: 'Gestionale · 2025 – oggi',
    },
    desc: {
      en: 'The Angular component library a management software is built on: shared, documented building blocks on top of DevExtreme, with the APIs behind them.',
      it: 'La libreria di componenti Angular su cui è costruito un gestionale: blocchi condivisi e documentati sopra DevExtreme, con le API che li alimentano.',
    },
    stack: 'Angular, TypeScript, DevExtreme, ASP.NET Core, EF Core, SQL Server',
    private: true,
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'TXT Group',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'Software developer',
          it: 'Software developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: {
          en: '2025 – today',
          it: '2025 – oggi',
        },
      },
      {
        k: 'Stack',
        v: 'Angular, TypeScript, DevExtreme, ASP.NET Core, EF Core, SQL Server',
      },
    ],
    challenge: {
      en: 'A management software needs dozens of screens that look and behave the same.',
      it: 'Un gestionale ha bisogno di decine di schermate che appaiano e si comportino allo stesso modo.',
    },
    solution: {
      en: 'I worked on part of its front end, in Angular on top of DevExtreme, and since 2026 on its ASP.NET Core and EF Core APIs.',
      it: 'Ho lavorato su una parte del front end, in Angular sopra DevExtreme, e dal 2026 sulle API in ASP.NET Core ed EF Core.',
    },
    result: {
      en: 'The first version is released and new screens are built from the library.',
      it: 'La prima versione è rilasciata e le nuove schermate nascono dalla libreria.',
    },
  },
  {
    key: 'merchant-onboarding',
    parent: 'txt-group',
    type: 'project',
    name: {
      en: 'Merchant onboarding',
      it: 'Onboarding esercenti',
    },
    kind: {
      en: 'Payments · 2026 – today',
      it: 'Pagamenti · 2026 – oggi',
    },
    desc: {
      en: 'A portal where merchants sign up, step by step, for POS terminals and meal-voucher acceptance, for a payments company in the group. Front end and API.',
      it: 'Un portale dove gli esercenti si registrano, passo dopo passo, per POS e accettazione dei buoni pasto, per una società di pagamenti del gruppo. Front end e API.',
    },
    stack: 'Angular, TypeScript, SCSS, ASP.NET Core, EF Core, SQL Server',
    private: true,
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'TXT Group',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'Software developer',
          it: 'Software developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: {
          en: '2026 – today',
          it: '2026 – oggi',
        },
      },
      {
        k: 'Stack',
        v: 'Angular, TypeScript, SCSS, ASP.NET Core, EF Core, SQL Server',
      },
    ],
    challenge: {
      en: 'Merchants had to go through a long registration, still on paper, to get POS terminals and accept meal vouchers.',
      it: 'Gli esercenti dovevano affrontare una registrazione lunga e ancora su carta per avere i POS e accettare i buoni pasto.',
    },
    solution: {
      en: 'A step-by-step portal with validation next to each field, built in Angular on ASP.NET Core and EF Core APIs.',
      it: 'Un portale passo dopo passo con la validazione accanto a ogni campo, in Angular su API ASP.NET Core ed EF Core.',
    },
    result: {
      en: 'Live and in testing with a group of selected merchants: registration is now fully online.',
      it: 'Online e in fase di test con alcuni esercenti selezionati: la registrazione ora è tutta digitale.',
    },
  },
  {
    key: 'reservations',
    parent: 'txt-group',
    type: 'project',
    name: {
      en: 'Visit reservations',
      it: 'Prenotazione visite',
    },
    kind: {
      en: 'Hospitality · 2024 – 2025',
      it: 'Hospitality · 2024 – 2025',
    },
    desc: {
      en: 'I designed and built a reservation platform for guided visits and events across several estates, from the booking flow to the back office.',
      it: 'Ho progettato e sviluppato una piattaforma di prenotazione per visite guidate ed eventi su più tenute, dal flusso di prenotazione al back office.',
    },
    stack: 'Figma, Angular, TypeScript, DevExtreme, SQL Server',
    private: true,
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'TXT Group',
      },
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
          en: 'Year',
          it: 'Anno',
        },
        v: '2024 – 2025',
      },
      {
        k: 'Stack',
        v: 'Figma, Angular, TypeScript, DevExtreme, SQL Server',
      },
    ],
    challenge: {
      en: 'Visits and events across several estates needed one booking flow and one back office.',
      it: 'Visite ed eventi su più tenute avevano bisogno di un unico flusso di prenotazione e di un unico back office.',
    },
    solution: {
      en: 'I designed the flows and the interface in Figma, then built them in Angular and DevExtreme on SQL Server.',
      it: 'Ho progettato flussi e interfaccia in Figma, poi li ho sviluppati in Angular e DevExtreme su SQL Server.',
    },
    result: {
      en: 'Delivered and in use. I still take care of fixes and maintenance.',
      it: 'Consegnato e in uso. Me ne occupo ancora per correzioni e manutenzione.',
    },
  },
  {
    key: 'agent-portal',
    parent: 'txt-group',
    type: 'project',
    name: {
      en: 'Agent booking portal',
      it: 'Portale B2B agenti',
    },
    kind: {
      en: 'Hospitality · 2024 – 2026',
      it: 'Hospitality · 2024 – 2026',
    },
    desc: {
      en: 'A B2B portal where agents book visits for their clients. I did UI, UX and code: the form data is saved to the database, which then emails a summary to the person who manages the visits.',
      it: 'Un portale B2B dove gli agenti prenotano visite per i loro clienti. Ho curato UI, UX e codice: i dati del modulo vengono salvati a database, che poi invia una mail di riepilogo alla responsabile delle visite.',
    },
    stack: 'Figma, Angular, TypeScript, SQL Server',
    private: true,
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'TXT Group',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'UI, UX and development',
          it: 'UI, UX e sviluppo',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: {
          en: '2024 – 2025 · rebrand 2026',
          it: '2024 – 2025 · rebrand 2026',
        },
      },
      {
        k: 'Stack',
        v: 'Figma, Angular, TypeScript, SQL Server',
      },
    ],
    challenge: {
      en: 'Agents booked visits for their clients by phone or email, so details got lost along the way.',
      it: 'Gli agenti prenotavano le visite per i clienti al telefono o via email, e i dettagli si perdevano per strada.',
    },
    solution: {
      en: 'A B2B portal I designed and built in two phases: the first version in 2024 – 2025, then its rebrand in 2026. The form data is saved to SQL Server, which emails a summary to the person who manages the visits.',
      it: 'Un portale B2B che ho progettato e sviluppato in due fasi: la prima versione nel 2024 – 2025, poi il rebrand nel 2026. I dati del modulo vengono salvati su SQL Server, che invia una mail di riepilogo alla responsabile delle visite.',
    },
    result: {
      en: 'In use: visits are better organised and clients no longer get last-minute surprises.',
      it: 'In uso: le visite sono più organizzate e i clienti non hanno più sorprese dell’ultimo minuto.',
    },
  },
  {
    key: 'local-contracts',
    parent: 'txt-group',
    type: 'project',
    name: {
      en: 'Local contracts',
      it: 'Contratti locali',
    },
    kind: {
      en: 'Retail · 2023 – 2024',
      it: 'Retail · 2023 – 2024',
    },
    desc: {
      en: 'An Angular app for a retail distributor to manage contracts with local suppliers.',
      it: 'Un’app Angular con cui un distributore della grande distribuzione gestisce i contratti con i fornitori locali.',
    },
    stack: 'Angular, TypeScript, SCSS',
    private: true,
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'TXT Group',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'Front-end developer',
          it: 'Front-end developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: '2023 – 2024',
      },
      {
        k: 'Stack',
        v: 'Angular, TypeScript, SCSS',
      },
    ],
    challenge: {
      en: 'A retail distributor needed to manage contracts with local suppliers in one place.',
      it: 'Un distributore della grande distribuzione doveva gestire in un unico posto i contratti con i fornitori locali.',
    },
    solution: {
      en: 'An Angular app with the lists and forms for each contract.',
      it: 'Un’app Angular con le liste e i moduli per ogni contratto.',
    },
    result: {
      en: 'In use by the distributor.',
      it: 'In uso presso il distributore.',
    },
  },
  {
    key: 'erp-database',
    parent: 'txt-group',
    type: 'project',
    name: {
      en: 'ERP database',
      it: 'Database del gestionale',
    },
    kind: {
      en: 'Management software · 2023 – today',
      it: 'Gestionale · 2023 – oggi',
    },
    desc: {
      en: 'As SQL developer I work on the database of a management software already in production: queries, views and stored procedures on SQL Server.',
      it: 'Come SQL developer lavoro sul database di un gestionale già in produzione: query, viste e stored procedure su SQL Server.',
    },
    stack: 'SQL Server, SSMS',
    private: true,
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'TXT Group',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'SQL developer',
          it: 'SQL developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: {
          en: '2023 – today',
          it: '2023 – oggi',
        },
      },
      {
        k: 'Stack',
        v: 'SQL Server, SSMS',
      },
    ],
    challenge: {
      en: 'The data layer of a management software had to grow with every new feature.',
      it: 'Il livello dati di un gestionale doveva crescere a ogni nuova funzione.',
    },
    solution: {
      en: 'I joined an existing product and took part in its recent development for some clients: queries, views and stored procedures on SQL Server.',
      it: 'Sono entrato in un prodotto già esistente e ho partecipato al suo sviluppo recente per alcuni clienti: query, viste e stored procedure su SQL Server.',
    },
    result: {
      en: 'The software is in production with many clients, including the features I worked on.',
      it: 'Il gestionale è in produzione presso molti clienti, comprese le funzioni a cui ho lavorato.',
    },
  },
  {
    key: 'gucci',
    parent: 'nss-magazine',
    type: 'project',
    name: 'Gucci',
    kind: {
      en: 'Editorial · NSS',
      it: 'Editoriale · NSS',
    },
    desc: {
      en: '“When Time Stands Still”, a scroll-driven editorial page for Gucci with GSAP animations.',
      it: '“When Time Stands Still”, una pagina editoriale per Gucci guidata dallo scroll, con animazioni in GSAP.',
    },
    stack: 'HTML, Sass, jQuery, GSAP',
    cover: 'assets/projects/gucci.webp',
    coverAlt: {
      en: 'Gucci “When Time Stands Still” page on vault.nssmag.com',
      it: 'Pagina “When Time Stands Still” di Gucci su vault.nssmag.com',
    },
    link: {
      href: 'https://vault.nssmag.com/en/gucci',
      label: 'vault.nssmag.com',
      aria: {
        en: 'vault.nssmag.com, live project (opens in a new tab)',
        it: 'vault.nssmag.com, progetto online (si apre in una nuova scheda)',
      },
    },
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'NSS Magazine',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'Front-end developer',
          it: 'Front-end developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: '2022',
      },
      {
        k: 'Stack',
        v: 'HTML, Sass, jQuery, GSAP',
      },
    ],
    challenge: {
      en: 'Tell a fashion story through scroll, without losing readability.',
      it: 'Raccontare una storia di moda con lo scroll, senza perdere leggibilità.',
    },
    solution: {
      en: 'A scroll-driven page with GSAP animations, on HTML, Sass and jQuery.',
      it: 'Una pagina guidata dallo scroll con animazioni GSAP, su HTML, Sass e jQuery.',
    },
    result: {
      en: 'Live on vault.nssmag.com.',
      it: 'Online su vault.nssmag.com.',
    },
  },
  {
    key: 'baracuta',
    parent: 'nss-magazine',
    type: 'project',
    name: 'Baracuta',
    kind: {
      en: 'Editorial · NSS',
      it: 'Editoriale · NSS',
    },
    desc: {
      en: 'One of my first projects at NSS: a long-form editorial page for Baracuta’s “The Alternative”.',
      it: 'Uno dei miei primi progetti in NSS: una pagina editoriale lunga per “The Alternative” di Baracuta.',
    },
    stack: 'HTML, Sass, jQuery, Brownie CMS',
    cover: 'assets/projects/baracuta.webp',
    coverAlt: {
      en: 'Baracuta “The Alternative” editorial page on nssmag.com',
      it: 'Pagina editoriale “The Alternative” di Baracuta su nssmag.com',
    },
    link: {
      href: 'https://vault.nssmag.com/en/baracuta-the-alternative',
      label: 'vault.nssmag.com',
      aria: {
        en: 'vault.nssmag.com, live project (opens in a new tab)',
        it: 'vault.nssmag.com, progetto online (si apre in una nuova scheda)',
      },
    },
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'NSS Magazine',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'Front-end developer',
          it: 'Front-end developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: '2022',
      },
      {
        k: 'Stack',
        v: 'HTML, Sass, jQuery, Brownie CMS',
      },
    ],
    challenge: {
      en: 'A long-form editorial page for a brand, inside a proprietary CMS.',
      it: 'Una pagina editoriale lunga per un brand, dentro un CMS proprietario.',
    },
    solution: {
      en: 'HTML, Sass and jQuery on Brownie, following the company’s practices.',
      it: 'HTML, Sass e jQuery su Brownie, seguendo le pratiche dell’azienda.',
    },
    result: {
      en: 'Live, and my first project at NSS.',
      it: 'Online, ed è stato il mio primo progetto in NSS.',
    },
  },
  {
    key: 'archive-stories',
    parent: 'nss-magazine',
    type: 'project',
    name: {
      en: 'Archive Stories',
      it: 'Archive Stories',
    },
    kind: {
      en: 'Editorial series · NSS',
      it: 'Serie editoriale · NSS',
    },
    desc: {
      en: 'The page for “Archive Stories”, an NSS series about archive fashion pieces.',
      it: 'La pagina di “Archive Stories”, una serie di NSS sui capi d’archivio.',
    },
    stack: 'HTML, Sass, jQuery, Brownie CMS',
    cover: 'assets/projects/archive-stories.webp',
    coverAlt: {
      en: '“Archive Stories” series page on nssmag.com',
      it: 'Pagina della serie “Archive Stories” su nssmag.com',
    },
    link: {
      href: 'https://www.nssmag.com/en/archive-stories',
      label: 'nssmag.com',
      aria: {
        en: 'nssmag.com, live project (opens in a new tab)',
        it: 'nssmag.com, progetto online (si apre in una nuova scheda)',
      },
    },
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'NSS Magazine',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'Front-end developer',
          it: 'Front-end developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: '2022',
      },
      {
        k: 'Stack',
        v: 'HTML, Sass, jQuery, Brownie CMS',
      },
    ],
    challenge: {
      en: 'A series page that grows with every new story.',
      it: 'Una pagina di serie che cresce a ogni nuova storia.',
    },
    solution: {
      en: 'A reusable layout with small jQuery animations.',
      it: 'Un layout riutilizzabile con piccole animazioni in jQuery.',
    },
    result: {
      en: 'Live. It’s where I learned small animations and front-end best practices.',
      it: 'Online. Qui ho imparato piccole animazioni e buone pratiche del front end.',
    },
  },
  {
    key: 'milan-fashion-week',
    parent: 'nss-magazine',
    type: 'project',
    name: {
      en: 'Milan Fashion Week',
      it: 'Milan Fashion Week',
    },
    kind: {
      en: 'Interactive map · NSS',
      it: 'Mappa interattiva · NSS',
    },
    desc: {
      en: 'An interactive map of the Milan Fashion Week FW23 shows, so readers can find every event in the city.',
      it: 'Una mappa interattiva delle sfilate della Milan Fashion Week FW23, per trovare ogni evento in città.',
    },
    stack: 'HTML, Sass, jQuery, Google Maps API',
    cover: 'assets/projects/milan-fashion-week.webp',
    coverAlt: {
      en: 'Milan Fashion Week FW23 map on nssmag.com',
      it: 'Mappa della Milan Fashion Week FW23 su nssmag.com',
    },
    link: {
      href: 'https://www.nssmag.com/en/pills/31867/the-map-of-milan-fashion-week-fw23',
      label: 'nssmag.com',
      aria: {
        en: 'nssmag.com, live project (opens in a new tab)',
        it: 'nssmag.com, progetto online (si apre in una nuova scheda)',
      },
    },
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'NSS Magazine',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'Front-end developer',
          it: 'Front-end developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: '2022',
      },
      {
        k: 'Stack',
        v: 'HTML, Sass, jQuery, Google Maps API',
      },
    ],
    challenge: {
      en: 'Readers needed to find dozens of shows across the city during the week.',
      it: 'I lettori dovevano trovare decine di sfilate in giro per la città durante la settimana.',
    },
    solution: {
      en: 'An interactive Google Maps map with every event placed by its coordinates.',
      it: 'Una mappa interattiva su Google Maps con ogni evento posizionato dalle sue coordinate.',
    },
    result: {
      en: 'Live on nssmag.com.',
      it: 'Online su nssmag.com.',
    },
  },
  {
    key: 'paris-fashion-week',
    parent: 'nss-magazine',
    type: 'project',
    name: {
      en: 'Paris Fashion Week',
      it: 'Paris Fashion Week',
    },
    kind: {
      en: 'Interactive map · NSS',
      it: 'Mappa interattiva · NSS',
    },
    desc: {
      en: 'An interactive map of the Paris Fashion Week Men SS23 events, so readers can see where every show takes place.',
      it: 'Una mappa interattiva degli eventi della Paris Fashion Week Men SS23, per vedere dove si tiene ogni sfilata.',
    },
    stack: 'HTML, Sass, jQuery, Google Maps API',
    cover: 'assets/projects/paris-fashion-week.webp',
    coverAlt: {
      en: 'Paris Fashion Week events map on nssmag.com',
      it: 'Mappa degli eventi della Paris Fashion Week su nssmag.com',
    },
    link: {
      href: 'https://www.nssmag.com/en/pills/30017/mappa-paris-fashion-week-men-ss23',
      label: 'nssmag.com',
      aria: {
        en: 'nssmag.com, live project (opens in a new tab)',
        it: 'nssmag.com, progetto online (si apre in una nuova scheda)',
      },
    },
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'NSS Magazine',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'Front-end developer',
          it: 'Front-end developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: '2022',
      },
      {
        k: 'Stack',
        v: 'HTML, Sass, jQuery, Google Maps API',
      },
    ],
    challenge: {
      en: 'Readers needed to see where every show of the week takes place.',
      it: 'I lettori dovevano vedere dove si tiene ogni sfilata della settimana.',
    },
    solution: {
      en: 'Google Maps integrated into the article, with every event placed by its coordinates.',
      it: 'Google Maps integrato nell’articolo, con ogni evento posizionato dalle sue coordinate.',
    },
    result: {
      en: 'Live on nssmag.com.',
      it: 'Online su nssmag.com.',
    },
  },
  {
    key: 'mqbmbq',
    parent: 'nss-magazine',
    type: 'project',
    name: 'Mqbmbq',
    kind: {
      en: 'Restyle · nss factory',
      it: 'Restyle · nss factory',
    },
    desc: {
      en: 'A restyle of the Mqbmbq website page, built with nss factory.',
      it: 'Il restyle della pagina del sito Mqbmbq, realizzato con nss factory.',
    },
    stack: 'HTML, Sass, jQuery',
    cover: 'assets/projects/mqbmbq.webp',
    coverAlt: {
      en: 'Mqbmbq website page',
      it: 'Pagina del sito Mqbmbq',
    },
    link: {
      href: 'https://mqbmbq.com/',
      label: 'mqbmbq.com',
      aria: {
        en: 'mqbmbq.com, live project (opens in a new tab)',
        it: 'mqbmbq.com, progetto online (si apre in una nuova scheda)',
      },
    },
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'NSS Magazine',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'Front-end developer',
          it: 'Front-end developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: '2022',
      },
      {
        k: 'Stack',
        v: 'HTML, Sass, jQuery',
      },
    ],
    challenge: {
      en: 'Restyle an existing page while keeping the brand’s visual language.',
      it: 'Rifare lo stile di una pagina esistente mantenendo il linguaggio visivo del brand.',
    },
    solution: {
      en: 'Rebuilt with HTML, Sass and jQuery.',
      it: 'Ricostruita con HTML, Sass e jQuery.',
    },
    result: {
      en: 'Live on mqbmbq.com.',
      it: 'Online su mqbmbq.com.',
    },
  },
  {
    key: 'matteo-pessina',
    parent: 'nss-magazine',
    type: 'project',
    name: {
      en: 'Matteo Pessina',
      it: 'Matteo Pessina',
    },
    kind: {
      en: 'Editorial · NSS Sports',
      it: 'Editoriale · NSS Sports',
    },
    desc: {
      en: 'A feature page for NSS Sports about footballer Matteo Pessina.',
      it: 'Una pagina speciale di NSS Sports sul calciatore Matteo Pessina.',
    },
    stack: 'HTML, Sass, Brownie CMS',
    cover: 'assets/projects/pessina.webp',
    coverAlt: {
      en: '“More than: Matteo Pessina” feature on nssmag.com',
      it: 'Speciale “More than: Matteo Pessina” su nssmag.com',
    },
    link: {
      href: 'https://www.nss-sports.com/en/more-than/30274/more-than-matteo-pessina',
      label: 'nss-sports.com',
      aria: {
        en: 'nss-sports.com, live project (opens in a new tab)',
        it: 'nss-sports.com, progetto online (si apre in una nuova scheda)',
      },
    },
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'NSS Magazine',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'Front-end developer',
          it: 'Front-end developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: '2022',
      },
      {
        k: 'Stack',
        v: 'HTML, Sass, Brownie CMS',
      },
    ],
    challenge: {
      en: 'Big photography and readable text in one feature page.',
      it: 'Fotografie grandi e testo leggibile nella stessa pagina speciale.',
    },
    solution: {
      en: 'Built from the CMS’s editorial blocks, tuned for mobile.',
      it: 'Costruita con i blocchi editoriali del CMS, curata per il mobile.',
    },
    result: {
      en: 'Live on nss-sports.com.',
      it: 'Online su nss-sports.com.',
    },
  },
  {
    key: 'italian-streetwear',
    parent: 'nss-magazine',
    type: 'project',
    name: {
      en: 'Italian Streetwear',
      it: 'Italian Streetwear',
    },
    kind: {
      en: 'Editorial section · NSS',
      it: 'Sezione editoriale · NSS',
    },
    desc: {
      en: 'A new article category that groups NSS stories into the “The Italian Streetwear” section.',
      it: 'Una nuova categoria che raccoglie gli articoli di NSS nella sezione “The Italian Streetwear”.',
    },
    stack: 'HTML, Sass, Brownie CMS',
    cover: 'assets/projects/italian-streetwear.webp',
    coverAlt: {
      en: '“The Italian Streetwear” section on nssmag.com',
      it: 'Sezione “The Italian Streetwear” su nssmag.com',
    },
    link: {
      href: 'https://www.nssmag.com/en/tag/the-italian-streetwear',
      label: 'nssmag.com',
      aria: {
        en: 'nssmag.com, live project (opens in a new tab)',
        it: 'nssmag.com, progetto online (si apre in una nuova scheda)',
      },
    },
    facts: [
      {
        k: {
          en: 'Company',
          it: 'Azienda',
        },
        v: 'NSS Magazine',
      },
      {
        k: {
          en: 'Role',
          it: 'Ruolo',
        },
        v: {
          en: 'Front-end developer',
          it: 'Front-end developer',
        },
      },
      {
        k: {
          en: 'Year',
          it: 'Anno',
        },
        v: '2022',
      },
      {
        k: 'Stack',
        v: 'HTML, Sass, Brownie CMS',
      },
    ],
    challenge: {
      en: 'Group stories into a new section that editors can fill on their own.',
      it: 'Raccogliere gli articoli in una nuova sezione che la redazione può riempire da sola.',
    },
    solution: {
      en: 'A new CMS category and a listing page that updates itself.',
      it: 'Una nuova categoria nel CMS e una pagina di elenco che si aggiorna da sola.',
    },
    result: {
      en: 'Live on nssmag.com.',
      it: 'Online su nssmag.com.',
    },
  },
  {
    key: 'nightsky',
    parent: 'personal-projects',
    type: 'project',
    name: 'NightSky',
    kind: {
      en: 'Portfolio · 2026 – today',
      it: 'Portfolio · 2026 – oggi',
    },
    desc: {
      en: 'This site: a portfolio where the home is a galaxy map, designed and built from scratch.',
      it: 'Questo sito: un portfolio in cui la home è una mappa-galassia, progettato e sviluppato da zero.',
    },
    stack: 'Angular, TypeScript, Figma',
    cover: 'assets/projects/nightsky-mark.webp',
    coverAlt: {
      en: 'NightSky moon and star mark with the wordmark',
      it: 'Marchio NightSky con luna, stella e logotipo',
    },
    link: {
      href: 'https://github.com/CristianMusto/CristianMusto.github.io',
      label: 'github.com/CristianMusto',
      aria: {
        en: 'NightSky source code on GitHub (opens in a new tab)',
        it: 'Codice sorgente di NightSky su GitHub (si apre in una nuova scheda)',
      },
    },
    facts: [
      {
        k: {
          en: 'Type',
          it: 'Tipo',
        },
        v: {
          en: 'Personal project',
          it: 'Progetto personale',
        },
      },
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
          en: 'Year',
          it: 'Anno',
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
    challenge: {
      en: 'My old portfolio was a React site that no longer showed what I do. I wanted one place for my work, skills and experience that also shows how I design.',
      it: 'Il mio vecchio portfolio era un sito React che non raccontava più quello che faccio. Volevo un unico posto per lavori, competenze ed esperienza, che mostrasse anche come progetto.',
    },
    solution: {
      en: 'I designed it in Figma and built it in Angular: the home is a galaxy map you can explore, with a list view for the same content, English and Italian, and every page prerendered.',
      it: 'L’ho progettato in Figma e sviluppato in Angular: la home è una mappa-galassia da esplorare, con una vista a elenco per gli stessi contenuti, in inglese e italiano, e ogni pagina prerenderizzata.',
    },
    result: {
      en: 'Live at cristianmusto.github.io. The design process is in the Lab.',
      it: 'Online su cristianmusto.github.io. Il processo di design è nel Lab.',
    },
    related: [
      {
        sys: 'lab',
        planet: 'nightsky-design',
        label: {
          en: 'Design case study',
          it: 'Case study di design',
        },
      },
    ],
  },
];
