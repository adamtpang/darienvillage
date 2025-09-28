import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
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
  onViewDetails: () => void;
}

const PropertyCard = ({ title, price, balconyPrice, bedrooms, bathrooms, sqft, image, status, availability, targetYield, potentialRevenue, onViewDetails }: PropertyCardProps) => {
  return (
    <Card className="hover-lift overflow-hidden border-0 shadow-card bg-gradient-to-b from-card to-muted/20">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
        />
        <Badge 
          variant={status === "available" ? "default" : status === "reserved" ? "secondary" : "destructive"}
          className="absolute top-4 left-4"
        >
          {availability || (status.charAt(0).toUpperCase() + status.slice(1))}
        </Badge>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-navy-primary">{price}</p>
            {balconyPrice && (
              <p className="text-lg text-muted-foreground">
                With Balcony: <span className="font-semibold text-navy-primary">{balconyPrice}</span>
              </p>
            )}
            {title === "Penthouse" && (
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-navy-primary">Balcony Included</span>
              </p>
            )}
          </div>
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{bedrooms} Bedrooms</span>
          <span>{bathrooms} Bathrooms</span>
          <span>{sqft}</span>
        </div>
        
        {(targetYield || potentialRevenue) && (
          <div className="bg-emerald-primary/10 rounded-lg p-3 border border-emerald-primary/20">
            <div className="flex justify-between items-center">
              {targetYield && (
                <div className="text-center">
                  <div className="text-lg font-bold text-emerald-primary">{targetYield}</div>
                  <div className="text-xs text-muted-foreground">Target Yield</div>
                </div>
              )}
              {potentialRevenue && (
                <div className="text-center">
                  <div className="text-lg font-bold text-emerald-primary">{potentialRevenue}</div>
                  <div className="text-xs text-muted-foreground">Monthly Profit</div>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="flex gap-2 pt-4">
          <Button variant="premium" className="flex-1" onClick={onViewDetails}>
            View Details
          </Button>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => window.open('https://calendly.com/syrtsov-ivan/meeting_with_ivan', '_blank')}
          >
            Book a Call
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;