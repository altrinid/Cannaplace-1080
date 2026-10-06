import Image from "next/image";
import Link from "next/link";
import type { ImageKey, Tone } from "@/content/types";
import { PRODUCT_IMAGES } from "@/lib/images";
import { HempLeafLine } from "./hemp";
import { SectionHeading, TONE_BG, TextLink } from "./ui";

export type ArticleCard = {
  href: string;
  tag: string;
  time: string;
  title: string;
  lead?: string;
  image: ImageKey | "leaf";
  tone: Tone;
};

export function ArticleCards({
  articles,
  readMore,
  headingLevel = "h3",
}: {
  articles: ArticleCard[];
  readMore: string;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <div className="grid gap-10 md:grid-cols-3 md:gap-6">
      {articles.map((article) => (
        <article key={article.href} className="group flex flex-col items-start gap-4">
          <Link
            href={article.href}
            tabIndex={-1}
            aria-hidden="true"
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
          </Link>
          <div className="flex items-center gap-2.5">
            <span className="t-eyebrow text-kraft-700">{article.tag}</span>
            <span className="h-1 w-1 rounded-full bg-sage-300" />
            <span className="t-body-sm text-ink-muted">{article.time}</span>
          </div>
          <Heading className="t-h4 text-ink">
            <Link href={article.href} className="hover:text-forest-700">
              {article.title}
            </Link>
          </Heading>
          {article.lead && <p className="t-body-sm text-ink-muted">{article.lead}</p>}
          <TextLink href={article.href}>{readMore}</TextLink>
        </article>
      ))}
    </div>
  );
}

export function Journal({
  t,
  articles,
  allHref,
}: {
  t: { eyebrow: string; title: string; link: string; readMore: string };
  articles: ArticleCard[];
  allHref: string;
}) {
  return (
    <section id="ratgeber" className="scroll-mt-24 bg-subtle">
      <div className="container-x pt-20 pb-16 lg:pt-[104px] lg:pb-[72px]">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} action={<TextLink href={allHref}>{t.link}</TextLink>} />
        <div className="mt-10">
          <ArticleCards articles={articles} readMore={t.readMore} />
        </div>
      </div>
    </section>
  );
}
