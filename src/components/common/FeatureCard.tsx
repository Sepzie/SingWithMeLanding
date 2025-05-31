"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Feature } from "@/data/content";
import Image from "next/image";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="space-y-4 flex-1 flex flex-col">
          {/* Feature Image */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted shadow-lg">
            <Image
              src={feature.screenshot}
              alt={feature.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              onError={(e) => {
                // Fallback placeholder
                const target = e.target as HTMLImageElement;
                target.src = `data:image/svg+xml;base64,${btoa(`
                  <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#1a1a1a"/>
                    <text x="50%" y="50%" text-anchor="middle" fill="#666" font-size="16" font-family="system-ui">
                      ${feature.title}
                    </text>
                  </svg>
                `)}`;
              }}
            />
          </div>
          
          {/* Feature Content */}
          <div className="space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-primary group-hover:neon-text transition-all duration-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 