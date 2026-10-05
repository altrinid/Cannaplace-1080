import type { ArticleCopy, ArticleId, ImageKey, Lang, Tone } from "../types";
import { de } from "./de";
import { en } from "./en";

export interface ArticleEntry {
  id: ArticleId;
  image: ImageKey | "leaf";
  tone: Tone;
  /** ISO dates. */
  published: string;
  updated: string;
  /** Products linked from the article (conversion block). */
  products: string[];
}

export const ARTICLES: ArticleEntry[] = [
  {
    id: "what-is-cbd",
    image: "leaf",
    tone: "sage",
    published: "2026-10-05",
    updated: "2026-10-05",
    products: ["aromaoel-5", "aromaoel-10", "balsam-lavendel"],
  },
  {
    id: "read-coa",
    image: "bottle",
    tone: "kraft",
    published: "2026-10-05",
    updated: "2026-10-05",
    products: ["aromaoel-10", "aromaoel-20", "handcreme"],
  },
  {
    id: "cbd-law-austria",
    image: "jar",
    tone: "sageStrong",
    published: "2026-10-05",
    updated: "2026-10-05",
    products: ["aromaoel-10", "balsam-lavendel", "holz-grinder"],
  },
];

const COPY: Record<Lang, Record<ArticleId, ArticleCopy>> = { de, en };

export function getArticle(lang: Lang, id: ArticleId) {
  return COPY[lang][id];
}
