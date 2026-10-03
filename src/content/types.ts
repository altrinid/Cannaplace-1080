import type { IconName } from "@/components/icons";

export type Lang = "de" | "en";
export type ImageKey = "bottle" | "jar" | "tin" | "grinder";
export type Tone = "sage" | "sageStrong" | "kraft" | "subtle";
export type CategoryKey = "flowers" | "oils" | "cosmetics" | "accessories";

export interface Product {
  id: string;
  name: string;
  meta: string;
  price: string;
  rating: string;
  image: ImageKey;
  tone: Tone;
  category: CategoryKey;
  badge?: { label: string; tone: "dark" | "kraft" };
}

export interface Dict {
  lang: Lang;
  meta: { title: string; description: string };
  announcement: string[];
  nav: { label: string; href: string }[];
  header: { search: string; account: string; cart: string; openMenu: string; closeMenu: string };
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
  categories: {
    eyebrow: string;
    title: string;
    link: string;
    items: { title: string; count: string; image: ImageKey; tone: Tone }[];
  };
  bestsellers: {
    eyebrow: string;
    title: string;
    filters: { key: "all" | CategoryKey; label: string }[];
    addToCart: string;
    wishlist: string;
    products: Product[];
  };
  lab: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    text: string;
    checklist: string[];
    button: string;
    coa: {
      title: string;
      subtitle: string;
      badge: string;
      rows: { label: string; value: string; note?: string }[];
      footer: string;
      link: string;
    };
  };
  store: {
    eyebrow: string;
    title: string;
    text: string;
    hours: string;
    city: string;
    reviewSummary: string;
    quote: string;
    quoteAuthor: string;
    route: string;
    call: string;
    mapAlt: string;
  };
  journal: {
    eyebrow: string;
    title: string;
    link: string;
    readMore: string;
    articles: { tag: string; time: string; title: string; image: ImageKey | "leaf"; tone: Tone }[];
  };
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
    columns: { title: string; links: string[] }[];
    contactTitle: string;
    hoursShort: string;
    copyright: string;
    legal: string;
  };
  cart: { added: string };
  ageGate: { title: string; text: string; yes: string; no: string; denied: string };
  fontSwitch: { label: string; preview: string; a: string; b: string };
}
