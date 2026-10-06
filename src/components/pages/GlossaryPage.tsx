import { getDict, otherLang } from "@/content";
import type { GlossaryTerm, Lang } from "@/content/types";
import { slugify } from "@/lib/format";
import { glossaryPath, guidePath, homePath } from "@/lib/routes";
import { glossaryJsonLd } from "@/lib/seo";
import { ContactCta } from "../ContactCta";
import { HashTarget } from "../HashTarget";
import { JsonLd } from "../JsonLd";
import { PageHeader } from "../PageHeader";
import { PageShell } from "../PageShell";
import { Inline } from "../RichText";

/** Terms grouped by their first letter, alphabetically in the page language. */
function byLetter(terms: GlossaryTerm[], locale: string) {
  const groups = new Map<string, GlossaryTerm[]>();
  for (const term of [...terms].sort((a, b) => a.term.localeCompare(b.term, locale))) {
    const letter = term.term.charAt(0).toLocaleUpperCase(locale);
    groups.set(letter, [...(groups.get(letter) ?? []), term]);
  }
  return [...groups.entries()];
}

export function GlossaryPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const path = glossaryPath(lang);
  const letters = byLetter(t.glossary.terms, t.locale);

  return (
    <PageShell lang={lang} path={path} alternate={glossaryPath(otherLang(lang))}>
      <PageHeader
        crumbs={[
          { name: t.common.home, href: homePath(lang) },
          { name: t.nav.guide, href: guidePath(lang) },
          { name: t.glossary.label, href: path },
        ]}
        crumbLabel={t.common.breadcrumb}
        eyebrow={t.glossary.eyebrow}
        title={t.glossary.title}
        lead={t.glossary.lead}
      >
        <nav aria-label={t.glossary.jump} className="flex flex-wrap gap-1.5 pt-2">
          {letters.map(([letter]) => (
            <a
              key={letter}
              href={`#letter-${slugify(letter)}`}
              className="t-label flex h-10 w-10 items-center justify-center rounded-full bg-card text-ink transition-colors hover:bg-sage-100"
            >
              {letter}
            </a>
          ))}
        </nav>
      </PageHeader>

      <div className="container-x pt-12 lg:pt-16">
        <div className="max-w-[860px]">
          {letters.map(([letter, terms]) => (
            <section
              key={letter}
              id={`letter-${slugify(letter)}`}
              aria-label={letter}
              className="grid scroll-mt-28 gap-4 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[72px_minmax(0,1fr)]"
            >
              <h2 className="t-h3 text-sage-500">{letter}</h2>
              <dl className="flex flex-col gap-7">
                {terms.map((term) => (
                  <div
                    key={term.term}
                    id={slugify(term.term)}
                    className="-mx-4 scroll-mt-28 rounded-md px-4 py-2 transition-colors data-[hash-target]:bg-sage-100"
                  >
                    <dt className="t-h4 text-ink">{term.term}</dt>
                    <dd className="mt-1.5 text-ink-muted">
                      <Inline text={term.text} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>

      <HashTarget />
      <ContactCta t={t.contactCta} />
      <JsonLd data={glossaryJsonLd(lang, t.glossary.terms, path)} />
    </PageShell>
  );
}
