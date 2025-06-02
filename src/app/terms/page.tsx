import { legalContent } from "@/lib/data";
import { LegalPage } from "@/components/common/LegalPage";

export default function TermsPage() {
  return <LegalPage pageData={legalContent.terms} />;
} 