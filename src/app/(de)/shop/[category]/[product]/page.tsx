import { notFound } from "next/navigation";
import { ProductPage } from "@/components/pages/ProductPage";
import { findProduct, productMetadata, productParams } from "@/lib/pages";

type Props = { params: Promise<{ category: string; product: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return productParams("de");
}

export async function generateMetadata({ params }: Props) {
  const { category, product } = await params;
  const match = findProduct("de", category, product);
  return match ? productMetadata("de", match) : {};
}

export default async function Page({ params }: Props) {
  const { category, product } = await params;
  const match = findProduct("de", category, product);
  if (!match) notFound();
  return <ProductPage lang="de" product={match} />;
}
