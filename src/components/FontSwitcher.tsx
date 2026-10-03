"use client";

import { useSyncExternalStore } from "react";
import type { Dict } from "@/content/types";
import { STORAGE_KEYS } from "@/lib/site";

type FontKey = "jost" | "syne";
const EVENT = "cp-font-change";

function readFont(): FontKey {
  return document.documentElement.dataset.font === "syne" ? "syne" : "jost";
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

function applyFont(next: FontKey) {
  const root = document.documentElement;
  if (next === "syne") root.setAttribute("data-font", "syne");
  else root.removeAttribute("data-font");
  try {
    localStorage.setItem(STORAGE_KEYS.font, next);
  } catch {}
  const url = new URL(window.location.href);
  if (next === "syne") url.searchParams.set("font", "syne");
  else url.searchParams.delete("font");
  window.history.replaceState(window.history.state, "", url);
  window.dispatchEvent(new Event(EVENT));
}

// Preview helper so the client can compare the two type variants; remove once a font is chosen.
export function FontSwitcher({ t }: { t: Dict["fontSwitch"] }) {
  const font = useSyncExternalStore(subscribe, readFont, () => "jost" as FontKey);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-1 rounded-full border border-line bg-card/95 p-1 pl-3 shadow-float backdrop-blur">
      <span className="t-caption mr-1 font-semibold text-ink-muted">
        {t.preview} · {t.label}
      </span>
      {(["jost", "syne"] as const).map((key) => (
        <button
          key={key}
          type="button"
          aria-pressed={font === key}
          onClick={() => applyFont(key)}
          className={`t-caption rounded-full px-3 py-1.5 font-semibold transition-colors ${
            font === key ? "bg-forest-700 text-cream" : "text-ink hover:bg-sage-100"
          }`}
        >
          {key === "jost" ? t.a : t.b}
        </button>
      ))}
    </div>
  );
}
