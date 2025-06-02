"use client";

import { siteContent } from "@/lib/data";
import { DownloadButtons } from "@/components/common/DownloadButtons";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Doodle Image - Responsive for all screens */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full flex justify-center lg:justify-end items-start lg:pr-8 -mt-24 sm:-mt-28 lg:-mt-8">
          <div className="relative w-[60vw] min-w-[320px] h-[80vh] sm:w-[50vw] sm:min-w-[400px] sm:h-[90vh] lg:w-[45vw] lg:min-w-0 lg:h-[100vh] xl:h-[120vh]">
            {/* Mobile and Tablet - More aggressive gradient, positioned above text */}
            <div className="lg:hidden absolute inset-0 z-40"
                 style={{
                   mask: 'linear-gradient(to top, transparent 0%, transparent 50%, white 70%)',
                   WebkitMask: 'linear-gradient(to top, transparent 0%, transparent 50%, white 70%)'
                 }}>
              <Image
                src={siteContent.hero.doodle.src}
                alt={siteContent.hero.doodle.alt}
                fill
                className="object-contain object-center opacity-25 sm:opacity-30"
                priority
                sizes="(max-width: 640px) 60vw, 50vw"
              />
            </div>
            
            {/* Desktop - Original gradient, behind text */}
            <div className="hidden lg:block absolute inset-0 z-10"
                 style={{
                   mask: 'linear-gradient(to top, transparent 0%, transparent 30%, white 50%)',
                   WebkitMask: 'linear-gradient(to top, transparent 0%, transparent 30%, white 50%)'
                 }}>
              <Image
                src={siteContent.hero.doodle.src}
                alt={siteContent.hero.doodle.alt}
                fill
                className="object-contain object-top opacity-60"
                priority
                sizes="45vw"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container max-w-screen-xl px-4 py-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left relative z-30">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-text">
                  {siteContent.hero.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                {siteContent.hero.subtitle}
              </p>
              <p className="text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0">
                {siteContent.hero.description}
              </p>
            </div>

            <div className="space-y-6">
              <DownloadButtons className="justify-center lg:justify-start" />
              
              {/* Key features list */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 text-sm">
                {siteContent.hero.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Empty grid item to maintain layout */}
          <div></div>
        </div>
      </div>
    </section>
  );
} 