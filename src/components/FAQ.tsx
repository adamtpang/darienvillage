import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import sitePlan from "@/assets/site-plan.png";
import developmentSitePlan from "@/assets/site-plan-detailed.png";
const FAQ = () => {
  const faqs = [{
    id: "location",
    question: "Where is Building 6 located and how is it positioned relative to other buildings?",
    answer: "The development is located in Próspera ZEDE, Honduras. The 6th building will be strategically positioned within the master-planned community to optimize views and accessibility. The layout ensures optimal spacing for privacy while maintaining community connectivity."
  }, {
    id: "timeline",
    question: "What is the construction timeline and who handles the construction?",
    answer: "Construction timeline is 12 months from contract signing. Iternum serves as the general contractor with Rubén Fajardo as the dedicated project manager. The construction follows a milestone-based approach with regular progress updates and quality checkpoints throughout the build process."
  }, {
    id: "furnishing",
    question: "Do units come furnished and include air conditioning?",
    answer: "All units include shell + complete fit-out with bathrooms ready to use, kitchen with cabinets, and air conditioning included as standard. Optional turnkey furniture packages are available ranging from $8,000-$12,000 (Essential) to $15,000-$22,000 (Premium) to make your unit rental-ready from day one."
  }, {
    id: "unit-locations",
    question: "Where are different unit types located and which have balconies or rooftop access?",
    answer: "Studio, Loft, and One Bedroom units are distributed across different floors of the 6th building for optimal views and accessibility. Balcony options are available for all unit types at an additional cost. The Penthouse unit includes balcony access as standard and has exclusive rooftop terrace access. Specific floor plans and positioning details are available during property consultation."
  }, {
    id: "pricing",
    question: "What are the unit prices and payment options?",
    answer: "Studio: $76,560 (26.4 m²) & $82,360 (28.4 m²), Loft: $112,000 (40 m²) & $117,600 (42 m²), One Bedroom: $124,200 (46 m²) & $129,600 (48 m²), Penthouse: $283,500 (105 m² with exclusive rooftop access). Yes, USDC payments are accepted along with BTC, ETH, DAI, and USDT. Escrow protection with milestone releases: 30% at contract signing, 50% after month 4 of construction, 20% at completion and title transfer."
  }, {
    id: "running-costs",
    question: "What are the monthly operating costs for each unit type?",
    answer: "Monthly operating costs include: Utilities (~$200), HOA fees (Studio: $75, Loft: $113, One Bedroom: $130), and Próspera tax (5% of gross rental income). These costs are factored into the rental yield calculations provided for each unit type."
  }, {
    id: "management",
    question: "Is property management available and what are the rental yields?",
    answer: "Yes, professional property management is available. STR (Short-term rental): 25% management fee with estimated 60% occupancy. LTR (Long-term rental): 10% management fee. Monthly net yields range from $821 (Studio STR) to $1,095 (One Bedroom STR) for short-term rentals, and $525-$770 for long-term rentals depending on unit type."
  }, {
    id: "legal-process",
    question: "How does the legal process and property registration work?",
    answer: "All properties receive title registration in the Próspera Property Registry upon completion. The legal process includes contract signing with escrow setup, milestone-based construction monitoring, final inspection, and title transfer at completion. Próspera ZEDE provides a secure legal framework with international property rights protection."
  }];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-primary">
              Building 6 FAQ
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about purchasing and managing Building 6 units
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="glass-card-quality">
                <AccordionTrigger className="text-left px-6 py-4 text-navy-primary font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.id === "location" ? (
                    <div className="space-y-4">
                      <p>{faq.answer}</p>
                      <div className="mt-4">
                        <img 
                          src={developmentSitePlan} 
                          alt="Development Site Plan showing Building 6 location relative to other buildings in Próspera ZEDE"
                          className="w-full rounded-lg shadow-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ) : (
                    faq.answer
                  )}
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