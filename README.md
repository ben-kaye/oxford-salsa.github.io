# Calor — Oxford University Salsa & Bachata Society

The OUSS website, built with Astro + React islands and deployed to GitHub Pages at **[ouss.co.uk](https://ouss.co.uk)**.

## Stack

- **[Astro 5](https://astro.build)** — static site generator, ships zero JS for static parts
- **React 18** — only for the interactive islands (schedule grid, class modal, signup form)
- **Plain CSS** — no preprocessor, custom-properties-driven design system

Static editorial sections (hero, pricing, about, socials, footer) render as pre-built HTML. Only `<Schedule>` and `<Membership>` hydrate on the client.

## Local development

```bash
npm install
npm run dev      # → http://localhost:4321
```

## Production build

```bash
npm run build    # → dist/
npm run preview  # → preview dist/ locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which:

1. Builds with `withastro/action@v3` (Node 20)
2. Uploads `dist/` as a GitHub Pages artifact
3. Deploys via `actions/deploy-pages@v4`

The custom domain **ouss.co.uk** is preserved via `public/CNAME` — Astro copies it verbatim into every build so GitHub Pages keeps serving the site at the apex domain.

**One-time repo setup:** Settings → Pages → Source = "GitHub Actions".

## Editing content

All schedule, pricing, committee, and socials content lives in [`src/data.js`](src/data.js). Edit it, push, deploy.

## Structure

```
src/
├── data.js                   # All content (schedule, pricing, committee, socials)
├── styles/styles.css         # Design system + section styles
├── layouts/Base.astro        # <html>, fonts, global CSS
├── pages/index.astro         # Page composition
└── components/
    ├── Nav, Hero, Marquee,
    │ Pattern, Pricing, About,
    │ Socials, Footer          (.astro — static, zero JS)
    └── Schedule, ClassModal,
       Membership              (.jsx — React islands)
```

## Design source

The visual design was drafted in [Claude Design](https://claude.ai/design) and ported here. Original
prototype used in-browser Babel + CDN React; this build replaces that with a proper static-first
architecture for production performance.
