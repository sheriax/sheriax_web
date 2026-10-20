import { CompanyLegalPage } from "@/components/CompanyLegalPage";
import { privacyContent } from "@/lib/legal-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How the Sheriax company website and company correspondence use personal information.",
  "/privacy",
);

export default function PrivacyPage() {
  return <CompanyLegalPage content={privacyContent} />;
}
