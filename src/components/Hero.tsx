import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{backgroundImage: "url('/lovable-uploads/90aab359-7105-4a89-bf71-e8035af6bc72.png')"}}
        role="img"
        aria-label="Building 6 exterior view in Próspera, Honduras - Quality real estate investment opportunity"
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
          <span className="gradient-text">Building 6</span><br />
          Modern Apartments for Sale
        </h1>
        
        <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Own your modern apartment in Próspera • Optional property management • Same development team as Darien Village
        </p>
        
        <div className="flex flex-col gap-3 justify-center items-center mb-8 sm:mb-12">
          <Button variant="quality" size="lg" className="w-full max-w-xs" onClick={() => {
          const element = document.getElementById('apartments');
          element?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            Browse Units for Sale
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-3 sm:gap-6 text-white">
          <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-lg">
            <div className="text-xl sm:text-3xl font-bold gradient-text mb-1">9</div>
            <div className="text-white/80 text-xs sm:text-base">Units</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-lg">
            <div className="text-xl sm:text-3xl font-bold gradient-text mb-1">Ready</div>
            <div className="text-white/80 text-xs sm:text-base">Now</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-lg">
            <div className="text-xl sm:text-3xl font-bold gradient-text mb-1">Own</div>
            <div className="text-white/80 text-xs sm:text-base">Forever</div>
          </div>
        </div>
      </div>
      
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 glow-animation"></div>
        </div>
      </div>
    </section>;
};
export default Hero;