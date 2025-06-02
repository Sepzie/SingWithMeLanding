import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { seoMetadata } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: seoMetadata.title,
  description: seoMetadata.description,
  keywords: seoMetadata.keywords,
  authors: [{ name: seoMetadata.author }],
  creator: seoMetadata.creator,
  publisher: seoMetadata.publisher,
  robots: seoMetadata.robots,
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
    title: seoMetadata.openGraph.title,
    description: seoMetadata.openGraph.description,
    type: seoMetadata.openGraph.type as any,
    locale: seoMetadata.openGraph.locale,
    siteName: seoMetadata.openGraph.siteName,
  },
  twitter: {
    card: seoMetadata.twitter.card as any,
    title: seoMetadata.twitter.title,
    description: seoMetadata.twitter.description,
    creator: seoMetadata.twitter.creator,
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
