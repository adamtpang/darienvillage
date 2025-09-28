import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Calendar, Building } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  milestone?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Q4 2024",
    title: "Design & Permits",
    description: "Architectural plans finalized, permits obtained",
    status: "completed",
    milestone: true
  },
  {
    date: "Q1 2025",
    title: "Investment Round Launch",
    description: "Series A investment round opened to qualified investors",
    status: "completed",
    milestone: true
  },
  {
    date: "Q3 2025",
    title: "Investment Rounds Closed",
    description: "All investment rounds successfully completed with full funding",
    status: "completed",
    milestone: true
  },
  {
    date: "Now",
    title: "Site Preparation",
    description: "Land clearing, utilities, and infrastructure preparation",
    status: "current",
    milestone: true
  },
  {
    date: "Oct 2025",
    title: "Start of Construction",
    description: "Ground breaking and foundation work begins",
    status: "upcoming",
    milestone: true
  },
  {
    date: "Nov 2026",
    title: "Finish of Construction",
    description: "Project completion",
    status: "upcoming",
    milestone: true
  },
  {
    date: "Jan 2027",
    title: "Start of Operating",
    description: "Property management and rental operations begin",
    status: "upcoming",
    milestone: true
  }
];

export const DevelopmentTimeline = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-emerald-primary" />;
      case "current":
        return <Clock className="w-6 h-6 text-gold-primary" />;
      default:
        return <Building className="w-6 h-6 text-muted-foreground" />;
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
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-navy-primary">
            Development Timeline
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Track our progress from design to completion
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - Hidden on mobile */}
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-primary via-gold-primary to-muted"></div>

            <div className="space-y-6 sm:space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex flex-col sm:flex-row sm:items-start">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 mx-auto sm:mx-0 mb-4 sm:mb-0 ${
                    event.milestone 
                      ? 'border-gold-primary bg-gold-primary/10' 
                      : 'border-muted bg-background'
                  }`}>
                    <div className="w-5 h-5 sm:w-6 sm:h-6">
                      {getStatusIcon(event.status)}
                    </div>
                  </div>

                  {/* Event card */}
                  <Card className={`sm:ml-8 flex-1 glass-card-quality hover-lift ${
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
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {event.description}
                      </p>
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