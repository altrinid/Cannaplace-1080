import { ShopPage } from "@/components/pages/ShopPage";
import { shopMetadata } from "@/lib/pages";

export const metadata = shopMetadata("en");

export default function Page() {
  return <ShopPage lang="en" />;
}
