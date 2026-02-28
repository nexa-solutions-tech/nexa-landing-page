import { AIEfficiency } from "@/sections/AIEfficiency";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { Comparison } from "@/sections/Comparison";
import { CTA } from "@/sections/CTA";
import { FAQ } from "@/sections/FAQ";
import { Footer } from "@/sections/Footer";
import { FoundersNote } from "@/sections/FoundersNote";
import { Hero } from "@/sections/Hero";
import { Integrations } from "@/sections/Integrations";
import { Navbar } from "@/sections/Navbar";
import { Pricing } from "@/sections/Pricing";
import { Stats } from "@/sections/Stats";
import { Testimonials } from "@/sections/Testimonials";

export const App = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-inter overflow-x-hidden">
      {/* Navbar - sempre no topo */}
      <Navbar />

      {/* Conteúdo principal */}
      <main className="relative flex flex-col">
        <Hero />
        <BenefitsSection />
        <Testimonials />
        <Stats />
        <Pricing />
        <FoundersNote />
        <Integrations />
        <Comparison />
        <AIEfficiency />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};
