
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Your Trusted Legal Partner
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Fighting for Your Rights –{' '}
            <span className="text-amber-400">Personalized Legal Solutions</span>{' '}
            You Can Rely On
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
            Free Case Evaluation in Minutes. Get the justice you deserve with experienced attorneys who care about your outcome.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg px-8 py-4">
              Get Your Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-slate-900 font-semibold text-lg px-8 py-4">
              Call (555) 123-LEGAL
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-amber-400" />
              <span>No Win, No Fee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-amber-400" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-amber-400" />
              <span>Free Case Review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
