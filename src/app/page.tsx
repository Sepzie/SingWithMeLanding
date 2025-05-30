import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Benefits />
      <CTA />
    </Layout>
  );
}
