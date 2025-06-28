
import { Award, Users, Shield, Clock } from 'lucide-react';

const indicators = [
  {
    icon: Award,
    text: 'Top-Rated on Avvo'
  },
  {
    icon: Shield,
    text: 'BBB Accredited'
  },
  {
    icon: Users,
    text: '1000+ Satisfied Clients'
  },
  {
    icon: Clock,
    text: '25+ Years Experience'
  }
];

const TrustIndicators = () => {
  return (
    <section className="py-12 bg-amber-50 border-y border-amber-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {indicators.map((indicator, index) => (
            <div key={index} className="flex items-center space-x-3 text-slate-700">
              <indicator.icon className="h-6 w-6 text-amber-600" />
              <span className="font-semibold">{indicator.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
