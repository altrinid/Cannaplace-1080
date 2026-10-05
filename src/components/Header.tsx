"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dict, Lang, NavKey } from "@/content/types";
import { useCart } from "./CartProvider";
import { Icon } from "./icons";
import { Logo } from "./Logo";

type NavItem = { key: NavKey; label: string; href: string };

function LangSwitch({
  lang,
  hrefs,
  label,
  className = "",
}: {
  lang: Lang;
  hrefs: Record<Lang, string>;
  label: string;
  className?: string;
}) {
  const item = (code: Lang) => (
    <Link
      href={hrefs[code]}
      hrefLang={code}
      lang={code}
      aria-current={lang === code ? "true" : undefined}
      className={lang === code ? "text-ink" : "text-ink-muted hover:text-ink"}
    >
      {code.toUpperCase()}
    </Link>
  );
  return (
    <div role="group" aria-label={label} className={`t-label items-center gap-1.5 px-2.5 ${className}`}>
      <Icon name="globe" size={18} />
      {item("de")}
      <span className="text-cream-muted">/</span>
      {item("en")}
    </div>
  );
}

export function Header({
  t,
  nav,
  lang,
  hrefs,
  homeHref,
  shopHref,
  phone,
}: {
  t: Dict["header"];
  nav: NavItem[];
  lang: Lang;
  /** The current page in both languages. */
  hrefs: Record<Lang, string>;
  homeHref: string;
  shopHref: string;
  phone: { href: string; display: string };
}) {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const pathname = usePathname();
  // "Shop" stays active on category and product pages unless a category link matches more precisely.
  const active = nav
    .filter((item) => pathname.startsWith(item.href))
    .sort((a, b) => b.href.length - a.href.length)[0]?.key;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between gap-3 sm:gap-6 lg:h-[81px]">
        <Link href={homeHref} aria-label={t.home}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={item.key === active ? "page" : undefined}
              className={`t-label transition-colors hover:text-forest-700 ${
                item.key === active ? "text-forest-700 underline decoration-kraft-400 decoration-2 underline-offset-8" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LangSwitch lang={lang} hrefs={hrefs} label={t.language} className="hidden sm:flex" />
          <button type="button" aria-label={t.search} className="icon-btn hidden bg-card hover:bg-sage-100 sm:inline-flex">
            <Icon name="search" size={20} />
          </button>
          <button type="button" aria-label={t.account} className="icon-btn hidden bg-card hover:bg-sage-100 sm:inline-flex">
            <Icon name="user" size={20} />
          </button>
          <a href={phone.href} aria-label={`${t.call}: ${phone.display}`} className="icon-btn bg-card hover:bg-sage-100 sm:hidden">
            <Icon name="phone" size={20} />
          </a>
          <Link href={shopHref} aria-label={t.cart} className="icon-btn relative bg-forest-700 text-cream hover:bg-forest-900">
            <Icon name="bag" size={20} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 rounded-full bg-kraft-400 px-1.5 text-center text-[11px] leading-5 font-semibold text-ink">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="icon-btn bg-card hover:bg-sage-100 xl:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-page xl:hidden">
          <nav className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={item.key === active ? "page" : undefined}
                className={`t-h4 py-2.5 ${item.key === active ? "text-forest-700" : "text-ink"}`}
              >
                {item.label}
              </Link>
            ))}
            <a href={phone.href} className="t-label mt-3 inline-flex items-center gap-2.5 py-2 text-ink">
              <Icon name="phone" size={18} className="text-sage-500" />
              {phone.display}
            </a>
            <LangSwitch lang={lang} hrefs={hrefs} label={t.language} className="mt-1 flex px-0 sm:hidden" />
          </nav>
        </div>
      )}
    </header>
  );
}
