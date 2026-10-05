import { notFound } from "next/navigation";
import { ProductPage } from "@/components/pages/ProductPage";
import { findProduct, productMetadata, productParams } from "@/lib/pages";

type Props = { params: Promise<{ category: string; product: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return productParams("en");
}

export async function generateMetadata({ params }: Props) {
  const { category, product } = await params;
  const match = findProduct("en", category, product);
  return match ? productMetadata("en", match) : {};
}

export default async function Page({ params }: Props) {
  const { category, product } = await params;
  const match = findProduct("en", category, product);
  if (!match) notFound();
  return <ProductPage lang="en" product={match} />;
}
