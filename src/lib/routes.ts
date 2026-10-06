import { ARTICLES, getArticle } from "@/content/articles";
import { CATEGORIES, PRODUCTS } from "@/content/catalog";
import { getDict } from "@/content";
import type { ArticleId, CategoryKey, InfoPageKey, Lang, NavKey, Product } from "@/content/types";

// URL scheme: German at the root, English under /en/. Every path ends with a slash (trailingSlash: true).
const ROOT: Record<Lang, string> = { de: "/", en: "/en/" };
const GUIDE: Record<Lang, string> = { de: "ratgeber", en: "guide" };

export const homePath = (lang: Lang) => ROOT[lang];
export const shopPath = (lang: Lang) => `${ROOT[lang]}shop/`;
export const categoryPath = (lang: Lang, key: CategoryKey) =>
  `${shopPath(lang)}${getDict(lang).categoryPages[key].slug}/`;
export const productPath = (lang: Lang, product: Product) =>
  `${categoryPath(lang, product.category)}${product[lang].slug}/`;
export const guidePath = (lang: Lang) => `${ROOT[lang]}${GUIDE[lang]}/`;
export const articlePath = (lang: Lang, id: ArticleId) => `${guidePath(lang)}${getArticle(lang, id).slug}/`;
export const glossaryPath = (lang: Lang) => `${guidePath(lang)}${getDict(lang).glossary.slug}/`;
/** Personal page (noindex, not in the sitemap). */
export const wishlistPath = (lang: Lang) => `${ROOT[lang]}${getDict(lang).wishlist.slug}/`;
export const infoPath = (lang: Lang, key: InfoPageKey) => `${ROOT[lang]}${getDict(lang).pages[key].slug}/`;

export function navItems(lang: Lang): { key: NavKey; label: string; href: string }[] {
  const { nav } = getDict(lang);
  return [
    { key: "shop", label: nav.shop, href: shopPath(lang) },
    ...CATEGORIES.map(({ key }) => ({ key, label: nav[key], href: categoryPath(lang, key) })),
    { key: "guide", label: nav.guide, href: guidePath(lang) },
    { key: "about", label: nav.about, href: infoPath(lang, "about") },
  ];
}

export interface PagePair {
  de: string;
  en: string;
  /** ISO date of the last content change. */
  updated?: string;
}

const INFO_PAGES: InfoPageKey[] = ["lab", "about", "contact", "shipping", "faq", "imprint", "privacy", "terms"];

/** Every indexable page as a DE/EN pair — the source for the sitemap. */
export function allPages(): PagePair[] {
  const pair = (path: (lang: Lang) => string, updated?: string): PagePair => ({
    de: path("de"),
    en: path("en"),
    updated,
  });
  return [
    pair(homePath),
    pair(shopPath),
    ...CATEGORIES.map(({ key }) => pair((lang) => categoryPath(lang, key))),
    ...PRODUCTS.map((product) => pair((lang) => productPath(lang, product))),
    pair(guidePath),
    pair(glossaryPath),
    ...ARTICLES.map((article) => pair((lang) => articlePath(lang, article.id), article.updated)),
    ...INFO_PAGES.filter((key) => !getDict("de").pages[key].noindex).map((key) =>
      pair((lang) => infoPath(lang, key)),
    ),
  ];
}
