import Link from "next/link";
import type { Coa, Dict, Lang } from "@/content/types";
import { CoaCard } from "./CoaCard";
import { HempLeafLine } from "./hemp";
import { Icon } from "./icons";
import { Eyebrow, IconCircle } from "./ui";

export function LabReports({
  t,
  lang,
  sample,
  labHref,
}: {
  t: Dict["lab"];
  lang: Lang;
  /** Product whose current certificate is shown as the example. */
  sample: { name: string; coa: Coa; href: string; linkLabel: string };
  labHref: string;
}) {
  return (
    <section id="labor" className="relative scroll-mt-24 overflow-hidden bg-forest-900">
      <div aria-hidden="true" className="pointer-events-none absolute top-[60px] -left-[170px] w-[736px] text-line-inverse">
        <HempLeafLine className="w-full" strokeWidth={0.9} />
      </div>
      <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-24 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow dark>{t.eyebrow}</Eyebrow>
          <h2 className="t-h2 text-cream">
            {t.titleLine1}
            <br />
            <span className="t-accent text-kraft-400">{t.titleLine2}</span>
          </h2>
          <p className="t-body-lg text-cream-muted">{t.text}</p>
          <ul className="flex flex-col gap-3.5 pt-1">
            {t.checklist.map((item) => (
              <li key={item} className="flex items-center gap-3.5 text-cream">
                <IconCircle icon="check" size={32} iconSize={16} className="bg-forest-800 text-kraft-400" />
                {item}
              </li>
            ))}
          </ul>
          <Link href={labHref} className="btn btn-inverse mt-3">
            {t.button}
            <Icon name="file-text" size={18} />
          </Link>
        </div>
        <CoaCard lang={lang} name={sample.name} coa={sample.coa} link={{ href: sample.href, label: sample.linkLabel }} />
      </div>
    </section>
  );
}
