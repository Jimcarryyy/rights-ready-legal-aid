
import { Award, Clock, DollarSign, Phone } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Decades of Combined Experience',
    description: 'Our attorneys have successfully handled thousands of cases across multiple practice areas.'
  },
  {
    icon: Award,
    title: 'Proven Track Record of Success',
    description: 'We\'ve recovered millions in settlements and verdicts for our clients.'
  },
  {
    icon: DollarSign,
    title: 'Client-Focused, Transparent Pricing',
    description: 'No hidden fees. Clear pricing structure with many cases on contingency basis.'
  },
  {
    icon: Phone,
    title: 'Available 24/7 for Emergencies',
    description: 'Legal emergencies don\'t wait for business hours. Neither do we.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We combine experience, dedication, and results to provide exceptional legal representation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
