import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isBuilding6Page = location.pathname === '/building6';
  return <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold text-navy-primary">
            <Link to="/" className="hover:text-navy-primary/80 transition-colors">
              Darien Village
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          {isBuilding6Page ? <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-gold-primary transition-colors">
                Home
              </a>
              <a href="#overview" className="text-foreground hover:text-gold-primary transition-colors">
                Overview
              </a>
              <a href="#master-plan" className="text-foreground hover:text-gold-primary transition-colors">
                Project Details
              </a>
              <a href="#apartments" className="text-foreground hover:text-gold-primary transition-colors">
                Units
              </a>
              <a href="#faq" className="text-foreground hover:text-gold-primary transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-foreground hover:text-gold-primary transition-colors">
                Contact
              </a>
            </div> : <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-gold-primary transition-colors">
                Home
              </Link>
              <Link to="/building6" className="text-foreground hover:text-gold-primary transition-colors font-medium">Building 6</Link>
              <a href="#contact" className="text-foreground hover:text-gold-primary transition-colors">
                Contact
              </a>
            </div>}
          

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col space-y-4 pt-4">
              {isBuilding6Page ? <>
                  <a href="#home" className="text-foreground hover:text-gold-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted/50" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </a>
                  <a href="#overview" className="text-foreground hover:text-gold-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted/50" onClick={() => setIsMobileMenuOpen(false)}>
                    Overview
                  </a>
                  <a href="#master-plan" className="text-foreground hover:text-gold-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted/50" onClick={() => setIsMobileMenuOpen(false)}>
                    Project Details
                  </a>
                  <a href="#apartments" className="text-foreground hover:text-gold-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted/50" onClick={() => setIsMobileMenuOpen(false)}>
                    Units
                  </a>
                  <a href="#faq" className="text-foreground hover:text-gold-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted/50" onClick={() => setIsMobileMenuOpen(false)}>
                    FAQ
                  </a>
                  <a href="#contact" className="text-foreground hover:text-gold-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted/50" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact
                  </a>
                </> : <>
                <Link to="/" className="text-foreground hover:text-gold-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted/50" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link to="/building6" className="text-foreground hover:text-gold-primary transition-colors font-medium py-2 px-4 rounded-lg hover:bg-muted/50" onClick={() => setIsMobileMenuOpen(false)}>
                    Building 6
                  </Link>
                  <a href="#contact" className="text-foreground hover:text-gold-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted/50" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact
                  </a>
                </>}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;