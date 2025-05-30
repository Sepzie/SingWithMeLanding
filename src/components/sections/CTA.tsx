import { siteContent } from "@/data/content";
import { DownloadButtons } from "@/components/common/DownloadButtons";

export function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-screen-xl px-4 relative">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-text">
                {siteContent.cta.title}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {siteContent.cta.subtitle}
            </p>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Start your vocal training journey today. No subscription required to get started.
            </p>
          </div>

          <div className="space-y-8">
            <DownloadButtons className="justify-center" />
            
            {/* Enhanced incentives */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-3 glassmorphism px-4 py-2 rounded-full border border-border/30">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Free to start</span>
              </div>
              <div className="flex items-center gap-3 glassmorphism px-4 py-2 rounded-full border border-border/30">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center gap-3 glassmorphism px-4 py-2 rounded-full border border-border/30">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Instant access</span>
              </div>
            </div>
          </div>

          {/* Final stats */}
          <div className="pt-12 border-t border-border/20">
            <p className="text-lg text-muted-foreground mb-6">
              Simple singing practice for everyone
            </p>
            <div className="flex justify-center items-center gap-12 opacity-80">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Easy</div>
                <div className="text-sm text-muted-foreground">Upload & Practice</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">Clear</div>
                <div className="text-sm text-muted-foreground">Audio Separation</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">Compare</div>
                <div className="text-sm text-muted-foreground">Your Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 