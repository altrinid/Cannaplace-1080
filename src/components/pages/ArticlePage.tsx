import Link from "next/link";
import { type ArticleEntry, ARTICLES, getArticle } from "@/content/articles";
import { getProduct } from "@/content/catalog";
import { getDict, otherLang } from "@/content";
import type { Lang } from "@/content/types";
import { articleCard, cardLabels, cardProduct } from "@/lib/cards";
import { fill, formatDate, readingMinutes, slugify } from "@/lib/format";
import { articlePath, guidePath, homePath } from "@/lib/routes";
import { articleJsonLd, faqJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "../Breadcrumbs";
import { ContactCta } from "../ContactCta";
import { FaqList } from "../FaqList";
import { Icon } from "../icons";
import { ArticleCards } from "../Journal";
import { JsonLd } from "../JsonLd";
import { PageShell } from "../PageShell";
import { ProductCard } from "../ProductCard";
import { RichText } from "../RichText";

export function ArticlePage({ lang, entry }: { lang: Lang; entry: ArticleEntry }) {
  const t = getDict(lang);
  const copy = getArticle(lang, entry.id);
  const path = articlePath(lang, entry.id);
  const toc = copy.body.flatMap((block) => (block.type === "h2" ? [{ id: slugify(block.text), text: block.text }] : []));
  const tocLinks = (
    <ol className="flex flex-col gap-2.5">
      {toc.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className="t-body-sm text-ink-muted transition-colors hover:text-forest-700">
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <PageShell lang={lang} path={path} alternate={articlePath(otherLang(lang), entry.id)}>
      <article>
        <header className="bg-subtle">
          <div className="container-x pt-6 pb-12 lg:pb-16">
            <Breadcrumbs
              label={t.common.breadcrumb}
              items={[
                { name: t.common.home, href: homePath(lang) },
                { name: t.nav.guide, href: guidePath(lang) },
                { name: copy.title, href: path },
              ]}
            />
            <div className="mt-8 flex max-w-[860px] flex-col items-start gap-5 lg:mt-10">
              <p className="flex items-center gap-2.5">
                <span className="t-eyebrow text-kraft-700">{copy.tag}</span>
                <span className="h-1 w-1 rounded-full bg-sage-300" />
                <span className="t-body-sm text-ink-muted">
                  {fill(t.article.readingTime, { n: readingMinutes(copy) })}
                </span>
              </p>
              <h1 className="t-h2 text-ink">{copy.title}</h1>
              <p className="t-body-lg text-ink-muted">{copy.lead}</p>
              <div className="flex items-center gap-3 pt-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-700 text-cream">
                  <Icon name="leaf" size={20} />
                </span>
                <span className="flex flex-col">
                  <span className="t-label text-ink">
                    {t.article.author} · {t.article.authorRole}
                  </span>
                  <span className="t-body-sm text-ink-muted">
                    <time dateTime={entry.published}>
                      {fill(t.article.published, { date: formatDate(lang, entry.published) })}
                    </time>
                    {entry.updated !== entry.published && (
                      <>
                        {" · "}
                        <time dateTime={entry.updated}>
                          {fill(t.article.updated, { date: formatDate(lang, entry.updated) })}
                        </time>
                      </>
                    )}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="container-x grid gap-12 py-12 lg:grid-cols-[240px_minmax(0,760px)] lg:gap-20 lg:py-16">
          <aside className="hidden lg:block">
            <nav aria-label={t.article.toc} className="sticky top-28 flex flex-col gap-4">
              <p className="t-eyebrow text-kraft-700">{t.article.toc}</p>
              {tocLinks}
            </nav>
          </aside>
          <div>
            <details className="mb-10 rounded-md border border-line px-5 py-4 lg:hidden">
              <summary className="t-label flex cursor-pointer list-none items-center justify-between text-ink [&::-webkit-details-marker]:hidden">
                {t.article.toc}
                <Icon name="chevron-down" size={18} />
              </summary>
              <div className="pt-4">{tocLinks}</div>
            </details>

            <RichText blocks={copy.body} />

            <section className="mt-16 rounded-lg bg-subtle p-6 sm:p-8">
              <h2 className="t-h3 text-ink">{t.article.productsTitle}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {entry.products.map((id) => (
                  <ProductCard key={id} product={cardProduct(lang, getProduct(id))} labels={cardLabels(lang)} />
                ))}
              </div>
            </section>

            <section className="mt-16">
              <h2 className="t-h3 text-ink">{t.common.faqTitle}</h2>
              <FaqList items={copy.faq} className="mt-6" />
            </section>

            <p className="t-body-sm mt-10 text-ink-muted">{t.article.disclaimer}</p>
          </div>
        </div>
      </article>

      <section className="bg-subtle">
        <div className="container-x py-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="t-h3 text-ink">{t.article.moreTitle}</h2>
            <Link href={guidePath(lang)} className="t-label inline-flex items-center gap-2 text-ink hover:text-forest-700">
              {t.journal.link}
              <Icon name="arrow-right" size={18} />
            </Link>
          </div>
          <div className="mt-10">
            <ArticleCards
              articles={ARTICLES.filter((other) => other.id !== entry.id).map((other) => articleCard(lang, other))}
              readMore={t.journal.readMore}
            />
          </div>
        </div>
      </section>

      <ContactCta t={t.contactCta} />
      <JsonLd
        data={articleJsonLd(lang, {
          headline: copy.title,
          description: copy.meta.description,
          path,
          published: entry.published,
          updated: entry.updated,
        })}
      />
      <JsonLd data={faqJsonLd(copy.faq)} />
    </PageShell>
  );
}
