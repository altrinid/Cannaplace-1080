# SEO implementation — Cannaplace 1080

This document maps the agency playbooks in the shared Drive folder **SEO** (`[SEO] Аудит пресейл`, `[SEO] Сбор семантического ядра`, `[SEO] ТЗ на тексты`, `[SEO] Контент-план`, `[SEO] Контентный аудит`) to the website, and lists what still needs input from the shop.

The playbooks were written for the Russian market (Yandex, Wordstat, Keys.so, Arsenkin, text.ru). Cannaplace targets Austria, where Google has almost the entire search market. Rules were therefore applied in their Google form; every deviation is listed in [Adaptations for Google and Austria](#adaptations-for-google-and-austria).

## 1. Audit checklist (`[SEO] Аудит пресейл`)

| # | Point | Status | Where |
| --- | --- | --- | --- |
| 1.1 | Broken links | ✅ none (checked by crawling the export) | all pages |
| 1.2 | URL nesting | ✅ `/shop/{category}/{product}/`, `/ratgeber/{article}/`, English under `/en/` | `src/lib/routes.ts` |
| 1.4 | Mirrors / duplicates | ✅ one canonical per page, trailing-slash URLs only | `pageMetadata()` in `src/lib/seo.ts` |
| 1.5 | Page speed | ✅ static HTML, WebP images, self-hosted fonts, no tracking scripts | — |
| 1.7–1.8 | robots.txt | ✅ generated; previews `Disallow: /`, live site allows crawling + sitemap | `src/app/robots.ts` |
| 1.9–1.10 | sitemap.xml | ✅ generated from the route registry, with hreflang alternates | `src/app/sitemap.ts` |
| 1.11 | Mobile layout | ✅ responsive from 360 px | — |
| 1.12 | rel=canonical | ✅ self-referencing on every page | `src/lib/seo.ts` |
| 1.13 | 404 page | ✅ heading + links to home, shop and English site | `src/app/global-not-found.tsx` |
| 1.14 | Structured data | ✅ Store (address, hours, phone), WebSite, BreadcrumbList, Product + Offer, FAQPage, Article | `src/lib/seo.ts` |
| 2.1–2.3 | Title, description, no meta keywords | ✅ unique per page (see masks below) | `src/content/*.ts` |
| 2.4, 2.11 | One H1, clean H1–H6 hierarchy | ✅ one H1 per page, no skipped levels; feature lists and footer titles are no longer headings | — |
| 2.5 | Breadcrumbs | ✅ visible + BreadcrumbList on every inner page | `Breadcrumbs.tsx` |
| 2.6 | SEO texts | ✅ home, shop, every category, guide articles | `src/content/de.ts`, `articles/` |
| 2.7–2.8 | Prices, product pages | ✅ 12 product pages: price incl. VAT, description, specs, lab values, FAQ, related products | `ProductPage.tsx` |
| 2.10 | Article structure | ✅ table of contents, H2/H3, product block, FAQ, author and dates | `ArticlePage.tsx` |
| 2.12 | Footer | ✅ categories, service pages, legal pages, address, phone, hours | `Footer.tsx` |
| 3.1 | Catalogue structure | ✅ 4 category pages + shop overview | — |
| 3.5–3.6 | Blog | ✅ guide (`/ratgeber/`) with 3 long-form articles; plan for 10 more below | — |
| 3.7 | Information pages | ✅ About, Contact, Shipping & payment, FAQ, Lab reports, Imprint, Privacy, Terms | — |
| 4.1 | Closing contact block in content | ✅ call / directions block on every content page | `ContactCta.tsx` |
| 4.3 | Reviews block | ✅ real Google rating + quote on home and contact (no invented reviews, see below) | — |
| 4.4 | Conversion in articles | ✅ "Passende Produkte" block + internal links in the text | — |
| 4.5 | Phone in the mobile header | ✅ | `Header.tsx` |
| 4.6 | Filters / sorting | ✅ category filter and sorting (recommended, price, name) | `ProductGrid.tsx` |
| 4.7 | Lead magnet | ✅ newsletter block (form becomes active with the newsletter provider) | — |
| 5.1 | Commercial information | ✅ prices incl. VAT, shipping, pick-up, payment, withdrawal | `/versand-zahlung/` |
| 5.2–5.3 | About us, authors | ✅ About page; articles signed by "Team Cannaplace 1080" ⏳ add real names/photos | — |
| 5.4 | Trust signals | ✅ lab reports page with the current batches | `/laborberichte/` |
| 5.5 | Company details | ⏳ imprint structure is in place, legal data must come from the shop | `/impressum/` |
| 6.3–6.5 | Maps, directories, reviews | ⏳ off-site work: Google Business Profile, Herold, WKO Firmen A–Z; answer every review | — |
| 1.3, 1.6, 1.15, 1.16, 3.2–3.4, 3.8, 6.1–6.2, 7 | Pagination, search pages, geo subdomains, services, brands, portfolio, links, CMS move | ➖ not applicable yet (no pagination, search or brand pages; new domain without link history) | — |

## 2. Semantic core and keyword map (`[SEO] Сбор семантического ядра`)

Search volumes could not be pulled from this environment (Google Suggest and Keyword Planner were not reachable, and Wordstat, Keys.so and Arsenkin only cover Yandex). The clusters below come from the shop's range, competitor pages ranking in Vienna (Maren CBD and Leafs in 1080, Hanf Mann, MAGU CBD, Krautbuam, Mama Kana) and typical German search patterns. **Before the next content sprint, add monthly volumes from Google Keyword Planner (location Austria) and drop any query with no demand**, as the playbook requires.

Clustering follows the playbook: commercial queries go to category and product pages, informational queries go to articles. Each landing page targets one cluster of up to about 5 phrases.

| URL | Main query (H1 / start of title) | Supporting queries | Intent |
| --- | --- | --- | --- |
| `/` | cbd shop wien | cbd shop 1080, cbd shop josefstadt, cbd geschäft wien, cbd laden wien, hanf shop wien | commercial, local |
| `/shop/` | cbd shop online | cbd produkte kaufen, cbd online bestellen österreich | commercial |
| `/shop/cbd-oel/` | cbd öl kaufen wien | cbd öl wien, cbd öl österreich, cbd öl 10 prozent, cbd aromaöl | commercial |
| `/shop/cbd-blueten/` | cbd blüten wien | cbd blüten kaufen wien, cbd hanfblüten wien, cbd blüten 1080 | commercial, local |
| `/shop/cbd-kosmetik/` | cbd kosmetik | cbd balsam, cbd creme, cbd handcreme, cbd lippenbalsam | commercial |
| `/shop/zubehoer/` | grinder kaufen wien | grinder holz, grinder metall, aufbewahrungsglas kräuter | commercial |
| product pages | {product} kaufen | {product} cbd, {product} wien | commercial |
| `/laborberichte/` | cbd laborbericht | cbd analysezertifikat, cbd coa | trust |
| `/ratgeber/was-ist-cbd/` | was ist cbd | unterschied cbd thc, macht cbd high, vollspektrum isolat | informational |
| `/ratgeber/analysezertifikat-lesen/` | analysezertifikat lesen | coa cbd, laborbericht cbd verstehen, gesamt thc berechnen | informational |
| `/ratgeber/cbd-legal-oesterreich/` | ist cbd legal in österreich | cbd blüten legal österreich, cbd blüten trafik, cbd gesetz österreich | informational |
| `/kontakt/` | cbd shop josefstädter straße | cannaplace öffnungszeiten, cbd shop wien 8. bezirk | navigational, local |
| `/versand-zahlung/` | cbd versand österreich | cbd blüten versand, cbd lieferung wien | commercial-informational |

English mirror: `cbd shop vienna`, `cbd oil vienna`, `cbd flowers vienna`, `is cbd legal in austria`, `how to read a cbd certificate of analysis`.

Excluded on purpose, as the playbook recommends: competitor brand names, "billig/günstig" queries, other cities and districts, misspellings, and all medical queries ("cbd gegen …"). Health claims are not allowed for CBD products in the EU, so those queries cannot be targeted.

## 3. Meta tags, headings and masks (`[SEO] ТЗ на тексты`, `[SEO] Контентный аудит`)

- **Title:** starts with the main query, includes 1–2 supporting words (masks), ends with the brand, no word more than twice, 50–65 characters.
- **Description:** starts with the main query, contains 2–3 supporting phrases and ends with the company name; 110–170 characters so Google shows it in full.
- **H1:** one per page, at the top, contains the main query (on the home page it combines "CBD Shop in Wien-Josefstadt" with the brand line, with no visual change).
- **H2/H3:** contain supporting queries; H3 is only used inside sections (FAQ questions, cards).
- **URL:** human-readable, Latin letters, hyphens, nested by section.

Masks (in `src/content/de.ts` → `product.meta` and `product.faq*`):

| Template | German | English |
| --- | --- | --- |
| Product title (shippable) | `{Name} kaufen – laborgeprüft \| Cannaplace 1080` | `Buy {name} – Lab-Tested \| Cannaplace 1080` |
| Product title (in store only) | `{Name} ({Kategorie}) – nur im Shop in Wien \| Cannaplace 1080` | `{Name} ({category}) – In Store in Vienna \| Cannaplace` |
| Product description | `{Kurztext} Cannaplace 1080, CBD Shop Wien.` | `{short text} Cannaplace 1080, CBD shop Vienna.` |
| Product FAQ | shipping time, viewing in store, lab report (or: why in store only, minimum age) | same |

## 4. Content plan (`[SEO] Контент-план`)

Published (October 2026), each with a product block, FAQ, author and date, grouped by topic on `/ratgeber/`:

| Topic | Article | URL |
| --- | --- | --- |
| Grundlagen | Was ist CBD? Die wichtigsten Grundlagen | `/ratgeber/was-ist-cbd/` |
| Grundlagen | Vollspektrum, Breitspektrum oder Isolat? Die Unterschiede | `/ratgeber/vollspektrum-breitspektrum-isolat/` |
| Grundlagen | Terpene erklärt: Was Hanf seinen Duft verleiht | `/ratgeber/terpene/` |
| Qualität & Lagerung | So liest du ein Analysezertifikat richtig | `/ratgeber/analysezertifikat-lesen/` |
| Qualität & Lagerung | CBD richtig lagern: Öl, Blüten und Kosmetik | `/ratgeber/cbd-lagern/` |
| Recht in Österreich | CBD in Österreich: Was ist erlaubt? | `/ratgeber/cbd-legal-oesterreich/` |

Plus the **CBD-Lexikon** (`/ratgeber/lexikon/`, `/en/guide/glossary/`): 24 terms with anchors, `DefinedTermSet` structured data and links into the articles and categories. The header search also finds every term.

Next topics in priority order. Before writing, check demand in Keyword Planner and the competitors' ranking articles, as the playbook describes.

| # | Topic | Target query | Links to |
| --- | --- | --- | --- |
| 1 | CBD Öl 5 %, 10 % oder 20 % – welche Konzentration? | cbd öl 10 oder 20 prozent | CBD Öle |
| 2 | CBD-Blüten: Trafik oder Fachgeschäft – was ab 2029 gilt | cbd blüten trafik | CBD Blüten |
| 3 | CBD und Autofahren in Österreich | cbd autofahren österreich | Ratgeber Recht |
| 4 | CBG, CBN & Co.: weitere Cannabinoide | was ist cbg | CBD Öle |
| 5 | CBD-Kosmetik: was erlaubt ist und worauf du achten solltest | cbd kosmetik erfahrungen | Kosmetik |
| 6 | Grinder reinigen: Schritt für Schritt | grinder reinigen | Zubehör |
| 7 | Hanf, Cannabis, Marihuana – wo ist der Unterschied? | unterschied hanf cannabis | Ratgeber Grundlagen |

New articles go into `src/content/articles/de.ts` and `en.ts` (copy) and `src/content/articles/index.ts` (topic, image, dates, linked products). `FEATURED_ARTICLE_IDS` there decides which three appear on the home page.

## 5. After launch (`[SEO] Контентный аудит`)

1. Set `NEXT_PUBLIC_SITE_URL` to the shop's domain and build. That removes `noindex`, opens robots.txt and fills canonical, hreflang and sitemap with the real domain.
2. Verify the domain in Google Search Console and Bing Webmaster Tools and submit `/sitemap.xml`.
3. Track positions for the keyword map (for example with Sistrix, Ahrefs or Search Console). Pages outside the top 10 get text work in this order: no text → low uniqueness → keyword stuffing → outdated (more than 6 months old). Pages in the top 10 stay as they are.
4. Make the Google Business Profile match the website exactly (name, address, phone, hours, categories "CBD-Geschäft" and "Hanfladen", photos, posts). Answer every review.

## 6. Website audit (October 2026)

| # | Audit point | Implemented as |
| --- | --- | --- |
| 1 | Header: search, account, favorites, cart | Working search (products, categories, guide, glossary terms, pages; umlaut-tolerant), account menu (log-in follows with the shop backend), **Merkliste** with counter, cart. On phones: search, Merkliste, cart and menu next to a compact logo. |
| 2 | Banner block instead of the hero | `HomeIntro`: one line with the H1 and trust signals, a banner slider (about a third of the screen: 360 px on desktop, 244 px on phones) and two fixed tiles. The next sections stay visible. |
| 3 | Keep categories and bestsellers | unchanged, directly below the banner and the trust bar |
| 4 | Lab reports, later linked to products | Product page: "Laborbericht ansehen" jumps to the report on the page; the report links to its card in the archive (`/laborberichte/#coa-{id}`, highlighted). Add `pdf` to a product's `coa` to offer the full certificate. |
| 5 | Customer reviews on the home page | `Reviews` section: Google rating with link to the profile, review cards from `src/content/reviews.ts`, invitation to review. Only real reviews; no review markup for own reviews. |
| 6 | Knowledge base / Ratgeber | Six articles in three topics, the glossary, and three featured articles on the home page |
| 7 | Footer with company data and credit | Operator line (company, register number, court, VAT ID once set), legal links incl. right of withdrawal, contact, "Website & SEO: Getflowly" with logo |

### Banner

Banners live in `src/content/banners.ts` — one entry per banner with German and English copy, link target, one to three product illustrations and a colour theme (`sage`, `kraft`, `forest`). Optional `from` / `until` dates limit a banner to a period (e.g. a seasonal campaign); the window is applied at build time, so a deploy is needed when a period starts or ends. The layout does not change with the content.

- Title up to ~40 characters, text up to ~110, button up to ~22.
- The first banner is the one search engines and visitors without JavaScript see.
- **No CBD flowers in banners:** hemp flowers fall under the tobacco monopoly, and tobacco advertising is restricted (TNRSG).
- No health claims and no struck-through prices without a real previous price (Omnibus Directive, Austrian price labelling rules).

### Reviews

Add reviews to `src/content/reviews.ts` exactly as they appear on Google (short name, stars, text; translation optional). With a review tool or shop backend later, on-site reviews can be added as `source: "shop"`. Don't add `AggregateRating` markup for the shop's own reviews — Google ignores self-serving review snippets for local businesses.

## Adaptations for Google and Austria

| Playbook rule | Applied as | Why |
| --- | --- | --- |
| Description 250–350 characters | 110–170 characters | Google cuts snippets at about 155–160 characters |
| Title 50–150 characters | 50–65 characters | Google shows about 60 characters |
| robots.txt: separate Yandex block, Clean-param | standard rules only | no Yandex traffic in Austria |
| Wordstat, Keys.so, Arsenkin, Key Collector | Google Keyword Planner, Search Console, Sistrix or Ahrefs | the playbook tools cover Yandex and Russian-language data |
| text.ru uniqueness, Turgenev spam check | original German copy, natural keyword density | these tools only check Russian |
| Copywriters write reviews (`ТЗ на отзывы`) | **not done**; only real Google reviews are shown | invented reviews are illegal in the EU and Austria (Omnibus Directive, UWG) and break Google's policies |
| Product ratings on cards | removed | the star counts were placeholders without a review system |

## Open items for the shop

- **CBD flowers:** since the VwGH ruling of January 2025 and the Abgabenänderungsgesetz 2025, hemp flowers fall under the tobacco monopoly. Hemp shops may sell them until the end of 2028 only with a transitional licence from the Monopolverwaltung GmbH, and mail order is prohibited. The site therefore shows flowers as *in store only*, with no cart and no shipping. Please confirm the licence, and have a lawyer check whether presenting flowers online is affected by the tobacco advertising rules (TNRSG).
- **Legal pages:** the imprint shows **CANNAPLACE OG, FN 619212g, Handelsgericht Wien** from the public company register — please confirm that this is the operator. Still missing: VAT ID, email, trade authority, a reviewed privacy policy (shop, newsletter, payment provider) and the terms and conditions. VAT ID and email also appear in the footer once they are set in `COMPANY` (`src/lib/site.ts`).
- **Reviews:** more real Google reviews for `src/content/reviews.ts` (with the authors' short names as published).
- **Lab reports:** PDFs of the certificates (`public/coa/…`) to link from each product.
- **Data to confirm:** real products, prices, photos and lab values, opening hours, shipping costs, payment methods, and the production domain.
- **E-E-A-T:** names and photos of the team for articles and the About page.
