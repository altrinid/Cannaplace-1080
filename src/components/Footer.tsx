import Link from "next/link";
import { CATEGORIES } from "@/content/catalog";
import { getDict } from "@/content";
import type { Lang } from "@/content/types";
import { categoryPath, guidePath, homePath, infoPath, shopPath } from "@/lib/routes";
import { SHOP } from "@/lib/site";
import { Icon } from "./icons";
import { Logo } from "./Logo";

export function Footer({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const page = (key: Parameters<typeof infoPath>[1]) => ({ label: t.pages[key].label, href: infoPath(lang, key) });
  const columns = [
    {
      title: t.footer.shopTitle,
      links: [
        ...CATEGORIES.map(({ key }) => ({ label: t.categoryPages[key].name, href: categoryPath(lang, key) })),
        { label: t.footer.allProducts, href: shopPath(lang) },
      ],
    },
    {
      title: t.footer.serviceTitle,
      links: [
        { label: t.nav.guide, href: guidePath(lang) },
        page("lab"),
        page("shipping"),
        page("faq"),
        page("contact"),
        page("about"),
      ],
    },
    {
      title: t.footer.legalTitle,
      links: [page("imprint"), page("privacy"), page("terms")],
    },
  ];

  return (
    <footer className="bg-forest-900 text-cream-muted">
      <div className="container-x pt-20 pb-9">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[330px_repeat(4,minmax(0,1fr))] lg:gap-12">
          <div className="col-span-2 flex flex-col items-start gap-5 lg:col-span-1">
            <Link href={homePath(lang)} aria-label={t.header.home}>
              <Logo dark />
            </Link>
            <p className="t-body-sm">{t.footer.description}</p>
            <a
              href={SHOP.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="t-body-sm inline-flex items-center gap-2.5 text-cream hover:text-kraft-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line-inverse">
                <Icon name="instagram" size={18} />
              </span>
              {SHOP.instagramHandle}
            </a>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3.5">
              <p className="t-eyebrow text-kraft-400">{col.title}</p>
              <ul className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="t-body-sm transition-colors hover:text-cream">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="col-span-2 flex flex-col gap-3.5 sm:col-span-1">
            <p className="t-eyebrow text-kraft-400">{t.footer.contactTitle}</p>
            <address className="flex flex-col gap-3.5 not-italic">
              <a
                href={SHOP.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="t-body-sm flex items-start gap-2.5 hover:text-cream"
              >
                <Icon name="map-pin" size={16} className="mt-[3px] shrink-0 text-kraft-400" />
                <span>
                  {SHOP.streetShort}
                  <br />
                  {t.contact.city}
                </span>
              </a>
              <a href={SHOP.phoneHref} className="t-body-sm flex items-center gap-2.5 hover:text-cream">
                <Icon name="phone" size={16} className="shrink-0 text-kraft-400" />
                {SHOP.phoneDisplay}
              </a>
              <p className="t-body-sm flex items-start gap-2.5">
                <Icon name="clock" size={16} className="mt-[3px] shrink-0 text-kraft-400" />
                {t.footer.hoursShort}
              </p>
            </address>
          </div>
        </div>
        <div className="t-caption mt-14 flex flex-col gap-3 border-t border-forest-800 pt-8 md:flex-row md:justify-between">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
