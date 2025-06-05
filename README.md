# SingWithMe Landing Page

A sleek, dark-themed landing page for the SingWithMe mobile app, built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**. Designed to be **easily customizable** — just edit a few JSON files and you're good to go.

---

## 🚀 Key Features

* **Modern UI**: Dark mode with neon accents (blue, pink, green)
* **Responsive Design**: Looks great on all devices
* **Authentication Ready**: Email/password + Google login via Firebase
* **Account Management**: Reset password & delete account (App Store compliant)
* **Fast & Optimized**: Image optimization, lazy loading, code splitting
* **Customizable Content**: All text and styles externalized to JSON
* **i18n Ready**: Language content externalized for translation

---

## 🛠️ Tech Stack

| Layer          | Tools                                                                     |
| -------------- | ------------------------------------------------------------------------- |
| Framework      | [Next.js 15](https://nextjs.org) (App Router)                             |
| Styling        | [Tailwind CSS](https://tailwindcss.com)                                   |
| Components     | [shadcn/ui](https://ui.shadcn.dev), [Radix UI](https://www.radix-ui.com/) |
| Auth & Backend | Firebase Authentication & Cloud Functions                                 |
| Language       | TypeScript                                                                |
| Fonts          | Inter                                                                     |

---

## 📁 Project Structure

```txt
data/                    # Site identity, color scheme, and text content
docs/                    # Setup and deployment documentation
public/
  images/               # Hero image and visual assets
  screenshots/          # App screenshots
  favicon.ico           # Favicon and app icons
src/
  app/                  # App routes and global styles
  components/           # UI and layout components
  assets/               # (optional legacy assets)
  lib/                  # Utilities and Firebase config
tailwind.config.js       # Tailwind theme
next.config.ts           # Next.js settings
```

---

## 🔧 Customization Guide

Everything is JSON-driven for fast edits:

| File                      | Description                           |
| ------------------------- | ------------------------------------- |
| `data/site_identity.json` | Branding, URLs, and contact info      |
| `data/color_scheme.json`  | Color theme tokens                    |
| `data/content/en.json`    | UI content, feature blurbs, auth text |

To make it your own:

1. Update branding and content in `data/`
2. Replace images in `public/screenshots/` and `public/images/`
3. Customize styles in `src/app/globals.css`
4. Set up your Firebase project (see below)

---

## 🔐 Auth & Account Pages

Visit `/account` to test full authentication features:

| Feature             | Description                                         |
| ------------------- | --------------------------------------------------- |
| Sign In             | Email/password or Google OAuth                      |
| Reset Password      | Email-based reset for email users                   |
| Delete Account      | Multi-step deletion flow (App Store compliant)      |
| Auth Provider Logic | Handles different login methods + re-authentication |

> ✅ CORS is configured. Auth errors are handled gracefully.

---

## 🚀 Quickstart

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up Firebase**

   * Enable Email/Password and Google sign-in
   * Create `.env.local`:

     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=...
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
     ...
     ```

3. **Run the app**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Assets

| Asset           | Location                        |
| --------------- | ------------------------------- |
| Hero Image      | `public/images/hero_doodle.png` |
| App Screenshots | `public/screenshots/`           |
| Favicon & Icons | `public/`                       |

Screenshots include:

* Line-by-line mode
* Recording interface
* Upload UI
* Takes view

---

## 📋 Legal Pages

Legal content lives in `src/app/privacy/` and `src/app/terms/`, with text managed via JSON in `data/content/en.json`.

---

## 📈 Performance Notes

* Lighthouse Score: 95+
* Lazy loading for below-the-fold content
* Optimized images via Next.js `<Image>`

---

## 🧪 Docs & Deployment

* **Firebase Setup**: `FIREBASE_SETUP.md`
* **Deployment Checklist**: `docs/vercel-deployment-checklist.md`
* **Project Requirements**: `docs/singwithme_landing_requirements.mdc`

---

## 💡 Reusability

This is a fully modular landing page template. You can:

* Drop in your branding and screenshots
* Swap content with your own in the `/data` folder
* Adjust theme colors without digging into code
* Use it for SaaS, mobile apps, or side projects

---

## 📄 License

This template is open-source. Built with ❤️ for the community.
