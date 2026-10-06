import Link from "next/link";
import { ARTICLES, TOPICS } from "@/content/articles";
import { getDict, otherLang } from "@/content";
import type { Lang } from "@/content/types";
import { articleCard } from "@/lib/cards";
import { glossaryPath, guidePath, homePath } from "@/lib/routes";
import { ContactCta } from "../ContactCta";
import { Icon } from "../icons";
import { ArticleCards } from "../Journal";
import { PageHeader } from "../PageHeader";
import { PageShell } from "../PageShell";

export function GuidePage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const path = guidePath(lang);
  const crumbs = [
    { name: t.common.home, href: homePath(lang) },
    { name: t.nav.guide, href: path },
  ];

  return (
    <PageShell lang={lang} path={path} alternate={guidePath(otherLang(lang))}>
      <PageHeader crumbs={crumbs} crumbLabel={t.common.breadcrumb} eyebrow={t.guide.eyebrow} title={t.guide.h1} lead={t.guide.intro}>
        <nav aria-label={t.article.toc} className="flex flex-wrap gap-2 pt-2">
          {TOPICS.map((topic) => (
            <a
              key={topic}
              href={`#${topic}`}
              className="t-label rounded-full bg-card px-4 py-2 text-ink transition-colors hover:bg-sage-100"
            >
              {t.guide.topics[topic].title}
            </a>
          ))}
          <Link
            href={glossaryPath(lang)}
            className="t-label rounded-full bg-card px-4 py-2 text-ink transition-colors hover:bg-sage-100"
          >
            {t.glossary.label}
          </Link>
        </nav>
      </PageHeader>

      {TOPICS.map((topic) => (
        <section key={topic} id={topic} aria-labelledby={`${topic}-title`} className="container-x scroll-mt-28 pt-14 lg:pt-20">
          <div className="flex max-w-[760px] flex-col gap-2">
            <h2 id={`${topic}-title`} className="t-h3 text-ink">
              {t.guide.topics[topic].title}
            </h2>
            <p className="text-ink-muted">{t.guide.topics[topic].text}</p>
          </div>
          <div className="mt-8">
            <ArticleCards
              articles={ARTICLES.filter((entry) => entry.topic === topic).map((entry) => articleCard(lang, entry, true))}
              readMore={t.journal.readMore}
            />
          </div>
        </section>
      ))}

      <section className="container-x pt-14 lg:pt-20">
        <Link
          href={glossaryPath(lang)}
          className="group flex flex-col gap-6 rounded-lg bg-sage-100 p-7 text-ink transition-colors hover:bg-sage-200 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <span className="flex flex-col gap-2">
            <span className="t-eyebrow text-kraft-700">{t.guide.glossaryTeaser.eyebrow}</span>
            <span className="t-h3">{t.guide.glossaryTeaser.title}</span>
            <span className="max-w-[560px] text-ink-muted">{t.guide.glossaryTeaser.text}</span>
          </span>
          <span className="btn btn-primary shrink-0 self-start sm:self-center">
            {t.guide.glossaryTeaser.link}
            <Icon name="arrow-right" size={18} />
          </span>
        </Link>
      </section>

      <ContactCta t={t.contactCta} />
    </PageShell>
  );
}
