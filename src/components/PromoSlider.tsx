"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Dict, ImageKey } from "@/content/types";
import { PRODUCT_IMAGES } from "@/lib/images";
import { Icon } from "./icons";

export interface PromoSlide {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  alt: string;
  images: ImageKey[];
  theme: "sage" | "kraft" | "forest";
}

const INTERVAL = 6500;

const THEMES = {
  sage: { bg: "bg-sage-100", plate: "bg-sage-200", eyebrow: "text-kraft-700", title: "text-ink", text: "text-ink-muted", cta: "btn-primary", dark: false },
  kraft: { bg: "bg-kraft-100", plate: "bg-kraft-400/30", eyebrow: "text-kraft-700", title: "text-ink", text: "text-ink-muted", cta: "btn-primary", dark: false },
  forest: { bg: "bg-forest-700", plate: "bg-forest-800", eyebrow: "text-kraft-400", title: "text-cream", text: "text-cream-muted", cta: "btn-inverse", dark: true },
} as const;

// Product illustrations share one square canvas with the object standing on its bottom edge,
// so they can be layered: x = horizontal offset (% of the image), size and bottom = % of the image area.
const LAYOUTS: { x: number; size: number; bottom: number }[][] = [
  [],
  [{ x: 0, size: 94, bottom: 2 }],
  [
    { x: -20, size: 74, bottom: 16 },
    { x: 16, size: 90, bottom: 2 },
  ],
  [
    { x: -27, size: 74, bottom: 9 },
    { x: 27, size: 74, bottom: 9 },
    { x: 0, size: 92, bottom: 2 },
  ],
];

function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function Slide({ slide, first }: { slide: PromoSlide; first: boolean }) {
  const theme = THEMES[slide.theme];
  const layout = LAYOUTS[Math.min(slide.images.length, 3)];
  return (
    <div
      className={`grid h-full grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] ${theme.bg}`}
    >
      {/* Bottom padding keeps the text clear of the slider controls. */}
      <div className="flex h-full flex-col items-start justify-center gap-2.5 pt-5 pr-2 pb-12 pl-5 sm:gap-3.5 sm:pb-16 sm:pl-10 lg:pl-14">
        <p className={`t-eyebrow ${theme.eyebrow}`}>{slide.eyebrow}</p>
        <p className={`t-h3 ${theme.title}`}>{slide.title}</p>
        <p className={`t-body-sm hidden max-w-[420px] sm:block lg:text-base lg:leading-[26px] ${theme.text}`}>
          {slide.text}
        </p>
        <Link href={slide.href} className={`btn ${theme.cta} mt-1.5 max-sm:gap-2 max-sm:px-4 max-sm:py-3 max-sm:text-[14px] sm:mt-2.5`}>
          {slide.cta}
          <Icon name="arrow-right" size={18} />
        </Link>
      </div>
      <div className="relative h-full" role="img" aria-label={slide.alt}>
        <div className={`absolute top-1/2 left-1/2 aspect-square h-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full ${theme.plate}`} />
        {slide.images.slice(0, 3).map((key, i) => {
          const spot = layout[i];
          const style: CSSProperties = {
            height: `${spot.size}%`,
            bottom: `${spot.bottom}%`,
            left: "50%",
            transform: `translateX(calc(-50% + ${spot.x}%))`,
          };
          return (
            <Image
              key={`${key}-${i}`}
              src={PRODUCT_IMAGES[key]}
              alt=""
              sizes="(min-width: 1024px) 340px, 45vw"
              className="absolute aspect-square w-auto max-w-none object-contain"
              style={style}
              priority={first}
            />
          );
        })}
      </div>
    </div>
  );
}

/**
 * Promo banners on the home page: swipeable (CSS scroll snap), rotates every few seconds unless the visitor
 * pauses it, hovers or focuses it, or prefers reduced motion. Off-screen slides are inert.
 */
export function PromoSlider({ slides, t }: { slides: PromoSlide[]; t: Dict["promo"] }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [holding, setHolding] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
  const count = slides.length;
  const rotating = count > 1 && !paused && !reducedMotion;
  const dark = THEMES[slides[index]?.theme ?? "sage"].dark;

  const go = useCallback(
    (target: number) => {
      const el = track.current;
      if (!el) return;
      const next = (target + count) % count;
      el.scrollTo({ left: next * el.clientWidth, behavior: reducedMotion ? "auto" : "smooth" });
    },
    [count, reducedMotion],
  );

  useEffect(() => {
    if (!rotating || holding) return;
    const timer = window.setTimeout(() => go(index + 1), INTERVAL);
    return () => window.clearTimeout(timer);
  }, [go, index, rotating, holding]);

  const label = (n: number) => t.slide.replace("{n}", String(n)).replace("{total}", String(count));
  const control = `icon-btn h-9 w-9 ${dark ? "text-cream hover:bg-forest-800" : "text-ink hover:bg-white/60"}`;

  return (
    <section
      aria-roledescription="carousel"
      aria-label={t.label}
      className="relative h-[244px] overflow-hidden rounded-lg sm:h-[300px] lg:h-[340px] xl:h-[360px]"
      onMouseEnter={() => setHolding(true)}
      onMouseLeave={() => setHolding(false)}
      onFocus={() => setHolding(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHolding(false);
      }}
    >
      <div
        ref={track}
        onScroll={(event) => {
          const el = event.currentTarget;
          const current = Math.round(el.scrollLeft / el.clientWidth);
          if (current !== index && current >= 0 && current < count) setIndex(current);
        }}
        className="flex h-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={label(i + 1)}
            inert={i !== index}
            className="h-full w-full shrink-0 snap-start snap-always"
          >
            <Slide slide={slide} first={i === 0} />
          </div>
        ))}
      </div>

      {count > 1 && (
        <div
          className={`absolute bottom-2.5 left-3 flex items-center gap-0.5 rounded-full px-1 py-0.5 sm:bottom-4 sm:left-8 lg:left-12 ${
            dark ? "bg-forest-900/50" : "bg-page/70"
          } backdrop-blur-sm`}
        >
          <button type="button" onClick={() => go(index - 1)} aria-label={t.prev} className={`${control} max-sm:hidden`}>
            <Icon name="chevron-left" size={18} />
          </button>
          <div className="flex items-center gap-0.5 px-0.5">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => go(i)}
                aria-label={label(i + 1)}
                aria-current={i === index ? "true" : undefined}
                className="flex h-9 w-6 items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${i === index ? "w-5" : "w-2"} ${
                    dark ? (i === index ? "bg-cream" : "bg-cream/40") : i === index ? "bg-ink" : "bg-ink/25"
                  }`}
                />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => go(index + 1)} aria-label={t.next} className={`${control} max-sm:hidden`}>
            <Icon name="chevron-right" size={18} />
          </button>
          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setPaused((v) => !v)}
              aria-label={paused ? t.play : t.pause}
              className={control}
            >
              <Icon name={paused ? "play" : "pause"} size={16} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
