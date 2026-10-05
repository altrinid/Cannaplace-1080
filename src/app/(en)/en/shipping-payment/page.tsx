import { InfoPage } from "@/components/pages/InfoPage";
import { infoMetadata } from "@/lib/pages";

export const metadata = infoMetadata("en", "shipping");

export default function Page() {
  return <InfoPage lang="en" page="shipping" />;
}
