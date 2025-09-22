import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, Shield, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Loan Size & Key Features",
    description: "Flexible loan amounts from $150,000 to $2,000,000 with competitive terms and quick closing options.",
    details: [
      "Purchase Financing: Up to 75% LTV",
      "Refinancing: Up to 80% CLTV for premium locations",
      "Quick Close with Competitive Rates",
      "Low Origination Fees"
    ]
  },
  {
    icon: Shield,
    title: "Transparent Investments",
    description: "Complete transparency in all our investment processes with clear documentation and regular updates.",
    details: [
      "Clear fee structure",
      "Regular progress reports",
      "Open communication",
      "No hidden charges"
    ]
  },
  {
    icon: Users,
    title: "Choice for VIP Investors",
    description: "Preferred lending partner for sophisticated real estate investors across the nation.",
    details: [
      "Dedicated account management",
      "Priority processing",
      "Exclusive opportunities",
      "Personalized service"
    ]
  },
  {
    icon: TrendingUp,
    title: "Daily Profit Tracking",
    description: "Monitor your investments with real-time updates and comprehensive performance analytics.",
    details: [
      "Real-time portfolio tracking",
      "Performance analytics",
      "Monthly statements",
      "Investment insights"
    ]
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why We're The Right Choice</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine industry expertise with innovative solutions to deliver exceptional results for real estate investors nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* States We Lend In */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">States We Lend In</h3>
          <div className="bg-background rounded-lg p-8 shadow-medium mb-8">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-6">
              {['WA', 'OR', 'WY', 'IA', 'NV', 'IN', 'KS', 'MO', 'KY', 'NM', 'OK', 'AR', 'TN', 'NC', 'SC', 'AL', 'GA'].map((state) => (
                <div key={state} className="bg-primary text-primary-foreground px-3 py-2 rounded font-semibold text-center">
                  {state}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary mb-2">Nationwide Coverage</h4>
              <p className="text-muted-foreground">
                Looking for lending in a state not listed? We do lend in other states on a case-by-case scenario. Give us a call to see what we can do for you.
              </p>
            </div>
          </div>

          {/* Recently Closed Deals */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <h4 className="text-2xl font-bold mb-4">Recently Closed Deals</h4>
            <p className="text-primary-foreground/90 mb-6">
              Join thousands of successful investors who have funded their projects with our competitive lending solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">$2.5M</div>
                <div className="text-primary-foreground/80">Average Deal Size</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">14 Days</div>
                <div className="text-primary-foreground/80">Average Close Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-primary-foreground/80">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;