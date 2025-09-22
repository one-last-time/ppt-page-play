import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Apply now and a team member will reach out. We'll help guide your funding process and ensure your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl">
              APPLY NOW
            </Button>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="text-xl font-semibold">949-989-6637</span>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              CITYSCAPE <span className="text-accent">FINANCE</span>
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Empowering real estate investors with fast, flexible financing solutions. Your trusted partner in building wealth through strategic property investments.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1(888)766-8268</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>loans@cityscape.loans</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>177 E Colorado Blvd# 2096 Pasadena CA 91105</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Loan Programs</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Loan Products</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Fix & Flip</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bridge Loans</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">DSCR Rental</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Construction</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Portfolio</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 mb-4 md:mb-0">
              © 2024 Cityscape Finance. All rights reserved.
            </div>
            <div className="flex gap-6 text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Licensing</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;