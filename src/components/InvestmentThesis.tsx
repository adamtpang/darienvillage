import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Calendar } from 'lucide-react';

export const InvestmentThesis = () => {
  const handleInvestorKit = () => {
    window.open('mailto:ivan@darienvillage.com?subject=Investor%20Kit%20Request', '_blank');
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Left Column - Investment Points */}
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-brand-dark mb-8">
            Investment <span className="text-brand-gradient">Thesis</span>
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <TrendingUp className="w-7 h-7 text-brand-primary mr-4 mt-1" />
              <div>
                <h3 className="font-bold text-brand-dark mb-2">Dual Demand Sources</h3>
                <p className="text-brand-gray leading-relaxed">Caribbean tourism growth plus charter-district migration creating sustained demand for quality accommodations.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <TrendingUp className="w-7 h-7 text-brand-primary mr-4 mt-1" />
              <div>
                <h3 className="font-bold text-brand-dark mb-2">Mixed Revenue Streams</h3>
                <p className="text-brand-gray leading-relaxed">Pre-sales funding, short-term rental operations, and commercial lease opportunities diversify income sources.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Shield className="w-7 h-7 text-brand-primary mr-4 mt-1" />
              <div>
                <h3 className="font-bold text-brand-dark mb-2">Risk Management</h3>
                <p className="text-brand-gray leading-relaxed">Staged phasing, conservative leverage, and regulatory diversification across multiple jurisdictions.</p>
              </div>
            </div>
          </div>
        </div>
        
        <Button
          onClick={handleInvestorKit}
          className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Request Investor Kit
        </Button>
      </div>

      {/* Right Column - Illustrative Program */}
      <div className="glass-card-premium p-8">
        <h3 className="text-2xl font-bold text-brand-dark mb-6">Illustrative <span className="text-brand-gradient">Program</span></h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-brand-primary pl-4 bg-brand-primary/5 rounded-r-lg pr-4 py-3">
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 text-brand-primary mr-2" />
              <h4 className="font-bold text-brand-dark">Phase 1</h4>
            </div>
            <p className="text-brand-gray font-medium">Foundation development and initial units (Buildings 1-2)</p>
          </div>
          
          <div className="border-l-4 border-brand-secondary pl-4 bg-brand-secondary/5 rounded-r-lg pr-4 py-3">
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 text-brand-secondary mr-2" />
              <h4 className="font-bold text-brand-dark">Phase 2</h4>
            </div>
            <p className="text-brand-gray font-medium">Expansion phase with hospitality operations (Buildings 3-4)</p>
          </div>
          
          <div className="border-l-4 border-brand-accent pl-4 bg-brand-accent/5 rounded-r-lg pr-4 py-3">
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 text-brand-accent mr-2" />
              <h4 className="font-bold text-brand-dark">Phase 3</h4>
            </div>
            <p className="text-brand-gray font-medium">Final build-out and community hub completion (Building 5 + amenities)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
