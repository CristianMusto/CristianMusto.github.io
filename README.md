# NightSky

Il portfolio di Cristian Musto, software developer e UI/UX designer: la home è una galassia, le sezioni sono sistemi
stellari e le pagine sono pianeti. Nato come Skyward, il sito del suo studio di design.
Angular 20, prerender statico, inglese (predefinito) e italiano, pubblicato su GitHub Pages:
https://cristianmusto.github.io/

## Avvio

```bash
npm install
npm start          # http://localhost:4200/en
npm run build      # build locale in dist/nightsky/browser
```

## Struttura

Il sito è il mockup **Skyward Mappa** portato 1:1: stesso motore (galassia su canvas, salti, orbite, intro, tutorial, audio), stesso markup e stili.

```
src/app/
  layout/shell/               layout persistente /:lang: canvas, intro, 404 (possiede il motore)
  pages/
    galaxy/                   /:lang                  mappa della galassia
    system/                   /:lang/:system          sistema con i pianeti
    planet/                   /:lang/:system/:planet  pagina del pianeta
  layout/site-header/         barra in alto: logo, lingua, audio, mappa/elenco
  features/
    intro/intro-screen/       intro e "tieni premuto per partire"
    galaxy/                   hero, system-labels, map-controls, system-card, system-list, coach, egg-toast
    system/system-map/        mappa del sistema con i pianeti in orbita
    planet/                   planet-page (guscio) + case-study, service-detail, process-step,
                              about-detail, crew, contact-details, contact-form,
                              company-detail (card dei progetti), project-detail (pagina progetto)
    not-found/                404
  shared/                     view-part (base dei componenti), sky-ref, sky-vn
  core/                       engine.store (motore <-> router), contact.service, settings, lang.guard
  engine/                     motore della galassia in moduli (scene, navigation, input, router…)
  i18n/                       ui-strings (template) e engine-strings (motore), IT + EN
  content/                    pianeti (pagine), uno per file
public/assets/                immagini, logo, memoji
```

Ogni componente riceve `v` (i valori del motore) e `t` (i testi nella lingua della pagina).

Indirizzi: `/en`, `/en/skills`, `/en/about/experience`, `/en/projects/txt-group/erp-database` (e lo stesso con `/it`). Ogni URL è prerenderizzato, quindi i link diretti funzionano su GitHub Pages.

## Stato del refactoring

1. Motore in moduli TypeScript: **fatto**. Riscritti a mano e tipizzati: `types`, `constants`, `math`, `data`, `base`, `vnode`, `quality`, `audio`, `contact-form`, `coach`, `navigation`, `router`. Ancora con `// @ts-nocheck`: gli altri, uno alla volta con `ng build` dopo ciascuno.
2. Un componente per schermata: **fatto**.
3. Routing Angular vero (`/en/about/experience`) con prerender: **fatto**.
4. Un solo template con i18n: **fatto** (testi in `i18n/`).
5. Stili per componente: **fatto** (nessuno stile inline; valori dinamici passati come variabili CSS, es. `[style.--left]`). Prossimo: token condivisi.

## Sistemi

| Sistema | Cartella | Pianeti |
|---|---|---|
| Projects | `content/projects/` | un pianeta per azienda (TXT Group, NSS Magazine) più «Personal projects»; i progetti sono in `projects/items.ts` |
| Skills | `content/skills/` | aree di competenza, ogni voce con il livello `lv` (3 avanzato, 2 intermedio, 1 agli inizi) |
| Lab | `content/lab/` | per ora solo «Work in progress» |
| About | `content/about/` | Me, Experience, Education |
| Contact | `content/contact/` | Message (modulo), Find me (link) |

## Aggiungere un progetto

1. In `src/app/content/projects/items.ts` aggiungi un oggetto con `key`, `parent` (il pianeta dell'azienda, es. `txt-group`),
   `type: 'project'`, testi (`{ en, it }`), `stack`, `facts`, `challenge`, `solution`, `result` e, se c'è, `cover` e `link`
   (oppure `private: true` per i progetti sotto NDA).
2. Compare come card nel pianeta dell'azienda e come pagina in `/en/projects/<azienda>/<key>`, già prerenderizzata.

Per una nuova azienda duplica un pianeta di `projects/` (es. `nss-magazine.ts`) e aggiungilo all'`index.ts`.

## Aggiungere un pianeta (competenza, pagina About…)

1. Duplica un file della cartella giusta in `src/app/content/` (es. `skills/mobile.ts`).
2. Cambia `key`, testi (`{ en, it }`), palette `c` (cyan, gold, coral, green, violet, sand, ice) e `size`.
3. Aggiungilo all'array nell'`index.ts` della stessa cartella.

Compare sulla mappa del sistema, nell'indice e nella navigazione tra pagine.
Il layout «case» è il diario di bordo di NightSky, scritto nel template (`features/planet/case-study`).

## Modulo contatti (Web3Forms)

1. Vai su https://web3forms.com, inserisci cristian.musto11@gmail.com e ricevi la access key.
2. Incollala in `src/environments/environment.ts`.

## Pubblicazione

1. Su GitHub: Settings → Pages → Source: **GitHub Actions**.
2. Ogni push su `main` esegue `.github/workflows/deploy.yml`: build con base `/` (repository `cristianmusto.github.io`), prerender di tutte le pagine, `404.html` per le route non previste.

