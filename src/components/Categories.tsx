import Image from "next/image";
import type { Dict } from "@/content/types";
import { PRODUCT_IMAGES } from "@/lib/images";
import { Icon } from "./icons";
import { SectionHeading, TONE_BG, TextLink } from "./ui";

export function Categories({ t }: { t: Dict["categories"] }) {
  return (
    <section id="sortiment" className="container-x scroll-mt-24 pt-20 pb-14 lg:pt-[104px]">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} action={<TextLink href="#shop">{t.link}</TextLink>} />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {t.items.map((item) => (
          <a
            key={item.title}
            href="#shop"
            className={`group flex aspect-[302/380] flex-col rounded-lg p-4 transition-shadow hover:shadow-card sm:p-6 ${TONE_BG[item.tone]}`}
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
          </a>
        ))}
      </div>
    </section>
  );
}
