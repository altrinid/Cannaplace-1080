import type { Lang } from "./types";

// Customer reviews shown on the home page. Only add real reviews, word for word, with the author's
// short name as published (e.g. copied from the Google profile) — invented or edited reviews are
// unfair commercial practice (UWG, EU Omnibus Directive). No review markup (schema.org) for own reviews.

export interface Review {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  source: "google" | "shop";
  /** Language of the original text. */
  lang: Lang;
  text: string;
  /** Optional translation, shown with a "translated" note on pages in the other language. */
  translation?: Partial<Record<Lang, string>>;
}

export const REVIEWS: Review[] = [
  {
    author: "Filippo P.",
    rating: 5,
    source: "google",
    lang: "de",
    text: "Top Auswahl und gute Beratung.",
    translation: { en: "Great selection and good advice." },
  },
];
