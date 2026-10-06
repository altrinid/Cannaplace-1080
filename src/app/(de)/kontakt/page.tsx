import { ContactPage } from "@/components/pages/ContactPage";
import { infoMetadata } from "@/lib/pages";

export const metadata = infoMetadata("de", "contact");

export default function Page() {
  return <ContactPage lang="de" />;
}
