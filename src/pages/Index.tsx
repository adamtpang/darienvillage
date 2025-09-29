import Navigation from "@/components/Navigation";
import PageHead from "@/components/PageHead";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DevelopmentTimeline } from "@/components/ui/development-timeline";
import { LocationHighlights } from "@/components/ui/location-highlights";
import { DevelopmentPhases } from "@/components/ui/development-phases";
import darienVillageHero from "@/assets/darien-village-hero.png";
import typeAInterior from "@/assets/type-a-interior.png";
import typeBInterior from "@/assets/type-b-interior.png";
import typeCInterior from "@/assets/type-c-interior.png";
import typeDInterior from "@/assets/type-d-interior.png";
import typeEInterior from "@/assets/type-e-interior.png";
import masterplanDetailed from "@/assets/masterplan-detailed.png";
import Gallery from "@/components/Gallery";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <PageHead />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${darienVillageHero})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/80 via-navy-primary/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              Darien Village
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              Professional Build-to-Rent Investment Platform in Próspera ZEDE
            </p>
          
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-8 sm:mb-16">
            <Button variant="premium" size="lg" className="w-full max-w-xs sm:max-w-sm lg:min-w-[280px] text-sm sm:text-base lg:text-lg font-semibold py-3 sm:py-4 touch-target" onClick={() => window.open('https://calendly.com/syrtsov-ivan/meeting_with_ivan', '_blank')}>
              Invest in Darien Village
            </Button>
            <Button variant="outline" size="lg" className="w-full max-w-xs sm:max-w-sm lg:min-w-[280px] text-sm sm:text-base lg:text-lg font-semibold py-3 sm:py-4 text-white border-white/60 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-300 touch-target" asChild>
              <Link to="/building6">
                Buy Building 6 Units
              </Link>
            </Button>
          </div>

        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <LocationHighlights />
      <DevelopmentPhases />
      <DevelopmentTimeline />

      {/* Apartment Types Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-navy-primary">
              Darien Village Portfolio
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Build-to-rent apartments across 5 buildings generating professional STR income for shareholders
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {/* Type A Studio */}
            <div className="glass-card-quality hover-lift group">
              <div className="aspect-video overflow-hidden rounded-xl image-overlay mb-4 sm:mb-6">
                <img src={typeAInterior} alt="Modern Type A Studio interior - Darien Village investment property in Próspera" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-1 sm:gap-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-navy-primary">Type A Studio</h3>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-primary">$60/night</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">19.44 m² | Compact modern studio</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annual Revenue:</span>
                    <span className="font-semibold text-emerald-primary">$13,104</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Type B */}
            <div className="glass-card-quality hover-lift group">
              <div className="aspect-video overflow-hidden rounded-xl image-overlay mb-4 sm:mb-6">
                <img src={typeBInterior} alt="Modern Type B apartment interior - Darien Village investment property in Próspera" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-1 sm:gap-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-navy-primary">Type B Studio</h3>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-primary">$65/night</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">26.89 m² | Spacious studio with modern finishes</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annual Revenue:</span>
                    <span className="font-semibold text-emerald-primary">$14,196</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Type C */}
            <div className="glass-card-quality hover-lift group">
              <div className="aspect-video overflow-hidden rounded-xl image-overlay mb-4 sm:mb-6">
                <img src={typeCInterior} alt="Modern Type C apartment interior - Darien Village investment property in Próspera" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-1 sm:gap-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-navy-primary">Type C Loft</h3>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-primary">$80/night</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">39.65 m² | Loft-style with high ceilings</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annual Revenue:</span>
                    <span className="font-semibold text-emerald-primary">$17,472</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Type D */}
            <div className="glass-card-quality hover-lift group">
              <div className="aspect-video overflow-hidden rounded-xl image-overlay mb-4 sm:mb-6">
                <img src={typeDInterior} alt="Modern Type D apartment interior - Darien Village investment property in Próspera" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-1 sm:gap-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-navy-primary">Type D One Bedroom</h3>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-primary">$90/night</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">46.22 m² | Separate bedroom and living area</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annual Revenue:</span>
                    <span className="font-semibold text-emerald-primary">$19,656</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Type E Penthouse */}
            <div className="glass-card-quality hover-lift group ring-2 ring-gold-primary/30">
              <div className="aspect-video overflow-hidden rounded-xl image-overlay mb-4 sm:mb-6">
                <img src={typeEInterior} alt="Modern Type E Penthouse interior - Darien Village quality investment unit in Próspera" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-1 sm:gap-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-navy-primary">Type E Penthouse</h3>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-primary">$120/night</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">103.01 m² | Premium penthouse with terrace</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annual Revenue:</span>
                    <span className="font-semibold text-emerald-primary">$26,208</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Investment CTA Card */}
            <div className="glass-card-quality hover-lift group bg-gradient-quality/10 border-gold-primary/30">
              <div className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">🏢</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-navy-primary mb-3 sm:mb-4">Join Darien Village</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Invest in Phase 2 for rental income</p>
                <Button variant="premium" size="lg" className="w-full mb-3 sm:mb-4 text-sm sm:text-base py-3 sm:py-4 touch-target" onClick={() => window.open('https://calendly.com/syrtsov-ivan/meeting_with_ivan', '_blank')}>
                  Invest in Phase 2
                </Button>
                <Button variant="outline" size="lg" className="w-full text-sm sm:text-base py-3 sm:py-4 touch-target" asChild>
                  <Link to="/building6">Or Buy Building 6</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      <ContactSection />
      
      <footer className="bg-navy-primary text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-gold-primary mb-3 sm:mb-4">
              Darien Village
            </div>
            <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 px-4">Premium real estate investment opportunities in Próspera ZEDE, Honduras</p>
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
export default Index;