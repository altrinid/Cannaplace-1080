"use client";

import { useEffect } from "react";

// The single root layout renders lang="de"; the English page switches it on mount.
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.lang;
    root.lang = lang;
    return () => {
      root.lang = previous;
    };
  }, [lang]);
  return null;
}
