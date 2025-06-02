import { Layout } from "@/components/layout/Layout";
import { siteContent } from "@/lib/data";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="py-20 lg:py-32">
        <div className="container max-w-screen-md px-4 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-text">
                  404
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {siteContent.notFound.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {siteContent.notFound.description}
              </p>
            </div>
            
            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md neon-glow transition-all duration-300 hover:scale-105"
              >
                {siteContent.notFound.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 