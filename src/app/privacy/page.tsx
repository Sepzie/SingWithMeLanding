import { LegalPage } from "@/components/common/LegalPage";
import { legalContent } from "@/data/legal";

export default function PrivacyPage() {
  return <LegalPage pageData={legalContent.privacy} />;
} 