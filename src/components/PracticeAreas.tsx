
import { Card, CardContent } from '@/components/ui/card';
import { Users, Briefcase, Shield, Home } from 'lucide-react';

const practiceAreas = [
  {
    icon: Shield,
    title: 'Personal Injury',
    description: 'Car accidents, slip & falls, medical malpractice, and wrongful death cases.',
    color: 'text-red-500'
  },
  {
    icon: Users,
    title: 'Family Law',
    description: 'Divorce, child custody, adoption, and domestic relations matters.',
    color: 'text-blue-500'
  },
  {
    icon: Briefcase,
    title: 'Criminal Defense',
    description: 'DUI, drug charges, assault, theft, and all criminal matters.',
    color: 'text-purple-500'
  },
  {
    icon: Home,
    title: 'Business Law',
    description: 'Contract disputes, business formation, employment law, and litigation.',
    color: 'text-green-500'
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Practice Areas
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive legal services across multiple practice areas with proven results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <area.icon className={`h-12 w-12 mx-auto ${area.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-slate-600">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
