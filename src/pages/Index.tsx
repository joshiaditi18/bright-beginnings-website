import Navbar from "@/components/Navbar";
import AdmissionTicker from "@/components/AdmissionTicker";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FunFactsCounter from "@/components/FunFactsCounter";
import PedagogySection from "@/components/PedagogySection";
import AnimalParadeSection from "@/components/AnimalParadeSection";
import LearningAdventuresSection from "@/components/LearningAdventuresSection";
import ProgramsSection from "@/components/ProgramsSection";
import DayCareSection from "@/components/DayCareSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndianCultureSection from "@/components/IndianCultureSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyAdmissionBar from "@/components/StickyAdmissionBar";

const WavyDivider = ({ from, to }: { from: string; to: string }) => (
  <div className="relative -my-1">
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
      <path d="M0 40L80 35C160 30 320 20 480 28C640 36 800 56 960 58C1120 60 1280 44 1360 36L1440 28V80H0V40Z" fill={to} />
    </svg>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AdmissionTicker />
      <HeroSection />
      <AboutSection />
      <FunFactsCounter />
      <PedagogySection />
      <AnimalParadeSection />
      <LearningAdventuresSection />
      <ProgramsSection />
      <DayCareSection />
      <WhyChooseUs />
      <IndianCultureSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <AdmissionsSection />
      <ContactSection />
      <Footer />
      <StickyAdmissionBar />
    </div>
  );
};

export default Index;
