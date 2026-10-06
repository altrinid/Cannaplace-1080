import { GlossaryPage } from "@/components/pages/GlossaryPage";
import { glossaryMetadata } from "@/lib/pages";

export const metadata = glossaryMetadata("de");

export default function Page() {
  return <GlossaryPage lang="de" />;
}
