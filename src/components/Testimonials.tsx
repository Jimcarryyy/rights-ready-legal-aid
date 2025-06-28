
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    case: 'Personal Injury',
    text: 'The team at LegalPartner fought tirelessly for my case. They kept me informed every step of the way and secured a settlement that exceeded my expectations.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    case: 'Criminal Defense',
    text: 'Professional, knowledgeable, and genuinely caring. They handled my case with discretion and achieved the best possible outcome.',
    rating: 5
  },
  {
    name: 'Lisa Rodriguez',
    case: 'Family Law',
    text: 'During a difficult divorce, they provided compassionate guidance and protected my interests. I couldn\'t have asked for better representation.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real results from real clients who trusted us with their legal matters
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-amber-400">
                    {testimonial.case} Client
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
