import { Button } from '@/components/ui/button';

export const DevelopmentPhases = () => {
  return (
    <div className="space-y-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">
          Development <span className="text-brand-gradient">Phases</span>
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed max-w-2xl mx-auto">
          Multi-phase development offering diverse investment opportunities
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Phase 1 */}
        <div className="impact-card p-8 group">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
              Phase 1 - In Process
            </h3>
            <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              In Process
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">55</div>
              <div className="text-brand-gray text-sm">Units</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">18%</div>
              <div className="text-brand-gray text-sm">Projected IRR</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5</div>
              <div className="text-brand-gray text-sm">Buildings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">$4.5M</div>
              <div className="text-brand-gray text-sm">Invested</div>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <span className="text-brand-gray">Construction Start:</span>
              <span className="font-semibold text-brand-dark">October 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-gray">Projected Finish:</span>
              <span className="font-semibold text-brand-dark">November 2026</span>
            </div>
          </div>

          <ul className="space-y-2 mb-6 text-brand-gray">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
              Coffee shop & community coworking
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
              Connection to Duna deck level one
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
              Complete residential development
            </li>
          </ul>
        </div>

        {/* Phase 2 */}
        <div className="impact-card p-8 group">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
              Phase 2 - Upcoming
            </h3>
            <span className="bg-brand-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
              Preparing for Launch
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">110</div>
              <div className="text-brand-gray text-sm">Units</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">16%</div>
              <div className="text-brand-gray text-sm">Projected IRR</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10</div>
              <div className="text-brand-gray text-sm">Buildings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">$9M</div>
              <div className="text-brand-gray text-sm">Capital Required</div>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <span className="text-brand-gray">Raise Start:</span>
              <span className="font-semibold text-brand-dark">November 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-gray">Construction Start:</span>
              <span className="font-semibold text-brand-dark">September 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-gray">Projected Finish:</span>
              <span className="font-semibold text-brand-dark">October 2027</span>
            </div>
          </div>

          <ul className="space-y-2 mb-6 text-brand-gray">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
              More community areas planned
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
              Extended residential development
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
              Enhanced amenities & facilities
            </li>
          </ul>

          <Button
            onClick={() => window.open('mailto:ivan@darienvillage.com?subject=Phase%202%20Investment%20Inquiry', '_blank')}
            className="w-full bg-brand-secondary hover:bg-brand-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Schedule Investment Call
          </Button>
        </div>
      </div>
    </div>
  );
};