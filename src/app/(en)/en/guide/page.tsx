import { GuidePage } from "@/components/pages/GuidePage";
import { guideMetadata } from "@/lib/pages";

export const metadata = guideMetadata("en");

export default function Page() {
  return <GuidePage lang="en" />;
}
