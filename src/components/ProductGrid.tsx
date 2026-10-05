"use client";

import { type ReactNode, useMemo, useState } from "react";
import type { CategoryKey, Plural } from "@/content/types";
import { Icon } from "./icons";
import { type CardLabels, type CardProduct, ProductCard } from "./ProductCard";

type SortKey = "featured" | "priceAsc" | "priceDesc" | "name";
type FilterKey = "all" | CategoryKey;

const SORT_KEYS: SortKey[] = ["featured", "priceAsc", "priceDesc", "name"];

export function ProductGrid({
  products,
  labels,
  locale,
  header,
  filters,
  sort,
  count,
  headingLevel = "h3",
}: {
  products: CardProduct[];
  labels: CardLabels;
  locale: string;
  /** Shown left of the controls (e.g. the section heading); otherwise the product count is shown there. */
  header?: ReactNode;
  filters?: { label: string; all: string; items: { key: CategoryKey; label: string }[] };
  sort?: { label: string; options: Record<SortKey, string> };
  count?: Plural;
  headingLevel?: "h2" | "h3";
}) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [order, setOrder] = useState<SortKey>("featured");

  const visible = useMemo(() => {
    const list = filter === "all" ? products : products.filter((p) => p.category === filter);
    if (order === "featured") return list;
    return [...list].sort((a, b) => {
      if (order === "name") return a.name.localeCompare(b.name, locale);
      return order === "priceAsc" ? a.priceValue - b.priceValue : b.priceValue - a.priceValue;
    });
  }, [products, filter, order, locale]);

  const chips: { key: FilterKey; label: string }[] = filters ? [{ key: "all", label: filters.all }, ...filters.items] : [];
  const countText = count && (visible.length === 1 ? count.one : count.other).replace("{n}", String(visible.length));

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        {header ??
          (countText && (
            <p aria-live="polite" className="t-label text-ink-muted">
              {countText}
            </p>
          ))}
        {(filters || sort) && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {filters && (
              <div
                role="group"
                aria-label={filters.label}
                className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
              >
                {chips.map((chip) => {
                  const active = chip.key === filter;
                  return (
                    <button
                      key={chip.key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setFilter(chip.key)}
                      className={`t-label shrink-0 rounded-full px-[18px] py-2.5 transition-colors ${
                        active
                          ? "bg-forest-700 text-cream"
                          : "text-ink shadow-[inset_0_0_0_1px_var(--color-line-strong)] hover:bg-sage-100"
                      }`}
                    >
                      {chip.label}
                    </button>
                  );
                })}
              </div>
            )}
            {sort && (
              <label className="t-label inline-flex shrink-0 items-center gap-3 text-ink-muted">
                {sort.label}
                <span className="relative">
                  <select
                    value={order}
                    onChange={(event) => setOrder(event.target.value as SortKey)}
                    className="t-label h-11 appearance-none rounded-full bg-card pr-10 pl-4 text-ink shadow-[inset_0_0_0_1px_var(--color-line-strong)]"
                  >
                    {SORT_KEYS.map((key) => (
                      <option key={key} value={key}>
                        {sort.options[key]}
                      </option>
                    ))}
                  </select>
                  <Icon
                    name="chevron-down"
                    size={16}
                    className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-ink"
                  />
                </span>
              </label>
            )}
          </div>
        )}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} labels={labels} headingLevel={headingLevel} />
        ))}
      </div>
    </div>
  );
}
