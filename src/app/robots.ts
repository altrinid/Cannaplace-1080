import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { INDEXABLE } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Preview builds block crawlers entirely; the live site (NEXT_PUBLIC_SITE_URL set) is open and lists its sitemap.
  if (!INDEXABLE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
