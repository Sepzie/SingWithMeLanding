import siteIdentity from '../../data/site_identity.json';
import colorScheme from '../../data/color_scheme.json';
import contentEn from '../../data/content/en.json';

// Type definitions
export interface Feature {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  alt: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initial: string;
  color: string;
}

export interface Incentive {
  text: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface LegalSection {
  title: string;
  content: string | string[];
}

export interface LegalPage {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

// Export the loaded data
export const siteIdentityData = siteIdentity;
export const colorSchemeData = colorScheme;
export const siteContent = contentEn;

// Export commonly used values
export const siteName = siteIdentity.siteName;
export const seoMetadata = siteIdentity.seo;

// Export specific sections for easy access
export const navigationLinks: NavigationLink[] = contentEn.navigation;
export const authContent = contentEn.auth;
export const legalContent = {
  privacy: contentEn.legal.privacy,
  terms: contentEn.legal.terms,
  contact: {
    email: siteIdentity.contactEmail,
    address: siteIdentity.businessAddress
  }
};

// Download links from site identity
export const downloadLinks = {
  appStore: siteIdentity.appStoreUrl,
  googlePlay: siteIdentity.googlePlayUrl,
};

export const legalLinks = {
  privacy: "/privacy",
  terms: "/terms"
}; 