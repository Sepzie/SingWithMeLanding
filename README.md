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
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Landing page
│   ├── privacy/page.tsx   # Privacy policy
│   ├── terms/page.tsx     # Terms of service
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── CTA.tsx
│   └── common/            # Reusable components
│       ├── FeatureCard.tsx
│       └── DownloadButtons.tsx
├── data/                  # Content and configuration
│   ├── content.ts         # All text content
│   ├── features.ts        # Feature data
│   └── links.ts           # URLs and links
└── assets/
    └── screenshots/       # App screenshots
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

## 📱 Screenshots

The landing page expects these screenshot files in `src/assets/screenshots/`:

- `main-interface.png` - Hero section app screenshot
- `upload-interface.png` - Upload feature screenshot
- `playback-comparison.png` - Comparison feature screenshot
- `lyrics-display.png` - Lyrics display screenshot
- `multiple-recordings.png` - Recordings management screenshot

## 🔧 Customization

### Content Management

All text content is centralized in data files:

- **`src/data/content.ts`**: Main page content (headlines, descriptions)
- **`src/data/features.ts`**: Feature cards data
- **`src/data/links.ts`**: Navigation and download links

### Styling

- **Global styles**: `src/app/globals.css`
- **Color scheme**: CSS custom properties in `:root`
- **Component styling**: Tailwind classes with custom utilities

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add content to appropriate data file

## 📈 Performance

- **Lighthouse Score**: Optimized for 95+ scores
- **Image Optimization**: Automatic Next.js image optimization
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Below-fold content lazy loaded

## 🔗 Links

- **Live Demo**: [Update when deployed]
- **App Store**: [Update when available]
- **Google Play**: [Update when available]

## 📄 License

[Specify your license here]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support regarding the landing page:

- **Email**: dev@singwithme.app
- **Issues**: [GitHub Issues]
- **Documentation**: [Link to docs]

---

Built with ❤️ for the SingWithMe community
