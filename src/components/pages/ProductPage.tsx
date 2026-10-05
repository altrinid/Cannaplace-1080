import Image from "next/image";
import { BESTSELLER_IDS, getProduct, productsIn } from "@/content/catalog";
import { getDict, otherLang } from "@/content";
import type { Lang, Product } from "@/content/types";
import { cardLabels, cardProduct } from "@/lib/cards";
import { fill, formatPrice } from "@/lib/format";
import { PRODUCT_IMAGES } from "@/lib/images";
import { categoryPath, homePath, infoPath, productPath, shopPath } from "@/lib/routes";
import { faqJsonLd, productJsonLd } from "@/lib/seo";
import { SHOP } from "@/lib/site";
import { AddToCartButton } from "../AddToCartButton";
import { Breadcrumbs } from "../Breadcrumbs";
import { CoaCard } from "../CoaCard";
import { ContactCta } from "../ContactCta";
import { FaqList } from "../FaqList";
import { Icon } from "../icons";
import { JsonLd } from "../JsonLd";
import { PageShell } from "../PageShell";
import { ProductCard } from "../ProductCard";
import { Badge, TONE_BG } from "../ui";

function relatedProducts(product: Product) {
  const sameCategory = productsIn(product.category).filter((p) => p.id !== product.id);
  const others = BESTSELLER_IDS.map(getProduct).filter((p) => p.category !== product.category);
  return [...sameCategory, ...others].slice(0, 4);
}

export function ProductPage({ lang, product }: { lang: Lang; product: Product }) {
  const t = getDict(lang);
  const copy = product[lang];
  const path = productPath(lang, product);
  const categoryName = t.categoryPages[product.category].name;
  const image = PRODUCT_IMAGES[product.image];
  const vars = { name: copy.name, category: categoryName, batch: product.coa?.batch ?? "" };
  const faq = [...(product.shipping ? t.product.faqShipping : t.product.faqInStore), ...(product.coa ? [t.product.faqCoa] : [])].map(
    (item) => ({ q: fill(item.q, vars), a: fill(item.a, vars) }),
  );

  return (
    <PageShell lang={lang} path={path} alternate={productPath(otherLang(lang), product)}>
      <div className="container-x pt-6">
        <Breadcrumbs
          label={t.common.breadcrumb}
          items={[
            { name: t.common.home, href: homePath(lang) },
            { name: t.nav.shop, href: shopPath(lang) },
            { name: categoryName, href: categoryPath(lang, product.category) },
            { name: copy.name, href: path },
          ]}
        />
      </div>

      <section className="container-x grid gap-10 pt-8 pb-16 lg:grid-cols-2 lg:gap-16 lg:pb-24">
        <div className={`relative aspect-square overflow-hidden rounded-lg ${TONE_BG[product.tone]}`}>
          <Image
            src={image}
            alt={copy.name}
            sizes="(min-width: 1024px) 600px, 100vw"
            className="absolute inset-0 m-auto h-[80%] w-[80%] object-contain"
            priority
          />
          {product.badge && (
            <span className="absolute top-5 left-5">
              <Badge tone={product.badge === "bestseller" ? "dark" : "kraft"}>{t.product.badges[product.badge]}</Badge>
            </span>
          )}
        </div>

        <div className="flex flex-col items-start gap-5 lg:pt-6">
          <p className="t-eyebrow text-kraft-700">{copy.meta}</p>
          <h1 className="t-h2 text-ink">{copy.name}</h1>
          <p className="t-body-lg text-ink-muted">{copy.short}</p>
          <p className="flex items-baseline gap-3">
            <span className="t-h3 text-ink">{formatPrice(lang, product.price)}</span>
            <span className="t-body-sm text-ink-muted">{t.product.inclVat}</span>
          </p>
          {product.shipping ? (
            <>
              <p className="t-body-sm inline-flex items-center gap-2 text-ink">
                <Icon name="package" size={18} className="text-sage-500" />
                {t.product.shippingAvailable}
              </p>
              <AddToCartButton label={t.product.addToCart} />
            </>
          ) : (
            <div className="w-full rounded-md bg-kraft-100 p-5">
              <p className="t-label inline-flex items-center gap-2 text-ink">
                <Icon name="map-pin" size={18} className="text-kraft-700" />
                {t.common.inStoreOnly} · {SHOP.streetShort}
              </p>
              <p className="t-body-sm mt-2 text-ink-muted">{t.product.inStoreText}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {t.product.route}
                  <Icon name="map-pin" size={18} />
                </a>
                <a href={SHOP.phoneHref} className="btn btn-secondary">
                  {t.contactCta.call}
                  <Icon name="phone" size={18} />
                </a>
              </div>
            </div>
          )}
          <ul className="mt-2 flex w-full flex-col gap-3 border-t border-line pt-5">
            {t.product.trust.map((item) => (
              <li key={item} className="t-body-sm flex items-center gap-2.5 text-ink">
                <Icon name="check" size={18} className="shrink-0 text-success" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x grid gap-12 border-t border-line pt-16 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-20 lg:pt-20">
        <div className="max-w-[760px]">
          <h2 className="t-h3 text-ink">{t.product.descriptionTitle}</h2>
          {copy.description.map((paragraph) => (
            <p key={paragraph} className="t-body-lg mt-4 text-ink-muted">
              {paragraph}
            </p>
          ))}
          <h2 className="t-h3 mt-12 text-ink">{t.product.specsTitle}</h2>
          <dl className="mt-5 divide-y divide-line rounded-md border border-line">
            {copy.specs.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 px-4 py-3">
                <dt className="text-ink-muted">{label}</dt>
                <dd className="text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        {product.coa && (
          <aside className="flex flex-col gap-4">
            <h2 className="t-h3 text-ink">{t.product.coaTitle}</h2>
            <p className="text-ink-muted">{t.product.coaText}</p>
            <CoaCard
              lang={lang}
              name={copy.name}
              coa={product.coa}
              link={{ href: infoPath(lang, "lab"), label: t.coa.viewAll }}
              className="mt-2"
            />
          </aside>
        )}
      </section>

      <section className="container-x pt-16 lg:pt-24">
        <div className="max-w-[860px]">
          <h2 className="t-h3 text-ink">{fill(t.product.faqTitle, { name: copy.name })}</h2>
          <FaqList items={faq} className="mt-6" />
        </div>
      </section>

      <section className="container-x pt-16 lg:pt-24">
        <h2 className="t-h3 text-ink">{t.product.related}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts(product).map((related) => (
            <ProductCard key={related.id} product={cardProduct(lang, related)} labels={cardLabels(lang)} />
          ))}
        </div>
      </section>

      <ContactCta t={t.contactCta} />
      <JsonLd data={productJsonLd(lang, product, path, image.src)} />
      <JsonLd data={faqJsonLd(faq)} />
    </PageShell>
  );
}
