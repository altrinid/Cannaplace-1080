import Link from "next/link";
import type { Block } from "@/content/types";
import { slugify } from "@/lib/format";

const LINK =
  "font-medium text-forest-700 underline decoration-sage-300 underline-offset-[3px] transition-colors hover:decoration-forest-700";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;
const LINK_TOKEN = /^\[([^\]]+)\]\(([^)\s]+)\)$/;

/** Renders `**bold**` and `[label](href)` inside a text; internal links go through next/link (base path aware). */
export function Inline({ text }: { text: string }) {
  return text.split(TOKEN).map((part, i) => {
    if (part.length > 4 && part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          <Inline text={part.slice(2, -2)} />
        </strong>
      );
    }
    const link = LINK_TOKEN.exec(part);
    if (link) {
      const [, label, href] = link;
      return href.startsWith("/") ? (
        <Link key={i} href={href} className={LINK}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={LINK}>
          {label}
        </a>
      );
    }
    return part;
  });
}

export function RichText({ blocks, className = "" }: { blocks: Block[]; className?: string }) {
  return (
    <div className={className}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} id={slugify(block.text)} className="t-h3 mt-12 scroll-mt-28 text-ink first:mt-0">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="t-h4 mt-8 text-ink first:mt-0">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="t-body-lg mt-4 text-ink-muted first:mt-0">
                <Inline text={block.text} />
              </p>
            );
          case "ul":
          case "ol": {
            const List = block.type;
            return (
              <List
                key={i}
                className={`t-body-lg mt-4 flex flex-col gap-2 pl-6 text-ink-muted first:mt-0 ${
                  block.type === "ul" ? "list-disc marker:text-sage-500" : "list-decimal marker:font-semibold marker:text-ink"
                }`}
              >
                {block.items.map((item) => (
                  <li key={item} className="pl-1">
                    <Inline text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case "note":
            return (
              <p key={i} className="mt-6 rounded-md bg-sage-100 px-5 py-4 text-ink first:mt-0">
                <Inline text={block.text} />
              </p>
            );
          case "table":
            return (
              <div key={i} className="mt-6 overflow-x-auto rounded-md border border-line first:mt-0">
                <table className="t-body-sm w-full min-w-[480px] text-left">
                  {block.head && (
                    <thead className="bg-subtle text-ink">
                      <tr>
                        {block.head.map((cell, c) => (
                          <th key={c} scope="col" className="px-4 py-3 font-semibold">
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-t border-line first:border-t-0">
                        {row.map((cell, c) =>
                          c === 0 ? (
                            <th key={c} scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                              <Inline text={cell} />
                            </th>
                          ) : (
                            <td key={c} className="px-4 py-3 align-top text-ink-muted">
                              <Inline text={cell} />
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
