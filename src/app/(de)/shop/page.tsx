import { ShopPage } from "@/components/pages/ShopPage";
import { shopMetadata } from "@/lib/pages";

export const metadata = shopMetadata("de");

export default function Page() {
  return <ShopPage lang="de" />;
}
