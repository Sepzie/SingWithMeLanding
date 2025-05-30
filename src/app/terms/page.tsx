import { Layout } from "@/components/layout/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <div className="py-20 lg:py-32">
        <div className="container max-w-screen-md px-4">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Acceptance of Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  By accessing and using SingWithMe, you accept and agree to be bound by the terms and 
                  provision of this agreement. If you do not agree to abide by the above, please do not 
                  use this service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Service Description</h2>
                <p className="text-foreground/80 leading-relaxed">
                  SingWithMe is an AI-powered vocal training platform that allows users to upload songs, 
                  receive automated vocal separation and lyrics transcription, and practice singing with 
                  real-time feedback and comparison tools.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">User Responsibilities</h2>
                <p className="text-foreground/80 leading-relaxed">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Ensuring you have the right to upload and process any audio content</li>
                  <li>Complying with all applicable copyright laws and regulations</li>
                  <li>Not uploading malicious content or content that violates our community guidelines</li>
                  <li>Maintaining the security of your account credentials</li>
                  <li>Using the service only for its intended purpose</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Intellectual Property</h2>
                <p className="text-foreground/80 leading-relaxed">
                  You retain ownership of the audio content you upload. By using our service, you grant 
                  SingWithMe a limited license to process your content for the purpose of providing our 
                  AI-powered vocal training services. We do not claim ownership of your uploaded content.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Limitation of Liability</h2>
                <p className="text-foreground/80 leading-relaxed">
                  SingWithMe shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages, including without limitation, loss of profits, data, use, goodwill, or 
                  other intangible losses, resulting from your use of the service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Termination</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may terminate or suspend your account and bar access to the service immediately, 
                  without prior notice or liability, under our sole discretion, for any reason whatsoever 
                  and without limitation, including but not limited to a breach of the Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
                <p className="text-foreground/80 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="glassmorphism p-4 rounded-lg border border-border/50">
                  <p className="text-foreground">
                    Email: singwithme.app@gmail.com<br />
                    Address: 1939 Parkway Blvd, Coquitlam, BC, V3E 3L5
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Changes to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will try to provide at least 30 days notice prior to any new 
                  terms taking effect.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 