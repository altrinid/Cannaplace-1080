# Cannaplace 1080 — Website

Website for **Cannaplace 1080 CBD Shop**, Josefstädter Straße 56, 1080 Wien.
Preview build for client approval: <https://altrinid.github.io/Cannaplace-1080/>

- Design: [Figma — Cannaplace — Website](https://www.figma.com/design/sZqfDkiirpgfGBh5L18awL)
- Stack: Next.js 16 (App Router, static export) · React 19 · Tailwind CSS 4 · TypeScript
- Languages: German at `/`, English at `/en/` (separate root layouts, so `<html lang>` is correct in the static HTML)
- SEO: see [docs/SEO.md](docs/SEO.md) — audit checklist, keyword map, meta masks and content plan

## Development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy to GitHub Pages

```bash
npm run deploy                    # replace the whole preview site
PAGES_SUBDIR=seo npm run deploy   # publish into /Cannaplace-1080/seo/ and keep everything else
```

Builds the static export with the matching base path and pushes it to the `gh-pages` branch.

## Going live

Build with the shop's domain to make the site indexable:

```bash
NEXT_PUBLIC_SITE_URL=https://www.example.at npm run build
```

Without `NEXT_PUBLIC_SITE_URL` every build is treated as a preview: `noindex` on all pages and `Disallow: /` in robots.txt. With it, canonical URLs, hreflang, the sitemap and structured data use the real domain.

## Preview features (remove before launch)

- **Font switcher** (bottom left): variant A = Jost, variant B = Syne + DM Sans. Share a variant directly with `?font=syne` or `?font=jost`.
- Cart and newsletter only confirm locally; checkout and mailing come with the shop backend.
- The account button explains that log-in follows with the shop; the Merkliste already works (saved in the browser).

## Editing content

| What | Where |
| --- | --- |
| Promo banners on the home page (and the two tiles next to them) | `src/content/banners.ts` — see [docs/SEO.md](docs/SEO.md#banner) for the rules |
| Customer reviews | `src/content/reviews.ts` — real reviews only |
| Lab values and certificate PDFs | `coa` of each product in `src/content/catalog.ts`; put PDFs in `public/coa/` and set `pdf: "/coa/…pdf"` |
| Guide articles | `src/content/articles/` (`de.ts`, `en.ts` for the copy, `index.ts` for topic, dates and the home page selection) |
| Glossary terms | `glossary.terms` in `src/content/de.ts` and `en.ts` |
| Company data in footer and imprint | `COMPANY` in `src/lib/site.ts`, imprint copy in `src/content/de.ts` / `en.ts` |

## Project structure

| Path | What it holds |
| --- | --- |
| `src/app/(de)/`, `src/app/(en)/en/` | Route files per language (thin wrappers around `src/components/pages/`) |
| `src/app/sitemap.ts`, `robots.ts`, `global-not-found.tsx` | Sitemap with hreflang, robots.txt, 404 page |
| `src/content/de.ts`, `en.ts` | UI copy, category texts, info pages, FAQs |
| `src/content/catalog.ts` | Categories and products (both languages, prices, specs, lab values) |
| `src/content/banners.ts`, `reviews.ts` | Home page banners and tiles, customer reviews |
| `src/content/articles/` | Guide articles (`de.ts`, `en.ts`) and their dates and linked products |
| `src/lib/routes.ts` | URL scheme and the page list for the sitemap |
| `src/lib/seo.ts` | Metadata (canonical, hreflang, Open Graph) and JSON-LD builders |
| `src/lib/search.ts` | Index for the header search (products, categories, guide, glossary, pages) |
| `src/components/` | Sections and shared UI; `pages/` holds the page templates |
| `src/app/globals.css` | Design tokens (colors, radii, shadows, type scale) mirroring the Figma variables and text styles |
| `src/assets/` | Product illustrations and the store map from the Figma components; the label variants (`bottle-5`, `jar-og-kush`, …) set the product name on the same artwork |
| `public/og-image.png` | Social sharing image (1200×630) |

## Placeholders to confirm with the shop

- Products, prices, specs, lab values and product illustrations (real photos)
- Opening hours (Google only lists "opens Mon 10:30"), Google rating and review count
- Shipping costs, delivery time, payment methods
- Operator: CANNAPLACE OG, FN 619212g, Handelsgericht Wien (from the company register — to confirm); VAT ID, email and trade authority for the imprint; privacy policy review; terms and conditions
- More real Google reviews for the reviews section
- CBD flowers: transitional licence from the Monopolverwaltung GmbH (see [docs/SEO.md](docs/SEO.md#open-items-for-the-shop))
- Logo (new draft), production domain
