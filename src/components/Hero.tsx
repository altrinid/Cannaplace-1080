import Image from "next/image";
import type { Dict } from "@/content/types";
import { PRODUCT_IMAGES } from "@/lib/images";
import { HempLeafLine } from "./hemp";
import { Icon, Stars } from "./icons";

// Positions are percentages of the 600×620 "Hero Visual" frame in Figma.
function HeroVisual({ t }: { t: Dict["hero"] }) {
  return (
    <div className="relative mx-auto aspect-[600/620] w-full max-w-[600px]">
      <div
        className="absolute overflow-hidden bg-sage-100"
        style={{
          left: "10%",
          top: "1.61%",
          width: "83.33%",
          height: "96.77%",
          borderRadius: "50% 50% 6.4% 6.4% / 41.67% 41.67% 5.33% 5.33%",
        }}
      >
        <div className="absolute" style={{ left: "-6%", top: "3%", width: "112%" }}>
          <HempLeafLine className="w-full text-sage-300" strokeWidth={1.2} />
        </div>
      </div>
      <div
        className="absolute rounded-[50%] bg-sage-200"
        style={{ left: "28%", top: "87.1%", width: "63.33%", height: "9.03%" }}
      />
      <Image
        src={PRODUCT_IMAGES.jar}
        alt=""
        sizes="(min-width: 1024px) 325px, 54vw"
        className="absolute h-auto"
        style={{ left: "48.75%", top: "39.84%", width: "54.17%" }}
        priority
      />
      <Image
        src={PRODUCT_IMAGES.bottle}
        alt={t.imageAlt}
        sizes="(min-width: 1024px) 440px, 73vw"
        className="absolute h-auto"
        style={{ left: "14.33%", top: "23.31%", width: "72.92%" }}
        priority
      />
      <div
        className="absolute hidden items-center gap-3 rounded-md bg-card py-3.5 pr-5 pl-3.5 shadow-float md:flex"
        style={{ left: "58.33%", top: "15.48%" }}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100">
          <Icon name="flask" size={20} />
        </span>
        <span className="flex flex-col">
          <span className="t-title text-ink">{t.floatLabTitle}</span>
          <span className="t-body-sm whitespace-nowrap text-ink-muted">{t.floatLabText}</span>
        </span>
      </div>
      <div
        className="absolute hidden flex-col gap-1.5 rounded-md bg-card px-5 py-4 shadow-float md:flex"
        style={{ left: "-1.33%", top: "72.9%" }}
      >
        <span className="flex items-center gap-2.5">
          <span className="t-h3 text-ink">5,0</span>
          <Stars size={16} />
        </span>
        <span className="t-body-sm whitespace-nowrap text-ink-muted">{t.floatRatingText}</span>
      </div>
    </div>
  );
}

export function Hero({ t }: { t: Dict["hero"] }) {
  return (
    <section className="container-x grid items-center gap-12 pt-10 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)] lg:gap-16 lg:pt-12 lg:pb-[72px]">
      <div className="flex flex-col items-start gap-7">
        <span className="t-eyebrow inline-flex items-center gap-2 rounded-full bg-sage-100 py-[7px] pr-3.5 pl-3 text-ink">
          <Icon name="leaf" size={16} className="text-forest-700" />
          {t.eyebrow}
        </span>
        <h1 className="t-display text-ink">
          {t.titleLine1}
          <br />
          <span className="t-accent text-sage-500">{t.titleLine2}</span>
        </h1>
        <p className="t-body-lg max-w-[616px] text-ink-muted">{t.lead}</p>
        <div className="flex flex-wrap gap-3">
          <a href="#shop" className="btn btn-primary">
            {t.ctaPrimary}
            <Icon name="arrow-right" size={18} />
          </a>
          <a href="#besuch" className="btn btn-secondary">
            {t.ctaSecondary}
            <Icon name="map-pin" size={18} />
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-x-[18px] gap-y-2 pt-2">
          <span className="inline-flex items-center gap-2">
            <Stars />
            <span className="t-body-sm text-ink-muted">{t.rating}</span>
          </span>
          <span className="hidden h-[18px] w-px bg-sage-300 sm:block" />
          <span className="t-body-sm inline-flex items-center gap-1.5 text-ink-muted">
            <Icon name="shield-check" size={18} className="text-sage-500" />
            {t.thc}
          </span>
        </div>
      </div>
      <HeroVisual t={t} />
    </section>
  );
}
