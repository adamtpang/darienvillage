import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-luxury">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to invest in your future? Get in touch with our investment team today.
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto items-stretch">
          <Card className="hover-lift border-0 shadow-card h-full">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-wood-primary">Contact Information</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Reach out to us through any of the following channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-wood-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-wood-primary font-semibold text-sm sm:text-base">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Address</h4>
                    <p className="text-muted-foreground text-sm">Beta district, Próspera</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-wood-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-wood-primary font-semibold text-sm sm:text-base">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Phone</h4>
                    <p className="text-muted-foreground text-sm">+504 9536 0327</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-wood-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-wood-primary font-semibold text-sm sm:text-base">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Email</h4>
                    <p className="text-muted-foreground text-sm">ivan@darienvillage.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-lift border-0 shadow-card bg-gradient-to-br from-card via-card to-muted/20 overflow-hidden relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-luxury/5 via-transparent to-wood-primary/5"></div>
            <CardHeader className="relative">
              <CardTitle className="text-2xl text-wood-primary">Ready to invest?</CardTitle>
              
            </CardHeader>
            <CardContent className="relative flex flex-col justify-center items-center text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-luxury to-wood-primary rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div className="space-y-4">
                <Button variant="premium" className="text-base px-8 py-4 w-full max-w-[280px] shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => window.open('https://calendly.com/syrtsov-ivan/meeting_with_ivan', '_blank')}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Free Consultation
                </Button>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No commitment
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    30 min call
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;