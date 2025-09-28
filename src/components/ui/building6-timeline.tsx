import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Calendar } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  milestone?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Q3 2024",
    title: "Project Design & Permits",
    description: "Architectural plans finalized, permits obtained",
    status: "completed",
    milestone: true
  },
  {
    date: "Q4 2024",
    title: "Sales & Pre-Construction",
    description: "",
    status: "current",
    milestone: true
  },
  {
    date: "Q1-Q4 2025",
    title: "Sales & Pre-Construction Phase",
    description: "Continued unit sales and detailed construction planning",
    status: "upcoming"
  },
  {
    date: "Jan 2026",
    title: "Construction Start",
    description: "Ground breaking and foundation work begins",
    status: "upcoming",
    milestone: true
  },
  {
    date: "Q1 2026",
    title: "Structure Phase",
    description: "Building frame, concrete work, and structural completion",
    status: "upcoming"
  },
  {
    date: "Q2 2026",
    title: "MEP Installation",
    description: "Mechanical, electrical, and plumbing systems installation",
    status: "upcoming"
  },
  {
    date: "Q3 2026",
    title: "Interior Finishes",
    description: "Flooring, fixtures, cabinetry, and interior completion",
    status: "upcoming"
  },
  {
    date: "Q4 2026",
    title: "Final Phase",
    description: "Quality control, inspections, and final touches",
    status: "upcoming"
  },
  {
    date: "Feb 2027",
    title: "Unit Delivery",
    description: "Keys handed over to owners, move-in ready",
    status: "upcoming",
    milestone: true
  }
];

export const Building6Timeline = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-full h-full text-emerald-primary" />;
      case "current":
        return <Clock className="w-full h-full text-gold-primary" />;
      default:
        return <Calendar className="w-full h-full text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-primary/10 text-emerald-primary";
      case "current":
        return "bg-gold-primary/10 text-gold-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-primary">
            Building 6 Development Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Construction timeline from January 2026 to February 2027 completion
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - responsive */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-primary via-gold-primary to-muted"></div>

            <div className="space-y-6 sm:space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot - smaller on mobile */}
                  <div className={`relative z-10 flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 ${
                    event.milestone 
                      ? 'border-gold-primary bg-gold-primary/10' 
                      : 'border-muted bg-background'
                  }`}>
                    <div className="w-4 h-4 sm:w-6 sm:h-6">
                      {getStatusIcon(event.status)}
                    </div>
                  </div>

                  {/* Event card - responsive spacing */}
                  <Card className={`ml-4 sm:ml-8 flex-1 glass-card hover-lift ${
                    event.status === 'current' ? 'ring-2 ring-gold-primary/30' : ''
                  }`}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                          <h3 className="text-lg sm:text-xl font-semibold text-navy-primary">
                            {event.title}
                          </h3>
                          {event.milestone && (
                            <Badge variant="outline" className="border-gold-primary text-gold-primary w-fit">
                              Milestone
                            </Badge>
                          )}
                        </div>
                        <Badge className={`${getStatusColor(event.status)} w-fit text-xs sm:text-sm`}>
                          {event.date}
                        </Badge>
                      </div>
                      {event.description && (
                        <p className="text-muted-foreground text-sm sm:text-base">
                          {event.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};