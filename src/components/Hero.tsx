import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Real Estate Investors
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Unlock Up To 85% Financing Today
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Journey with Vision, Precision, and a Bold New Way to Invest.
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-accent mb-8">
            Fast, Flexible Bridge Loans!
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="min-w-48">
              Apply Now
            </Button>
            <Button variant="outline" size="xl" className="min-w-48 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Talk to a Consultant
            </Button>
          </div>

          {/* Not Sure Where To Begin Section */}
          <div className="bg-background/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-primary-foreground mb-4">
              Not Sure Where To Begin?
            </h4>
            <p className="text-primary-foreground/90 mb-6">
              Apply Now and a team member will reach out. Or give us a call. We'll help guide your funding process, and ensure that you are successful and the loan process is easy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Talk to a Consultant
              </Button>
              <div className="flex items-center gap-2 text-accent">
                <span className="font-bold text-lg">949-989-6637</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-accent">5.00%</div>
              <div className="text-muted-foreground">Starting Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">85%</div>
              <div className="text-muted-foreground">Max LTV</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">12m</div>
              <div className="text-muted-foreground">Total Investors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">$110m</div>
              <div className="text-muted-foreground">Total Deposit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;