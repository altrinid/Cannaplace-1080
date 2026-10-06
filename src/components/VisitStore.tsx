import Image from "next/image";
import type { Dict } from "@/content/types";
import { MAP_IMAGE } from "@/lib/images";
import { SHOP } from "@/lib/site";
import { Icon } from "./icons";
import { Eyebrow, IconCircle, TextLink } from "./ui";

export function VisitStore({ t, city, contactHref }: { t: Dict["store"]; city: string; contactHref: string }) {
  const info = [
    { icon: "map-pin" as const, content: `${SHOP.street}, ${city}` },
    { icon: "clock" as const, content: t.hours },
    {
      icon: "phone" as const,
      content: (
        <a href={SHOP.phoneHref} className="hover:text-forest-700">
          {SHOP.phoneDisplay}
        </a>
      ),
    },
  ];

  return (
    <section
      id="besuch"
      className="container-x grid scroll-mt-24 items-center gap-12 py-20 lg:grid-cols-[minmax(0,616px)_minmax(0,1fr)] lg:gap-20 lg:py-28"
    >
      <a href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg">
        <Image src={MAP_IMAGE} alt={t.mapAlt} sizes="(min-width: 1024px) 616px, 100vw" className="h-auto w-full" />
      </a>
      <div className="flex flex-col items-start gap-6">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="t-h2 text-ink">{t.title}</h2>
        <p className="t-body-lg text-ink-muted">{t.text}</p>
        <ul className="flex flex-col gap-3.5">
          {info.map((row) => (
            <li key={row.icon} className="flex items-center gap-3 text-ink">
              <IconCircle icon={row.icon} size={36} iconSize={18} className="bg-sage-100 text-forest-700" />
              {row.content}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-3">
          <a href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {t.route}
            <Icon name="map-pin" size={18} />
          </a>
          <a href={SHOP.phoneHref} className="btn btn-secondary">
            {t.call}
            <Icon name="phone" size={18} />
          </a>
          <span className="px-2">
            <TextLink href={contactHref}>{t.more}</TextLink>
          </span>
        </div>
      </div>
    </section>
  );
}
