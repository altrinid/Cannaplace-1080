import { ContactPage } from "@/components/pages/ContactPage";
import { infoMetadata } from "@/lib/pages";

export const metadata = infoMetadata("en", "contact");

export default function Page() {
  return <ContactPage lang="en" />;
}
