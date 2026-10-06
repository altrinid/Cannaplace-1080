import { LabReportsPage } from "@/components/pages/LabReportsPage";
import { infoMetadata } from "@/lib/pages";

export const metadata = infoMetadata("en", "lab");

export default function Page() {
  return <LabReportsPage lang="en" />;
}
