export const DevelopmentTimeline = () => {
  const milestones = [
    {
      title: "Design & Permits",
      period: "Q4 2024",
      description: "Architectural plans finalized, permits obtained",
      status: "completed"
    },
    {
      title: "Investment Round Launch",
      period: "Q1 2025",
      description: "Series A investment round opened to qualified investors",
      status: "completed"
    },
    {
      title: "Investment Rounds Closed",
      period: "Q3 2025",
      description: "All investment rounds successfully completed with full funding",
      status: "completed"
    },
    {
      title: "Site Preparation",
      period: "Now",
      description: "Land clearing, utilities, and infrastructure preparation",
      status: "current"
    },
    {
      title: "Start of Construction",
      period: "Oct 2025",
      description: "Ground breaking and foundation work begins",
      status: "upcoming"
    },
    {
      title: "Finish of Construction",
      period: "Nov 2026",
      description: "Project completion",
      status: "upcoming"
    },
    {
      title: "Start of Operating",
      period: "Jan 2027",
      description: "Property management and rental operations begin",
      status: "upcoming"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">
          Development <span className="text-brand-gradient">Timeline</span>
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed max-w-2xl mx-auto">
          Track our progress from design to completion
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent"></div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex items-center">
              {/* Timeline dot */}
              <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                milestone.status === 'completed'
                  ? 'bg-brand-primary border-brand-primary'
                  : milestone.status === 'current'
                  ? 'bg-brand-secondary border-brand-secondary animate-pulse'
                  : 'bg-brand-white border-brand-gray'
              }`}></div>

              {/* Content */}
              <div className="ml-16 impact-card p-6 group max-w-4xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                    {milestone.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-brand-primary font-semibold">{milestone.period}</span>
                    {milestone.status === 'completed' && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Completed
                      </span>
                    )}
                    {milestone.status === 'current' && (
                      <span className="bg-brand-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                        In Progress
                      </span>
                    )}
                    {milestone.status === 'upcoming' && (
                      <span className="bg-brand-gray/20 text-brand-gray px-2 py-1 rounded-full text-xs font-medium">
                        Upcoming
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-brand-gray leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};