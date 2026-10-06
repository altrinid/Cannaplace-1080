import { ARTICLES, type ArticleEntry, getArticle } from "@/content/articles";
import { CATEGORIES, PRODUCTS } from "@/content/catalog";
import { getDict, otherLang } from "@/content";
import type { CategoryKey, InfoPageKey, Lang, Product } from "@/content/types";
import { fill } from "./format";
import {
  articlePath,
  categoryPath,
  glossaryPath,
  guidePath,
  homePath,
  infoPath,
  productPath,
  shopPath,
  wishlistPath,
} from "./routes";
import { pageMetadata } from "./seo";

// Metadata and static params for the route files of both languages.

export const homeMetadata = (lang: Lang) =>
  pageMetadata({ lang, path: homePath(lang), alternate: homePath(otherLang(lang)), meta: getDict(lang).meta });

export const shopMetadata = (lang: Lang) =>
  pageMetadata({ lang, path: shopPath(lang), alternate: shopPath(otherLang(lang)), meta: getDict(lang).shop.meta });

export const categoryMetadata = (lang: Lang, key: CategoryKey) =>
  pageMetadata({
    lang,
    path: categoryPath(lang, key),
    alternate: categoryPath(otherLang(lang), key),
    meta: getDict(lang).categoryPages[key].meta,
  });

export const productMetadata = (lang: Lang, product: Product) => {
  const t = getDict(lang);
  const masks = t.product.meta;
  const vars = {
    name: product[lang].name,
    category: t.categoryPages[product.category].name,
    lab: product.coa ? masks.lab : "",
    short: product[lang].short,
  };
  return pageMetadata({
    lang,
    path: productPath(lang, product),
    alternate: productPath(otherLang(lang), product),
    meta: {
      title: fill(product.shipping ? masks.title : masks.titleInStore, vars),
      description: fill(masks.description, vars),
    },
  });
};

export const guideMetadata = (lang: Lang) =>
  pageMetadata({ lang, path: guidePath(lang), alternate: guidePath(otherLang(lang)), meta: getDict(lang).guide.meta });

export const glossaryMetadata = (lang: Lang) =>
  pageMetadata({
    lang,
    path: glossaryPath(lang),
    alternate: glossaryPath(otherLang(lang)),
    meta: getDict(lang).glossary.meta,
  });

export const wishlistMetadata = (lang: Lang) =>
  pageMetadata({
    lang,
    path: wishlistPath(lang),
    alternate: wishlistPath(otherLang(lang)),
    meta: getDict(lang).wishlist.meta,
    noindex: true,
  });

export const articleMetadata = (lang: Lang, entry: ArticleEntry) =>
  pageMetadata({
    lang,
    path: articlePath(lang, entry.id),
    alternate: articlePath(otherLang(lang), entry.id),
    meta: getArticle(lang, entry.id).meta,
    article: { published: entry.published, updated: entry.updated },
  });

export const infoMetadata = (lang: Lang, key: InfoPageKey) => {
  const copy = getDict(lang).pages[key];
  return pageMetadata({
    lang,
    path: infoPath(lang, key),
    alternate: infoPath(otherLang(lang), key),
    meta: copy.meta,
    noindex: copy.noindex,
  });
};

export const categoryParams = (lang: Lang) =>
  CATEGORIES.map(({ key }) => ({ category: getDict(lang).categoryPages[key].slug }));

export const findCategory = (lang: Lang, slug: string) =>
  CATEGORIES.find(({ key }) => getDict(lang).categoryPages[key].slug === slug)?.key;

export const productParams = (lang: Lang) =>
  PRODUCTS.map((product) => ({
    category: getDict(lang).categoryPages[product.category].slug,
    product: product[lang].slug,
  }));

export const findProduct = (lang: Lang, category: string, slug: string) =>
  PRODUCTS.find(
    (product) => product[lang].slug === slug && getDict(lang).categoryPages[product.category].slug === category,
  );

export const articleParams = (lang: Lang) => ARTICLES.map(({ id }) => ({ slug: getArticle(lang, id).slug }));

export const findArticle = (lang: Lang, slug: string) => ARTICLES.find(({ id }) => getArticle(lang, id).slug === slug);
