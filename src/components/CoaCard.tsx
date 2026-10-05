import { getDict } from "@/content";
import type { Coa, Lang } from "@/content/types";
import { fill, formatMonth, formatPercent } from "@/lib/format";
import { Icon } from "./icons";
import { Badge, IconCircle, TextLink } from "./ui";

export function CoaCard({
  lang,
  name,
  coa,
  link,
  flat = false,
  className = "",
}: {
  lang: Lang;
  name: string;
  coa: Coa;
  link?: { href: string; label: string };
  /** Bordered instead of floating, for grids of several certificates. */
  flat?: boolean;
  className?: string;
}) {
  const t = getDict(lang).coa;
  const rows = [
    { label: "CBD", value: formatPercent(lang, coa.cbd) },
    ...(coa.cbg === undefined ? [] : [{ label: "CBG", value: formatPercent(lang, coa.cbg) }]),
    { label: "THC (Δ9)", value: coa.thc > 0 ? formatPercent(lang, coa.thc) : t.notDetected, note: t.thcNote },
    { label: t.pesticides, value: t.notDetected },
    { label: t.heavyMetals, value: t.notDetected },
  ];

  return (
    <div
      className={`w-full rounded-lg bg-card px-6 pt-7 pb-6 sm:px-8 ${flat ? "border border-line" : "shadow-float"} ${className}`}
    >
      <div className="flex items-center gap-3.5 pb-5">
        <IconCircle icon="file-text" size={48} iconSize={22} />
        <div className="min-w-0 flex-1">
          <p className="t-title text-ink">{t.title}</p>
          <p className="t-body-sm text-ink-muted">
            {name} · {fill(t.batch, { batch: coa.batch })}
          </p>
        </div>
        <Badge tone="dark">{t.badge}</Badge>
      </div>
      <dl>
        {rows.map((row) => (
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
        <span className="t-caption text-ink-muted">
          {t.footer} · {fill(t.tested, { date: formatMonth(lang, coa.tested) })}
        </span>
        {link && <TextLink href={link.href}>{link.label}</TextLink>}
      </div>
    </div>
  );
}
