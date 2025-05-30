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
                Last updated: December 2024
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
                  <li>Provide and improve our AI-powered vocal training services</li>
                  <li>Process and analyze your uploaded audio files</li>
                  <li>Generate personalized feedback and recommendations</li>
                  <li>Communicate with you about our services</li>
                  <li>Ensure the security and integrity of our platform</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Data Security</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. Your audio files are processed 
                  securely and are not shared with third parties without your explicit consent.
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