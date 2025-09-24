import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MovementSection from "@/components/MovementSection copy";
import RoadmapSection from "@/components/RoadmapSection";
import AboutSection from "@/components/AboutSection";
import FisioSection from "@/components/FisioSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <MovementSection />
      <RoadmapSection />
      <AboutSection />
      <FisioSection />
      <PricingSection />
      <ComparisonSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
