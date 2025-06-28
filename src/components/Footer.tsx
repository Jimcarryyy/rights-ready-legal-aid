
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">LegalPartner</h3>
            <p className="text-slate-300 mb-4">
              Your trusted legal partner, fighting for your rights with personalized solutions you can rely on.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-LEGAL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@legalpartner.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Personal Injury</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Family Law</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Criminal Defense</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Business Law</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
            <p className="text-slate-300 mb-4">
              Legal emergencies don't wait for business hours. Call us 24/7.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold w-full">
              Call Now: (555) 123-LEGAL
            </Button>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 LegalPartner. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <p className="text-slate-400 text-sm">
              <MapPin className="inline h-4 w-4 mr-1" />
              123 Justice Boulevard, Suite 400, Legal District
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
