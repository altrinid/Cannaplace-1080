"use client";

import { useCallback, useSyncExternalStore } from "react";
import { STORAGE_KEYS } from "@/lib/site";

// Wishlist ("Merkliste") of product ids, kept in localStorage and shared by every component and open tab.
// Without storage (private mode, blocked) it still works for the current page view.

const EMPTY: string[] = [];
const listeners = new Set<() => void>();
let raw: string | null = null;
let ids: string[] = EMPTY;

function parse(value: string | null): string[] {
  try {
    const parsed: unknown = value ? JSON.parse(value) : [];
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : EMPTY;
  } catch {
    return EMPTY;
  }
}

function read() {
  let value: string | null;
  try {
    value = localStorage.getItem(STORAGE_KEYS.wishlist);
  } catch {
    return ids;
  }
  // Keep the same array while the stored value is unchanged (useSyncExternalStore needs a stable snapshot).
  if (value !== raw) {
    raw = value;
    ids = parse(value);
  }
  return ids;
}

function write(next: string[]) {
  ids = next;
  raw = JSON.stringify(next);
  try {
    localStorage.setItem(STORAGE_KEYS.wishlist, raw);
  } catch {}
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEYS.wishlist) listener();
  };
  listeners.add(listener);
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useWishlist() {
  // The static HTML renders an empty list; saved ids appear after hydration.
  const saved = useSyncExternalStore(subscribe, read, () => EMPTY);
  const toggle = useCallback((id: string) => {
    const current = read();
    write(current.includes(id) ? current.filter((other) => other !== id) : [id, ...current]);
  }, []);
  const clear = useCallback(() => write([]), []);
  return { ids: saved, count: saved.length, has: (id: string) => saved.includes(id), toggle, clear };
}
