
import ModernHeader from "@/components/ModernHeader";
import ModernHero from "@/components/ModernHero";
import ModernAbout from "@/components/ModernAbout";
import ModernServices from "@/components/ModernServices";
import ModernDifferentials from "@/components/ModernDifferentials";
import OutrosAtendimentos from "@/components/OutrosAtendimentos";
import ModernTestimonials from "@/components/ModernTestimonials";
import ModernFAQ from "@/components/ModernFAQ";
import ModernContact from "@/components/ModernContact";
import ModernFooter from "@/components/ModernFooter";
import ModernSEO from "@/components/ModernSEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF8' }}>
      <ModernSEO />
      <ModernHeader />
      <WhatsAppButton />
      <ScrollToTop />

      <ModernHero />
      <ModernAbout />
      <ModernServices />
      <ModernDifferentials />
      <OutrosAtendimentos />
      <ModernTestimonials />
      <ModernFAQ />
      <ModernContact />
      <ModernFooter />
    </div>
  );
};

export default Index;
