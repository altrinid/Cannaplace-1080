import type { Dict } from "@/content/types";
import { IconCircle } from "./ui";

export function ValueProps({ items }: { items: Dict["valueProps"] }) {
  return (
    <section className="bg-subtle">
      <div className="container-x grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <IconCircle icon={item.icon} className="bg-card text-ink" />
            <div className="flex flex-col gap-1">
              <h3 className="t-title text-ink">{item.title}</h3>
              <p className="t-body-sm text-ink-muted">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
