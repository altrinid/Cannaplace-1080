import { getDict } from "@/content";
import type { ArticleCopy, Block, Lang, Plural } from "@/content/types";

/** Replaces `{key}` placeholders in a template. */
export function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match));
}

export function plural(forms: Plural, n: number) {
  return fill(n === 1 ? forms.one : forms.other, { n });
}

export function formatPrice(lang: Lang, value: number) {
  return new Intl.NumberFormat(getDict(lang).locale, { style: "currency", currency: "EUR" }).format(value);
}

/** "10,2 %" in German, "10.2%" in English. */
export function formatPercent(lang: Lang, value: number) {
  const number = new Intl.NumberFormat(getDict(lang).locale, { maximumFractionDigits: 2 }).format(value);
  return lang === "de" ? `${number} %` : `${number}%`;
}

export function formatDate(lang: Lang, iso: string) {
  return new Intl.DateTimeFormat(getDict(lang).locale, { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(iso),
  );
}

export function formatMonth(lang: Lang, isoMonth: string) {
  return new Intl.DateTimeFormat(getDict(lang).locale, { month: "2-digit", year: "numeric" }).format(
    new Date(`${isoMonth}-01`),
  );
}

/** URL-safe anchor id for headings. */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Text without inline markup: `[label](href)` becomes `label`, `**bold**` becomes `bold`. */
export function plainText(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
}

/** Plain text of a block list. */
export function blocksText(blocks: Block[]) {
  return blocks
    .flatMap((block) => {
      switch (block.type) {
        case "ul":
        case "ol":
          return block.items;
        case "table":
          return [...(block.head ?? []), ...block.rows.flat()];
        default:
          return [block.text];
      }
    })
    .join(" ");
}

/** Reading time in minutes at ~200 words per minute. */
export function readingMinutes(article: ArticleCopy) {
  const text = [article.lead, blocksText(article.body), ...article.faq.flatMap((f) => [f.q, f.a])].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}
