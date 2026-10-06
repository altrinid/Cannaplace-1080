import type { ReactNode } from "react";
import { getDict, otherLang } from "@/content";
import type { InfoPageKey, Lang } from "@/content/types";
import { homePath, infoPath } from "@/lib/routes";
import { faqJsonLd } from "@/lib/seo";
import { ContactCta } from "../ContactCta";
import { FaqList } from "../FaqList";
import { JsonLd } from "../JsonLd";
import { PageHeader } from "../PageHeader";
import { PageShell } from "../PageShell";
import { RichText } from "../RichText";

/** Text page (about, shipping, FAQ, legal …); `children` render between header and text. */
export function InfoPage({ lang, page, children }: { lang: Lang; page: InfoPageKey; children?: ReactNode }) {
  const t = getDict(lang);
  const copy = t.pages[page];
  const path = infoPath(lang, page);
  const faq = copy.groups?.flatMap((group) => group.items) ?? copy.faq;

  return (
    <PageShell lang={lang} path={path} alternate={infoPath(otherLang(lang), page)}>
      <PageHeader
        crumbs={[
          { name: t.common.home, href: homePath(lang) },
          { name: copy.label, href: path },
        ]}
        crumbLabel={t.common.breadcrumb}
        eyebrow={copy.eyebrow}
        title={copy.title}
        lead={copy.lead}
      />
      {children}
      {copy.body.length > 0 && (
        <section className="container-x pt-12 lg:pt-16">
          <RichText blocks={copy.body} className="max-w-[760px]" />
        </section>
      )}
      {copy.groups?.map((group) => (
        <section key={group.title} className="container-x pt-12 lg:pt-16">
          <div className="max-w-[860px]">
            <h2 className="t-h3 text-ink">{group.title}</h2>
            <FaqList items={group.items} className="mt-6" />
          </div>
        </section>
      ))}
      {copy.faq && (
        <section className="container-x pt-12 lg:pt-16">
          <div className="max-w-[860px]">
            <h2 className="t-h3 text-ink">{t.common.faqTitle}</h2>
            <FaqList items={copy.faq} className="mt-6" />
          </div>
        </section>
      )}
      <ContactCta t={t.contactCta} />
      {faq && <JsonLd data={faqJsonLd(faq)} />}
    </PageShell>
  );
}
