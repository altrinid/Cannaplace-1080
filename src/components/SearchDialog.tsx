"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import type { Dict, SearchKind } from "@/content/types";
import { Icon } from "./icons";

export interface SearchItem {
  kind: SearchKind;
  title: string;
  meta?: string;
  href: string;
  /** Extra words that should match but are not shown. */
  keywords?: string;
}

const GROUPS: { kind: SearchKind; limit: number }[] = [
  { kind: "product", limit: 6 },
  { kind: "category", limit: 4 },
  { kind: "article", limit: 5 },
  { kind: "page", limit: 4 },
];

// "Öl" should match "oel", "ol" and "öl": compare against both spellings.
const strip = (text: string) =>
  text
    .toLowerCase()
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
const expand = (text: string) =>
  text.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");
const tokens = (query: string) =>
  strip(query)
    .split(/[^a-z0-9%]+/)
    .filter(Boolean);

// Short words ("öl") only match at the start or end of a word, so "Aromaöl" is found but "Holz" is not.
function matches(text: string, word: string) {
  if (word.length >= 3) return text.includes(word);
  return text.split(/[^a-z0-9%]+/).some((part) => part.startsWith(word) || part.endsWith(word));
}

function search(items: SearchItem[], query: string) {
  const words = tokens(query);
  if (words.length === 0) return [];
  return items
    .map((item) => {
      const title = `${strip(item.title)} ${expand(item.title)}`;
      const rest = `${item.meta ?? ""} ${item.keywords ?? ""}`;
      const text = `${title} ${strip(rest)} ${expand(rest)}`;
      if (!words.every((word) => matches(text, word))) return null;
      const score = words.filter((word) => matches(title, word)).length * 2 + (title.startsWith(words[0]) ? 1 : 0);
      return { item, score };
    })
    .filter((hit) => hit !== null)
    .sort((a, b) => b.score - a.score)
    .map((hit) => hit.item);
}

/** Search button for the header; opens a modal dialog that searches products, categories, guides and pages. */
export function SearchDialog({
  t,
  label,
  items,
  className = "",
}: {
  t: Dict["header"]["searchPanel"];
  label: string;
  items: SearchItem[];
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const results = useMemo(() => search(items, query), [items, query]);
  const groups = GROUPS.map((group) => ({
    ...group,
    items: results.filter((item) => item.kind === group.kind).slice(0, group.limit),
  })).filter((group) => group.items.length > 0);
  const first = groups[0]?.items[0];
  const count = groups.reduce((sum, group) => sum + group.items.length, 0);

  function open() {
    dialog.current?.showModal();
    input.current?.focus();
  }

  function close() {
    dialog.current?.close();
  }

  return (
    <>
      <button type="button" aria-label={label} aria-haspopup="dialog" onClick={open} className={className}>
        <Icon name="search" size={20} />
      </button>
      <dialog
        ref={dialog}
        aria-label={t.title}
        onClose={() => setQuery("")}
        // A click on the backdrop lands on the <dialog> element itself.
        onClick={(event) => event.target === event.currentTarget && close()}
        className="m-auto mt-[8vh] w-[calc(100%-32px)] max-w-[640px] overflow-hidden rounded-lg bg-page p-0 text-ink shadow-float backdrop:bg-forest-900/50 backdrop:backdrop-blur-[2px]"
      >
        <form
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            if (!first) return;
            close();
            router.push(first.href);
          }}
          className="flex items-center gap-3 border-b border-line pr-2 pl-4 sm:pl-5"
        >
          <Icon name="search" size={20} className="shrink-0 text-ink-muted" />
          <input
            ref={input}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            // In a search field the browser uses Escape to clear the text; here it should close the dialog.
            onKeyDown={(event) => {
              if (event.key !== "Escape") return;
              event.preventDefault();
              close();
            }}
            placeholder={t.placeholder}
            aria-label={t.title}
            autoComplete="off"
            enterKeyHint="search"
            className="t-body-lg h-16 min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-ink-muted [&::-webkit-search-cancel-button]:hidden"
          />
          <button type="button" onClick={close} aria-label={t.close} className="icon-btn hover:bg-sage-100">
            <Icon name="close" size={20} />
          </button>
        </form>

        <div className="max-h-[min(64vh,560px)] overflow-y-auto p-2 sm:p-3">
          <p aria-live="polite" className="sr-only">
            {query.trim() && (count === 1 ? t.results.one : t.results.other).replace("{n}", String(count))}
          </p>
          {!query.trim() ? (
            <div className="p-3">
              <p className="t-eyebrow text-kraft-700">{t.popular}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => {
                      setQuery(suggestion);
                      input.current?.focus();
                    }}
                    className="t-label rounded-full bg-sage-100 px-3.5 py-2 text-ink transition-colors hover:bg-sage-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : count === 0 ? (
            <p className="p-3 text-ink-muted">{t.empty.replace("{q}", query.trim())}</p>
          ) : (
            groups.map((group) => (
              <section key={group.kind} aria-label={t.groups[group.kind]} className="pb-1">
                <p className="t-eyebrow px-3 pt-3 pb-1.5 text-kraft-700">{t.groups[group.kind]}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className="group flex items-center justify-between gap-4 rounded-md px-3 py-2.5 transition-colors hover:bg-subtle focus-visible:bg-subtle"
                      >
                        <span className="min-w-0">
                          <span className="t-label block text-ink">{item.title}</span>
                          {item.meta && <span className="t-body-sm block truncate text-ink-muted">{item.meta}</span>}
                        </span>
                        <Icon
                          name="arrow-right"
                          size={18}
                          className="shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>
      </dialog>
    </>
  );
}
