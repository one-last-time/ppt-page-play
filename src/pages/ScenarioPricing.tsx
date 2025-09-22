import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, DollarSign, Clock, TrendingUp } from "lucide-react";
import { useState } from "react";

const ScenarioPricing = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [loanType, setLoanType] = useState("");
  const [term, setTerm] = useState("");

  const calculateEstimate = () => {
    // Basic calculation logic for demonstration
    if (!loanAmount || !propertyValue || !loanType || !term) return null;
    
    const amount = parseFloat(loanAmount);
    const value = parseFloat(propertyValue);
    const ltv = (amount / value) * 100;
    
    // Sample rates based on loan type
    const rates = {
      "fix-flip": 10.5,
      "bridge": 9.5,
      "dscr": 8.5,
      "construction": 11.0
    };
    
    const rate = rates[loanType as keyof typeof rates] || 10;
    const monthlyRate = rate / 100 / 12;
    const months = parseInt(term);
    const monthlyPayment = amount * monthlyRate;
    
    return {
      monthlyPayment,
      totalInterest: monthlyPayment * months - amount,
      ltv,
      rate
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Scenario Pricing Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant estimates for your real estate investment loans. 
            Calculate payments, rates, and terms for different scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                Loan Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="loan-amount">Loan Amount</Label>
                  <Input
                    id="loan-amount"
                    type="number"
                    placeholder="$500,000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="property-value">Property Value</Label>
                  <Input
                    id="property-value"
                    type="number"
                    placeholder="$750,000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Loan Type</Label>
                  <Select value={loanType} onValueChange={setLoanType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fix-flip">Fix & Flip</SelectItem>
                      <SelectItem value="bridge">Bridge Loan</SelectItem>
                      <SelectItem value="dscr">DSCR Loan</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Term (Months)</Label>
                  <Select value={term} onValueChange={setTerm}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 Months</SelectItem>
                      <SelectItem value="12">12 Months</SelectItem>
                      <SelectItem value="18">18 Months</SelectItem>
                      <SelectItem value="24">24 Months</SelectItem>
                      <SelectItem value="36">36 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Calculate Scenario
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Your Estimate
              </CardTitle>
            </CardHeader>
            <CardContent>
              {estimate ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">
                        ${estimate.monthlyPayment.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Monthly Payment</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">
                        {estimate.rate.toFixed(2)}%
                      </div>
                      <div className="text-sm text-muted-foreground">Interest Rate</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan-to-Value (LTV)</span>
                      <span className="font-semibold">{estimate.ltv.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Interest</span>
                      <span className="font-semibold">${estimate.totalInterest.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button variant="cta" className="w-full mt-6">
                    Apply for This Scenario
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Fill out the form to see your personalized estimate
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Loan Programs Quick Reference */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Loan Program Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                type: "Fix & Flip",
                rate: "10.5% - 12.5%",
                term: "6-18 months",
                ltv: "Up to 90%"
              },
              {
                type: "Bridge Loans",
                rate: "9.5% - 11.5%",
                term: "6-24 months", 
                ltv: "Up to 80%"
              },
              {
                type: "DSCR Loans",
                rate: "8.5% - 10.5%",
                term: "12-36 months",
                ltv: "Up to 75%"
              },
              {
                type: "Construction",
                rate: "11% - 13%",
                term: "12-24 months",
                ltv: "Up to 85%"
              }
            ].map((program) => (
              <Card key={program.type} className="text-center p-6">
                <CardHeader>
                  <CardTitle className="text-lg">{program.type}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <div className="font-semibold text-primary">{program.rate}</div>
                    <div className="text-sm text-muted-foreground">Interest Rate</div>
                  </div>
                  <div>
                    <div className="font-semibold">{program.term}</div>
                    <div className="text-sm text-muted-foreground">Term</div>
                  </div>
                  <div>
                    <div className="font-semibold">{program.ltv}</div>
                    <div className="text-sm text-muted-foreground">Max LTV</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScenarioPricing;