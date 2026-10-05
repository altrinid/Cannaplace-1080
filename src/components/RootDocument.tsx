import type { Metadata } from "next";
import type { ReactNode } from "react";
import { fontVariables } from "@/lib/fonts";
import { INDEXABLE, SITE_URL, STORAGE_KEYS } from "@/lib/site";

export const rootMetadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  applicationName: "Cannaplace 1080",
  // Previews stay out of search engines; a build for the shop's own domain (NEXT_PUBLIC_SITE_URL) is indexable.
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

// Applies the chosen type variant (?font=syne or the saved choice) before first paint.
const FONT_INIT = `try{var p=new URLSearchParams(location.search).get('font');if(p==='syne'||p==='jost')localStorage.setItem('${STORAGE_KEYS.font}',p);var f=p||localStorage.getItem('${STORAGE_KEYS.font}');if(f==='syne')document.documentElement.setAttribute('data-font','syne')}catch(e){}`;

/** The <html> document shared by the German and English root layouts. */
export function RootDocument({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang} className={fontVariables} data-scroll-behavior="smooth" suppressHydrationWarning>
      {/* Rendered by the two root layouts, so this is the App Router document head, not a pages-router <head>. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: FONT_INIT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
