import type { Block, Faq } from "@/content/types";
import { faqJsonLd } from "@/lib/seo";
import { FaqList } from "./FaqList";
import { JsonLd } from "./JsonLd";
import { RichText } from "./RichText";
import { Eyebrow } from "./ui";

// SEO text next to an FAQ block (content audit: optimised text + FAQ on every key page), with FAQPage markup.
export function TextFaqSection({
  eyebrow,
  title,
  body,
  faqTitle,
  faq,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  body: Block[];
  faqTitle: string;
  faq: Faq[];
  className?: string;
}) {
  return (
    <section className={`container-x py-16 lg:py-24 ${className}`}>
      <div className="grid gap-12 border-t border-line pt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20 lg:pt-24">
        <div className="flex flex-col items-start gap-6">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && <h2 className="t-h2 text-ink">{title}</h2>}
          <RichText blocks={body} />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="t-h3 text-ink">{faqTitle}</h2>
          <FaqList items={faq} />
        </div>
      </div>
      <JsonLd data={faqJsonLd(faq)} />
    </section>
  );
}
