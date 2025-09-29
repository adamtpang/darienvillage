import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnWhitePage, setIsOnWhitePage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check if we're on a page with white background (like Building 6)
    const checkPageBackground = () => {
      setIsOnWhitePage(window.location.pathname === '/building6');
    };

    window.addEventListener('scroll', handleScroll);
    checkPageBackground();

    // Listen for navigation changes
    window.addEventListener('popstate', checkPageBackground);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', checkPageBackground);
    };
  }, []);

  const handleNavigation = (item: { id: string; url?: string }) => {
    if (item.url) {
      // External navigation
      window.location.href = item.url;
    } else {
      // Scroll to section on same page
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOnWhitePage
          ? "bg-brand-white/95 backdrop-blur-xl shadow-lg border-b border-brand-primary/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={cn(
              "text-2xl font-bold transition-colors duration-300",
              isScrolled || isOnWhitePage ? "text-brand-dark" : "text-white"
            )}>
              Darien Village
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', id: 'home', url: '/' },
              { label: 'Building 6', id: 'building6', url: '/building6' },
              { label: 'About', id: 'about' },
              { label: 'Invest', id: 'invest' },
              { label: 'FAQ', id: 'faq' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-primary",
                  isScrolled || isOnWhitePage ? "text-brand-dark" : "text-white"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation({ id: 'hospitality' })}
              className={cn(
                "hidden sm:inline-flex",
                isScrolled || isOnWhitePage ? "text-brand-dark hover:text-brand-primary" : "text-white hover:text-brand-accent"
              )}
            >
              Browse Stays
            </Button>
            <Button
              size="sm"
              onClick={() => window.open('mailto:ivan@darienvillage.com?subject=Investor%20Kit', '_blank')}
              className="bg-brand-primary hover:bg-brand-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Request Investor Kit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;