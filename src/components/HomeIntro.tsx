import Link from "next/link";
import type { Dict } from "@/content/types";
import { Icon, type IconName, Stars } from "./icons";
import { type PromoSlide, PromoSlider } from "./PromoSlider";

export interface PromoTileData {
  id: string;
  eyebrow: string;
  title: string;
  href: string;
  icon: IconName;
  theme: "subtle" | "kraft";
}

const TILE_BG = { subtle: "bg-subtle", kraft: "bg-kraft-100" } as const;

/**
 * First screen of the home page: one line with the H1 and trust signals, then the promo banners
 * (about a third of the viewport) and two fixed tiles — so the next sections stay in view.
 */
export function HomeIntro({
  t,
  promo,
  slides,
  tiles,
  reviewsHref,
}: {
  t: Dict["intro"];
  promo: Dict["promo"];
  slides: PromoSlide[];
  tiles: PromoTileData[];
  reviewsHref: string;
}) {
  return (
    <section className="container-x pt-5 pb-10 sm:pt-6 lg:pb-14">
      <div className="flex flex-col gap-3 pb-4 lg:flex-row lg:items-center lg:justify-between lg:pb-5">
        <h1 className="flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-4">
          <span className="t-eyebrow inline-flex items-center gap-2 rounded-full bg-sage-100 py-[7px] pr-3.5 pl-3 text-ink">
            <Icon name="leaf" size={16} className="text-forest-700" />
            {t.eyebrow}
          </span>{" "}
          <span className="t-h3 t-accent text-ink">{t.title}</span>
        </h1>
        <div className="flex flex-wrap items-center gap-x-[18px] gap-y-1.5">
          <a href={reviewsHref} className="inline-flex items-center gap-2 hover:text-forest-700">
            <Stars />
            <span className="t-body-sm text-ink-muted">{t.rating}</span>
          </a>
          <span className="hidden h-[18px] w-px bg-sage-300 sm:block" />
          <span className="t-body-sm inline-flex items-center gap-1.5 text-ink-muted max-sm:hidden">
            <Icon name="shield-check" size={18} className="text-sage-500" />
            {t.thc}
          </span>
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <PromoSlider slides={slides} t={promo} />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              href={tile.href}
              className={`group flex flex-col justify-between gap-3 rounded-lg p-4 transition-shadow hover:shadow-card sm:p-5 lg:p-7 ${TILE_BG[tile.theme]}`}
            >
              <span className="flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-forest-700 lg:h-12 lg:w-12">
                  <Icon name={tile.icon} size={22} />
                </span>
                <Icon
                  name="arrow-right"
                  size={20}
                  className="text-ink transition-transform group-hover:translate-x-0.5 max-sm:hidden"
                />
              </span>
              <span className="flex flex-col gap-1">
                <span className="t-eyebrow text-kraft-700">{tile.eyebrow}</span>
                <span className="t-label text-ink sm:text-[18px] sm:leading-[26px] sm:font-semibold lg:text-[20px] lg:leading-7">
                  {tile.title}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
