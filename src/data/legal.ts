export interface LegalSection {
  title: string;
  content: string | string[];
}

export interface LegalPage {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const legalContent = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "May 31, 2025",
    sections: [
      {
        title: "Information We Collect",
        content: "SingWithMe collects information you provide directly to us, such as when you create an account, upload songs, or contact us for support. This may include your name, email address, and the audio files you choose to upload for processing."
      },
      {
        title: "How We Use Your Information",
        content: [
          "We use the information we collect to:",
          "Provide our vocal training and analysis services",
          "Process and analyze your uploaded audio files to provide feedback",
          "Communicate with you about our services",
          "Ensure the security and integrity of our platform",
          "Improve our service functionality and user experience"
        ]
      },
      {
        title: "Data Security",
        content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored using enterprise-grade cloud infrastructure with industry-standard encryption, automatic backups, and robust access controls. Your audio files are processed securely and are not shared with third parties without your explicit consent."
      },
      {
        title: "Data Retention",
        content: "We retain your personal information for as long as your account is active or as needed to provide services. Audio files are stored in your account for your access and are deleted from processing services immediately after analysis is complete. You may request deletion of your data at any time by contacting us."
      },
      {
        title: "Third-Party Services",
        content: [
          "To provide our services, we use trusted third-party providers including:",
          "OpenAI Whisper for audio transcription and processing",
          "Google Cloud Platform for secure data storage and processing infrastructure",
          "",
          "These services are bound by their own privacy policies and security standards. We only share the minimum necessary data required to provide our services."
        ]
      },
      {
        title: "International Users",
        content: "For users in the European Union, you have additional rights under the General Data Protection Regulation (GDPR) including data portability, the right to be forgotten, and the right to restrict processing. To exercise these rights, please contact us using the information below."
      },
      {
        title: "Your Rights",
        content: "You have the right to access, update, or delete your personal information. You may also request that we stop processing your data or export your data in a portable format. To exercise these rights, please contact us using the information below."
      },
      {
        title: "Contact Us",
        content: [
          "If you have any questions about this Privacy Policy, You can contact us:",
          "Email: singwithme.app@gmail.com",
          "Address: 1939 Parkway Blvd, Coquitlam, BC, V3E 3L5"
        ]
      },
      {
        title: "Changes to This Policy",
        content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date."
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "May 31, 2025",
    sections: [
      {
        title: "Acceptance of Terms",
        content: "By accessing and using SingWithMe, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
      },
      {
        title: "Eligibility",
        content: "You must be at least 13 years of age to use SingWithMe. If you are under 18, you must have your parent or legal guardian's permission to use our service. By using our service, you represent and warrant that you meet these requirements."
      },
      {
        title: "Service Description",
        content: "SingWithMe is a vocal practice platform that uses AI technology to process uploaded songs and provide automated lyrics transcription. Users can upload songs, receive transcribed lyrics, and practice singing with voice recording and playback comparison tools that allow you to hear your performance alongside the original track."
      },
      {
        title: "User Responsibilities",
        content: [
          "You are responsible for:",
          "Ensuring you have the right to upload and process any audio content",
          "Complying with all applicable copyright laws and regulations",
          "Not uploading malicious content or content that violates our community guidelines",
          "Maintaining the security of your account credentials",
          "Using the service only for its intended purpose"
        ]
      },
      {
        title: "Prohibited Content and Uses",
        content: [
          "You may not upload or use our service for:",
          "Copyrighted material without proper authorization",
          "Content that is illegal, harmful, or violates any laws",
          "Sexually explicit, violent, or inappropriate material",
          "Content that infringes on others' rights or privacy",
          "Malicious files, viruses, or harmful code",
          "Content that promotes hate speech or discrimination",
          "Any commercial use without our written permission"
        ]
      },
      {
        title: "File Limitations and Processing",
        content: [
          "Our service has the following technical limitations:",
          "Maximum file size: 10MB per upload",
          "Supported formats: MP3",
          "Processing time may vary based on file size and server load",
          "We reserve the right to limit uploads if usage becomes excessive",
          "Files may be automatically deleted after periods of inactivity"
        ]
      },
      {
        title: "Intellectual Property",
        content: "You retain ownership of the audio content you upload. By using our service, you grant SingWithMe a limited license to process your content for the purpose of providing our AI-powered vocal training services. We do not claim ownership of your uploaded content."
      },
      {
        title: "Service Availability and Disclaimers",
        content: [
          "SingWithMe is provided \"as-is\" without warranties of any kind. We do not guarantee:",
          "100% service uptime or availability",
          "Accuracy of AI transcription or analysis",
          "Compatibility with all devices or browsers",
          "That the service will meet your specific requirements",
          "That any technical issues will be resolved",
          "",
          "We reserve the right to modify, suspend, or discontinue the service at any time."
        ]
      },
      {
        title: "Limitation of Liability",
        content: "SingWithMe shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service. Our total liability shall not exceed the amount you paid for the service in the past 12 months."
      },
      {
        title: "Indemnification",
        content: "You agree to defend, indemnify, and hold harmless SingWithMe from any claims, damages, or expenses arising from your use of the service, your uploaded content, or your violation of these Terms."
      },
      {
        title: "Termination",
        content: "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. Upon termination, your right to use the service will cease immediately."
      },
      {
        title: "Governing Law and Jurisdiction",
        content: "These Terms shall be governed by and construed in accordance with the laws of British Columbia, Canada, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of British Columbia."
      },
      {
        title: "Severability",
        content: "If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect."
      },
      {
        title: "Contact Information",
        content: [
          "If you have any questions about these Terms of Service, please contact us at:",
          "Email: singwithme.app@gmail.com",
          "Address: 1939 Parkway Blvd, Coquitlam, BC, V3E 3L5"
        ]
      },
      {
        title: "Changes to Terms",
        content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
      }
    ]
  },
  contact: {
    email: "singwithme.app@gmail.com",
    address: "1939 Parkway Blvd, Coquitlam, BC, V3E 3L5"
  }
}; 