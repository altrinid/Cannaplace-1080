import type { Metadata } from "next";
import type { ReactNode } from "react";
import { de } from "@/content/de";
import { fontVariables } from "@/lib/fonts";
import { STORAGE_KEYS } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: de.meta.title,
  description: de.meta.description,
  // Preview build for client approval — keep it out of search engines until launch.
  robots: { index: false, follow: false },
};

// Applies the chosen type variant (?font=syne or the saved choice) before first paint.
const FONT_INIT = `try{var p=new URLSearchParams(location.search).get('font');if(p==='syne'||p==='jost')localStorage.setItem('${STORAGE_KEYS.font}',p);var f=p||localStorage.getItem('${STORAGE_KEYS.font}');if(f==='syne')document.documentElement.setAttribute('data-font','syne')}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: FONT_INIT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
