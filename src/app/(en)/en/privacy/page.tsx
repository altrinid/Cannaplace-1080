import { InfoPage } from "@/components/pages/InfoPage";
import { infoMetadata } from "@/lib/pages";

export const metadata = infoMetadata("en", "privacy");

export default function Page() {
  return <InfoPage lang="en" page="privacy" />;
}
