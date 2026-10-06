import type { CategoryTile } from "@/components/Categories";
import type { ArticleCard } from "@/components/Journal";
import type { CardLabels, CardProduct } from "@/components/ProductCard";
import { type ArticleEntry, getArticle } from "@/content/articles";
import { type CATEGORIES, productsIn } from "@/content/catalog";
import { getDict } from "@/content";
import type { Lang, Product } from "@/content/types";
import { fill, formatPrice, plural, readingMinutes } from "./format";
import { articlePath, categoryPath, productPath } from "./routes";

export function cardProduct(lang: Lang, product: Product): CardProduct {
  const copy = product[lang];
  const { badges } = getDict(lang).product;
  return {
    id: product.id,
    href: productPath(lang, product),
    name: copy.name,
    meta: copy.meta,
    price: formatPrice(lang, product.price),
    priceValue: product.price,
    image: product.image,
    tone: product.tone,
    category: product.category,
    shipping: product.shipping,
    badge: product.badge && {
      label: badges[product.badge],
      tone: product.badge === "bestseller" ? "dark" : "kraft",
    },
  };
}

export function cardLabels(lang: Lang): CardLabels {
  const t = getDict(lang);
  return { addToCart: t.product.addToCart, wishlist: t.product.wishlist, inStoreOnly: t.common.inStoreOnly };
}

export function categoryTile(lang: Lang, { key, image, tone }: (typeof CATEGORIES)[number]): CategoryTile {
  const t = getDict(lang);
  return {
    title: t.categoryPages[key].name,
    count: plural(t.common.productCount, productsIn(key).length),
    href: categoryPath(lang, key),
    image,
    tone,
  };
}

export function articleCard(lang: Lang, entry: ArticleEntry, withLead = false): ArticleCard {
  const copy = getArticle(lang, entry.id);
  return {
    href: articlePath(lang, entry.id),
    tag: copy.tag,
    time: fill(getDict(lang).article.readingTime, { n: readingMinutes(copy) }),
    title: copy.title,
    lead: withLead ? copy.lead : undefined,
    image: entry.image,
    tone: entry.tone,
  };
}
