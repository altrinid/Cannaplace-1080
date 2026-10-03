import type { Dict } from "@/content/types";
import { SHOP } from "@/lib/site";
import { Icon } from "./icons";
import { Logo } from "./Logo";

export function Footer({ t, city }: { t: Dict["footer"]; city: string }) {
  const contact = [
    { icon: "map-pin" as const, text: `Josefstädter Str. 56, ${city}` },
    { icon: "phone" as const, text: SHOP.phoneDisplay, href: SHOP.phoneHref },
    { icon: "clock" as const, text: t.hoursShort },
  ];

  return (
    <footer className="bg-forest-900 text-cream-muted">
      <div className="container-x pt-20 pb-9">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[330px_repeat(4,minmax(0,1fr))] lg:gap-12">
          <div className="col-span-2 flex flex-col items-start gap-5 lg:col-span-1">
            <Logo dark />
            <p className="t-body-sm">{t.description}</p>
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
          {t.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3.5">
              <p className="t-eyebrow text-kraft-400">{col.title}</p>
              <ul className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="t-body-sm transition-colors hover:text-cream">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 flex flex-col gap-3.5 sm:col-span-1">
            <p className="t-eyebrow text-kraft-400">{t.contactTitle}</p>
            <ul className="flex flex-col gap-3.5">
              {contact.map((row) => (
                <li key={row.icon} className="t-body-sm flex items-center gap-2.5">
                  <Icon name={row.icon} size={16} className="shrink-0 text-kraft-400" />
                  {row.href ? (
                    <a href={row.href} className="hover:text-cream">
                      {row.text}
                    </a>
                  ) : (
                    row.text
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="t-caption mt-14 flex flex-col gap-3 border-t border-forest-800 pt-8 md:flex-row md:justify-between">
          <p>{t.copyright}</p>
          <p>{t.legal}</p>
        </div>
      </div>
    </footer>
  );
}
