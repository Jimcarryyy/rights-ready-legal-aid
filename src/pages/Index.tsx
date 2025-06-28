
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PracticeAreas from '@/components/PracticeAreas';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import TrustIndicators from '@/components/TrustIndicators';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PracticeAreas />
        <WhyChooseUs />
        <Testimonials />
        <TrustIndicators />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
