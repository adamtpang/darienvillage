import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock } from "lucide-react";

const developmentData = {
  phase1: {
    title: "Phase 1 - In Process",
    units: 55,
    projectedIRR: "18%",
    buildings: 5,
    constructionStart: "October 2025",
    projectedFinish: "November 2026",
    invested: "$4.5M",
    features: [
      "Coffee shop & community coworking",
      "Connection to Duna deck level one",
      "Complete residential development"
    ],
    status: "In Process",
    statusType: "in-process" as const
  },
  phase2: {
    title: "Phase 2 - Upcoming",
    units: 110,
    projectedIRR: "16%",
    buildings: 10,
    raiseStart: "November 2025",
    constructionStart: "September 2026",
    projectedFinish: "October 2027",
    capitalRequired: "$9M",
    features: [
      "More community areas planned",
      "Extended residential development",
      "Enhanced amenities & facilities"
    ],
    status: "Preparing for Launch",
    statusType: "upcoming" as const
  }
};

export const DevelopmentPhases = () => {
  return (
    <section className="py-12 sm:py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gold-primary">
            Development Phases
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Multi-phase development offering diverse investment opportunities
          </p>
        </div>
        
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Phase 1 Card */}
          <Card className="glass-card-quality hover-lift border-emerald-primary/30">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-coral-primary">
                  {developmentData.phase1.title}
                </h3>
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold-primary" />
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <span className="text-xs sm:text-sm text-muted-foreground">Units:</span>
                    <div className="text-xl sm:text-2xl font-bold text-navy-primary">
                      {developmentData.phase1.units}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-muted-foreground">Projected IRR:</span>
                    <div className="text-xl sm:text-2xl font-bold text-coral-primary">
                      {developmentData.phase1.projectedIRR}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <span className="text-xs sm:text-sm text-muted-foreground">Buildings:</span>
                    <div className="text-lg sm:text-xl font-bold text-navy-primary">
                      {developmentData.phase1.buildings}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-muted-foreground">Invested:</span>
                    <div className="text-lg sm:text-xl font-bold text-coral-primary">
                      {developmentData.phase1.invested}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-xs sm:text-sm text-muted-foreground">Construction Start:</span>
                    <span className="text-xs sm:text-sm font-semibold text-navy-primary">
                      {developmentData.phase1.constructionStart}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-xs sm:text-sm text-muted-foreground">Projected Finish:</span>
                    <span className="text-xs sm:text-sm font-semibold text-navy-primary">
                      {developmentData.phase1.projectedFinish}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4 sm:mb-6">
                {developmentData.phase1.features.map((feature, index) => (
                  <div key={index} className="flex items-start text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-emerald-primary rounded-full mr-3 mt-1.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Badge variant="outline" className="border-gold-primary text-gold-primary text-xs">
                Status: {developmentData.phase1.status}
              </Badge>
            </CardContent>
          </Card>
          
          {/* Phase 2 Card */}
          <Card className="glass-card-quality hover-lift border-gold-primary/30">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-coral-primary">
                  {developmentData.phase2.title}
                </h3>
                <Clock className="w-6 h-6 text-gold-primary" />
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-muted-foreground">Units:</span>
                    <div className="text-2xl font-bold text-navy-primary">
                      {developmentData.phase2.units}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Projected IRR:</span>
                    <div className="text-2xl font-bold text-coral-primary">
                      {developmentData.phase2.projectedIRR}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-muted-foreground">Buildings:</span>
                    <div className="text-xl font-bold text-navy-primary">
                      {developmentData.phase2.buildings}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Capital Required:</span>
                    <div className="text-xl font-bold text-coral-primary">
                      {developmentData.phase2.capitalRequired}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Raise Start:</span>
                    <span className="font-semibold text-navy-primary">
                      {developmentData.phase2.raiseStart}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Construction Start:</span>
                    <span className="font-semibold text-navy-primary">
                      {developmentData.phase2.constructionStart}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projected Finish:</span>
                    <span className="font-semibold text-navy-primary">
                      {developmentData.phase2.projectedFinish}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                {developmentData.phase2.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-gold-primary rounded-full mr-3" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <Badge variant="outline" className="border-blue-500 text-blue-500">
                  Status: {developmentData.phase2.status}
                </Badge>
                <Button variant="default" className="w-full bg-coral-primary hover:bg-coral-primary/90">
                  Schedule Investment Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};