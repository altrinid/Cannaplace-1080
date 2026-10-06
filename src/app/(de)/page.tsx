import { HomePage } from "@/components/pages/HomePage";
import { homeMetadata } from "@/lib/pages";

export const metadata = homeMetadata("de");

export default function Page() {
  return <HomePage lang="de" />;
}
