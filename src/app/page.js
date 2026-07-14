import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PlanetaryTicker from '@/components/sections/PlanetaryTicker';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TodayAstrology from '@/components/sections/TodayAstrology';
import BirthChartPreview from '@/components/sections/BirthChartPreview';
import AIAssistantSection from '@/components/sections/AIAssistantSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <PlanetaryTicker />
        <StatsSection />
        <ServicesSection />
        <TodayAstrology />
        <BirthChartPreview />
        <AIAssistantSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
