"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { Dict } from "@/content/types";
import { STORAGE_KEYS } from "@/lib/site";
import { Logo } from "./Logo";

function readConfirmed() {
  try {
    return localStorage.getItem(STORAGE_KEYS.ageConfirmed) === "1";
  } catch {
    return false;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

export function AgeGate({ t }: { t: Dict["ageGate"] }) {
  // Server render and hydration assume "confirmed" so the static HTML never contains the dialog.
  const stored = useSyncExternalStore(subscribe, readConfirmed, () => true);
  const [confirmed, setConfirmed] = useState(false);
  const [denied, setDenied] = useState(false);
  const open = !stored && !confirmed;

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  function confirm() {
    try {
      localStorage.setItem(STORAGE_KEYS.ageConfirmed, "1");
    } catch {}
    setConfirmed(true);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-900/60 p-5 backdrop-blur-sm"
    >
      <div className="w-full max-w-[480px] rounded-xl bg-page px-6 py-9 text-center shadow-float sm:px-10">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h2 id="age-gate-title" className="t-h3 mt-8 text-ink">
          {denied ? t.denied : t.title}
        </h2>
        {!denied && (
          <>
            <p className="mt-3 text-ink-muted">{t.text}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={confirm} className="btn btn-primary" autoFocus>
                {t.yes}
              </button>
              <button type="button" onClick={() => setDenied(true)} className="btn btn-secondary">
                {t.no}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
