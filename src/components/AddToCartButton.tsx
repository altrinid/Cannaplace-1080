"use client";

import { useCart } from "./CartProvider";
import { Icon } from "./icons";

export function AddToCartButton({ label }: { label: string }) {
  const { add } = useCart();
  return (
    <button type="button" onClick={add} className="btn btn-primary active:scale-[0.98]">
      {label}
      <Icon name="bag" size={18} />
    </button>
  );
}
