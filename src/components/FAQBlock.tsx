import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQBlock = () => {
  const faqs = [
    {
      question: "What type of ownership structure is offered?",
      answer: "We offer direct property ownership through a transparent legal structure in Próspera ZEDE, providing clear title and ownership rights to investors."
    },
    {
      question: "How does the short-term rental program work?",
      answer: "Our professional management team handles all aspects of STR operations, from guest booking to property maintenance, with transparent revenue sharing for owners."
    },
    {
      question: "What utilities and services are included?",
      answer: "Base utilities include high-speed internet, water, and waste management. Electricity is separately metered. Full concierge and maintenance services are available."
    },
    {
      question: "What safety and security measures are in place?",
      answer: "The development features 24/7 security, controlled access, professional property management, and is located within the secure Próspera jurisdiction."
    },
    {
      question: "What financing options are available?",
      answer: "We offer various financing structures for qualified investors, including traditional mortgages and alternative financing arrangements. Contact us for details."
    },
    {
      question: "What on-island services and support do you provide?",
      answer: "Full property management, guest services, maintenance coordination, and local support through our experienced on-island team led by seasoned professionals."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-brand-navy mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-brand-coal/80">
          Get answers to common questions about investing in Darien Village
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-brand-sand/20">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-left font-medium text-brand-navy">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-brand-coal/80">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};