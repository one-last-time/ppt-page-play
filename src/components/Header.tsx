import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
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
          <div className="flex items-center gap-4">
            <span>Follow us:</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-primary-foreground/20 rounded"></div>
              <div className="w-6 h-6 bg-primary-foreground/20 rounded"></div>
              <div className="w-6 h-6 bg-primary-foreground/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              CITYSCAPE <span className="text-accent">FINANCE</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact Us</Link>
            <Link to="/scenario-pricing" className="text-foreground hover:text-primary transition-colors">Scenario Pricing</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="text-foreground hover:text-primary transition-colors">LOGIN</a>
            <Button variant="cta" size="lg">APPLY NOW</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;