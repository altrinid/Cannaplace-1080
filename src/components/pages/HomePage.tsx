import { ARTICLES } from "@/content/articles";
import { BESTSELLER_IDS, CATEGORIES, getProduct } from "@/content/catalog";
import { getDict, otherLang } from "@/content";
import type { Lang } from "@/content/types";
import { articleCard, cardProduct, categoryTile } from "@/lib/cards";
import { guidePath, homePath, infoPath, productPath, shopPath } from "@/lib/routes";
import { storeJsonLd, websiteJsonLd } from "@/lib/seo";
import { Bestsellers } from "../Bestsellers";
import { Categories } from "../Categories";
import { Hero } from "../Hero";
import { JsonLd } from "../JsonLd";
import { Journal } from "../Journal";
import { LabReports } from "../LabReports";
import { Newsletter } from "../Newsletter";
import { PageShell } from "../PageShell";
import { TextFaqSection } from "../TextFaqSection";
import { ValueProps } from "../ValueProps";
import { VisitStore } from "../VisitStore";

const COA_SAMPLE_ID = "aromaoel-10";

export function HomePage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const sample = getProduct(COA_SAMPLE_ID);

  return (
    <PageShell lang={lang} path={homePath(lang)} alternate={homePath(otherLang(lang))}>
      <Hero t={t.hero} shopHref={shopPath(lang)} visitHref={infoPath(lang, "contact")} />
      <ValueProps items={t.valueProps} />
      <Categories
        t={t.categories}
        items={CATEGORIES.map((category) => categoryTile(lang, category))}
        allHref={shopPath(lang)}
      />
      <Bestsellers
        lang={lang}
        products={BESTSELLER_IDS.map((id) => cardProduct(lang, getProduct(id)))}
        allHref={shopPath(lang)}
      />
      <LabReports
        t={t.lab}
        lang={lang}
        sample={{
          name: sample[lang].name,
          coa: sample.coa!,
          href: productPath(lang, sample),
          linkLabel: t.coa.toProduct,
        }}
        labHref={infoPath(lang, "lab")}
      />
      <VisitStore t={t.store} city={t.contact.city} contactHref={infoPath(lang, "contact")} />
      <TextFaqSection
        className="pt-0 lg:pt-0"
        eyebrow={t.homeSeo.eyebrow}
        title={t.homeSeo.title}
        body={t.homeSeo.body}
        faqTitle={t.homeSeo.faqTitle}
        faq={t.homeSeo.faq}
      />
      <Journal t={t.journal} articles={ARTICLES.map((entry) => articleCard(lang, entry))} allHref={guidePath(lang)} />
      <Newsletter t={t.newsletter} />
      <JsonLd data={storeJsonLd(lang)} />
      <JsonLd data={websiteJsonLd(lang)} />
    </PageShell>
  );
}
