# Firebase Setup Guide

This guide will help you set up Firebase Authentication for the SingWithMe landing page, enabling account deletion and password reset functionality required for App Store compliance.

## 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "singwithme-landing")
4. Choose whether to enable Google Analytics (optional)
5. Accept the terms and create the project

## 2. Enable Authentication

1. In your Firebase project console, go to **Authentication** in the left sidebar
2. Click **Get started** if this is your first time
3. Go to the **Sign-in method** tab
4. Enable the following providers:
   - **Email/Password**: Click on it and toggle "Enable" on
   - **Google**: Click on it, toggle "Enable" on, and configure your OAuth consent screen

## 3. Configure Web App

1. In the Firebase project overview, click the **Web app** icon (`</>`)
2. Register your app with a nickname (e.g., "SingWithMe Landing")
3. Copy the Firebase configuration object

## 4. Set Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

Replace the values with your actual Firebase configuration values from step 3.

## 5. Configure Authorized Domains

1. In Firebase Console, go to **Authentication** > **Settings** > **Authorized domains**
2. Add your domain(s):
   - `localhost` (for development)
   - Your production domain (e.g., `singwithme.app`)

## 6. Google OAuth Setup (if using Google Sign-in)

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project
3. Go to **APIs & Services** > **Credentials**
4. Configure your OAuth consent screen
5. Add your authorized redirect URIs

## 7. Test the Implementation

1. Start your development server: `npm run dev`
2. Navigate to `/account`
3. Test the following flows:
   - Sign in with email/password
   - Sign in with Google
   - Password reset
   - Account deletion

## Features Implemented

### Account Management Page (`/account`)
- Unified interface for all account operations
- Displays user information when signed in
- Provides access to all authentication functions

### Login Dialog
- Email/password authentication
- Google OAuth authentication  
- Error handling and validation
- Responsive design

### Account Deletion Flow
- Multi-step confirmation process
- Automatic reauthentication for security
- Supports both email and Google users
- Proper cleanup and sign-out

### Password Reset
- Email-based password reset
- Error handling for common scenarios
- Success confirmation with instructions
- Option to resend reset email

## Security Features

- **Reauthentication**: Account deletion requires recent authentication
- **Confirmation Steps**: Multiple confirmations before irreversible actions
- **Provider Detection**: Automatically handles different authentication providers
- **Error Handling**: Comprehensive error messages for better UX

## App Store Compliance

This implementation satisfies App Store requirements for account deletion by providing:
- Clear and accessible account deletion option
- Proper user authentication before deletion
- Irreversible account and data removal
- User-friendly interface accessible from your website

## Usage

After setup, users can:
1. Visit `yourwebsite.com/account`
2. Sign in with their existing credentials
3. Access account management options including deletion
4. Reset their password if needed

The account management page is linked in your site navigation for easy access. 