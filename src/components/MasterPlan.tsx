import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const MasterPlan = () => {
  const amenities = [
    {
      name: "Ground-level cafes and shops",
      description: "Convenient retail and dining options right at your doorstep",
      icon: "🏪"
    },
    {
      name: "Fresh markets nearby", 
      description: "Access to local produce and fresh ingredients",
      icon: "🥬"
    },
    {
      name: "BBQ areas and pools",
      description: "Community recreational spaces for relaxation and socializing",
      icon: "🏊‍♂️"
    },
    {
      name: "Community gardens",
      description: "Shared green spaces for gardening and community connection",
      icon: "🌱"
    },
    {
      name: "Pet park and shared spaces",
      description: "Dedicated areas for pets and community gatherings",
      icon: "🐕"
    }
  ];

  const buildingSections = [
    { section: "Studios - 4th Floor", units: "26.4 m² ($76,560) & 28.4 m² ($82,360)" },
    { section: "Lofts - 4th Floor", units: "40 m² ($112,000) & 42 m² ($117,600)" },
    { section: "1BR - 1st-3rd Floors", units: "46 m² ($124,200) & 48 m² ($129,600)" },
    { section: "Penthouse - Top Floor", units: "92 m² with exclusive rooftop access" },
    { section: "Monthly HOA Estimates", units: "Studios $75, Lofts $113, 1BR $130, Penthouse $200" },
    { section: "Utilities", units: "~$200/month per unit (electricity, water, internet)" }
  ];

  return (
    <section id="master-plan" className="py-20 bg-gradient-to-b from-navy-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 bg-gold-primary/10 text-gold-primary border-gold-primary/30 text-sm sm:text-base">
            Project Overview
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-navy-primary px-4">
            Building 6 Overview
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Strategic development with professional management and proven construction
          </p>
        </div>

        <Tabs defaultValue="overview" className="max-w-6xl mx-auto px-4">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6 sm:mb-8 h-auto bg-white/5 backdrop-blur-sm border border-white/10 gap-1 sm:gap-0">
            <TabsTrigger value="overview" className="py-3 sm:py-4 text-sm sm:text-base font-medium data-[state=active]:bg-gold-primary data-[state=active]:text-navy-primary transition-all duration-300">Project Details</TabsTrigger>
            <TabsTrigger value="amenities" className="py-3 sm:py-4 text-sm sm:text-base font-medium data-[state=active]:bg-gold-primary data-[state=active]:text-navy-primary transition-all duration-300">Community Features</TabsTrigger>
            <TabsTrigger value="buildings" className="py-3 sm:py-4 text-sm sm:text-base font-medium data-[state=active]:bg-gold-primary data-[state=active]:text-navy-primary transition-all duration-300">Unit Distribution</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="animate-fade-in">
            <Card className="glass-card-quality border-0">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="aspect-video rounded-xl mb-6 sm:mb-8 overflow-hidden shadow-2xl group cursor-pointer hover:shadow-3xl transition-all duration-500">
                  <img 
                    src="/masterplan.png" 
                    alt="Darien Village Master Plan showing building layouts, amenities, and landscape design"
                    className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                  <div className="hover-lift">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-navy-primary mb-3 sm:mb-4">Próspera Location</h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                      Building 6 is strategically positioned within Próspera, Honduras' innovative 
                      special economic zone with proper setbacks consistent with Buildings 1-5.
                    </p>
                  </div>
                  <div className="hover-lift">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-navy-primary mb-3 sm:mb-4">Proven Development</h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                      Delivered by Iternum, the same contractor behind successful Buildings 1-5. 
                      Managed by Rubén Fajardo with 20+ Roatán projects experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="amenities" className="animate-fade-in">
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((amenity, index) => (
                <Card key={index} className="glass-card-quality border-0 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {amenity.icon}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-navy-primary mb-2 sm:mb-3">{amenity.name}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{amenity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="buildings" className="animate-fade-in">
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
              {buildingSections.map((building, index) => (
                <Card key={index} className="glass-card-quality border-0 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-navy-primary mb-2 sm:mb-3 group-hover:text-gold-primary transition-colors duration-300">{building.section}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{building.units}</p>
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

export default MasterPlan;