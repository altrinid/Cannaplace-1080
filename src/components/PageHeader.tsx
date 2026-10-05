import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Eyebrow } from "./ui";

export function PageHeader({
  crumbs,
  crumbLabel,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  crumbLabel: string;
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-subtle">
      <div className="container-x pt-6 pb-12 lg:pb-16">
        <Breadcrumbs items={crumbs} label={crumbLabel} />
        <div className="mt-8 flex max-w-[820px] flex-col items-start gap-4 lg:mt-10">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="t-h2 text-ink">{title}</h1>
          {lead && <p className="t-body-lg text-ink-muted">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
