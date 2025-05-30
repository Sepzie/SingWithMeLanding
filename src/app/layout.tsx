import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SingWithMe - Perfect Your Voice, One Line at a Time",
  description: "Upload any song, record yourself singing, and compare your voice with the original. Simple AI-powered vocal separation for better practice.",
  keywords: "singing practice, vocal separation, voice recording, karaoke, singing app, music practice, vocal training",
  authors: [{ name: "SingWithMe Team" }],
  creator: "SingWithMe",
  publisher: "SingWithMe",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "SingWithMe - Perfect Your Voice, One Line at a Time",
    description: "Upload any song, record yourself singing, and compare your voice with the original. Simple AI-powered vocal separation for better practice.",
    type: "website",
    locale: "en_US",
    siteName: "SingWithMe",
  },
  twitter: {
    card: "summary_large_image",
    title: "SingWithMe - Perfect Your Voice, One Line at a Time",
    description: "Upload any song, record yourself singing, and compare your voice with the original. Simple AI-powered vocal separation for better practice.",
    creator: "@singwithme",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
