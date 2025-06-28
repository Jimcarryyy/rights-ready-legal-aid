
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PracticeAreas from '@/components/PracticeAreas';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import TrustIndicators from '@/components/TrustIndicators';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustIndicators />
      <PracticeAreas />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
