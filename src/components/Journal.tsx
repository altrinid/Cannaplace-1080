import Image from "next/image";
import type { Dict } from "@/content/types";
import { PRODUCT_IMAGES } from "@/lib/images";
import { HempLeafLine } from "./hemp";
import { SectionHeading, TONE_BG, TextLink } from "./ui";

export function Journal({ t }: { t: Dict["journal"] }) {
  return (
    <section id="ratgeber" className="scroll-mt-24 bg-subtle">
      <div className="container-x pt-20 pb-16 lg:pt-[104px] lg:pb-[72px]">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} action={<TextLink href="#ratgeber">{t.link}</TextLink>} />
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
          {t.articles.map((article) => (
            <article key={article.title} className="group flex flex-col items-start gap-4">
              <a
                href="#ratgeber"
                aria-label={article.title}
                className={`relative block aspect-[410/260] w-full overflow-hidden rounded-lg ${TONE_BG[article.tone]}`}
              >
                {article.image === "leaf" ? (
                  <HempLeafLine
                    className="absolute inset-0 m-auto aspect-square h-[96%] text-sage-500 transition-transform duration-300 group-hover:scale-[1.03]"
                    strokeWidth={1.6}
                  />
                ) : (
                  <Image
                    src={PRODUCT_IMAGES[article.image]}
                    alt=""
                    sizes="(min-width: 768px) 260px, 60vw"
                    className="absolute inset-0 m-auto h-[96%] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                )}
              </a>
              <div className="flex items-center gap-2.5">
                <span className="t-eyebrow text-kraft-700">{article.tag}</span>
                <span className="h-1 w-1 rounded-full bg-sage-300" />
                <span className="t-body-sm text-ink-muted">{article.time}</span>
              </div>
              <h3 className="t-h4 text-ink">{article.title}</h3>
              <TextLink href="#ratgeber">{t.readMore}</TextLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
