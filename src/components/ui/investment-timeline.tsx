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
const timelineEvents: TimelineEvent[] = [{
  date: "Q2 2024",
  title: "Project Design & Permits",
  description: "Architectural plans finalized, permits obtained",
  status: "completed",
  milestone: true
}, {
  date: "Q3 2024",
  title: "Investment Round Launch",
  description: "Private investment offering opened to qualified investors",
  status: "completed"
}, {
  date: "Q4 2024",
  title: "Site Preparation",
  description: "Land clearing, utilities installation, foundation work",
  status: "current",
  milestone: true
}, {
  date: "Q1 2025",
  title: "Construction Start",
  description: "Main construction begins with concrete and steel work",
  status: "upcoming"
}, {
  date: "Q2 2025",
  title: "Structure Completion",
  description: "Building frame, roofing, and external walls completed",
  status: "upcoming",
  milestone: true
}, {
  date: "Q3 2025",
  title: "Interior & MEP",
  description: "Interior finishes, electrical, plumbing, and HVAC installation",
  status: "upcoming"
}, {
  date: "Q4 2025",
  title: "Final Inspections",
  description: "Quality control, safety inspections, and permits",
  status: "upcoming"
}, {
  date: "Q1 2026",
  title: "Project Delivery",
  description: "Keys handed over, STR management begins",
  status: "upcoming",
  milestone: true
}];
export const InvestmentTimeline = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-emerald-primary" />;
      case "current":
        return <Clock className="w-6 h-6 text-gold-primary" />;
      default:
        return <Calendar className="w-6 h-6 text-muted-foreground" />;
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
            Investment Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track the progress of your investment from initial funding to rental income generation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center">
                {/* Timeline Line */}
                {index < timelineEvents.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-muted" />
                )}
                
                {/* Timeline Dot */}
                <div className={`relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                  event.status === "completed" 
                    ? "bg-emerald-primary border-emerald-primary" 
                    : event.status === "current"
                    ? "bg-gold-primary border-gold-primary"
                    : "bg-muted border-muted-foreground"
                }`}>
                  {event.status === "completed" ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : event.status === "current" ? (
                    <Clock className="w-6 h-6 text-white" />
                  ) : (
                    <Calendar className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                
                {/* Content */}
                <Card className="ml-8 flex-1 glass-card-quality">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-navy-primary">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(event.status)}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </Badge>
                        {event.milestone && (
                          <Badge variant="outline" className="border-gold-primary text-gold-primary">
                            Milestone
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">{event.description}</p>
                    <span className="text-sm font-medium text-gold-primary">{event.date}</span>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};