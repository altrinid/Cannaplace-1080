"use client";

import { useEffect } from "react";

/**
 * Marks the element named in the URL hash with `data-hash-target`, so it can be highlighted —
 * CSS :target does not update after client-side navigation.
 */
export function HashTarget() {
  useEffect(() => {
    const mark = () => {
      document.querySelectorAll("[data-hash-target]").forEach((el) => el.removeAttribute("data-hash-target"));
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) document.getElementById(id)?.setAttribute("data-hash-target", "");
    };
    mark();
    window.addEventListener("hashchange", mark);
    return () => window.removeEventListener("hashchange", mark);
  }, []);
  return null;
}
