import type { ArticleCopy, ArticleId, ArticleTopic, ImageKey, Lang, Tone } from "../types";
import { de } from "./de";
import { en } from "./en";

export interface ArticleEntry {
  id: ArticleId;
  topic: ArticleTopic;
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
    topic: "basics",
    image: "leaf",
    tone: "sage",
    published: "2026-10-05",
    updated: "2026-10-06",
    products: ["aromaoel-5", "aromaoel-10", "balsam-lavendel"],
  },
  {
    id: "spectrum",
    topic: "basics",
    image: "bottle-20",
    tone: "sageStrong",
    published: "2026-10-06",
    updated: "2026-10-06",
    products: ["aromaoel-5", "aromaoel-10", "aromaoel-20"],
  },
  {
    id: "terpenes",
    topic: "basics",
    image: "jar-orange-bud",
    tone: "kraft",
    published: "2026-10-06",
    updated: "2026-10-06",
    products: ["uv-glas", "holz-grinder", "balsam-lavendel"],
  },
  {
    id: "read-coa",
    topic: "quality",
    image: "bottle",
    tone: "kraft",
    published: "2026-10-05",
    updated: "2026-10-05",
    products: ["aromaoel-10", "aromaoel-20", "handcreme"],
  },
  {
    id: "storage",
    topic: "quality",
    image: "jar-storage",
    tone: "subtle",
    published: "2026-10-06",
    updated: "2026-10-06",
    products: ["uv-glas", "metall-grinder", "aromaoel-10"],
  },
  {
    id: "cbd-law-austria",
    topic: "law",
    image: "jar",
    tone: "sageStrong",
    published: "2026-10-05",
    updated: "2026-10-05",
    products: ["aromaoel-10", "balsam-lavendel", "holz-grinder"],
  },
];

/** Articles on the home page: the newest guide topics first. */
export const FEATURED_ARTICLE_IDS: ArticleId[] = ["spectrum", "storage", "cbd-law-austria"];

export const TOPICS: ArticleTopic[] = ["basics", "quality", "law"];

const COPY: Record<Lang, Record<ArticleId, ArticleCopy>> = { de, en };

export function getArticle(lang: Lang, id: ArticleId) {
  return COPY[lang][id];
}

export function getArticleEntry(id: ArticleId) {
  const entry = ARTICLES.find((article) => article.id === id);
  if (!entry) throw new Error(`Unknown article: ${id}`);
  return entry;
}
