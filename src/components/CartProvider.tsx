"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Icon } from "./icons";

type CartContextValue = { count: number; add: () => void };

const CartContext = createContext<CartContextValue | null>(null);

// Preview-only cart: counts items and confirms with a toast; checkout comes with the shop backend.
export function CartProvider({ addedLabel, children }: { addedLabel: string; children: ReactNode }) {
  const [count, setCount] = useState(0);
  const [toastKey, setToastKey] = useState(0);

  useEffect(() => {
    if (!toastKey) return;
    const timer = window.setTimeout(() => setToastKey(0), 2200);
    return () => window.clearTimeout(timer);
  }, [toastKey]);

  const add = useCallback(() => {
    setCount((c) => c + 1);
    setToastKey(Date.now());
  }, []);

  const value = useMemo(() => ({ count, add }), [count, add]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 top-24 z-50 flex justify-center px-4">
        {toastKey ? (
          <div className="t-label flex items-center gap-2 rounded-full bg-forest-900 px-5 py-3 text-cream shadow-float">
            <Icon name="check" size={18} className="text-kraft-400" />
            {addedLabel}
          </div>
        ) : null}
      </div>
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
