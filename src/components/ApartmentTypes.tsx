import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import typeBFloorplan from "@/assets/type-b-floorplan.png";
import typeBInterior from "@/assets/type-b-interior.png";
import typeCFloorplan from "@/assets/type-c-floorplan.png";
import typeCInterior from "@/assets/type-c-interior.png";
import typeDFloorplan from "@/assets/type-d-floorplan.png";
import typeDInterior from "@/assets/type-d-interior.png";
import typeEFloorplan from "@/assets/type-e-floorplan.png";
import typeEInterior from "@/assets/type-e-interior.png";

interface ApartmentType {
  id: string;
  name: string;
  type: string;
  area: string;
  balcony?: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
  features: string[];
  status: "available" | "reserved" | "coming-soon";
  floorPlan?: string;
  interior?: string;
}

const ApartmentTypes = () => {
  const apartmentTypes: ApartmentType[] = [
    {
      id: "type-b",
      name: "Type B - Studio",
      type: "Studio",
      area: "26.89 sqm",
      bedrooms: 0,
      bathrooms: 1,
      price: "From €320,000",
      features: [
        "Smart space design",
        "Built-in furniture system",
        "Loft-style bed solution",
        "Integrated storage throughout",
        "Modern compact kitchen",
        "Space-efficient bathroom"
      ],
      status: "available",
      floorPlan: typeBFloorplan,
      interior: typeBInterior
    },
    {
      id: "type-c",
      name: "Type C - Loft",
      type: "Loft Apartment",
      area: "26.88 sqm + 12.77 sqm mezzanine",
      bedrooms: 1,
      bathrooms: 1,
      price: "From €420,000",
      features: [
        "Double-height living space",
        "Private mezzanine bedroom",
        "Industrial-chic design",
        "Open-plan layout",
        "Integrated staircase",
        "Maximum ceiling height"
      ],
      status: "available",
      floorPlan: typeCFloorplan,
      interior: typeCInterior
    },
    {
      id: "type-d",
      name: "Type D - Urban Comfort",
      type: "1 Bedroom",
      area: "46.22 sqm",
      balcony: "2.02 sqm",
      bedrooms: 1,
      bathrooms: 1,
      price: "From €450,000",
      features: [
        "Open-concept living & dining",
        "Modern integrated kitchen",
        "Private balcony with garden views",
        "Premium finishes throughout",
        "Smart home technology ready",
        "Energy-efficient appliances"
      ],
      status: "available",
      floorPlan: typeDFloorplan,
      interior: typeDInterior
    },
    {
      id: "type-e",
      name: "Type E - Penthouse",
      type: "Duplex Penthouse",
      area: "39.13 sqm + 27.34 sqm",
      balcony: "2.02 sqm + 36.54 sqm terrace",
      bedrooms: 2,
      bathrooms: 2,
      price: "From €650,000",
      features: [
        "Two-level duplex design",
        "Expansive private terrace",
        "Double-height ceilings",
        "Premium penthouse finishes",
        "Panoramic city views",
        "Private rooftop access"
      ],
      status: "available",
      floorPlan: typeEFloorplan,
      interior: typeEInterior
    }
  ];

  const comingSoonTypes = [
    { name: "Penthouse Collection", description: "Top-floor exclusivity" }
  ];

  return (
    <section id="apartment-types" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-luxury">
            Apartment Types
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our thoughtfully designed residences, each crafted to offer 
            the perfect blend of comfort, style, and functionality.
          </p>
        </div>

        <Tabs defaultValue="available" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8">
            <TabsTrigger value="available" className="text-sm sm:text-base">Available Now</TabsTrigger>
            <TabsTrigger value="coming-soon" className="text-sm sm:text-base">Coming Soon</TabsTrigger>
          </TabsList>

          <TabsContent value="available">
            <div className="grid lg:grid-cols-1 gap-6 sm:gap-8">
              {apartmentTypes.map((apartment) => (
                <Card key={apartment.id} className="hover-lift overflow-hidden border-0 shadow-card bg-gradient-to-b from-card to-muted/20">
                  <CardContent className="p-0">
                     <div className="flex flex-col">
                       {/* Floor Plan */}
                       <div className="relative">
                         <div className="aspect-video sm:aspect-square bg-muted/40 flex items-center justify-center overflow-hidden">
                           {apartment.floorPlan ? (
                             <img 
                               src={apartment.floorPlan} 
                               alt={`${apartment.name} floor plan`}
                               loading="lazy"
                               className="w-full h-full object-contain p-2 sm:p-4"
                             />
                           ) : apartment.interior ? (
                             <img 
                               src={apartment.interior} 
                               alt={`${apartment.name} interior rendering`}
                               loading="lazy"
                               className="w-full h-full object-cover"
                             />
                           ) : (
                             <p className="text-muted-foreground text-sm px-4 text-center">Floor Plan - {apartment.name}</p>
                           )}
                         </div>
                         <Badge 
                           variant={apartment.status === "available" ? "default" : "secondary"}
                           className="absolute top-2 left-2 text-xs"
                         >
                           {apartment.status === "available" ? "Available" : "Reserved"}
                         </Badge>
                       </div>
                      
                      {/* Details */}
                      <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{apartment.name}</h3>
                            <p className="text-base sm:text-lg text-wood-secondary mb-3 sm:mb-4">{apartment.type}</p>
                            <p className="text-2xl sm:text-3xl font-bold text-luxury">{apartment.price}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm">
                            <div>
                              <span className="text-muted-foreground">Total Area:</span>
                              <p className="font-semibold text-sm sm:text-base">{apartment.area}</p>
                            </div>
                            {apartment.balcony && (
                              <div>
                                <span className="text-muted-foreground">Balcony:</span>
                                <p className="font-semibold text-sm sm:text-base">{apartment.balcony}</p>
                              </div>
                            )}
                            <div>
                              <span className="text-muted-foreground">Bedrooms:</span>
                              <p className="font-semibold text-sm sm:text-base">{apartment.bedrooms}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Bathrooms:</span>
                              <p className="font-semibold text-sm sm:text-base">{apartment.bathrooms}</p>
                            </div>
                          </div>
                          
                          <div className="mb-6 sm:mb-8">
                            <h4 className="font-semibold text-wood-primary mb-2 sm:mb-3 text-sm sm:text-base">Key Features</h4>
                            <ul className="grid grid-cols-1 gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                              {apartment.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-wood-secondary mr-2">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                          <Button variant="premium" className="flex-1 text-sm sm:text-base py-2 sm:py-3">
                            View Floor Plan
                          </Button>
                          <Button 
                            variant="outline" 
                            className="flex-1 text-sm sm:text-base py-2 sm:py-3"
                            onClick={() => window.open('https://calendly.com/syrtsov-ivan/meeting_with_ivan', '_blank')}
                          >
                            Book a Call
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="coming-soon">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {comingSoonTypes.map((type, index) => (
                <Card key={index} className="hover-lift bg-gradient-to-b from-card to-muted/20 border-0 shadow-card">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <div className="aspect-square bg-muted/40 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                      <p className="text-muted-foreground text-sm sm:text-base">Coming Soon</p>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-wood-primary mb-2 sm:mb-3">{type.name}</h3>
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{type.description}</p>
                    <Button variant="outline" className="w-full text-sm sm:text-base">
                      Get Notified
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ApartmentTypes;