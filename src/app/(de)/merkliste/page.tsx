import { WishlistPage } from "@/components/pages/WishlistPage";
import { wishlistMetadata } from "@/lib/pages";

export const metadata = wishlistMetadata("de");

export default function Page() {
  return <WishlistPage lang="de" />;
}
