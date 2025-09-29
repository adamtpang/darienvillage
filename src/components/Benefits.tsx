import { Building, MapPin, Hotel } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: <MapPin className="w-10 h-10 text-brand-primary" />,
      title: "Village Urbanism",
      description: "Mixed-use development combining residential, hospitality, and commercial spaces in a walkable neighborhood design that fosters community and convenience."
    },
    {
      icon: <Building className="w-10 h-10 text-brand-primary" />,
      title: "55 Homes + Hub",
      description: "Premium residential units across five buildings plus a central community hub featuring amenities, co-working spaces, and social gathering areas."
    },
    {
      icon: <Hotel className="w-10 h-10 text-brand-primary" />,
      title: "Built-in Hospitality",
      description: "Professional short-term rental management program generating passive income for residents, with hospitality-grade finishes and amenities throughout."
    }
  ];

  return (
    <div id="about" className="grid md:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="impact-card p-8 hover:cursor-pointer group"
        >
          <div className="flex items-start mb-6">
            <div className="bg-brand-primary/10 p-4 rounded-2xl mr-6 group-hover:bg-brand-primary/20 transition-colors duration-300">
              {benefit.icon}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
            {benefit.title}
          </h3>
          <p className="text-brand-gray leading-relaxed text-lg">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
};