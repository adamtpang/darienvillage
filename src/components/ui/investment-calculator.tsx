import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface CalculatorResult {
  annualRevenue: number;
  annualExpenses: number;
  netAnnualIncome: number;
  roi: number;
  monthlyIncome: number;
}

export const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [occupancyRate, setOccupancyRate] = useState([65]);
  const [nightlyRate, setNightlyRate] = useState(80);
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const calculateReturns = () => {
    const annualNights = Math.floor((365 * occupancyRate[0]) / 100);
    const annualRevenue = annualNights * nightlyRate;
    const managementFee = annualRevenue * 0.25; // 25% management fee
    const maintenance = investmentAmount * 0.02; // 2% annual maintenance
    const annualExpenses = managementFee + maintenance;
    const netAnnualIncome = annualRevenue - annualExpenses;
    const roi = (netAnnualIncome / investmentAmount) * 100;
    const monthlyIncome = netAnnualIncome / 12;

    setResult({
      annualRevenue,
      annualExpenses,
      netAnnualIncome,
      roi,
      monthlyIncome,
    });
  };

  return (
    <Card className="glass-card-quality">
      <CardHeader>
        <CardTitle className="text-2xl text-navy-primary">
          Investment Calculator
        </CardTitle>
        <p className="text-muted-foreground">
          Calculate your potential returns with professional STR management
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="investment">Investment Amount ($)</Label>
              <Input
                id="investment"
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                className="text-lg font-semibold"
              />
            </div>
            
            <div>
              <Label htmlFor="nightly">Nightly Rate ($)</Label>
              <Input
                id="nightly"
                type="number"
                value={nightlyRate}
                onChange={(e) => setNightlyRate(Number(e.target.value))}
                className="text-lg font-semibold"
              />
            </div>
            
            <div>
              <Label>Occupancy Rate: {occupancyRate[0]}%</Label>
              <Slider
                value={occupancyRate}
                onValueChange={setOccupancyRate}
                max={85}
                min={40}
                step={5}
                className="mt-2"
              />
            </div>
            
            <Button 
              onClick={calculateReturns}
              className="w-full bg-gradient-quality text-white hover:opacity-90"
            >
              Calculate Returns
            </Button>
          </div>
          
          {result && (
            <div className="space-y-4 p-6 bg-gradient-success/10 rounded-lg border border-emerald-primary/20">
              <h3 className="text-xl font-semibold text-emerald-primary">
                Projected Returns
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Annual Revenue:</span>
                  <span className="font-semibold text-emerald-primary">
                    ${result.annualRevenue.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Annual Expenses:</span>
                  <span className="font-semibold">
                    ${result.annualExpenses.toLocaleString()}
                  </span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Net Annual Income:</span>
                    <span className="text-emerald-primary">
                      ${result.netAnnualIncome.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>ROI:</span>
                    <span className="text-gold-primary">
                      {result.roi.toFixed(1)}%
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly Income:</span>
                    <span className="font-semibold text-emerald-primary">
                      ${result.monthlyIncome.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};