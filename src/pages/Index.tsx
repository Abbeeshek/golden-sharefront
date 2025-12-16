import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FocusAreasSection from "@/components/sections/FocusAreasSection";
import AudienceSection from "@/components/sections/AudienceSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import GovernanceSection from "@/components/sections/GovernanceSection";
import VisionSection from "@/components/sections/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <FocusAreasSection />
      <AudienceSection />
      <EcosystemSection />
      <GovernanceSection />
      <VisionSection />
      <Footer />
    </main>
  );
};

export default Index;
