"use client";

import { Icon } from "./icons";
import { useWishlist } from "./useWishlist";

/** Heart toggle for one product: round icon button on cards, labelled pill button on the product page. */
export function WishlistButton({
  id,
  name,
  label,
  text,
  className = "",
}: {
  id: string;
  name: string;
  /** "Auf die Merkliste" — combined with the product name for screen readers. */
  label: string;
  /** Visible text for the pill variant, e.g. "Merken". */
  text?: string;
  className?: string;
}) {
  const { has, toggle } = useWishlist();
  const saved = has(id);
  const icon = <Icon name="heart" size={20} filled={saved} className={saved ? "text-heart" : undefined} />;

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={`${text ?? label}: ${name}`}
      title={label}
      onClick={() => toggle(id)}
      className={
        text
          ? `btn btn-secondary ${className}`
          : `icon-btn bg-card text-ink hover:bg-sage-100 active:scale-95 ${className}`
      }
    >
      {icon}
      {text}
    </button>
  );
}
