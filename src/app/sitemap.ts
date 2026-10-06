import type { MetadataRoute } from "next";
import { allPages } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

// Date of the last content release; articles carry their own update date.
const CONTENT_UPDATED = "2026-10-06";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages().flatMap((page) => {
    const languages = {
      "de-AT": absoluteUrl(page.de),
      en: absoluteUrl(page.en),
      "x-default": absoluteUrl(page.de),
    };
    return [page.de, page.en].map((path) => ({
      url: absoluteUrl(path),
      lastModified: page.updated ?? CONTENT_UPDATED,
      alternates: { languages },
    }));
  });
}
