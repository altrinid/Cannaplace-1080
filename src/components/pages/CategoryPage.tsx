import { CATEGORIES, productsIn } from "@/content/catalog";
import { getDict, otherLang } from "@/content";
import type { CategoryKey, Lang } from "@/content/types";
import { cardLabels, cardProduct, categoryTile } from "@/lib/cards";
import { plural } from "@/lib/format";
import { categoryPath, homePath, shopPath } from "@/lib/routes";
import { SHOP } from "@/lib/site";
import { CategoryTiles } from "../Categories";
import { ContactCta } from "../ContactCta";
import { Icon } from "../icons";
import { PageHeader } from "../PageHeader";
import { PageShell } from "../PageShell";
import { ProductGrid } from "../ProductGrid";
import { TextFaqSection } from "../TextFaqSection";

export function CategoryPage({ lang, category }: { lang: Lang; category: CategoryKey }) {
  const t = getDict(lang);
  const copy = t.categoryPages[category];
  const path = categoryPath(lang, category);
  const products = productsIn(category);
  const inStoreOnly = products.every((product) => !product.shipping);

  return (
    <PageShell lang={lang} path={path} alternate={categoryPath(otherLang(lang), category)}>
      <PageHeader
        crumbs={[
          { name: t.common.home, href: homePath(lang) },
          { name: t.nav.shop, href: shopPath(lang) },
          { name: copy.name, href: path },
        ]}
        crumbLabel={t.common.breadcrumb}
        eyebrow={plural(t.common.productCount, products.length)}
        title={copy.h1}
        lead={copy.intro}
      >
        {inStoreOnly && (
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-md bg-kraft-100 px-4 py-3 text-ink">
            <span className="t-label inline-flex items-center gap-2">
              <Icon name="map-pin" size={18} className="text-kraft-700" />
              {t.common.inStoreOnly} · {SHOP.street}, {t.contact.city}
            </span>
            <a
              href={SHOP.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="t-label text-forest-700 underline underline-offset-4"
            >
              {t.product.route}
            </a>
          </div>
        )}
      </PageHeader>
      <section className="container-x pt-12 lg:pt-16">
        <ProductGrid
          products={products.map((product) => cardProduct(lang, product))}
          labels={cardLabels(lang)}
          locale={t.locale}
          headingLevel="h2"
          count={t.common.productCount}
          sort={{ label: t.listing.sortLabel, options: t.listing.sort }}
        />
      </section>
      <TextFaqSection body={copy.body} faqTitle={t.common.faqTitle} faq={copy.faq} />
      <section className="container-x">
        <h2 className="t-h3 text-ink">{t.common.exploreCategories}</h2>
        <div className="mt-8">
          <CategoryTiles
            compact
            items={CATEGORIES.filter(({ key }) => key !== category).map((entry) => categoryTile(lang, entry))}
          />
        </div>
      </section>
      <ContactCta t={t.contactCta} />
    </PageShell>
  );
}
