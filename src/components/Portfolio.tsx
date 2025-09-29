import { Button } from '@/components/ui/button';
import typeAInterior from '@/assets/type-a-interior.png';
import typeBInterior from '@/assets/type-b-interior.png';
import typeCInterior from '@/assets/type-c-interior.png';
import typeDInterior from '@/assets/type-d-interior.png';
import typeEInterior from '@/assets/type-e-interior.png';

export const Portfolio = () => {
  const apartments = [
    {
      type: "Type A Studio",
      price: "$60/night",
      size: "19.44 m²",
      description: "Compact modern studio",
      annualRevenue: "$13,104",
      image: typeAInterior
    },
    {
      type: "Type B Studio",
      price: "$65/night",
      size: "26.89 m²",
      description: "Spacious studio with modern finishes",
      annualRevenue: "$14,196",
      image: typeBInterior
    },
    {
      type: "Type C Loft",
      price: "$80/night",
      size: "39.65 m²",
      description: "Loft-style with high ceilings",
      annualRevenue: "$17,472",
      image: typeCInterior
    },
    {
      type: "Type D One Bedroom",
      price: "$90/night",
      size: "46.22 m²",
      description: "Separate bedroom and living area",
      annualRevenue: "$19,656",
      image: typeDInterior
    },
    {
      type: "Type E Penthouse",
      price: "$120/night",
      size: "103.01 m²",
      description: "Premium penthouse with terrace",
      annualRevenue: "$26,208",
      image: typeEInterior
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">
          Darien Village <span className="text-brand-gradient">Portfolio</span>
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Build-to-rent apartments across 5 buildings generating professional STR income for shareholders
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apartments.map((apartment, index) => (
          <div key={index} className="impact-card group overflow-hidden">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={apartment.image}
                alt={`${apartment.type} interior - Darien Village investment property in Próspera`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-brand-primary text-white px-3 py-1 rounded-full font-semibold">
                {apartment.price}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                {apartment.type}
              </h3>

              <div className="flex items-center gap-4 mb-3">
                <span className="text-brand-gray font-medium">{apartment.size}</span>
                <span className="text-brand-gray">•</span>
                <span className="text-brand-gray">{apartment.description}</span>
              </div>

              <div className="bg-brand-primary/5 rounded-lg p-4 mb-4">
                <div className="text-sm text-brand-gray mb-1">Annual Revenue:</div>
                <div className="text-2xl font-bold gradient-text">{apartment.annualRevenue}</div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('mailto:ivan@darienvillage.com?subject=Investment%20Inquiry%20-%20' + apartment.type.replace(' ', '%20'), '_blank')}
                className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => window.open('mailto:ivan@darienvillage.com?subject=Phase%202%20Investment', '_blank')}
            className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            🏢 Invest in Phase 2
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.location.href = '/building6'}
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Buy Building 6 Units
          </Button>
        </div>
      </div>
    </div>
  );
};