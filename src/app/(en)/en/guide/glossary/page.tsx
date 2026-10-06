import { GlossaryPage } from "@/components/pages/GlossaryPage";
import { glossaryMetadata } from "@/lib/pages";

export const metadata = glossaryMetadata("en");

export default function Page() {
  return <GlossaryPage lang="en" />;
}
