export type Lang = 'en' | 'it';
/** Plain string when identical in both languages, otherwise one value per language. */
export type Text = string | { en: string; it: string };
export type PaletteName = 'cyan' | 'gold' | 'coral' | 'green' | 'violet' | 'sand' | 'ice';

/**
 * One planet (page). Field names match the Skyward Mappa mockup engine.
 * type: 'company' | 'service' | 'step' | 'about' | 'form' | 'contact'; ghost: true = open orbit without a page.
 */
export interface PlanetData {
  key: string;
  name: Text;
  kind: Text;
  desc: Text;
  c?: PaletteName;
  size: number;
  type?: string;
  ghost?: boolean;
  [field: string]: unknown;
}

/**
 * A project: a card in its company planet (parent) and a detail page at
 * /:lang/projects/:parent/:key. type 'project' = standard detail, 'case' = case study.
 */
export interface ProjectData {
  key: string;
  parent: string;
  type: 'project' | 'case';
  name: Text;
  kind: Text;
  desc: Text;
  stack: string;
  [field: string]: unknown;
}
