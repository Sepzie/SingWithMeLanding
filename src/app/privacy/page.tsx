import { legalContent } from "@/lib/data";
import { LegalPage } from "@/components/common/LegalPage";

export default function PrivacyPage() {
  return <LegalPage pageData={legalContent.privacy} />;
} 