import { InfoPage } from "@/components/pages/InfoPage";
import { infoMetadata } from "@/lib/pages";

export const metadata = infoMetadata("de", "imprint");

export default function Page() {
  return <InfoPage lang="de" page="imprint" />;
}
