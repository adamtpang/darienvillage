import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  imageSrc: string;
}

export const Hero = ({ title, subtitle, primaryCta, secondaryCta, imageSrc }: HeroProps) => {
  const handlePrimaryCta = () => {
    if (primaryCta.href.startsWith('mailto:')) {
      window.open(primaryCta.href, '_blank');
    } else {
      const element = document.getElementById(primaryCta.href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSecondaryCta = () => {
    if (secondaryCta.href.startsWith('#')) {
      const element = document.getElementById(secondaryCta.href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(secondaryCta.href, '_blank');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt="Darien Village luxury real estate development"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/70 via-brand-dark/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-white leading-tight tracking-tight">
          {title}
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            onClick={handlePrimaryCta}
            className="w-full sm:w-auto min-w-[300px] bg-brand-primary hover:bg-brand-secondary text-white text-lg font-semibold py-4 px-10 rounded-full shadow-2xl hover:shadow-[0_20px_40px_-12px_rgba(255,69,0,0.4)] transition-all duration-300 hover:scale-105"
          >
            {primaryCta.label}
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleSecondaryCta}
            className="w-full sm:w-auto min-w-[300px] text-lg font-semibold py-4 px-10 text-white border-2 border-white/80 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white rounded-full transition-all duration-300 hover:scale-105"
          >
            {secondaryCta.label}
          </Button>
        </div>

        {/* Stats or Features */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 text-white max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">55</div>
            <div className="text-white/80 text-sm sm:text-base font-medium">Luxury Homes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">5</div>
            <div className="text-white/80 text-sm sm:text-base font-medium">Buildings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">7%+</div>
            <div className="text-white/80 text-sm sm:text-base font-medium">Target Yields</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1.5 h-3 bg-brand-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};