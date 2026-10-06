import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/pages/ArticlePage";
import { articleMetadata, articleParams, findArticle } from "@/lib/pages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParams("de");
}

export async function generateMetadata({ params }: Props) {
  const entry = findArticle("de", (await params).slug);
  return entry ? articleMetadata("de", entry) : {};
}

export default async function Page({ params }: Props) {
  const entry = findArticle("de", (await params).slug);
  if (!entry) notFound();
  return <ArticlePage lang="de" entry={entry} />;
}
