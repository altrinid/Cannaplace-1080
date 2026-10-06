import Image from "next/image";
import type { ReactNode } from "react";
import { getDict, otherLang } from "@/content";
import type { Lang } from "@/content/types";
import { MAP_IMAGE } from "@/lib/images";
import { homePath, infoPath } from "@/lib/routes";
import { storeJsonLd } from "@/lib/seo";
import { SHOP } from "@/lib/site";
import type { IconName } from "../icons";
import { Icon, Stars } from "../icons";
import { JsonLd } from "../JsonLd";
import { PageHeader } from "../PageHeader";
import { PageShell } from "../PageShell";
import { RichText } from "../RichText";
import { IconCircle } from "../ui";

function InfoRow({ icon, title, children }: { icon: IconName; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 border-t border-line py-6 first:border-t-0 first:pt-0">
      <IconCircle icon={icon} size={44} iconSize={20} className="bg-sage-100 text-forest-700" />
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <h2 className="t-title text-ink">{title}</h2>
        <div className="text-ink-muted">{children}</div>
      </div>
    </div>
  );
}

export function ContactPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const copy = t.pages.contact;
  const path = infoPath(lang, "contact");

  return (
    <PageShell lang={lang} path={path} alternate={infoPath(otherLang(lang), "contact")}>
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
      <section className="container-x grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,616px)] lg:gap-20 lg:py-16">
        <div>
          <InfoRow icon="map-pin" title={t.contact.addressTitle}>
            <address className="not-italic">
              {SHOP.name}
              <br />
              {SHOP.street}, {t.contact.city}
            </address>
            <a
              href={SHOP.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="t-label mt-2 inline-flex items-center gap-2 text-forest-700 hover:underline"
            >
              {t.store.route}
              <Icon name="arrow-right" size={16} />
            </a>
          </InfoRow>
          <InfoRow icon="clock" title={t.contact.hoursTitle}>
            <table className="w-full max-w-[360px]">
              <tbody>
                {t.contact.hoursTable.map(([days, hours]) => (
                  <tr key={days}>
                    <th scope="row" className="py-1 pr-6 text-left font-normal">
                      {days}
                    </th>
                    <td className="py-1 text-right text-ink">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </InfoRow>
          <InfoRow icon="phone" title={t.contact.phoneTitle}>
            <a href={SHOP.phoneHref} className="t-title text-ink hover:text-forest-700">
              {SHOP.phoneDisplay}
            </a>
          </InfoRow>
          <InfoRow icon="instagram" title={t.contact.socialTitle}>
            <a
              href={SHOP.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-forest-700"
            >
              {SHOP.instagramHandle}
            </a>
          </InfoRow>
          <InfoRow icon="tram" title={t.contact.transitTitle}>
            {t.contact.transit}
          </InfoRow>
        </div>
        <div className="flex flex-col gap-6">
          <a href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg">
            <Image src={MAP_IMAGE} alt={t.store.mapAlt} sizes="(min-width: 1024px) 616px, 100vw" className="h-auto w-full" />
          </a>
          <a
            href={SHOP.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-wrap items-center gap-2.5 rounded-md bg-subtle px-6 py-5 transition-colors hover:bg-sage-100"
          >
            <Stars size={16} />
            <span className="t-label text-ink">{t.intro.rating}</span>
            <Icon name="arrow-right" size={18} className="ml-auto text-ink" />
          </a>
          <div className="flex flex-wrap gap-3">
            <a href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.store.route}
              <Icon name="map-pin" size={18} />
            </a>
            <a href={SHOP.phoneHref} className="btn btn-secondary">
              {t.store.call}
              <Icon name="phone" size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="container-x pb-20 lg:pb-28">
        <RichText blocks={copy.body} className="max-w-[760px]" />
      </section>
      <JsonLd data={storeJsonLd(lang)} />
    </PageShell>
  );
}
