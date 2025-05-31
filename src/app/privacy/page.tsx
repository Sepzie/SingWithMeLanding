import { Layout } from "@/components/layout/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="py-20 lg:py-32">
        <div className="container max-w-screen-md px-4">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: June 25, 2024
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Information We Collect</h2>
                <p className="text-foreground/80 leading-relaxed">
                  SingWithMe collects information you provide directly to us, such as when you create an account, 
                  upload songs, or contact us for support. This may include your name, email address, and the 
                  audio files you choose to upload for processing.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">How We Use Your Information</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Provide our vocal training and analysis services</li>
                  <li>Process and analyze your uploaded audio files to provide feedback</li>
                  <li>Communicate with you about our services</li>
                  <li>Ensure the security and integrity of our platform</li>
                  <li>Improve our service functionality and user experience</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Data Security</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. Your data is stored using 
                  enterprise-grade cloud infrastructure with industry-standard encryption, automatic backups, 
                  and robust access controls. Your audio files are processed securely and are not shared with 
                  third parties without your explicit consent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Data Retention</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We retain your personal information for as long as your account is active or as needed to 
                  provide services. Audio files are stored in your account for your access and are deleted 
                  from processing services immediately after analysis is complete. You may request deletion 
                  of your data at any time by contacting us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Third-Party Services</h2>
                <p className="text-foreground/80 leading-relaxed">
                  To provide our services, we use trusted third-party providers including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>OpenAI Whisper for audio transcription and processing</li>
                  <li>Google Cloud Platform for secure data storage and processing infrastructure</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  These services are bound by their own privacy policies and security standards. We only 
                  share the minimum necessary data required to provide our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">International Users</h2>
                <p className="text-foreground/80 leading-relaxed">
                  For users in the European Union, you have additional rights under the General Data Protection 
                  Regulation (GDPR) including data portability, the right to be forgotten, and the right to 
                  restrict processing. To exercise these rights, please contact us using the information below.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed">
                  You have the right to access, update, or delete your personal information. You may also 
                  request that we stop processing your data or export your data in a portable format. 
                  To exercise these rights, please contact us using the information below.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, You can contact us:
                </p>
                <div className="glassmorphism p-4 rounded-lg border border-border/50">
                  Email: singwithme.app@gmail.com<br />
                  Address: 1939 Parkway Blvd, Coquitlam, BC, V3E 3L5
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Changes to This Policy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 