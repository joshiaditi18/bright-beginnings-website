import Navbar from "@/components/Navbar";
import AdmissionTicker from "@/components/AdmissionTicker";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FunFactsCounter from "@/components/FunFactsCounter";
import AnimalParadeSection from "@/components/AnimalParadeSection";
import LearningAdventuresSection from "@/components/LearningAdventuresSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndianCultureSection from "@/components/IndianCultureSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyAdmissionBar from "@/components/StickyAdmissionBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AdmissionTicker />
      <HeroSection />
      <AboutSection />
      <FunFactsCounter />
      <AnimalParadeSection />
      <LearningAdventuresSection />
      <ProgramsSection />
      <WhyChooseUs />
      <IndianCultureSection />
      <GallerySection />
      <TestimonialsSection />
      <AdmissionsSection />
      <ContactSection />
      <Footer />
      <StickyAdmissionBar />
    </div>
  );
};

export default Index;
