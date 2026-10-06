import { de } from "./de";
import { en } from "./en";
import type { Dict, Lang } from "./types";

const DICTS: Record<Lang, Dict> = { de, en };

export const LANGS: Lang[] = ["de", "en"];

export function getDict(lang: Lang) {
  return DICTS[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === "de" ? "en" : "de";
}
