import type { IconName } from "@/components/icons";
import type { ArticleId, CategoryKey, ImageKey, InfoPageKey } from "./types";

// Promo banners on the home page (first screen). Edit, add, remove or reorder entries here —
// the layout stays the same. Rules (see docs/SEO.md → "Banner"):
//   • 1–5 banners; the first one is visible without JavaScript and should be the most important.
//   • Title max. ~40 characters, text max. ~110 characters, CTA max. ~22 characters.
//   • No CBD flowers in banners: hemp flowers fall under the tobacco monopoly and its advertising ban.
//   • No health claims, no "–30 %" prices without a real previous price (Omnibus Directive).

/** Where a banner or tile links to. */
export type PromoLink = { category: CategoryKey } | { page: InfoPageKey } | { article: ArticleId } | { shop: true };

export interface BannerCopy {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  /** Alt text for the product illustration. */
  alt: string;
}

export interface Banner {
  id: string;
  link: PromoLink;
  /** One to three product illustrations; the last one is in front. */
  images: ImageKey[];
  theme: "sage" | "kraft" | "forest";
  /** Optional ISO dates (inclusive). Outside this window the banner is left out of the build. */
  from?: string;
  until?: string;
  de: BannerCopy;
  en: BannerCopy;
}

export const BANNERS: Banner[] = [
  {
    id: "oils",
    link: { category: "oils" },
    images: ["bottle-5", "bottle-20", "bottle"],
    theme: "sage",
    de: {
      eyebrow: "CBD Öle · 5 %, 10 % & 20 %",
      title: "Finde dein CBD Öl",
      text: "Drei Konzentrationen in Hanfsamenöl – jede Charge laborgeprüft und mit Analysezertifikat.",
      cta: "CBD Öle ansehen",
      alt: "CBD Aromaöle mit 5, 10 und 20 % CBD",
    },
    en: {
      eyebrow: "CBD oils · 5%, 10% & 20%",
      title: "Find your CBD oil",
      text: "Three strengths in hemp seed oil — every batch lab-tested, with a certificate of analysis.",
      cta: "Shop CBD oils",
      alt: "CBD aroma oils with 5, 10 and 20% CBD",
    },
  },
  {
    id: "free-shipping",
    link: { shop: true },
    images: ["grinder", "tin", "bottle"],
    theme: "kraft",
    de: {
      eyebrow: "Versand in ganz Österreich",
      title: "Ab € 50 versandkostenfrei",
      text: "Öle, Kosmetik und Zubehör diskret verpackt – oder online bestellen und kostenlos im Shop abholen.",
      cta: "Jetzt einkaufen",
      alt: "CBD Öl, CBD Balsam und Grinder aus dem Onlineshop",
    },
    en: {
      eyebrow: "Shipping across Austria",
      title: "Free shipping from € 50",
      text: "Oils, cosmetics and accessories in discreet packaging — or order online and pick up in store for free.",
      cta: "Shop now",
      alt: "CBD oil, CBD balm and grinder from the online shop",
    },
  },
  {
    id: "winter-care",
    link: { category: "cosmetics" },
    images: ["tin-lip-balm", "tin-hand-cream"],
    theme: "forest",
    from: "2026-10-01",
    until: "2027-03-31",
    de: {
      eyebrow: "Saison-Tipp: Winterpflege",
      title: "CBD Kosmetik für kalte Tage",
      text: "Handcreme, Lippenbalsam und Lavendel-Balsam mit CBD – reichhaltige Pflege für Hände und Lippen.",
      cta: "Kosmetik entdecken",
      alt: "CBD Handcreme und CBD Lippenbalsam",
    },
    en: {
      eyebrow: "Seasonal tip: winter care",
      title: "CBD cosmetics for cold days",
      text: "Hand cream, lip balm and lavender balm with CBD — rich care for hands and lips.",
      cta: "Shop cosmetics",
      alt: "CBD hand cream and CBD lip balm",
    },
  },
];

/** The two fixed tiles next to the banner slider (stacked below it on phones). */
export interface PromoTile {
  id: string;
  link: PromoLink;
  icon: IconName;
  theme: "subtle" | "kraft";
  de: { eyebrow: string; title: string };
  en: { eyebrow: string; title: string };
}

export const PROMO_TILES: PromoTile[] = [
  {
    id: "click-collect",
    link: { page: "shipping" },
    icon: "bag",
    theme: "subtle",
    de: { eyebrow: "Click & Collect", title: "Online bestellen, im Shop abholen" },
    en: { eyebrow: "Click & collect", title: "Order online, pick up in store" },
  },
  {
    id: "lab",
    link: { page: "lab" },
    icon: "flask",
    theme: "kraft",
    de: { eyebrow: "Transparenz", title: "Laborbericht zu jedem Produkt" },
    en: { eyebrow: "Transparency", title: "A lab report for every product" },
  },
];

/** Banners whose optional date window includes `today` (ISO date). */
export function activeBanners(today: string) {
  return BANNERS.filter((banner) => (!banner.from || banner.from <= today) && (!banner.until || today <= banner.until));
}
