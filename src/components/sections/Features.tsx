"use client";

import { siteContent } from "@/lib/data";
import { FeatureCard } from "@/components/common/FeatureCard";
import React from "react";

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background/50">
      <div className="container max-w-screen-xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {siteContent.features.sectionTitle}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {siteContent.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {siteContent.features.items.map((feature, index) => (
            <div
              key={feature.id}
              className="opacity-0 animate-fade-in h-full"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>

        {/* Enhanced Process Flow */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">{siteContent.features.processTitle}</h3>
            <p className="text-muted-foreground text-lg">{siteContent.features.processSubtitle}</p>
          </div>
          
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {siteContent.features.process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="text-center space-y-4">
                    {/* Step circle */}
                    <div className={`relative w-16 h-16 mx-auto rounded-full bg-${step.color}/20 border-2 border-${step.color} flex items-center justify-center neon-glow group-hover:scale-110 transition-transform duration-300 z-10 bg-background`}>
                      <span className={`text-${step.color} font-bold text-xl`}>{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="text-4xl mb-2">{step.icon}</div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < 3 && (
                    <div className="md:hidden flex justify-center mt-6 mb-2">
                      <div className="w-6 h-6 text-primary/50">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" transform="rotate(180 10 10)" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 