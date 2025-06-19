"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/data";
import { getClientFeatureFlags } from "@/lib/feature-flags";
import { BetaSignupDialog } from "./BetaSignupDialog";

interface DownloadButtonsProps {
  className?: string;
}

export function DownloadButtons({ className = "" }: DownloadButtonsProps) {
  const [appStoreClicked, setAppStoreClicked] = useState(false);
  const [googlePlayClicked, setGooglePlayClicked] = useState(false);
  const featureFlags = getClientFeatureFlags();

  const { downloadButtons } = siteContent;

  const handleAppStoreClick = () => {
    if (featureFlags.appStoreButtonMode === 'coming_soon') {
      setAppStoreClicked(true);
    } else if (featureFlags.appStoreButtonMode === 'direct_link') {
      // Direct link to App Store
      window.open('https://apps.apple.com/app/your-app-id', '_blank');
    }
    // For beta_signup mode, the BetaSignupDialog will handle the modal
  };

  const handleGooglePlayClick = () => {
    if (featureFlags.appStoreButtonMode === 'coming_soon') {
      setGooglePlayClicked(true);
    } else if (featureFlags.appStoreButtonMode === 'direct_link') {
      // Direct link to Google Play Store
      window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank');
    }
    // For beta_signup mode, the BetaSignupDialog will handle the modal
  };

  const renderButton = (
    type: 'appStore' | 'googlePlay',
    clicked: boolean,
    onClick: () => void,
    platform: 'apple' | 'android'
  ) => {
    const buttonData = type === 'appStore' ? downloadButtons.appStore : downloadButtons.googlePlay;
    const icon = type === 'appStore' ? (
      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ) : (
      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
      </svg>
    );

    const baseButton = (
      <Button
        size="lg"
        className={`${type === 'appStore' 
          ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
          : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
        } neon-glow hover:neon-glow transition-all duration-500 group overflow-hidden relative`}
        onClick={onClick}
      >
        <div className="flex items-center gap-3 relative">
          {icon}
          <div className="relative">
            {/* Original content */}
            <div 
              className={`text-left transition-all duration-500 ease-in-out ${
                clicked 
                  ? 'transform translate-x-full opacity-0' 
                  : 'transform translate-x-0 opacity-100'
              }`}
            >
              <div className="text-xs opacity-80 whitespace-nowrap">{buttonData.line1}</div>
              <div className="text-sm font-semibold whitespace-nowrap">{buttonData.line2}</div>
            </div>
            
            {/* Coming soon content */}
            <div 
              className={`absolute top-0 left-0 w-full h-full flex items-center text-left transition-all duration-500 ease-in-out ${
                clicked 
                  ? 'transform translate-x-0 opacity-100' 
                  : 'transform -translate-x-full opacity-0'
              }`}
            >
              <div className="text-sm font-semibold whitespace-nowrap">{downloadButtons.comingSoon}</div>
            </div>
          </div>
        </div>
      </Button>
    );

    // Wrap with BetaSignupDialog if in beta_signup mode
    if (featureFlags.appStoreButtonMode === 'beta_signup') {
      return (
        <BetaSignupDialog platform={platform}>
          {baseButton}
        </BetaSignupDialog>
      );
    }

    return baseButton;
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {renderButton('appStore', appStoreClicked, handleAppStoreClick, 'apple')}
      {renderButton('googlePlay', googlePlayClicked, handleGooglePlayClick, 'android')}
    </div>
  );
} 