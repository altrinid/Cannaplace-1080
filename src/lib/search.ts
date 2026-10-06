import type { SearchItem } from "@/components/SearchDialog";
import { ARTICLES, getArticle } from "@/content/articles";
import { CATEGORIES, PRODUCTS, productsIn } from "@/content/catalog";
import { getDict } from "@/content";
import type { InfoPageKey, Lang } from "@/content/types";
import { formatPrice, plural, slugify } from "./format";
import {
  articlePath,
  categoryPath,
  glossaryPath,
  infoPath,
  productPath,
  shopPath,
  wishlistPath,
} from "./routes";

const PAGES: InfoPageKey[] = ["lab", "shipping", "faq", "contact", "about", "imprint", "privacy", "terms"];

/** Everything the header search can find, in one language (built at compile time, sent with each page). */
export function searchIndex(lang: Lang): SearchItem[] {
  const t = getDict(lang);
  return [
    ...PRODUCTS.map((product) => ({
      kind: "product" as const,
      title: product[lang].name,
      meta: `${product[lang].meta} · ${formatPrice(lang, product.price)}`,
      href: productPath(lang, product),
      keywords: `${t.categoryPages[product.category].name} ${product[lang].short}`,
    })),
    ...CATEGORIES.map(({ key }) => ({
      kind: "category" as const,
      title: t.categoryPages[key].name,
      meta: plural(t.common.productCount, productsIn(key).length),
      href: categoryPath(lang, key),
      keywords: t.categoryPages[key].h1,
    })),
    {
      kind: "category" as const,
      title: t.shop.h1,
      meta: plural(t.common.productCount, PRODUCTS.length),
      href: shopPath(lang),
      keywords: t.nav.shop,
    },
    ...ARTICLES.map(({ id }) => {
      const copy = getArticle(lang, id);
      return { kind: "article" as const, title: copy.title, meta: copy.tag, href: articlePath(lang, id), keywords: copy.meta.title };
    }),
    { kind: "article" as const, title: t.glossary.title, meta: t.glossary.label, href: glossaryPath(lang) },
    ...t.glossary.terms.map(({ term }) => ({
      kind: "article" as const,
      title: term,
      meta: t.glossary.label,
      href: `${glossaryPath(lang)}#${slugify(term)}`,
    })),
    ...PAGES.map((key) => ({
      kind: "page" as const,
      title: t.pages[key].title,
      meta: t.pages[key].label,
      href: infoPath(lang, key),
      keywords: t.pages[key].meta.title,
    })),
    { kind: "page" as const, title: t.wishlist.title, href: wishlistPath(lang) },
  ];
}
