import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
}
const testimonials: Testimonial[] = [{
  name: "Sarah Johnson",
  role: "Real Estate Investor",
  content: "Próspera represents the future of real estate investment. The legal framework is sophisticated, the returns are exceptional, and the management team is professional. My investment in Darien Village has exceeded expectations.",
  rating: 5,
  location: "Miami, FL"
}, {
  name: "Michael Chen",
  role: "Portfolio Manager",
  content: "I've invested in multiple international markets, but Próspera stands out. The combination of favorable regulations, growing tourism, and professional property management makes this a compelling opportunity.",
  rating: 5,
  location: "San Francisco, CA"
}, {
  name: "Dr. Elena Rodriguez",
  role: "Medical Professional",
  content: "As someone who values both financial returns and quality of life, investing in Darien Village was perfect. The properties are beautifully designed, and the ROI projections are realistic and achievable.",
  rating: 5,
  location: "Toronto, Canada"
}, {
  name: "James Thompson",
  role: "Tech Entrepreneur",
  content: "The transparency and professionalism of the Darien Village team is outstanding. They provided detailed financial projections, clear timelines, and regular updates throughout the process.",
  rating: 5,
  location: "Austin, TX"
}];
export const TestimonialsCarousel = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-primary">
            What Investors Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from investors who have already joined the Darien Village community
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="glass-card-quality hover-lift h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-gold-primary text-gold-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <div className="font-semibold text-navy-primary">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-gold-primary">
                          {testimonial.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};