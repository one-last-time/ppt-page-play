import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, TrendingUp, Shield } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Cityscape Finance</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We are a trusted real estate lending partner with over a decade of experience, 
            providing innovative financing solutions to real estate investors nationwide.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg mb-6">
                Founded with a vision to bridge the gap between traditional lending and the dynamic needs 
                of real estate investors, Cityscape Finance has grown to become a leading private money 
                lender in the industry.
              </p>
              <p className="text-lg mb-6">
                Our team combines decades of real estate and financial expertise to provide fast, 
                flexible, and reliable lending solutions. We understand that time is money in real estate, 
                which is why we've streamlined our processes to deliver quick decisions and fast closings.
              </p>
              <p className="text-lg">
                With over $19 billion in loans funded and 37,000+ successful transactions, we've built 
                our reputation on trust, transparency, and exceptional service. Our commitment to our 
                clients' success drives everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Integrity",
                description: "We build lasting relationships through honest communication and transparent processes."
              },
              {
                icon: TrendingUp,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service, from application to closing."
              },
              {
                icon: Users,
                title: "Partnership",
                description: "We see ourselves as partners in your success, not just lenders."
              },
              {
                icon: Award,
                title: "Innovation",
                description: "We continuously improve our processes to serve you better and faster."
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center bg-gradient-card border-0 shadow-medium">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Leadership Team</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">Experienced Leadership</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our leadership team brings together decades of experience in real estate finance, 
                    investment banking, and business development. With deep industry knowledge and a 
                    commitment to innovation, our leaders guide Cityscape Finance's mission to provide 
                    exceptional lending solutions to real estate investors across the nation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful investors who trust Cityscape Finance for their lending needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">Apply Now</Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;