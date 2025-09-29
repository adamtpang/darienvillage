import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export const ApartmentTypes = () => {
  const apartmentTypes = [
    {
      type: "Type A Studio",
      size: "19.44 m²",
      description: "Compact modern studio with efficient layout",
      features: ["Open floor plan", "Modern kitchenette", "Full bathroom", "Built-in storage"]
    },
    {
      type: "Type B Studio",
      size: "26.89 m²",
      description: "Spacious studio with modern finishes",
      features: ["Expanded living space", "Full kitchen", "Luxury bathroom", "Balcony access"]
    },
    {
      type: "Type C Loft",
      size: "39.65 m²",
      description: "Loft-style with high ceilings",
      features: ["High ceilings", "Loft design", "Separate sleeping area", "Premium finishes"]
    },
    {
      type: "Type D One Bedroom",
      size: "46.22 m²",
      description: "Separate bedroom and living area",
      features: ["Separate bedroom", "Living room", "Full kitchen", "Private balcony"]
    },
    {
      type: "Type E Penthouse",
      size: "103.01 m²",
      description: "Premium penthouse with terrace",
      features: ["Spacious layout", "Private terrace", "Premium appliances", "Panoramic views"]
    }
  ];

  const handleFloorplansEmail = (type: string) => {
    const subject = `Floorplans Request - ${type}`;
    const body = `Hi Ivan,\n\nI'm interested in getting the floorplans for ${type}.\n\nThank you!`;
    window.open(`mailto:ivan@darienvillage.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {apartmentTypes.map((apartment, index) => (
        <div
          key={index}
          className="impact-card p-6 hover:cursor-pointer group"
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300">
              {apartment.type}
            </h3>
            <div className="flex items-center justify-between mb-3">
              <span className="text-brand-primary font-semibold text-lg">{apartment.size}</span>
            </div>
            <p className="text-brand-gray text-sm mb-4 leading-relaxed">
              {apartment.description}
            </p>
          </div>

          <ul className="space-y-2 mb-6">
            {apartment.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="text-sm text-brand-gray flex items-center">
                <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handleFloorplansEmail(apartment.type)}
            className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 group-hover:scale-105"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get Floorplans
          </Button>
        </div>
      ))}
    </div>
  );
};