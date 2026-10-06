import type { Metadata } from "next";
import { getDict } from "@/content";
import type { Faq, GlossaryTerm, Lang, PageMeta, Product } from "@/content/types";
import { plainText, slugify } from "./format";
import { homePath, infoPath } from "./routes";
import { INDEXABLE, SHOP, SITE_URL } from "./site";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

/** Absolute URL for a built asset; static image imports already carry the base path. */
export function assetUrl(src: string) {
  if (/^https?:/.test(src)) return src;
  if (BASE_PATH && src.startsWith(`${BASE_PATH}/`)) return `${new URL(SITE_URL).origin}${src}`;
  return absoluteUrl(src);
}

const OG_IMAGE = {
  url: absoluteUrl("/og-image.png"),
  width: 1200,
  height: 630,
  alt: "Cannaplace 1080 – CBD Shop Wien",
};

export function pageMetadata({
  lang,
  path,
  alternate,
  meta,
  noindex = false,
  article,
}: {
  lang: Lang;
  path: string;
  /** The same page in the other language. */
  alternate: string;
  meta: PageMeta;
  noindex?: boolean;
  article?: { published: string; updated: string };
}): Metadata {
  const dePath = lang === "de" ? path : alternate;
  const enPath = lang === "en" ? path : alternate;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        "de-AT": absoluteUrl(dePath),
        en: absoluteUrl(enPath),
        "x-default": absoluteUrl(dePath),
      },
    },
    openGraph: {
      type: article ? "article" : "website",
      url: absoluteUrl(path),
      title: meta.title,
      description: meta.description,
      siteName: "Cannaplace 1080",
      locale: lang === "de" ? "de_AT" : "en_GB",
      alternateLocale: lang === "de" ? "en_GB" : "de_AT",
      images: [OG_IMAGE],
      ...(article && { publishedTime: article.published, modifiedTime: article.updated }),
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [OG_IMAGE.url] },
    ...(noindex && { robots: { index: false, follow: INDEXABLE } }),
  };
}

const STORE_ID = absoluteUrl("/#store");

export function storeJsonLd(lang: Lang) {
  const t = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": STORE_ID,
    name: SHOP.name,
    description: t.meta.description,
    url: absoluteUrl(homePath(lang)),
    image: OG_IMAGE.url,
    telephone: SHOP.phoneE164,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: SHOP.street,
      postalCode: SHOP.postalCode,
      addressLocality: SHOP.locality,
      addressCountry: SHOP.country,
    },
    hasMap: SHOP.mapsSearchUrl,
    openingHoursSpecification: SHOP.hours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: [SHOP.instagramUrl],
  };
}

export function websiteJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: absoluteUrl(homePath(lang)),
    name: "Cannaplace 1080",
    inLanguage: getDict(lang).locale,
    publisher: { "@id": STORE_ID },
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function productJsonLd(lang: Lang, product: Product, path: string, image: string) {
  const copy = product[lang];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${absoluteUrl(path)}#product`,
    name: copy.name,
    description: copy.short,
    sku: product.id,
    image: assetUrl(image),
    category: getDict(lang).categoryPages[product.category].name,
    offers: {
      "@type": "Offer",
      url: absoluteUrl(path),
      priceCurrency: "EUR",
      price: product.price.toFixed(2),
      availability: product.shipping ? "https://schema.org/InStock" : "https://schema.org/InStoreOnly",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: SHOP.name },
    },
  };
}

export function faqJsonLd(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleJsonLd(
  lang: Lang,
  { headline, description, path, published, updated }: {
    headline: string;
    description: string;
    path: string;
    published: string;
    updated: string;
  },
) {
  const t = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    inLanguage: t.locale,
    mainEntityOfPage: absoluteUrl(path),
    datePublished: published,
    dateModified: updated,
    image: OG_IMAGE.url,
    author: { "@type": "Organization", name: t.article.author, url: absoluteUrl(infoPath(lang, "about")) },
    publisher: { "@type": "Organization", name: SHOP.name, url: absoluteUrl(homePath(lang)) },
  };
}

export function glossaryJsonLd(lang: Lang, terms: GlossaryTerm[], path: string) {
  const t = getDict(lang);
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${url}#glossary`,
    name: t.glossary.title,
    description: t.glossary.meta.description,
    url,
    inLanguage: t.locale,
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      "@id": `${url}#${slugify(term.term)}`,
      name: term.term,
      description: plainText(term.text),
      url: `${url}#${slugify(term.term)}`,
      inDefinedTermSet: `${url}#glossary`,
    })),
  };
}
