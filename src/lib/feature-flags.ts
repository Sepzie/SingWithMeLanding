/**
 * Feature flags configuration
 * These flags control the visibility and behavior of various features
 */

export interface FeatureFlags {
  enableGoogleSignin: boolean;
  appStoreButtonMode: 'coming_soon' | 'beta_signup' | 'direct_link';
}

/**
 * Get the current feature flags from environment variables
 */
export function getFeatureFlags(): FeatureFlags {
  return {
    enableGoogleSignin: process.env.ENABLE_GOOGLE_SIGNIN !== 'false',
    appStoreButtonMode: (process.env.APP_STORE_BUTTON_MODE as FeatureFlags['appStoreButtonMode']) || 'coming_soon'
  };
}

/**
 * Client-side feature flags (for components that need to run in the browser)
 * These should be exposed via NEXT_PUBLIC_ env vars if needed on client side
 */
export function getClientFeatureFlags(): FeatureFlags {
  return {
    enableGoogleSignin: process.env.NEXT_PUBLIC_ENABLE_GOOGLE_SIGNIN !== 'false',
    appStoreButtonMode: (process.env.NEXT_PUBLIC_APP_STORE_BUTTON_MODE as FeatureFlags['appStoreButtonMode']) || 'coming_soon'
  };
} 