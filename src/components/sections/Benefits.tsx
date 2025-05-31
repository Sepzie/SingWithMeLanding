"use client";

import { siteContent } from "@/data/content";

export function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container max-w-screen-xl px-4">
        {/* Main Benefits */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {siteContent.benefits.sectionTitle}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            {siteContent.benefits.subtitle}
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.benefits.items.map((benefit, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 group text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:neon-text transition-all duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple testimonial-style quotes */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-primary mb-12">{siteContent.benefits.testimonialsTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteContent.benefits.testimonials.map((testimonial, index) => (
              <div key={index} className="glassmorphism p-6 rounded-lg border border-border/50">
                <div className="flex items-start space-x-4">
                  <div className={`text-3xl text-${testimonial.color}`}>&ldquo;</div>
                  <div>
                    <p className="text-foreground/90 mb-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full bg-${testimonial.color}/20 flex items-center justify-center`}>
                        <span className={`text-${testimonial.color} font-semibold`}>{testimonial.initial}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 