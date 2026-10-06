import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/pages/CategoryPage";
import { categoryMetadata, categoryParams, findCategory } from "@/lib/pages";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryParams("de");
}

export async function generateMetadata({ params }: Props) {
  const key = findCategory("de", (await params).category);
  return key ? categoryMetadata("de", key) : {};
}

export default async function Page({ params }: Props) {
  const key = findCategory("de", (await params).category);
  if (!key) notFound();
  return <CategoryPage lang="de" category={key} />;
}
