import type { PlanetData } from '../types';

export const mobile: PlanetData = {
  key: 'mobile',
  name: 'Mobile',
  type: 'service',
  kind: {
    en: 'Responsive web · first steps in iOS',
    it: 'Web responsive · primi passi su iOS',
  },
  desc: {
    en: 'Interfaces that work on phones, and my first native apps.',
    it: 'Interfacce che funzionano sul telefono, e le mie prime app native.',
  },
  c: 'ice',
  size: 24,
  lead: {
    en: 'Every web app I build is responsive and tested on phones. Native mobile is where I’m getting started.',
    it: 'Ogni app web che sviluppo è responsive e provata sul telefono. Il mobile nativo è dove sono agli inizi.',
  },
  body: {
    en: 'Before the web I taught myself Swift, cloning well-known iOS apps.',
    it: 'Prima del web ho imparato Swift da autodidatta, clonando app iOS famose.',
  },
  itemsTitle: {
    en: 'What I use',
    it: 'Cosa uso',
  },
  items: [
    {
      n: '01',
      t: {
        en: 'Responsive & mobile-first web',
        it: 'Web responsive e mobile-first',
      },
      d: {
        en: 'Layouts that start from the phone and grow.',
        it: 'Layout che partono dal telefono e crescono.',
      },
      lv: 3,
    },
    {
      n: '02',
      t: {
        en: 'Swift',
        it: 'Swift',
      },
      d: {
        en: 'Self-taught, cloning well-known iOS apps.',
        it: 'Da autodidatta, clonando app iOS famose.',
      },
      lv: 1,
    },
    {
      n: '03',
      t: {
        en: 'SwiftUI',
        it: 'SwiftUI',
      },
      d: {
        en: 'Declarative UI for Apple platforms.',
        it: 'UI dichiarativa per le piattaforme Apple.',
      },
      lv: 1,
    },
  ],
  related: [
    {
      sys: 'projects',
      planet: 'personal-projects',
      project: 'nightsky',
      label: 'NightSky',
    },
    {
      sys: 'projects',
      planet: 'nss-magazine',
      project: 'milan-fashion-week',
      label: 'Milan Fashion Week',
    },
  ],
};
