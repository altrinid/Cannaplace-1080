import { InfoPage } from "@/components/pages/InfoPage";
import { infoMetadata } from "@/lib/pages";

export const metadata = infoMetadata("de", "shipping");

export default function Page() {
  return <InfoPage lang="de" page="shipping" />;
}
