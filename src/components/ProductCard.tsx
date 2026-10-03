"use client";

import Image from "next/image";
import type { Product } from "@/content/types";
import { PRODUCT_IMAGES } from "@/lib/images";
import { useCart } from "./CartProvider";
import { Icon, Stars } from "./icons";
import { Badge, TONE_BG } from "./ui";

export function ProductCard({ product, labels }: { product: Product; labels: { addToCart: string; wishlist: string } }) {
  const { add } = useCart();

  return (
    <article className="flex flex-col rounded-lg border border-line bg-card p-2 transition-shadow hover:shadow-card">
      <div className={`relative aspect-[286/290] overflow-hidden rounded-md ${TONE_BG[product.tone]}`}>
        <Image
          src={PRODUCT_IMAGES[product.image]}
          alt={product.name}
          sizes="(min-width: 1024px) 250px, 80vw"
          className="absolute inset-0 m-auto h-[86%] w-[86%] object-contain"
        />
        {product.badge && (
          <span className="absolute top-3 left-3">
            <Badge tone={product.badge.tone}>{product.badge.label}</Badge>
          </span>
        )}
        <button
          type="button"
          aria-label={labels.wishlist}
          className="icon-btn absolute top-3 right-3 h-[38px] w-[38px] bg-card text-ink hover:bg-sage-100"
        >
          <Icon name="heart" size={20} />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-2.5 pt-4 pb-2">
        <p className="t-eyebrow text-kraft-700">{product.meta}</p>
        <h3 className="t-h4 text-ink">{product.name}</h3>
        <span className="inline-flex items-center gap-2">
          <Stars />
          <span className="t-body-sm text-ink-muted">{product.rating}</span>
        </span>
        <div className="mt-auto flex items-center justify-between pt-2.5">
          <span className="t-price text-ink">{product.price}</span>
          <button
            type="button"
            onClick={add}
            aria-label={`${labels.addToCart}: ${product.name}`}
            className="icon-btn bg-forest-700 text-cream hover:bg-forest-900 active:scale-95"
          >
            <Icon name="plus" size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
