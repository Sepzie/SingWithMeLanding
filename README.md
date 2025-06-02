# SingWithMe Landing Page

A modern, dark-themed landing page for the SingWithMe mobile app built with Next.js, Tailwind CSS, and shadcn/ui components. **This template is designed to be easily reusable for other landing pages** - simply customize the JSON data files to match your project!

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
├── data/                         # 🆕 Centralized JSON data files
│   ├── site_identity.json        # Site branding and identity
│   ├── color_scheme.json         # Theme colors and design tokens
│   └── content/
│       └── en.json               # English content (easily translatable)
├── docs/                         # Project documentation
│   ├── vercel-deployment-checklist.md
│   └── singwithme_landing_requirements.mdc
├── public/
│   ├── images/
│   │   └── hero_doodle.png       # Hero section image
│   └── screenshots/              # App screenshots (public folder)
├── src/
│   ├── app/                      # Next.js app router pages
│   │   ├── page.tsx             # Landing page
│   │   ├── privacy/page.tsx     # Privacy policy
│   │   ├── terms/page.tsx       # Terms of service
│   │   ├── layout.tsx           # Root layout
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   └── CTA.tsx
│   │   └── common/              # Reusable components
│   │       ├── FeatureCard.tsx
│   │       └── DownloadButtons.tsx
│   ├── assets/
│   │   └── screenshots/         # App screenshots (source)
│   └── lib/                     # Utility functions
├── FAVICON_SETUP.md             # Icon setup instructions
├── components.json              # shadcn/ui configuration
├── tailwind.config.js           # Tailwind configuration
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies
```

## 🎨 Design System

### Color Palette

The color scheme is now centralized in `data/color_scheme.json` for easy customization:

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

## �� Customization

### 🆕 New JSON-Based Content Management

All content is now centralized in easy-to-edit JSON files in the `/data` directory:

- **`data/site_identity.json`**: Site name, description, contact info, URLs, and branding
- **`data/color_scheme.json`**: Complete color palette and theme configuration  
- **`data/content/en.json`**: All text content, features, testimonials, and legal pages

### Making This Template Your Own

To customize this landing page for your own project:

1. **Update Site Identity**: Edit `data/site_identity.json` with your app/company details
2. **Customize Colors**: Modify `data/color_scheme.json` to match your brand colors
3. **Replace Content**: Update `data/content/en.json` with your own text, features, and testimonials
4. **Add Your Screenshots**: Replace images in `public/screenshots/` with your app screenshots
5. **Update Styling**: Modify global styles in `src/app/globals.css` if needed

### Legacy TypeScript Data Files

The original TypeScript data files in `src/data/` are still present for backward compatibility but will be deprecated in favor of the new JSON structure. When updating your implementation, prefer importing from the new JSON files.

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

## 🤝 Open Source Template

**This landing page template is freely available for others to use!** 

We've designed this SingWithMe landing page to be easily adaptable for any app or service. The modular structure and JSON-based content management make it simple to customize for your own project. 

Feel free to:
- Use this template for your own landing page
- Customize the design and content to match your brand
- Adapt the structure for different types of applications
- Contribute improvements back to the community

Simply update the JSON files in the `/data` directory with your own content, replace the screenshots with your app images, and you'll have a professional landing page ready to go!

**SingWithMe** - Built with ❤️ and made available for the community.
