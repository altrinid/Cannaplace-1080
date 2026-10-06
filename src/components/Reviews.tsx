import { REVIEWS } from "@/content/reviews";
import { getDict } from "@/content";
import type { Lang } from "@/content/types";
import { fill } from "@/lib/format";
import { SHOP } from "@/lib/site";
import { Icon, Stars } from "./icons";
import { IconCircle, SectionHeading } from "./ui";

const QUOTES: Record<Lang, [string, string]> = { de: ["„", "“"], en: ["“", "”"] };

/** Customer reviews: Google rating summary, reviews from src/content/reviews.ts and an invitation to review. */
export function Reviews({ lang }: { lang: Lang }) {
  const t = getDict(lang).reviews;
  const rating = new Intl.NumberFormat(getDict(lang).locale, { minimumFractionDigits: 1 }).format(
    Number(SHOP.rating.replace(",", ".")),
  );
  const external = { target: "_blank", rel: "noopener noreferrer" } as const;

  return (
    <section id="bewertungen" className="container-x scroll-mt-24 py-20 lg:py-28">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <p className="t-body-lg mt-4 max-w-[680px] text-ink-muted">{t.text}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between gap-8 rounded-lg bg-forest-900 p-7 text-cream sm:p-8">
          <div>
            <p className="t-eyebrow text-kraft-400">Google</p>
            <p className="mt-4 flex items-end gap-3">
              <span className="text-[56px] leading-none font-medium tracking-[-0.02em]">{rating}</span>
              <Stars size={20} className="pb-2" />
            </p>
            <p className="t-body-sm mt-3 text-cream-muted">{fill(t.summary, { count: SHOP.reviewCount })}</p>
          </div>
          <a href={SHOP.mapsSearchUrl} {...external} className="btn btn-inverse self-start">
            {t.all}
            <Icon name="arrow-right" size={18} />
          </a>
        </div>

        {REVIEWS.map((review) => {
          const translation = review.lang === lang ? undefined : review.translation?.[lang];
          const [open, close] = QUOTES[translation ? lang : review.lang];
          return (
            <figure
              key={`${review.author}-${review.text}`}
              className="flex flex-col justify-between gap-8 rounded-lg border border-line bg-card p-7 sm:p-8"
            >
              <div>
                <Stars size={16} />
                <blockquote lang={translation ? lang : review.lang} className="t-h4 t-accent mt-4 text-ink">
                  {open}
                  {translation ?? review.text}
                  {close}
                </blockquote>
                {translation && <p className="t-caption mt-2 text-ink-muted">{t.translated}</p>}
              </div>
              <figcaption className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 font-semibold text-forest-700"
                >
                  {review.author.charAt(0)}
                </span>
                <span className="flex flex-col">
                  <span className="t-label text-ink">{review.author}</span>
                  <span className="t-caption text-ink-muted">{t.source[review.source]}</span>
                </span>
              </figcaption>
            </figure>
          );
        })}

        <div className="flex flex-col justify-between gap-8 rounded-lg bg-kraft-100 p-7 sm:p-8">
          <div>
            <IconCircle icon="chat" size={48} iconSize={22} className="bg-card text-forest-700" />
            <p className="t-h4 mt-5 text-ink">{t.inviteTitle}</p>
            <p className="t-body-sm mt-2 text-ink-muted">{t.inviteText}</p>
          </div>
          <a href={SHOP.mapsSearchUrl} {...external} className="btn btn-primary self-start">
            {t.inviteCta}
            <Icon name="arrow-right" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
