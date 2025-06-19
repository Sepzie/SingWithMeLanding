# Environment Variables Configuration

This document describes the environment variables used to control feature flags and application behavior.

## Feature Flags

### Google Sign-in Feature
Controls whether the Google Sign-in option is displayed in the login dialog.

```bash
# Server-side (optional, defaults to true)
ENABLE_GOOGLE_SIGNIN=true

# Client-side (required for client components)
NEXT_PUBLIC_ENABLE_GOOGLE_SIGNIN=true
```

### App Store Button Behavior
Controls how the app store buttons (iOS App Store and Google Play) behave when clicked.

```bash
# Server-side (optional, defaults to "coming_soon")
APP_STORE_BUTTON_MODE=coming_soon

# Client-side (required for client components)
NEXT_PUBLIC_APP_STORE_BUTTON_MODE=coming_soon
```

**Available modes:**
- `coming_soon` - Shows "Coming Soon!" message when clicked (default)
- `beta_signup` - Opens beta testing signup modal
- `direct_link` - Redirects directly to app store pages

## Firebase Configuration

Required for authentication and Firestore database functionality:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## App Store URLs (Optional)

Used when `APP_STORE_BUTTON_MODE=direct_link`:

```bash
IOS_APP_STORE_URL=https://apps.apple.com/app/your-app-id
ANDROID_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=your.package.name
```

## Setup Instructions

1. Create a `.env.local` file in the project root
2. Copy the variables you need from the examples above
3. Replace placeholder values with your actual configuration
4. Restart the development server after making changes

## Default Values

If environment variables are not set, the following defaults are used:
- `ENABLE_GOOGLE_SIGNIN`: `true` (Google sign-in enabled)
- `APP_STORE_BUTTON_MODE`: `coming_soon` (shows coming soon message) 