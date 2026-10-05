import type { Dict } from "@/content/types";
import { SHOP } from "@/lib/site";
import { Icon } from "./icons";

// Closing call to action at the end of content pages: call or visit the store.
export function ContactCta({ t }: { t: Dict["contactCta"] }) {
  return (
    <section className="container-x py-16 lg:py-20">
      <div className="flex flex-col gap-8 rounded-xl bg-forest-900 px-6 py-10 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-14">
        <div className="flex max-w-[560px] flex-col gap-2">
          <h2 className="t-h3 text-cream">{t.title}</h2>
          <p className="text-cream-muted">{t.text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={SHOP.phoneHref} className="btn btn-inverse">
            {t.call} · {SHOP.phoneDisplay}
            <Icon name="phone" size={18} />
          </a>
          <a href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-inverse">
            {t.route}
            <Icon name="map-pin" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
