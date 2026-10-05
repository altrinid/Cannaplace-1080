import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { RootDocument } from "@/components/RootDocument";
import { getDict } from "@/content";
import { homePath, shopPath } from "@/lib/routes";
import "./globals.css";

// Next.js adds the noindex robots tag to 404 responses itself.
export const metadata: Metadata = {
  title: "Seite nicht gefunden (404) | Cannaplace 1080",
};

// One 404 for both languages (static hosting serves a single 404.html).
export default function GlobalNotFound() {
  const de = getDict("de");
  return (
    <RootDocument lang="de-AT">
      <main className="flex min-h-screen flex-col items-center justify-center gap-7 px-5 py-20 text-center">
        <Link href={homePath("de")} aria-label={de.header.home}>
          <Logo />
        </Link>
        <p className="t-eyebrow text-kraft-700">404</p>
        <h1 className="t-h2 max-w-[720px] text-ink">Diese Seite gibt es leider nicht.</h1>
        <p className="t-body-lg max-w-[560px] text-ink-muted">
          Vielleicht wurde sie verschoben oder die Adresse ist nicht ganz richtig.
          <br />
          <span lang="en">Sorry, this page doesn’t exist.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={homePath("de")} className="btn btn-primary">
            Zur Startseite
          </Link>
          <Link href={shopPath("de")} className="btn btn-secondary">
            Zum Shop
          </Link>
          <Link href={homePath("en")} hrefLang="en" lang="en" className="btn btn-secondary">
            English homepage
          </Link>
        </div>
      </main>
    </RootDocument>
  );
}
