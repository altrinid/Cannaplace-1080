import Link from "next/link";
import { CATEGORIES } from "@/content/catalog";
import { getDict } from "@/content";
import type { Lang } from "@/content/types";
import { categoryPath, glossaryPath, guidePath, homePath, infoPath, shopPath } from "@/lib/routes";
import { AGENCY, COMPANY, SHOP } from "@/lib/site";
import { GetflowlyLogo } from "./GetflowlyLogo";
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
        { label: t.glossary.label, href: glossaryPath(lang) },
        page("lab"),
        page("shipping"),
        page("faq"),
        page("about"),
      ],
    },
    {
      title: t.footer.legalTitle,
      links: [
        page("imprint"),
        page("privacy"),
        page("terms"),
        { label: t.footer.withdrawal, href: `${infoPath(lang, "shipping")}#${t.footer.withdrawalHash}` },
      ],
    },
  ];
  // Company details required by § 14 UGB / § 5 ECG; empty fields stay hidden until the shop fills them in.
  const company = [
    `${t.footer.operator}: ${COMPANY.name}`,
    `${t.footer.register}: ${COMPANY.register}, ${COMPANY.court}`,
    COMPANY.vatId && `${t.footer.vat}: ${COMPANY.vatId}`,
    `${SHOP.street}, ${t.contact.city}`,
  ].filter((item): item is string => Boolean(item));

  return (
    <footer className="bg-forest-900 text-cream-muted">
      <div className="container-x pt-20 pb-9">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[300px_repeat(4,minmax(0,1fr))] lg:gap-12">
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
              {COMPANY.email && (
                <a href={`mailto:${COMPANY.email}`} className="t-body-sm flex items-center gap-2.5 hover:text-cream">
                  <Icon name="mail" size={16} className="shrink-0 text-kraft-400" />
                  {COMPANY.email}
                </a>
              )}
              <p className="t-body-sm flex items-start gap-2.5">
                <Icon name="clock" size={16} className="mt-[3px] shrink-0 text-kraft-400" />
                {t.footer.hoursShort}
              </p>
              <Link href={infoPath(lang, "contact")} className="t-body-sm flex items-center gap-2.5 text-cream hover:text-kraft-400">
                <Icon name="arrow-right" size={16} className="shrink-0 text-kraft-400" />
                {t.pages.contact.label}
              </Link>
            </address>
          </div>
        </div>

        <p className="t-caption mt-14 border-t border-forest-800 pt-8">
          {company.map((item, i) => (
            <span key={item}>
              {i > 0 && <span aria-hidden="true"> · </span>}
              {item}
            </span>
          ))}
        </p>
        <div className="t-caption mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1.5">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.legal}</p>
          </div>
          <a
            href={AGENCY.url}
            target="_blank"
            rel="noopener"
            className="inline-flex shrink-0 items-center gap-2.5 text-cream-muted transition-colors hover:text-cream"
          >
            <span>{t.footer.credit}</span>
            <GetflowlyLogo className="h-[26px] w-auto" />
            <span className="sr-only">{AGENCY.name}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
