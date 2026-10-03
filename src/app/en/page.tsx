import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { HtmlLang } from "@/components/HtmlLang";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function Page() {
  return (
    <>
      <HtmlLang lang="en" />
      <HomePage t={en} />
    </>
  );
}
