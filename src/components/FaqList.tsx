import type { Faq } from "@/content/types";
import { Icon } from "./icons";

// Native <details>: works without JavaScript and keeps every answer in the HTML for crawlers.
export function FaqList({ items, className = "" }: { items: Faq[]; className?: string }) {
  return (
    <div className={`divide-y divide-line border-y border-line ${className}`}>
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="t-title text-ink">{item.q}</h3>
            <span className="icon-btn h-9 w-9 bg-sage-100 text-ink transition-transform duration-200 group-open:rotate-45">
              <Icon name="plus" size={18} />
            </span>
          </summary>
          <p className="pr-12 pb-6 text-ink-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
