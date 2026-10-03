"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dict, Lang } from "@/content/types";
import { useCart } from "./CartProvider";
import { Icon } from "./icons";
import { Logo } from "./Logo";

function LangSwitch({ lang, className = "" }: { lang: Lang; className?: string }) {
  const item = (code: Lang, href: string) => (
    <Link
      href={href}
      hrefLang={code}
      aria-current={lang === code ? "true" : undefined}
      className={lang === code ? "text-ink" : "text-ink-muted hover:text-ink"}
    >
      {code.toUpperCase()}
    </Link>
  );
  return (
    <div className={`t-label items-center gap-1.5 px-2.5 ${className}`}>
      <Icon name="globe" size={18} />
      {item("de", "/")}
      <span className="text-cream-muted">/</span>
      {item("en", "/en/")}
    </div>
  );
}

export function Header({ t, nav, lang }: { t: Dict["header"]; nav: Dict["nav"]; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between gap-6 lg:h-[81px]">
        <Link href={lang === "de" ? "/" : "/en/"} aria-label="Cannaplace">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="t-label text-ink transition-colors hover:text-forest-700">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} className="hidden sm:flex" />
          <button type="button" aria-label={t.search} className="icon-btn hidden bg-card hover:bg-sage-100 sm:inline-flex">
            <Icon name="search" size={20} />
          </button>
          <button type="button" aria-label={t.account} className="icon-btn hidden bg-card hover:bg-sage-100 sm:inline-flex">
            <Icon name="user" size={20} />
          </button>
          <a href="#shop" aria-label={t.cart} className="icon-btn relative bg-forest-700 text-cream hover:bg-forest-900">
            <Icon name="bag" size={20} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 rounded-full bg-kraft-400 px-1.5 text-center text-[11px] leading-5 font-semibold text-ink">
                {count}
              </span>
            )}
          </a>
          <button
            type="button"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="icon-btn bg-card hover:bg-sage-100 xl:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-page xl:hidden">
          <nav className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="t-h4 py-2.5 text-ink">
                {item.label}
              </a>
            ))}
            <LangSwitch lang={lang} className="mt-3 flex px-0 sm:hidden" />
          </nav>
        </div>
      )}
    </header>
  );
}
