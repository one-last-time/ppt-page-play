import { Card, CardContent } from "@/components/ui/card";

const TrackRecord = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Track Record</h2>
          <p className="text-xl text-muted-foreground">
            Preferred Lender to the Industry's Best
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center bg-gradient-card border-0 shadow-medium">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-accent mb-2">$19B</div>
              <div className="text-muted-foreground">Loan Volume</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-gradient-card border-0 shadow-medium">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-accent mb-2">37,000+</div>
              <div className="text-muted-foreground">Loans Funded</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-gradient-card border-0 shadow-medium">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-accent mb-2">1998</div>
              <div className="text-muted-foreground">Founded</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-gradient-card border-0 shadow-medium">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-muted-foreground">Repeat Borrowers</div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-primary text-primary-foreground shadow-strong">
            <CardContent className="p-8 text-center">
              <div className="text-3xl font-bold mb-4">53,000+</div>
              <div className="text-primary-foreground/90">Homes Constructed</div>
              <p className="mt-4 text-primary-foreground/80">
                A track record of innovating to meet the needs of builders and developers constructing America's future housing.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-accent text-accent-foreground shadow-strong">
            <CardContent className="p-8 text-center">
              <div className="text-3xl font-bold mb-4">48 States</div>
              <div className="text-accent-foreground/90">Nationwide Lending</div>
              <p className="mt-4 text-accent-foreground/80">
                Comprehensive coverage across the United States with local expertise and national reach.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Investment Overview */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Current Investment Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">12m</div>
              <div className="text-muted-foreground text-lg">Total Investors</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">$110m</div>
              <div className="text-muted-foreground text-lg">Total Deposit</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">6.3%</div>
              <div className="text-muted-foreground text-lg">Average Annual Return</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;