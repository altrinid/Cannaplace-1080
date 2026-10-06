import { GuidePage } from "@/components/pages/GuidePage";
import { guideMetadata } from "@/lib/pages";

export const metadata = guideMetadata("de");

export default function Page() {
  return <GuidePage lang="de" />;
}
