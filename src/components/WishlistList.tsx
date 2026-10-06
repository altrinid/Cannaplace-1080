"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import type { Dict, Plural } from "@/content/types";
import { Icon } from "./icons";
import { type CardLabels, type CardProduct, ProductCard } from "./ProductCard";
import { useWishlist } from "./useWishlist";

const noop = () => () => {};

/** The saved products; the list only exists in the visitor's browser, so it renders after hydration. */
export function WishlistList({
  products,
  labels,
  t,
  count,
  shopHref,
}: {
  products: CardProduct[];
  labels: CardLabels;
  t: Pick<Dict["wishlist"], "emptyTitle" | "emptyText" | "emptyCta" | "clear" | "note">;
  count: Plural;
  shopHref: string;
}) {
  const { ids, clear } = useWishlist();
  const hydrated = useSyncExternalStore(noop, () => true, () => false);
  const saved = ids.flatMap((id) => products.filter((product) => product.id === id));

  if (!hydrated) return <div aria-busy="true" className="min-h-[280px]" />;

  if (saved.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-lg border border-dashed border-line-strong px-6 py-14 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-forest-700">
          <Icon name="heart" size={26} />
        </span>
        <h2 className="t-h3 mt-5 text-ink">{t.emptyTitle}</h2>
        <p className="mt-2 max-w-[420px] text-ink-muted">{t.emptyText}</p>
        <Link href={shopHref} className="btn btn-primary mt-7">
          {t.emptyCta}
          <Icon name="arrow-right" size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="t-label text-ink-muted">
          {(saved.length === 1 ? count.one : count.other).replace("{n}", String(saved.length))}
        </p>
        <button
          type="button"
          onClick={clear}
          className="t-label inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
        >
          <Icon name="trash" size={18} />
          {t.clear}
        </button>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {saved.map((product) => (
          <ProductCard key={product.id} product={product} labels={labels} headingLevel="h2" />
        ))}
      </div>
      <p className="t-body-sm mt-8 inline-flex items-center gap-2 text-ink-muted">
        <Icon name="shield-check" size={18} className="shrink-0 text-sage-500" />
        {t.note}
      </p>
    </div>
  );
}
