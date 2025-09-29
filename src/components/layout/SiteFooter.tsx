const SiteFooter = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-brand-primary mb-4">
            Darien Village
          </div>

          {/* Description */}
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Premium real estate investment opportunities in Próspera ZEDE, Honduras
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {[
              { label: 'About', id: 'about' },
              { label: 'Masterplan', id: 'masterplan' },
              { label: 'Investment', id: 'invest' },
              { label: 'Hospitality', id: 'hospitality' },
              { label: 'FAQ', id: 'faq' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/60 hover:text-brand-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-xs text-white/60">
              <span>© 2025 Darien Village Development</span>
              <span className="hidden sm:block">•</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;