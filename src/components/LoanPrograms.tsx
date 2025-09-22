import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, Building, Home, Construction } from "lucide-react";

const loanPrograms = [
  {
    title: "Fix & Flip",
    description: "Purchase, renovate, make a profit! Short-term financing for purchase or cash out.",
    icon: Hammer,
    features: ["Up to 75% LTC/LTV", "12 Months Term", "$150K - $10MM", "Fast Approval"],
  },
  {
    title: "Bridge Loans",
    description: "Short-term financing for purchase or cash out. Perfect for quick acquisitions.",
    icon: Building,
    features: ["Up to 80% LTV", "Flexible Terms", "Quick Close", "Competitive Rates"],
  },
  {
    title: "DSCR Rental",
    description: "Maximize monthly rental income while your property appreciates.",
    icon: Home,
    features: ["No Income Verification", "Up to 85% LTV", "Long-term Financing", "Portfolio Growth"],
  },
  {
    title: "Ground Up Construction",
    description: "Not a fan of current inventory? Tear down and build from the ground up.",
    icon: Construction,
    features: ["Construction Loans", "Take-out Financing", "Expert Support", "Flexible Terms"],
  },
];

const LoanPrograms = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Loan Programs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A variety of unique products suitable for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loanPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary rounded-full w-16 h-16 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{program.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Calculation comes before decision. Why don't you do it by yourself?
            </h3>
            <Button variant="cta" size="lg">
              Calculate Your Loan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanPrograms;