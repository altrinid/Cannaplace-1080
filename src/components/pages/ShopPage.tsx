import { CATEGORIES, PRODUCTS } from "@/content/catalog";
import { getDict, otherLang } from "@/content";
import type { Lang } from "@/content/types";
import { cardLabels, cardProduct } from "@/lib/cards";
import { homePath, shopPath } from "@/lib/routes";
import { ContactCta } from "../ContactCta";
import { PageHeader } from "../PageHeader";
import { PageShell } from "../PageShell";
import { ProductGrid } from "../ProductGrid";
import { TextFaqSection } from "../TextFaqSection";

export function ShopPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const path = shopPath(lang);

  return (
    <PageShell lang={lang} path={path} alternate={shopPath(otherLang(lang))}>
      <PageHeader
        crumbs={[
          { name: t.common.home, href: homePath(lang) },
          { name: t.nav.shop, href: path },
        ]}
        crumbLabel={t.common.breadcrumb}
        eyebrow={t.shop.eyebrow}
        title={t.shop.h1}
        lead={t.shop.intro}
      />
      <section className="container-x pt-12 lg:pt-16">
        <ProductGrid
          products={PRODUCTS.map((product) => cardProduct(lang, product))}
          labels={cardLabels(lang)}
          locale={t.locale}
          headingLevel="h2"
          count={t.common.productCount}
          filters={{
            label: t.listing.filterLabel,
            all: t.listing.all,
            items: CATEGORIES.map(({ key }) => ({ key, label: t.categoryPages[key].name })),
          }}
          sort={{ label: t.listing.sortLabel, options: t.listing.sort }}
        />
      </section>
      <TextFaqSection body={t.shop.body} faqTitle={t.common.faqTitle} faq={t.shop.faq} />
      <ContactCta t={t.contactCta} />
    </PageShell>
  );
}
