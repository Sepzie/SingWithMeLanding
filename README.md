# SingWithMe Landing Page

A modern, dark-themed landing page for the SingWithMe mobile app built with Next.js, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Dark Theme with Neon Accents**: Beautiful dark interface with cyan, pink, and green neon highlights
- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **Modern UI Components**: Built with shadcn/ui for consistent, accessible components
- **Glassmorphism Effects**: Subtle glass-like effects for feature cards and sections
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Fast Performance**: Optimized images, lazy loading, and efficient code splitting
- **Interactive Animations**: Smooth hover effects and fade-in animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Typography**: Inter font
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
├── docs/                           # Project documentation
│   ├── vercel-deployment-checklist.md
│   └── singwithme_landing_requirements.mdc
├── public/
│   ├── images/
│   │   └── hero_doodle.png        # Hero section image
│   └── screenshots/               # App screenshots (public folder)
├── src/
│   ├── app/                       # Next.js app router pages
│   │   ├── page.tsx              # Landing page
│   │   ├── privacy/page.tsx      # Privacy policy
│   │   ├── terms/page.tsx        # Terms of service
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── layout/               # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── sections/             # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   └── CTA.tsx
│   │   └── common/               # Reusable components
│   │       ├── FeatureCard.tsx
│   │       └── DownloadButtons.tsx
│   ├── data/                     # Content and configuration
│   │   ├── content.ts            # Main page content (headlines, descriptions, features)
│   │   ├── links.ts              # URLs and links
│   │   └── legal.ts              # Privacy policy & terms content
│   ├── assets/
│   │   └── screenshots/          # App screenshots (source)
│   └── lib/                      # Utility functions
├── FAVICON_SETUP.md              # Icon setup instructions
├── components.json               # shadcn/ui configuration
├── tailwind.config.js            # Tailwind configuration
├── next.config.ts                # Next.js configuration
└── package.json                  # Dependencies
```

## 🎨 Design System

### Color Palette

- **Background**: Dark (#121212)
- **Primary Accent**: Neon Blue (#00ffff)
- **Secondary Accent**: Neon Pink (#ff2fd9)
- **Accent**: Neon Green (#39ff14)
- **Text**: White/off-white for contrast

### Typography

- **Font**: Inter (clean, modern sans-serif)
- **Hierarchy**: Clear heading structure with proper spacing
- **Neon Effects**: Text shadows and glows for accent colors

### Visual Effects

- **Glassmorphism**: Subtle backdrop blur and transparency
- **Neon Glows**: Box shadows for interactive elements
- **Gradient Borders**: Multi-color borders for special elements
- **Smooth Animations**: Fade-in effects and hover transitions

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🖼️ Assets

### Hero Image
- **Location**: `public/images/hero_doodle.png`
- **Usage**: Main hero section visual

### App Screenshots
Current screenshots in `src/assets/screenshots/`:
- `library.png` - Main library interface
- `player.png` - Player interface
- `player_lineByLine.png` - Line-by-line mode
- `player_recording.png` - Recording interface
- `player_showingRecordingTakes.png` - Recording takes view
- `upload.png` - Upload interface
- `upload_songDetails.png` - Song details screen
- `upload_uploading.png` - Upload progress
- `upload_processing.png` - Processing screen
- `upload_processing_2.png` - Alternative processing view

### Icons Setup
See `FAVICON_SETUP.md` for complete favicon and icon setup instructions.

## 🔧 Customization

### Content Management

All content is centralized in data files:

- **`src/data/content.ts`**: Main page content (headlines, descriptions, features)
- **`src/data/links.ts`**: Navigation and download links
- **`src/data/legal.ts`**: Privacy policy and terms of service content

### Styling

- **Global styles**: `src/app/globals.css`
- **Color scheme**: CSS custom properties in `:root`
- **Component styling**: Tailwind classes with custom utilities

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add content to appropriate data file

## 📋 Legal Pages

The app includes comprehensive legal pages with content managed in `src/data/legal.ts`:

- **Privacy Policy**: Data collection, usage, security, and user rights
- **Terms of Service**: Service description, user responsibilities, limitations
- **Contact Information**: Support email and business address

## 📈 Performance

- **Lighthouse Score**: Optimized for 95+ scores
- **Image Optimization**: Automatic Next.js image optimization
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Below-fold content lazy loaded

## 📚 Documentation

Additional documentation available in `/docs/`:
- **Deployment Checklist**: Vercel deployment guide
- **Requirements**: Original project requirements and specifications

## 🔗 Links

- **Production Site**: [To be updated when deployed]
- **App Store**: [To be updated when available]
- **Google Play**: [To be updated when available]

---

**SingWithMe** - Proprietary software. All rights reserved.
