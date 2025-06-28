
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "How much does a lawyer cost?",
    answer: "Our fee structure varies by case type. Many personal injury cases are handled on a contingency basis (no win, no fee). We offer free consultations to discuss pricing options that work for your situation."
  },
  {
    question: "What should I bring to my first meeting?",
    answer: "Bring any relevant documents, police reports, medical records, insurance correspondence, contracts, or other materials related to your case. Don't worry if you don't have everything - we can help you gather what's needed."
  },
  {
    question: "How long will my case take?",
    answer: "Case duration varies significantly based on complexity, court schedules, and other factors. Simple matters may resolve in weeks, while complex litigation can take months or years. We'll provide realistic timelines during your consultation."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we understand legal fees can be a burden. We offer flexible payment arrangements and work with clients to find solutions that fit their financial situation. Discuss options during your free consultation."
  },
  {
    question: "Will my case go to trial?",
    answer: "Most cases settle out of court, but we're fully prepared to take your case to trial if necessary. We'll advise you on the best strategy based on your specific situation and desired outcomes."
  },
  {
    question: "How do I know if I have a valid case?",
    answer: "The best way to determine if you have a valid case is through a free consultation. We'll review the facts, applicable laws, and potential outcomes to give you an honest assessment of your legal options."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get quick answers to common questions about our legal services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-amber-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
