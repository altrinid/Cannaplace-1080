import { ARTICLES } from "@/content/articles";
import { getDict, otherLang } from "@/content";
import type { Lang } from "@/content/types";
import { articleCard } from "@/lib/cards";
import { guidePath, homePath } from "@/lib/routes";
import { ContactCta } from "../ContactCta";
import { ArticleCards } from "../Journal";
import { PageHeader } from "../PageHeader";
import { PageShell } from "../PageShell";

export function GuidePage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const path = guidePath(lang);

  return (
    <PageShell lang={lang} path={path} alternate={guidePath(otherLang(lang))}>
      <PageHeader
        crumbs={[
          { name: t.common.home, href: homePath(lang) },
          { name: t.nav.guide, href: path },
        ]}
        crumbLabel={t.common.breadcrumb}
        eyebrow={t.guide.eyebrow}
        title={t.guide.h1}
        lead={t.guide.intro}
      />
      <section className="container-x pt-12 lg:pt-16">
        <ArticleCards
          articles={ARTICLES.map((entry) => articleCard(lang, entry, true))}
          readMore={t.journal.readMore}
          headingLevel="h2"
        />
      </section>
      <ContactCta t={t.contactCta} />
    </PageShell>
  );
}
