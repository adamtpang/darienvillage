import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface HospitalityProps {
  images: string[];
}

export const Hospitality = ({ images }: HospitalityProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-brand-dark mb-6">
        Short-Term Rental <span className="text-brand-gradient">Experience</span>
      </h2>

      <p className="text-brand-gray text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
        Experience luxury Caribbean living in our professionally managed short-term rental program.
        Each unit features premium amenities and hospitality-grade service.
      </p>

      {/* Gallery */}
      <div className="mb-8 accommodation-gallery">
        {images.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {images.slice(0, 6).map((image, index) => (
              <div key={index} className="accommodation-item aspect-square rounded-2xl overflow-hidden bg-brand-primary/5 shadow-lg hover:shadow-2xl transition-all duration-500 group relative">
                <img
                  src={image}
                  alt={`Darien Village accommodation ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1,2,3,4,5,6].map((index) => (
              <div key={index} className="accommodation-item aspect-square rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 group border border-brand-primary/10">
                <span className="text-brand-gray text-sm font-medium group-hover:text-brand-primary transition-colors">Gallery Image {index}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button
        onClick={scrollToContact}
        className="bg-brand-primary hover:bg-brand-secondary text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full"
      >
        Join Stays Waitlist
      </Button>
    </div>
  );
};