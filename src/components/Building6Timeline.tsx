export const Building6Timeline = () => {
  const milestones = [
    {
      title: "Project Design & Permits",
      period: "Q3 2024",
      description: "Architectural plans finalized, permits obtained",
      status: "completed",
      type: "milestone"
    },
    {
      title: "Sales & Pre-Construction",
      period: "Q4 2024",
      description: "Sales & Pre-Construction Phase Q1-Q4 2025. Continued unit sales and detailed construction planning",
      status: "completed",
      type: "milestone"
    },
    {
      title: "Construction Start",
      period: "Jan 2026",
      description: "Ground breaking and foundation work begins",
      status: "upcoming",
      type: "milestone"
    },
    {
      title: "Structure Phase",
      period: "Q1 2026",
      description: "Building frame, concrete work, and structural completion",
      status: "upcoming",
      type: "phase"
    },
    {
      title: "MEP Installation",
      period: "Q2 2026",
      description: "Mechanical, electrical, and plumbing systems installation",
      status: "upcoming",
      type: "phase"
    },
    {
      title: "Interior Finishes",
      period: "Q3 2026",
      description: "Flooring, fixtures, cabinetry, and interior completion",
      status: "upcoming",
      type: "phase"
    },
    {
      title: "Final Phase",
      period: "Q4 2026",
      description: "Quality control, inspections, and final touches",
      status: "upcoming",
      type: "phase"
    },
    {
      title: "Unit Delivery",
      period: "Feb 2027",
      description: "Keys handed over to owners, move-in ready",
      status: "upcoming",
      type: "milestone"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">
          Building 6 Development <span className="text-brand-gradient">Timeline</span>
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed max-w-3xl mx-auto">
          Construction timeline from January 2026 to February 2027 completion
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent"></div>

        <div className="space-y-6">
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
                    {milestone.type === 'milestone' && (
                      <span className="bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full text-xs font-medium">
                        Milestone
                      </span>
                    )}
                    {milestone.status === 'completed' && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Completed
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