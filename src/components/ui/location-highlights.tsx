import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, Shield, Users, Plane, Building } from "lucide-react";
interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: string;
  badge?: string;
}
const highlights: Highlight[] = [{
  icon: <MapPin className="w-8 h-8 text-gold-primary" />,
  title: "Strategic Caribbean Location",
  description: "Roatán is the Caribbean's fastest-growing tourism destination with direct flights from major US cities.",
  stats: "1.5M+ annual visitors",
  badge: "Tourism Hub"
}, {
  icon: <TrendingUp className="w-8 h-8 text-emerald-primary" />,
  title: "Próspera Economic Growth",
  description: "Special Economic Zone with modern legal framework attracting international investment and creating jobs.",
  stats: "$200M+ invested",
  badge: "Growing Market"
}, {
  icon: <Shield className="w-8 h-8 text-navy-primary" />,
  title: "Legal Security & Innovation",
  description: "Advanced legal system based on common law principles with strong property rights protection.",
  stats: "World-class governance",
  badge: "Secure Investment"
}, {
  icon: <Users className="w-8 h-8 text-gold-primary" />,
  title: "Job Creation & Community",
  description: "Over 3,000 jobs created with focus on sustainable development and community building.",
  stats: "3,000+ jobs created",
  badge: "Impact Investment"
}, {
  icon: <Plane className="w-8 h-8 text-emerald-primary" />,
  title: "Accessibility & Infrastructure",
  description: "Direct flights from Houston, Miami, and other major hubs. Modern infrastructure development.",
  stats: "2-hour flight from US",
  badge: "Connected"
}, {
  icon: <Building className="w-8 h-8 text-navy-primary" />,
  title: "Real Estate Opportunity",
  description: "Early-stage market with significant appreciation potential and strong rental demand.",
  stats: "18%+ projected IRR",
  badge: "High Returns"
}];
export const LocationHighlights = () => {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-navy-primary">
            Roatán & Próspera Advantages
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Caribbean island paradise with modern economic framework and growing tourism
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => (
            <Card key={index} className="glass-card-quality hover-lift">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-8 h-8 sm:w-8 sm:h-8">
                      {highlight.icon}
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-navy-primary mb-2">
                      {highlight.title}
                    </h3>
                    {highlight.badge && (
                      <Badge variant="outline" className="border-gold-primary text-gold-primary mb-3 text-xs">
                        {highlight.badge}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 text-center sm:text-left">
                  {highlight.description}
                </p>
                <div className="text-base sm:text-lg font-semibold text-emerald-primary text-center sm:text-left">
                  {highlight.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};