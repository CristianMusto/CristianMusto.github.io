import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { planetsFor, projectsFor, type Lang } from '../content';
import { ENGINE_STRINGS, type EngineStrings } from '../i18n/engine-strings';

/** Public address of the deployed site (GitHub Pages). */
export const SITE_URL = 'https://cristianmusto.github.io';
const OG_DEFAULT = 'assets/og-image.png';
const SITE_NAME = 'NightSky';
const AUTHOR = 'Cristian Musto';

/** Name and description string keys for each system. */
const SYSTEMS: Record<string, [keyof EngineStrings, keyof EngineStrings]> = {
  projects: ['projects', 'projectsDesc'],
  skills: ['skills', 'skillsDesc'],
  lab: ['lab', 'labDesc'],
  about: ['about', 'aboutDesc'],
  contact: ['contact', 'contactDesc'],
};

const TAGLINE: Record<Lang, string> = {
  it: 'NightSky · Cristian Musto, software developer e UI/UX designer',
  en: 'NightSky · Cristian Musto, software developer and UI/UX designer',
};
const SITE_DESCRIPTION: Record<Lang, string> = {
  it: 'Cristian Musto, software developer e UI/UX designer. Applicazioni web con Angular e .NET, e le interfacce su cui girano.',
  en: 'Cristian Musto, software developer and UI/UX designer. Web applications built with Angular and .NET, and the interfaces they run on.',
};

interface PlanetText {
  key: string;
  name: string;
  kind: string;
  desc: string;
  lead?: string;
  type?: string;
  ghost?: boolean;
}

export interface PageSeo {
  title: string;
  description: string;
  image: string;
  jsonLd: Record<string, unknown>[];
}

/** Title, description and structured data for an engine path ('/', '/skills', '/projects/txt-group/erp-database'). */
export function seoFor(lang: Lang, path: string): PageSeo {
  const str = ENGINE_STRINGS[lang];
  const [systemId, planetKey, projectKey] = path.split('/').filter(Boolean);
  const url = `${SITE_URL}/${lang}${path === '/' ? '/' : path}`;
  const person = {
    '@type': 'Person',
    name: AUTHOR,
    jobTitle: 'Software developer & UI/UX designer',
    url: SITE_URL,
  };
  const site = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${SITE_URL}/${lang}/`,
    inLanguage: lang,
    author: person,
  };
  const keys = systemId ? SYSTEMS[systemId] : undefined;
  if (!keys)
    return { title: TAGLINE[lang], description: SITE_DESCRIPTION[lang], image: OG_DEFAULT, jsonLd: [site] };

  const systemName = str[keys[0]];
  const planets = (planetsFor(lang)[systemId] ?? []) as unknown as PlanetText[];
  const planet = planetKey ? planets.find(p => p.key === planetKey && !p.ghost) : undefined;
  const project =
    planet && projectKey
      ? (projectsFor(lang) as unknown as (PlanetText & { parent: string; challenge?: string })[]).find(
          q => q.key === projectKey && q.parent === planet.key,
        )
      : undefined;
  const crumbs = [
    { name: SITE_NAME, item: `${SITE_URL}/${lang}/` },
    { name: systemName, item: `${SITE_URL}/${lang}/${systemId}` },
    ...(planet ? [{ name: planet.name, item: `${SITE_URL}/${lang}/${systemId}/${planet.key}` }] : []),
    ...(project ? [{ name: project.name, item: url }] : []),
  ];
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, ...c })),
  };
  if (!planet) {
    return {
      title: `${systemName} · ${SITE_NAME}`,
      description: str[keys[1]],
      image: OG_DEFAULT,
      jsonLd: [site, breadcrumb],
    };
  }
  const jsonLd: Record<string, unknown>[] = [site, breadcrumb];
  if (project) {
    const description = project.challenge || project.desc;
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.name,
      description,
      url,
      inLanguage: lang,
      creator: person,
    });
    return {
      title: `${project.name} · ${planet.name} · ${SITE_NAME}`,
      description,
      image: OG_DEFAULT,
      jsonLd,
    };
  }
  return {
    title: `${planet.name} · ${systemName} · ${SITE_NAME}`,
    description: planet.lead || planet.desc,
    image: OG_DEFAULT,
    jsonLd,
  };
}

/** Writes per-route head tags. Runs during prerender too, so every static page has its own. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  apply(lang: Lang, path: string): void {
    const seo = seoFor(lang, path);
    const suffix = path === '/' ? '/' : path;
    const url = `${SITE_URL}/${lang}${suffix}`;
    const image = `${SITE_URL}/${seo.image}`;
    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:locale', content: lang === 'it' ? 'it_IT' : 'en_US' });
    this.doc.documentElement.lang = lang;
    this.link('canonical', url);
    this.link('alternate', `${SITE_URL}/it${suffix}`, 'it');
    this.link('alternate', `${SITE_URL}/en${suffix}`, 'en');
    this.link('alternate', `${SITE_URL}/en${suffix}`, 'x-default');
    this.jsonLd(seo.jsonLd);
  }

  private link(rel: string, href: string, hreflang?: string): void {
    const selector = `link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ''}`;
    let el = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!el) {
      el = this.doc.createElement('link');
      el.rel = rel;
      if (hreflang) el.hreflang = hreflang;
      this.doc.head.appendChild(el);
    }
    el.href = href;
  }

  private jsonLd(data: Record<string, unknown>[]): void {
    let el = this.doc.head.querySelector<HTMLScriptElement>('script#sky-jsonld');
    if (!el) {
      el = this.doc.createElement('script');
      el.type = 'application/ld+json';
      el.id = 'sky-jsonld';
      this.doc.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data.length === 1 ? data[0] : data);
  }
}
