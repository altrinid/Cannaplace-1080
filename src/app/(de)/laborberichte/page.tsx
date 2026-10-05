import { LabReportsPage } from "@/components/pages/LabReportsPage";
import { infoMetadata } from "@/lib/pages";

export const metadata = infoMetadata("de", "lab");

export default function Page() {
  return <LabReportsPage lang="de" />;
}
