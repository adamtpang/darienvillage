import Navigation from "@/components/Navigation";
import PropertyCard from "@/components/PropertyCard";
import ContactSection from "@/components/ContactSection";
import MasterPlan from "@/components/MasterPlan";
import PropertyDetailsModal from "@/components/PropertyDetailsModal";
import FAQ from "@/components/FAQ";
import PageHead from "@/components/PageHead";
import { TrustIndicators } from "@/components/ui/trust-indicators";
import { LocationHighlights } from "@/components/ui/location-highlights";
import { Building6Timeline } from "@/components/ui/building6-timeline";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import typeBInterior from "@/assets/type-b-interior.png";
import typeCInterior from "@/assets/type-c-interior.png";
import typeDInterior from "@/assets/type-d-interior.png";
import typeEInterior from "@/assets/type-e-interior.png";
const Building6 = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleViewDetails = (property: any) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };
  const featuredProperties = [{
    id: "studio",
    title: "Studio",
    price: "$76,560",
    balconyPrice: "$82,360",
    bedrooms: 0,
    bathrooms: 1,
    sqft: "26.4 - 28.4 m²",
    image: typeBInterior,
    status: "available" as const,
    targetYield: "9.60% / 8.92%",
    potentialRevenue: "$612",
    grossRevenue: "$13,140",
    netRevenue: "$7,346",
    paybackPeriod: "10.42 / 11.21 yrs"
  }, {
    id: "loft",
    title: "Loft",
    price: "$112,000",
    balconyPrice: "$117,600",
    bedrooms: 1,
    bathrooms: 1,
    sqft: "40 - 42 m²",
    image: typeCInterior,
    status: "available" as const,
    targetYield: "7.72% / 7.35%",
    potentialRevenue: "$721",
    grossRevenue: "$15,330",
    netRevenue: "$8,646",
    paybackPeriod: "12.95 / 13.60 yrs"
  }, {
    id: "1br",
    title: "1 Bedroom",
    price: "$124,200",
    balconyPrice: "$129,600",
    bedrooms: 1,
    bathrooms: 1,
    sqft: "46 - 48 m²",
    image: typeDInterior,
    status: "available" as const,
    availability: "1 out of 6 reserved",
    targetYield: "8.20% / 7.83%",
    potentialRevenue: "$846",
    grossRevenue: "$17,520",
    netRevenue: "$10,147",
    paybackPeriod: "12.20 / 12.77 yrs"
  }, {
    id: "type-e-penthouse",
    title: "Penthouse",
    price: "$283,500",
    bedrooms: 1,
    bathrooms: 2,
    sqft: "105 m²",
    image: typeEInterior,
    status: "available" as const,
    targetYield: "7.13%",
    potentialRevenue: "$1,686",
    grossRevenue: "$36,135",
    netRevenue: "$20,236",
    paybackPeriod: "14.02 yrs"
  }];
  return <div className="min-h-screen bg-background">
      <PageHead title="Building 6 - Modern Apartments for Sale in Próspera, Honduras" description="Own your modern apartment in Building 6, Próspera. 9 units available for purchase with optional property management. Same developer as Darien Village." keywords="Building 6 Próspera, Honduras apartments for sale, modern real estate, Iternum construction, property ownership Próspera" canonical="https://darienvillage.com/building6" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/90aab359-7105-4a89-bf71-e8035af6bc72.png')`
      }}>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/80 via-navy-primary/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              Building 6
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              Modern Apartments for Sale in Próspera ZEDE
            </p>
          
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-8 sm:mb-16">
            <Button variant="premium" size="lg" className="w-full max-w-xs sm:max-w-sm lg:min-w-[280px] text-sm sm:text-base lg:text-lg font-semibold py-3 sm:py-4 touch-target" onClick={() => {
            const element = document.getElementById('apartments');
            element?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              Browse Available Units
            </Button>
            <Button variant="outline" size="lg" className="w-full max-w-xs sm:max-w-sm lg:min-w-[280px] text-sm sm:text-base lg:text-lg font-semibold py-3 sm:py-4 text-white border-white/60 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-300 touch-target" onClick={() => window.open('https://calendly.com/syrtsov-ivan/meeting_with_ivan', '_blank')}>
              Schedule Purchase Call
            </Button>
          </div>

        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      
      {/* Investment Timeline */}
      <Building6Timeline />
      
      <MasterPlan />
      
      {/* Featured Apartments Section */}
      <section id="apartments" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-emerald-primary/10 text-emerald-primary border-emerald-primary/30">
              Apartments for Sale
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-primary">
              Own Your Modern Apartment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              9 exclusive units available for purchase. Complete shell + fit-out included with A/C, finished bathrooms, and quality kitchen cabinets. 
              Balcony options available for enhanced living space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {featuredProperties.map(property => <PropertyCard key={property.id} {...property} onViewDetails={() => handleViewDetails(property)} />)}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="premium" size="lg" className="px-8 py-4" onClick={() => window.open('https://calendly.com/syrtsov-ivan/meeting_with_ivan', '_blank')}>
              Schedule Purchase Consultation
            </Button>
          </div>
        </div>
      </section>
      
      <section id="faq">
        <FAQ />
      </section>
        
      <ContactSection />
      
      <PropertyDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} property={selectedProperty} />
      
      <footer className="bg-navy-primary text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-gold-primary mb-3 sm:mb-4">
              Building 6
            </div>
            <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 px-4">Modern apartments for sale in Próspera ZEDE, Honduras</p>
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 text-xs sm:text-sm text-white/60 gap-2 sm:gap-0">
              <span>© 2025 Darien Village Development</span>
              <span className="hidden sm:block">•</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Building6;