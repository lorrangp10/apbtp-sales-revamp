import { LandingHeader } from "@/components/LandingHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ModulesSection } from "@/components/ModulesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ModulesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
