# Site Icon Setup

## Where to place your site icons:

Place these files in the `public/` folder (not in `public/images/`):

### Required Icons:
- `favicon.ico` - Main favicon (16x16, 32x32, 48x48 sizes in one file)
- `favicon-16x16.png` - 16x16 PNG favicon
- `favicon-32x32.png` - 32x32 PNG favicon
- `apple-touch-icon.png` - 180x180 PNG for iOS devices
- `android-chrome-192x192.png` - 192x192 PNG for Android
- `android-chrome-512x512.png` - 512x512 PNG for Android
- `site.webmanifest` - Web app manifest file

### Optional:
- `mstile-150x150.png` - 150x150 PNG for Windows tiles
- `safari-pinned-tab.svg` - SVG for Safari pinned tabs

## File structure should look like:
```
public/
├── images/
│   └── hero_doodle.png
├── screenshots/
│   ├── player.png
│   ├── upload.png
│   └── ...
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

The metadata in `src/app/layout.tsx` is already configured to look for these files.

## Generating Icons:
You can use online tools like:
- https://realfavicongenerator.net/
- https://favicon.io/

Just upload your logo/icon image and download all the generated files to the `public/` folder. 