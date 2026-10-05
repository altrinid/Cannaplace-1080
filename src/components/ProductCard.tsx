"use client";

import Image from "next/image";
import Link from "next/link";
import type { CategoryKey, ImageKey, Tone } from "@/content/types";
import { PRODUCT_IMAGES } from "@/lib/images";
import { useCart } from "./CartProvider";
import { Icon } from "./icons";
import { Badge, TONE_BG } from "./ui";

/** Localized, serializable product data for cards (keeps the full catalog out of the client bundle). */
export interface CardProduct {
  id: string;
  href: string;
  name: string;
  meta: string;
  price: string;
  priceValue: number;
  image: ImageKey;
  tone: Tone;
  category: CategoryKey;
  shipping: boolean;
  badge?: { label: string; tone: "dark" | "kraft" };
}

export interface CardLabels {
  addToCart: string;
  wishlist: string;
  inStoreOnly: string;
}

export function ProductCard({
  product,
  labels,
  headingLevel = "h3",
}: {
  product: CardProduct;
  labels: CardLabels;
  headingLevel?: "h2" | "h3";
}) {
  const { add } = useCart();
  const Heading = headingLevel;

  // The product name link stretches over the whole card; the buttons sit above it (z-10).
  return (
    <article className="relative flex flex-col rounded-lg border border-line bg-card p-2 transition-shadow hover:shadow-card">
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
          aria-label={`${labels.wishlist}: ${product.name}`}
          className="icon-btn absolute top-3 right-3 z-10 h-[38px] w-[38px] bg-card text-ink hover:bg-sage-100"
        >
          <Icon name="heart" size={20} />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-2.5 pt-4 pb-2">
        <p className="t-eyebrow text-kraft-700">{product.meta}</p>
        <Heading className="t-h4 text-ink">
          <Link href={product.href} className="after:absolute after:inset-0 after:rounded-lg hover:text-forest-700">
            {product.name}
          </Link>
        </Heading>
        {!product.shipping && (
          <span className="t-caption inline-flex w-fit items-center gap-1 rounded-full bg-kraft-100 px-2.5 py-1 font-semibold text-kraft-700">
            <Icon name="map-pin" size={14} />
            {labels.inStoreOnly}
          </span>
        )}
        <div className="mt-auto flex items-center justify-between pt-2.5">
          <span className="t-price text-ink">{product.price}</span>
          {product.shipping ? (
            <button
              type="button"
              onClick={add}
              aria-label={`${labels.addToCart}: ${product.name}`}
              className="icon-btn relative z-10 bg-forest-700 text-cream hover:bg-forest-900 active:scale-95"
            >
              <Icon name="plus" size={20} />
            </button>
          ) : (
            <span aria-hidden="true" className="icon-btn bg-sage-100 text-ink">
              <Icon name="arrow-right" size={20} />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
