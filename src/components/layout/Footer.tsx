import { siteContent, legalLinks, siteName } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container max-w-screen-xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {siteName}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {siteContent.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <Link
              href={legalLinks.privacy}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {siteContent.footer.navigation.privacy}
            </Link>
            <Link
              href={legalLinks.terms}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {siteContent.footer.navigation.terms}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            {siteContent.footer.copyright}
          </p>
        </div>

        {/* Attribution */}
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground/80">
            Landing page template courtesy of{" "}
            <Link
              href="https://github.com/Sepzie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline"
            >
              Sepehr Zohoori Rad
            </Link>
            , can be found on{" "}
            <Link
              href="https://github.com/Sepzie/SingWithMeLanding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline"
            >
              GitHub
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
} 