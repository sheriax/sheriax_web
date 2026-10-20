import { CompanyLegalPage } from "@/components/CompanyLegalPage";
import { termsContent } from "@/lib/legal-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Terms of Service",
  "Terms for the Sheriax company website, with information about Tat’heer’s development status.",
  "/terms",
);

export default function TermsPage() {
  return <CompanyLegalPage content={termsContent} />;
}
