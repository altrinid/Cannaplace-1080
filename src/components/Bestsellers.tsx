import { CATEGORIES } from "@/content/catalog";
import { getDict } from "@/content";
import type { Lang } from "@/content/types";
import type { CardProduct } from "./ProductCard";
import { cardLabels } from "@/lib/cards";
import { ProductGrid } from "./ProductGrid";
import { Eyebrow, TextLink } from "./ui";

export function Bestsellers({ lang, products, allHref }: { lang: Lang; products: CardProduct[]; allHref: string }) {
  const t = getDict(lang);
  return (
    <section id="shop" className="container-x scroll-mt-24 pt-14 pb-20 lg:pb-28">
      <ProductGrid
        products={products}
        labels={cardLabels(lang)}
        locale={t.locale}
        header={
          <div className="flex flex-col items-start gap-3">
            <Eyebrow>{t.bestsellers.eyebrow}</Eyebrow>
            <h2 className="t-h2 text-ink">{t.bestsellers.title}</h2>
          </div>
        }
        filters={{
          label: t.listing.filterLabel,
          all: t.listing.all,
          items: CATEGORIES.map(({ key }) => ({ key, label: t.categoryPages[key].name })),
        }}
      />
      <div className="mt-10 flex justify-center">
        <TextLink href={allHref}>{t.bestsellers.link}</TextLink>
      </div>
    </section>
  );
}
