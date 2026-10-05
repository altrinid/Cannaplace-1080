import { PRODUCTS } from "@/content/catalog";
import { getDict } from "@/content";
import type { Lang } from "@/content/types";
import { productPath } from "@/lib/routes";
import { CoaCard } from "../CoaCard";
import { InfoPage } from "./InfoPage";

export function LabReportsPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <InfoPage lang={lang} page="lab">
      <section className="container-x pt-12 lg:pt-16">
        <h2 className="t-h3 text-ink">{t.coa.currentBatches}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.flatMap((product) =>
            product.coa
              ? [
                  <CoaCard
                    key={product.id}
                    lang={lang}
                    name={product[lang].name}
                    coa={product.coa}
                    link={{ href: productPath(lang, product), label: t.coa.toProduct }}
                    flat
                  />,
                ]
              : [],
          )}
        </div>
      </section>
    </InfoPage>
  );
}
