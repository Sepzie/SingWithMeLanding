import { siteContent } from "@/data/content";
import { legalLinks } from "@/data/links";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container max-w-screen-xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              SingWithMe
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
              Privacy Policy
            </Link>
            <Link
              href={legalLinks.terms}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            {siteContent.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
} 