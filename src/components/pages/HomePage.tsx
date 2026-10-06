import { FEATURED_ARTICLE_IDS, getArticleEntry } from "@/content/articles";
import { activeBanners, PROMO_TILES, type PromoLink } from "@/content/banners";
import { BESTSELLER_IDS, CATEGORIES, getProduct } from "@/content/catalog";
import { getDict, otherLang } from "@/content";
import type { Lang } from "@/content/types";
import { articleCard, cardProduct, categoryTile } from "@/lib/cards";
import { articlePath, categoryPath, guidePath, homePath, infoPath, productPath, shopPath } from "@/lib/routes";
import { storeJsonLd, websiteJsonLd } from "@/lib/seo";
import { Bestsellers } from "../Bestsellers";
import { Categories } from "../Categories";
import { HomeIntro } from "../HomeIntro";
import { JsonLd } from "../JsonLd";
import { Journal } from "../Journal";
import { LabReports } from "../LabReports";
import { Newsletter } from "../Newsletter";
import { PageShell } from "../PageShell";
import { Reviews } from "../Reviews";
import { TextFaqSection } from "../TextFaqSection";
import { ValueProps } from "../ValueProps";
import { VisitStore } from "../VisitStore";

const COA_SAMPLE_ID = "aromaoel-10";

function promoHref(lang: Lang, link: PromoLink) {
  if ("category" in link) return categoryPath(lang, link.category);
  if ("page" in link) return infoPath(lang, link.page);
  if ("article" in link) return articlePath(lang, link.article);
  return shopPath(lang);
}

export function HomePage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const sample = getProduct(COA_SAMPLE_ID);
  // Banners with a date window are filtered when the site is built (each deploy rebuilds the page).
  const today = new Date().toISOString().slice(0, 10);

  return (
    <PageShell lang={lang} path={homePath(lang)} alternate={homePath(otherLang(lang))}>
      <HomeIntro
        t={t.intro}
        promo={t.promo}
        slides={activeBanners(today).map((banner) => ({
          id: banner.id,
          ...banner[lang],
          href: promoHref(lang, banner.link),
          images: banner.images,
          theme: banner.theme,
        }))}
        tiles={PROMO_TILES.map((tile) => ({
          id: tile.id,
          ...tile[lang],
          href: promoHref(lang, tile.link),
          icon: tile.icon,
          theme: tile.theme,
        }))}
        reviewsHref="#bewertungen"
      />
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
      <Reviews lang={lang} />
      <VisitStore t={t.store} city={t.contact.city} contactHref={infoPath(lang, "contact")} />
      <TextFaqSection
        className="pt-0 lg:pt-0"
        eyebrow={t.homeSeo.eyebrow}
        title={t.homeSeo.title}
        body={t.homeSeo.body}
        faqTitle={t.homeSeo.faqTitle}
        faq={t.homeSeo.faq}
      />
      <Journal
        t={t.journal}
        articles={FEATURED_ARTICLE_IDS.map((id) => articleCard(lang, getArticleEntry(id)))}
        allHref={guidePath(lang)}
      />
      <Newsletter t={t.newsletter} />
      <JsonLd data={storeJsonLd(lang)} />
      <JsonLd data={websiteJsonLd(lang)} />
    </PageShell>
  );
}
