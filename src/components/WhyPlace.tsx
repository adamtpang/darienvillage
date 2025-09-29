import darienVillageHero from '@/assets/darien-village-hero.png';

export const WhyPlace = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Content */}
      <div className="space-y-8">
        <div>
          <h3 className="text-3xl font-bold text-brand-dark mb-4">
            Why <span className="text-brand-gradient">Roatán</span>
          </h3>
          <p className="text-brand-gray leading-relaxed mb-6 text-lg">
            Located in the Caribbean's premier destination, Roatán offers world-class diving, pristine beaches, and a growing expat community. The island's infrastructure development and increasing tourism make it an attractive location for both residents and visitors.
          </p>
          <ul className="space-y-3 text-brand-gray">
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>English-speaking Caribbean island</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>World's second-largest barrier reef</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>Growing tech and remote work hub</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>Direct flights from major US cities</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-brand-dark mb-4">
            Why <span className="text-brand-gradient">Próspera</span>
          </h3>
          <p className="text-brand-gray leading-relaxed mb-6 text-lg">
            Próspera ZEDE represents a unique legal and regulatory environment designed to attract international business and investment. This charter city offers modern governance, streamlined regulations, and investor-friendly policies that create exceptional opportunities for real estate development.
          </p>
          <ul className="space-y-3 text-brand-gray">
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>Special Economic Development Zone</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>Investor-friendly legal framework</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>Modern infrastructure and utilities</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>International business ecosystem</li>
          </ul>
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={darienVillageHero}
          alt="Próspera development and Roatán landscape"
          className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent rounded-2xl"></div>
      </div>
    </div>
  );
};