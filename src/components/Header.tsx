"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Dict, Lang, NavKey } from "@/content/types";
import { useCart } from "./CartProvider";
import { Icon } from "./icons";
import { Logo } from "./Logo";
import { SearchDialog, type SearchItem } from "./SearchDialog";
import { useWishlist } from "./useWishlist";

type NavItem = { key: NavKey; label: string; href: string };
type PageLink = { label: string; href: string };

// Ghost icons on phones (four of them have to fit next to the logo), round buttons from sm up.
const ICON_BTN =
  "icon-btn relative max-sm:h-10 max-sm:w-10 hover:bg-sage-100 sm:bg-card";

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

function Count({ n, dark = false }: { n: number; dark?: boolean }) {
  if (n === 0) return null;
  return (
    <span
      className={`absolute -top-0.5 -right-0.5 min-w-5 rounded-full px-1.5 text-center text-[11px] leading-5 font-semibold sm:-top-1 sm:-right-1 ${
        dark ? "bg-kraft-400 text-ink" : "bg-forest-700 text-cream"
      }`}
    >
      {n}
    </span>
  );
}

/** Account button: log-in comes with the shop backend; until then a short note and the useful links. */
function AccountMenu({ t, links }: { t: Dict["header"]; links: PageLink[] }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={root} className="relative hidden sm:block">
      <button
        type="button"
        aria-label={t.account}
        aria-expanded={open}
        aria-controls="account-panel"
        onClick={() => setOpen((v) => !v)}
        className={ICON_BTN}
      >
        <Icon name="user" size={20} />
      </button>
      {open && (
        <div
          id="account-panel"
          className="absolute top-full right-0 z-50 mt-3 w-[300px] rounded-lg border border-line bg-page p-5 shadow-float"
        >
          <p className="t-title text-ink">{t.accountTitle}</p>
          <p className="t-body-sm mt-1.5 text-ink-muted">{t.accountText}</p>
          <ul className="mt-4 flex flex-col border-t border-line pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="t-label flex items-center justify-between py-2 text-ink hover:text-forest-700"
                >
                  {link.label}
                  <Icon name="chevron-right" size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
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
  wishlistHref,
  accountLinks,
  phone,
  searchItems,
}: {
  t: Dict["header"];
  nav: NavItem[];
  lang: Lang;
  /** The current page in both languages. */
  hrefs: Record<Lang, string>;
  homeHref: string;
  shopHref: string;
  wishlistHref: string;
  accountLinks: PageLink[];
  phone: { href: string; display: string };
  searchItems: SearchItem[];
}) {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const wishlist = useWishlist();
  const pathname = usePathname();
  // "Shop" stays active on category and product pages unless a category link matches more precisely.
  const active = nav
    .filter((item) => pathname.startsWith(item.href))
    .sort((a, b) => b.href.length - a.href.length)[0]?.key;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/95 backdrop-blur">
      <div className="container-x flex h-[64px] items-center justify-between gap-2 sm:h-[72px] sm:gap-6 lg:h-[81px]">
        <Link href={homeHref} aria-label={t.home} className="shrink-0">
          <Logo compact />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex 2xl:gap-8">
          {nav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={item.key === active ? "page" : undefined}
              className={`t-label whitespace-nowrap transition-colors hover:text-forest-700 ${
                item.key === active ? "text-forest-700 underline decoration-kraft-400 decoration-2 underline-offset-8" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center sm:gap-2">
          <LangSwitch lang={lang} hrefs={hrefs} label={t.language} className="hidden sm:flex" />
          <SearchDialog t={t.searchPanel} label={t.search} items={searchItems} className={ICON_BTN} />
          <AccountMenu t={t} links={accountLinks} />
          <Link href={wishlistHref} aria-label={`${t.wishlist} (${wishlist.count})`} className={ICON_BTN}>
            <Icon name="heart" size={20} filled={wishlist.count > 0} className={wishlist.count > 0 ? "text-heart" : undefined} />
            <Count n={wishlist.count} />
          </Link>
          <Link
            href={shopHref}
            aria-label={`${t.cart} (${count})`}
            className="icon-btn relative bg-forest-700 text-cream hover:bg-forest-900 max-sm:mx-0.5 max-sm:h-10 max-sm:w-10"
          >
            <Icon name="bag" size={20} />
            <Count n={count} dark />
          </Link>
          <button
            type="button"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={`${ICON_BTN} xl:hidden`}
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
            <div className="mt-3 flex flex-col gap-1 border-t border-line pt-3">
              <Link href={wishlistHref} onClick={() => setOpen(false)} className="t-label inline-flex items-center gap-2.5 py-2 text-ink">
                <Icon name="heart" size={18} className="text-sage-500" />
                {t.wishlist}
                {wishlist.count > 0 && <span className="text-ink-muted">({wishlist.count})</span>}
              </Link>
              <a href={phone.href} className="t-label inline-flex items-center gap-2.5 py-2 text-ink">
                <Icon name="phone" size={18} className="text-sage-500" />
                {phone.display}
              </a>
              <LangSwitch lang={lang} hrefs={hrefs} label={t.language} className="flex px-0 py-2 sm:hidden" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
