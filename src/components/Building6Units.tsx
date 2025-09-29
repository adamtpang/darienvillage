import { Button } from '@/components/ui/button';

export const Building6Units = () => {
  const units = [
    {
      type: "Studio",
      price: "$76,560",
      priceWithBalcony: "$82,360",
      bedrooms: "0",
      bathrooms: "1",
      size: "26.4 - 28.4 m²",
      targetYield: "9.60% / 8.92%",
      monthlyProfit: "$612",
      status: "Available",
      availability: "Available"
    },
    {
      type: "Loft",
      price: "$112,000",
      priceWithBalcony: "$117,600",
      bedrooms: "1",
      bathrooms: "1",
      size: "40 - 42 m²",
      targetYield: "7.72% / 7.35%",
      monthlyProfit: "$721",
      status: "Available",
      availability: "Available"
    },
    {
      type: "1 Bedroom",
      price: "$124,200",
      priceWithBalcony: "$129,600",
      bedrooms: "1",
      bathrooms: "1",
      size: "46 - 48 m²",
      targetYield: "8.20% / 7.83%",
      monthlyProfit: "$846",
      status: "Limited",
      availability: "1 out of 6 reserved"
    },
    {
      type: "Penthouse",
      price: "$283,500",
      priceWithBalcony: "Balcony Included",
      bedrooms: "1",
      bathrooms: "2",
      size: "105 m²",
      targetYield: "7.13%",
      monthlyProfit: "$1,686",
      status: "Available",
      availability: "Available"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">
          Apartments for <span className="text-brand-gradient">Sale</span>
        </h2>
        <h3 className="text-2xl font-semibold text-brand-gray mb-4">
          Own Your Modern Apartment
        </h3>
        <p className="text-brand-gray text-lg leading-relaxed max-w-4xl mx-auto">
          9 exclusive units available for purchase. Complete shell + fit-out included with A/C, finished bathrooms, and quality kitchen cabinets. Balcony options available for enhanced living space.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {units.map((unit, index) => (
          <div key={index} className="impact-card p-8 group">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                  {unit.type}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    unit.status === 'Available'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {unit.availability}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold gradient-text">{unit.price}</div>
                {unit.priceWithBalcony !== "Balcony Included" && (
                  <div className="text-sm text-brand-gray">With Balcony: {unit.priceWithBalcony}</div>
                )}
                {unit.priceWithBalcony === "Balcony Included" && (
                  <div className="text-sm text-brand-primary font-medium">Balcony Included</div>
                )}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-brand-primary">{unit.bedrooms}</div>
                <div className="text-sm text-brand-gray">Bedrooms</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-brand-primary">{unit.bathrooms}</div>
                <div className="text-sm text-brand-gray">Bathrooms</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-brand-primary">{unit.size}</div>
                <div className="text-sm text-brand-gray">Size</div>
              </div>
            </div>

            {/* Financial Info */}
            <div className="bg-brand-primary/5 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-brand-gray mb-1">Target Yield</div>
                  <div className="text-lg font-bold text-brand-primary">{unit.targetYield}</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">Monthly Profit</div>
                  <div className="text-lg font-bold text-brand-primary">{unit.monthlyProfit}</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`mailto:ivan@darienvillage.com?subject=Unit%20Details%20-%20${unit.type.replace(' ', '%20')}`, '_blank')}
                className="flex-1 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                View Details
              </Button>
              <Button
                size="sm"
                onClick={() => window.open(`mailto:ivan@darienvillage.com?subject=Purchase%20Call%20-%20${unit.type.replace(' ', '%20')}`, '_blank')}
                className="flex-1 bg-brand-primary hover:bg-brand-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book a Call
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          size="lg"
          onClick={() => window.open('mailto:ivan@darienvillage.com?subject=Building%206%20Purchase%20Consultation', '_blank')}
          className="bg-brand-primary hover:bg-brand-secondary text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Schedule Purchase Consultation
        </Button>
      </div>
    </div>
  );
};