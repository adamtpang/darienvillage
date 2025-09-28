import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import typeBFloorplan from "@/assets/type-b-floorplan.png";
import typeCFloorplan from "@/assets/type-c-floorplan.png";
import typeDFloorplan from "@/assets/type-d-floorplan.png";
import typeEFloorplan from "@/assets/type-e-floorplan.png";

interface PropertyDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    id: string;
    title: string;
    price: string;
    balconyPrice?: string;
    bedrooms: number;
    bathrooms: number;
    sqft: string;
    image: string;
    status: "available" | "reserved" | "sold";
    availability?: string;
    targetYield?: string;
    potentialRevenue?: string;
  } | null;
}

const PropertyDetailsModal = ({ isOpen, onClose, property }: PropertyDetailsModalProps) => {
  if (!property) return null;

  const getFloorplan = (id: string) => {
    if (id === "studio") return typeBFloorplan;
    if (id === "loft") return typeCFloorplan;
    if (id === "1br") return typeDFloorplan;
    if (id === "type-e-penthouse") return typeEFloorplan;
    return typeBFloorplan;
  };

  const getRentalEstimates = (id: string) => {
    const estimates = {
      studio: {
        shortTerm: { rate: "$60/night", occupancy: "60%", monthlyGross: "$1,095", monthlyNet: "$821" },
        longTerm: { rate: "$800/month", expenses: "$275", monthlyNet: "$525" }
      },
      loft: {
        shortTerm: { rate: "$70/night", occupancy: "60%", monthlyGross: "$1,278", monthlyNet: "$959" },
        longTerm: { rate: "$950/month", expenses: "$313", monthlyNet: "$637" }
      },
      "1br": {
        shortTerm: { rate: "$80/night", occupancy: "60%", monthlyGross: "$1,460", monthlyNet: "$1,095" },
        longTerm: { rate: "$1,100/month", expenses: "$330", monthlyNet: "$770" }
      },
      "type-e-penthouse": {
        shortTerm: { rate: "$120-150/night", occupancy: "60%", monthlyGross: "$2,555", monthlyNet: "$1,916" },
        longTerm: { rate: "$1,800/month", expenses: "$400", monthlyNet: "$1,400" }
      }
    };
    return estimates[id as keyof typeof estimates] || estimates.studio;
  };

  const getPaymentSchedule = (id: string) => {
    const basePrice = property.price.replace('From ', '').replace('$', '').replace(',', '');
    const price = parseInt(basePrice);
    
    return {
      deposit: Math.round(price * 0.30),
      milestone: Math.round(price * 0.50),
      completion: Math.round(price * 0.20)
    };
  };

  const estimates = getRentalEstimates(property.id);
  const payment = getPaymentSchedule(property.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-luxury">
            {property.title} - Details
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="floorplan">Floor Plan</TabsTrigger>
            <TabsTrigger value="investment">Investment</TabsTrigger>
            <TabsTrigger value="furniture">Furniture</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-luxury">{property.price}</p>
                    {property.balconyPrice && (
                      <p className="text-lg text-muted-foreground">
                        With Balcony: <span className="font-semibold text-luxury">{property.balconyPrice}</span>
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-gold-primary">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gold-primary">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gold-primary">{property.sqft}</p>
                    <p className="text-sm text-muted-foreground">Area</p>
                  </div>
                </div>

                {(property.targetYield || property.potentialRevenue) && (
                  <div className="bg-emerald-primary/10 rounded-lg p-4 border border-emerald-primary/20">
                    <h4 className="font-semibold text-emerald-primary mb-3">Investment Projections</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      {property.targetYield && (
                        <div>
                          <div className="text-2xl font-bold text-emerald-primary">{property.targetYield}</div>
                          <div className="text-sm text-muted-foreground">Target Yield</div>
                        </div>
                      )}
                      {property.potentialRevenue && (
                        <div>
                          <div className="text-2xl font-bold text-emerald-primary">
                            {(() => {
                              if (property.potentialRevenue.includes('/')) {
                                const values = property.potentialRevenue.split(' / ').map(val => 
                                  parseInt(val.replace('$', '').replace(',', '')) * 12
                                );
                                // If both values are the same, show only one
                                if (values[0] === values[1]) {
                                  return `$${values[0].toLocaleString()}`;
                                }
                                return values.map(val => `$${val.toLocaleString()}`).join(' / ');
                              } else {
                                return `$${(parseInt(property.potentialRevenue.replace('$', '').replace(',', '')) * 12).toLocaleString()}`;
                              }
                            })()}
                          </div>
                          <div className="text-sm text-muted-foreground">Annual Revenue</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <Badge 
                  variant={property.status === "available" ? "default" : "secondary"}
                  className="w-full justify-center"
                >
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </Badge>
              </div>
            </div>

            <div className="bg-muted/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">What's Included</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li>✓ Shell + complete fit-out</li>
                  <li>✓ Bathrooms ready to use</li>
                  <li>✓ Kitchen with cabinets</li>
                  <li>✓ Air conditioning included</li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li>✓ 12-month construction timeline</li>
                  <li>✓ Iternum general contractor</li>
                  <li>✓ Rubén Fajardo project manager</li>
                  <li>✓ Title in Próspera Property Registry</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="floorplan" className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Floor Plan</h3>
              <img
                src={getFloorplan(property.id)}
                alt={`${property.title} Floor Plan`}
                className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
              />
              <p className="text-muted-foreground mt-4">
                Dimensions and layout for {property.title}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="investment" className="space-y-6">
            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-gold-primary/10 to-emerald-primary/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Payment Schedule</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>30% at contract signing:</span>
                    <span className="font-semibold">${payment.deposit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>50% after month 4 of construction:</span>
                    <span className="font-semibold">${payment.milestone.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>20% at completion & title transfer:</span>
                    <span className="font-semibold">${payment.completion.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4">Short-Term Rental (STR)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Nightly Rate:</span>
                      <span className="font-semibold">{estimates.shortTerm.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Occupancy:</span>
                      <span>{estimates.shortTerm.occupancy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Gross:</span>
                      <span>{estimates.shortTerm.monthlyGross}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span>Monthly Net (to owner):</span>
                      <span className="font-bold text-emerald-primary">{estimates.shortTerm.monthlyNet}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    *Professional STR management: 25% fee
                  </p>
                </div>

                <div className="bg-muted/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4">Long-Term Rental</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monthly Rent:</span>
                      <span className="font-semibold">{estimates.longTerm.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Expenses:</span>
                      <span>{estimates.longTerm.expenses}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span>Monthly Net (to owner):</span>
                      <span className="font-bold text-emerald-primary">{estimates.longTerm.monthlyNet}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    *LTR: 10% management fee
                  </p>
                </div>
              </div>

              <div className="bg-muted/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Monthly Operating Costs</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="block text-muted-foreground">Utilities:</span>
                    <span className="font-semibold">~$200</span>
                  </div>
                  <div>
                    <span className="block text-muted-foreground">HOA Fee:</span>
                    <span className="font-semibold">
                      {property.id === 'studio' ? '$75' : 
                       property.id === 'loft' ? '$113' : 
                       property.id === '1br' ? '$130' : '$150'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-muted-foreground">Próspera Tax:</span>
                    <span className="font-semibold">5% of gross</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="furniture" className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Turnkey Furniture Packages</h3>
              <p className="text-muted-foreground mb-6">
                Optional furniture packages available to make your unit rental-ready from day one.
              </p>

              <div className="grid gap-6">
                <div className="bg-muted/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4">Essential Package</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>✓ Bedroom furniture (bed, nightstands, dresser)</li>
                      <li>✓ Living room set (sofa, coffee table, TV stand)</li>
                      <li>✓ Dining table and chairs</li>
                      <li>✓ Basic lighting fixtures</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Kitchen appliances (refrigerator, microwave)</li>
                      <li>✓ Linens and bedding</li>
                      <li>✓ Basic dishware and cookware</li>
                      <li>✓ Window treatments</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-3 bg-background rounded border-l-4 border-gold-primary">
                    <p className="font-semibold">Estimated Cost: $8,000 - $12,000</p>
                    <p className="text-sm text-muted-foreground">Depending on unit size and selections</p>
                  </div>
                </div>

                <div className="bg-muted/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4">Premium Package</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>✓ Everything in Essential Package</li>
                      <li>✓ Upgraded furniture and finishes</li>
                      <li>✓ Smart TV and entertainment system</li>
                      <li>✓ Decorative elements and artwork</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Premium appliances package</li>
                      <li>✓ Additional storage solutions</li>
                      <li>✓ Outdoor furniture (if balcony/terrace)</li>
                      <li>✓ Professional staging and photography</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-3 bg-background rounded border-l-4 border-gold-primary">
                    <p className="font-semibold">Estimated Cost: $15,000 - $22,000</p>
                    <p className="text-sm text-muted-foreground">Premium selections and full turnkey setup</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gold-primary/10 to-emerald-primary/10 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-2">Custom Packages Available</h4>
                  <p className="text-sm text-muted-foreground">
                    We can create custom furniture packages based on your specific needs, 
                    budget, and target rental market. All packages can be financed as part 
                    of your purchase agreement.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center pt-6 border-t">
          <Button 
            variant="premium"
            size="lg"
            onClick={() => window.open('https://calendly.com/syrtsov-ivan/meeting_with_ivan', '_blank')}
          >
            Schedule Investment Call
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailsModal;