# Cannaplace 1080 — Website

Website for **Cannaplace 1080 CBD Shop**, Josefstädter Straße 56, 1080 Wien.
Preview build for client approval: <https://altrinid.github.io/Cannaplace-1080/>

- Design: [Figma — Cannaplace — Website](https://www.figma.com/design/sZqfDkiirpgfGBh5L18awL)
- Stack: Next.js 16 (App Router, static export) · React 19 · Tailwind CSS 4 · TypeScript
- Languages: German at `/`, English at `/en/`

## Development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy to GitHub Pages

```bash
npm run deploy
```

Builds the static export with the `/Cannaplace-1080` base path and force-pushes it to the `gh-pages` branch.

## Preview features (remove before launch)

- **Font switcher** (bottom left): variant A = Jost, variant B = Syne + DM Sans. Share a variant directly with `?font=syne` or `?font=jost`.
- `noindex` robots meta in `src/app/layout.tsx`.

## Project structure

| Path | What it holds |
| --- | --- |
| `src/app/globals.css` | Design tokens (colors, radii, shadows, type scale) mirroring the Figma variables and text styles |
| `src/content/de.ts`, `src/content/en.ts` | All page copy, products and prices |
| `src/components/` | Page sections (Hero, Categories, Bestsellers, LabReports, VisitStore, Journal, Newsletter, Footer), age gate, font switcher |
| `src/assets/` | Product illustrations and the store map, exported from the Figma components |

## Placeholders to confirm with the shop

Products, prices and product counts · opening hours (Google only lists "opens Mon 10:30") · lab report values (example batch) · shipping across Austria · logo (new draft).
