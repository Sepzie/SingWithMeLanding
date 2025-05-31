import { LegalPage } from "@/components/common/LegalPage";
import { legalContent } from "@/data/legal";

export default function TermsPage() {
  return <LegalPage pageData={legalContent.terms} />;
} 