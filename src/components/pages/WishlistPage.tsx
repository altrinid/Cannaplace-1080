import { BESTSELLER_IDS, PRODUCTS, getProduct } from "@/content/catalog";
import { getDict, otherLang } from "@/content";
import type { Lang } from "@/content/types";
import { cardLabels, cardProduct } from "@/lib/cards";
import { homePath, shopPath, wishlistPath } from "@/lib/routes";
import { Bestsellers } from "../Bestsellers";
import { PageHeader } from "../PageHeader";
import { PageShell } from "../PageShell";
import { WishlistList } from "../WishlistList";

export function WishlistPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const path = wishlistPath(lang);

  return (
    <PageShell lang={lang} path={path} alternate={wishlistPath(otherLang(lang))}>
      <PageHeader
        crumbs={[
          { name: t.common.home, href: homePath(lang) },
          { name: t.wishlist.label, href: path },
        ]}
        crumbLabel={t.common.breadcrumb}
        eyebrow={t.wishlist.eyebrow}
        title={t.wishlist.title}
        lead={t.wishlist.lead}
      />
      <section className="container-x pt-12 lg:pt-16">
        <WishlistList
          products={PRODUCTS.map((product) => cardProduct(lang, product))}
          labels={cardLabels(lang)}
          t={t.wishlist}
          count={t.common.productCount}
          shopHref={shopPath(lang)}
        />
      </section>
      <Bestsellers
        lang={lang}
        products={BESTSELLER_IDS.map((id) => cardProduct(lang, getProduct(id)))}
        allHref={shopPath(lang)}
      />
    </PageShell>
  );
}
