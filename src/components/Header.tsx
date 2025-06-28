
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold text-amber-400">
              LegalPartner
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#practice-areas" className="hover:text-amber-400 transition-colors">Practice Areas</a>
              <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
              <a href="#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>(555) 123-LEGAL</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@legalpartner.com</span>
              </div>
            </div>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
