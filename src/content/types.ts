import type { IconName } from "@/components/icons";

export type Lang = "de" | "en";
export type ImageKey =
  | "bottle"
  | "bottle-5"
  | "bottle-20"
  | "jar"
  | "jar-orange-bud"
  | "jar-og-kush"
  | "jar-storage"
  | "tin"
  | "tin-hand-cream"
  | "tin-lip-balm"
  | "grinder"
  | "grinder-metal";
export type Tone = "sage" | "sageStrong" | "kraft" | "subtle";
export type CategoryKey = "flowers" | "oils" | "cosmetics" | "accessories";
export type InfoPageKey = "lab" | "about" | "contact" | "shipping" | "faq" | "imprint" | "privacy" | "terms";
export type ArticleId = "what-is-cbd" | "read-coa" | "cbd-law-austria";
export type NavKey = "shop" | CategoryKey | "guide" | "about";

export interface PageMeta {
  title: string;
  description: string;
}

export interface Faq {
  q: string;
  a: string;
}

/** Plural forms with an `{n}` placeholder. */
export interface Plural {
  one: string;
  other: string;
}

/** Long-form copy. Text supports inline `[label](/path/)` links and `**bold**`. */
export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "table"; head?: string[]; rows: string[][] };

export interface ProductCopy {
  slug: string;
  name: string;
  /** Short line above the name, e.g. "CBD Öl · 10 ml". */
  meta: string;
  short: string;
  description: string[];
  specs: [string, string][];
}

/** Lab values of the current batch, in percent. */
export interface Coa {
  batch: string;
  cbd: number;
  cbg?: number;
  thc: number;
  /** ISO month of the analysis, e.g. "2026-09". */
  tested: string;
}

export interface Product {
  id: string;
  category: CategoryKey;
  image: ImageKey;
  tone: Tone;
  /** Gross price in euros. */
  price: number;
  /** False for products that may only be sold in the store (hemp flowers fall under the tobacco monopoly). */
  shipping: boolean;
  badge?: "bestseller" | "new";
  coa?: Coa;
  de: ProductCopy;
  en: ProductCopy;
}

export interface CategoryCopy {
  slug: string;
  name: string;
  meta: PageMeta;
  h1: string;
  intro: string;
  body: Block[];
  faq: Faq[];
}

export interface ArticleCopy {
  slug: string;
  tag: string;
  title: string;
  meta: PageMeta;
  lead: string;
  body: Block[];
  faq: Faq[];
}

export interface InfoPageCopy {
  slug: string;
  /** Short name for breadcrumbs and footer links. */
  label: string;
  eyebrow: string;
  title: string;
  meta: PageMeta;
  lead: string;
  body: Block[];
  faq?: Faq[];
  /** FAQ sections for the FAQ page. */
  groups?: { title: string; items: Faq[] }[];
  /** Placeholder pages stay out of the index and the sitemap until their content is final. */
  noindex?: boolean;
}

export interface Dict {
  lang: Lang;
  /** BCP 47 locale for number/date formatting and hreflang. */
  locale: string;
  meta: PageMeta;
  announcement: string[];
  nav: Record<NavKey, string>;
  header: {
    skip: string;
    home: string;
    search: string;
    account: string;
    cart: string;
    call: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    rating: string;
    thc: string;
    floatLabTitle: string;
    floatLabText: string;
    floatRatingText: string;
    imageAlt: string;
  };
  valueProps: { icon: IconName; title: string; text: string }[];
  categories: { eyebrow: string; title: string; link: string };
  bestsellers: { eyebrow: string; title: string; link: string };
  lab: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    text: string;
    checklist: string[];
    button: string;
  };
  store: {
    eyebrow: string;
    title: string;
    text: string;
    hours: string;
    reviewSummary: string;
    quote: string;
    quoteAuthor: string;
    route: string;
    call: string;
    more: string;
    mapAlt: string;
  };
  journal: { eyebrow: string; title: string; link: string; readMore: string };
  homeSeo: { eyebrow: string; title: string; body: Block[]; faqTitle: string; faq: Faq[] };
  newsletter: {
    title: string;
    text: string;
    placeholder: string;
    button: string;
    note: string;
    success: string;
  };
  footer: {
    description: string;
    shopTitle: string;
    allProducts: string;
    serviceTitle: string;
    legalTitle: string;
    contactTitle: string;
    hoursShort: string;
    copyright: string;
    legal: string;
  };
  common: {
    home: string;
    breadcrumb: string;
    faqTitle: string;
    productCount: Plural;
    inStoreOnly: string;
    exploreCategories: string;
  };
  listing: {
    filterLabel: string;
    all: string;
    sortLabel: string;
    sort: { featured: string; priceAsc: string; priceDesc: string; name: string };
  };
  product: {
    /** Meta masks with `{name}`, `{category}`, `{lab}` and `{short}` placeholders. */
    meta: { title: string; titleInStore: string; lab: string; description: string };
    addToCart: string;
    wishlist: string;
    inclVat: string;
    badges: { bestseller: string; new: string };
    shippingAvailable: string;
    inStoreText: string;
    route: string;
    trust: string[];
    descriptionTitle: string;
    specsTitle: string;
    coaTitle: string;
    coaText: string;
    faqTitle: string;
    /** FAQ masks with `{name}` and `{category}` placeholders; the second set is used for in-store-only products. */
    faqShipping: Faq[];
    faqInStore: Faq[];
    /** Added for products with a lab report; also supports `{batch}`. */
    faqCoa: Faq;
    related: string;
  };
  coa: {
    title: string;
    batch: string;
    badge: string;
    thcNote: string;
    pesticides: string;
    heavyMetals: string;
    notDetected: string;
    footer: string;
    tested: string;
    viewAll: string;
    currentBatches: string;
    toProduct: string;
  };
  article: {
    toc: string;
    author: string;
    authorRole: string;
    published: string;
    updated: string;
    readingTime: string;
    productsTitle: string;
    moreTitle: string;
    disclaimer: string;
  };
  shop: {
    meta: PageMeta;
    eyebrow: string;
    h1: string;
    intro: string;
    body: Block[];
    faq: Faq[];
  };
  categoryPages: Record<CategoryKey, CategoryCopy>;
  guide: { meta: PageMeta; eyebrow: string; h1: string; intro: string };
  pages: Record<InfoPageKey, InfoPageCopy>;
  contact: {
    city: string;
    addressTitle: string;
    hoursTitle: string;
    phoneTitle: string;
    socialTitle: string;
    transitTitle: string;
    transit: string;
    hoursTable: [string, string][];
  };
  contactCta: { title: string; text: string; call: string; route: string };
  ageGate: { title: string; text: string; yes: string; no: string; denied: string };
  cart: { added: string };
  fontSwitch: { label: string; preview: string; a: string; b: string };
}
