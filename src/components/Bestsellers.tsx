"use client";

import { useState } from "react";
import type { Dict } from "@/content/types";
import { ProductCard } from "./ProductCard";
import { Eyebrow } from "./ui";

type FilterKey = Dict["bestsellers"]["filters"][number]["key"];

export function Bestsellers({ t }: { t: Dict["bestsellers"] }) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const products = filter === "all" ? t.products : t.products.filter((p) => p.category === filter);

  return (
    <section id="shop" className="container-x scroll-mt-24 pt-14 pb-20 lg:pb-28">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-3">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="t-h2 text-ink">{t.title}</h2>
        </div>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          {t.filters.map((f) => {
            const active = f.key === filter;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.key)}
                className={`t-label shrink-0 rounded-full px-[18px] py-2.5 transition-colors ${
                  active
                    ? "bg-forest-700 text-cream"
                    : "text-ink shadow-[inset_0_0_0_1px_var(--color-line-strong)] hover:bg-sage-100"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} labels={{ addToCart: t.addToCart, wishlist: t.wishlist }} />
        ))}
      </div>
    </section>
  );
}
