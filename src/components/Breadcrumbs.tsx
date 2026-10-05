import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Icon } from "./icons";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items, label }: { items: Crumb[]; label: string }) {
  return (
    <>
      <nav aria-label={label}>
        <ol className="t-body-sm flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-muted">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && <Icon name="chevron-right" size={14} className="text-sage-500" />}
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-ink">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-forest-700">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(items)} />
    </>
  );
}
