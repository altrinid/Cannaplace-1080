import Image from "next/image";
import Link from "next/link";
import type { ImageKey, Tone } from "@/content/types";
import { PRODUCT_IMAGES } from "@/lib/images";
import { Icon } from "./icons";
import { SectionHeading, TONE_BG, TextLink } from "./ui";

export type CategoryTile = { title: string; count: string; href: string; image: ImageKey; tone: Tone };

export function CategoryTiles({ items, compact = false }: { items: CategoryTile[]; compact?: boolean }) {
  return (
    <div className={`grid grid-cols-2 gap-4 sm:gap-6 ${compact ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`group flex flex-col rounded-lg p-4 transition-shadow hover:shadow-card sm:p-6 ${
            compact ? "aspect-[4/3]" : "aspect-[302/380]"
          } ${TONE_BG[item.tone]}`}
        >
          <div className="relative min-h-0 flex-1">
            <Image
              src={PRODUCT_IMAGES[item.image]}
              alt=""
              sizes="(min-width: 1024px) 250px, 40vw"
              className="absolute inset-0 m-auto h-full w-full object-contain transition-transform duration-300 group-hover:-translate-y-1"
            />
          </div>
          <div className="flex items-end justify-between gap-3 pt-4">
            <div className="flex flex-col gap-1">
              <h3 className="t-h3 text-ink">{item.title}</h3>
              <p className="t-body-sm text-ink-muted">{item.count}</p>
            </div>
            <span className="icon-btn hidden bg-card text-ink sm:inline-flex">
              <Icon name="arrow-right" size={20} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Categories({
  t,
  items,
  allHref,
}: {
  t: { eyebrow: string; title: string; link: string };
  items: CategoryTile[];
  allHref: string;
}) {
  return (
    <section id="sortiment" className="container-x scroll-mt-24 pt-20 pb-14 lg:pt-[104px]">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} action={<TextLink href={allHref}>{t.link}</TextLink>} />
      <div className="mt-10">
        <CategoryTiles items={items} />
      </div>
    </section>
  );
}
