import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const PageHead = ({ 
  title = "Darien Village - Professional Real Estate Investment in Próspera", 
  description = "Invest in Building 6 - Quality real estate in Próspera's special economic zone. Professional STR management and development team.",
  keywords = "real estate investment, Próspera Honduras, Building 6, short-term rental, investment property",
  canonical
}: PageHeadProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && canonical) {
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
  }, [title, description, keywords, canonical, location.pathname]);

  return null;
};

export default PageHead;