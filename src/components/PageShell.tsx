import type { ReactNode } from "react";
import { getDict, otherLang } from "@/content";
import type { Lang } from "@/content/types";
import { homePath, infoPath, navItems, shopPath, wishlistPath } from "@/lib/routes";
import { searchIndex } from "@/lib/search";
import { SHOP } from "@/lib/site";
import { AgeGate } from "./AgeGate";
import { CartProvider } from "./CartProvider";
import { FontSwitcher } from "./FontSwitcher";
import { Footer } from "./Footer";
import { Header } from "./Header";

function AnnouncementBar({ items }: { items: string[] }) {
  return (
    <div className="bg-forest-900 text-cream">
      <div className="container-x t-body-sm flex items-center justify-center gap-6 py-2.5 text-center">
        {items.map((item, i) => (
          <span key={item} className={`items-center gap-6 ${["flex", "hidden md:flex", "hidden lg:flex"][Math.min(i, 2)]}`}>
            {i > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-kraft-400" />}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Shared chrome of every page; `path` and `alternate` are the page's URLs in its own and the other language. */
export function PageShell({
  lang,
  path,
  alternate,
  children,
}: {
  lang: Lang;
  path: string;
  alternate: string;
  children: ReactNode;
}) {
  const t = getDict(lang);
  const hrefs = { [lang]: path, [otherLang(lang)]: alternate } as Record<Lang, string>;

  return (
    <CartProvider addedLabel={t.cart.added}>
      <a
        href="#main"
        className="btn btn-primary fixed top-3 left-3 z-[70] -translate-y-24 focus-visible:translate-y-0"
      >
        {t.header.skip}
      </a>
      <AnnouncementBar items={t.announcement} />
      <Header
        t={t.header}
        nav={navItems(lang)}
        lang={lang}
        hrefs={hrefs}
        homeHref={homePath(lang)}
        shopHref={shopPath(lang)}
        wishlistHref={wishlistPath(lang)}
        accountLinks={[
          { label: t.wishlist.title, href: wishlistPath(lang) },
          { label: t.pages.shipping.label, href: infoPath(lang, "shipping") },
          { label: t.pages.contact.label, href: infoPath(lang, "contact") },
        ]}
        phone={{ href: SHOP.phoneHref, display: SHOP.phoneDisplay }}
        searchItems={searchIndex(lang)}
      />
      <main id="main">{children}</main>
      <Footer lang={lang} />
      <AgeGate t={t.ageGate} />
      <FontSwitcher t={t.fontSwitch} />
    </CartProvider>
  );
}
