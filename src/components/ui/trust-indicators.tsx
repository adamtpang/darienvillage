import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Settings, Construction, TrendingUp } from "lucide-react";
interface TrustMetric {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  badge?: string;
}
const trustMetrics: TrustMetric[] = [{
  icon: <Shield className="w-8 h-8 text-emerald-primary" />,
  value: "$4.5M",
  label: "Successfully Raised",
  description: "Phase 1 investment completed with institutional backing",
  badge: "Proven Track Record"
}, {
  icon: <Settings className="w-8 h-8 text-gold-primary" />,
  value: "Pro",
  label: "Management Team",
  description: "Experienced property managers handling all operations",
  badge: "Professional"
}, {
  icon: <Construction className="w-8 h-8 text-navy-primary" />,
  value: "55",
  label: "Units In Development",
  description: "5 buildings designed and ready for construction phase",
  badge: "In Progress"
}, {
  icon: <TrendingUp className="w-8 h-8 text-emerald-primary" />,
  value: "18%",
  label: "Projected IRR",
  description: "Conservative projections based on market analysis",
  badge: "Strong Returns"
}];
export const TrustIndicators = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-primary">
            Why Investors Trust Darien Village
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven track record with transparent reporting and institutional-grade management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {trustMetrics.map((metric, index) => (
            <Card key={index} className="glass-card-quality hover-lift text-center">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-navy-primary mb-2">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-navy-primary mb-3">
                  {metric.label}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {metric.description}
                </p>
                {metric.badge && (
                  <Badge variant="outline" className="border-gold-primary text-gold-primary">
                    {metric.badge}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};