import type { Dict } from "@/content/types";
import { HempLeafLine } from "./hemp";
import { Icon } from "./icons";
import { Badge, Eyebrow, IconCircle, TextLink } from "./ui";

function CoaCard({ coa }: { coa: Dict["lab"]["coa"] }) {
  return (
    <div className="w-full rounded-lg bg-card px-6 pt-7 pb-6 shadow-float sm:px-8">
      <div className="flex items-center gap-3.5 pb-5">
        <IconCircle icon="file-text" size={48} iconSize={22} />
        <div className="min-w-0 flex-1">
          <p className="t-title text-ink">{coa.title}</p>
          <p className="t-body-sm text-ink-muted">{coa.subtitle}</p>
        </div>
        <Badge tone="dark">{coa.badge}</Badge>
      </div>
      <dl>
        {coa.rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4 border-t border-line py-3.5">
            <dt className="text-ink-muted">{row.label}</dt>
            <dd className="flex items-center gap-2.5 text-right">
              {row.note && (
                <span className="t-caption hidden rounded-full bg-sage-100 px-2 py-0.5 text-ink sm:inline">{row.note}</span>
              )}
              <span className="t-title text-ink">{row.value}</span>
              <Icon name="check" size={18} className="shrink-0 text-success" />
            </dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-[18px]">
        <span className="t-caption text-ink-muted">{coa.footer}</span>
        <TextLink href="#labor">{coa.link}</TextLink>
      </div>
    </div>
  );
}

export function LabReports({ t }: { t: Dict["lab"] }) {
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
          <a href="#labor" className="btn btn-inverse mt-3">
            {t.button}
            <Icon name="file-text" size={18} />
          </a>
        </div>
        <CoaCard coa={t.coa} />
      </div>
    </section>
  );
}
