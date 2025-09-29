import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Section } from '@/components/primitives/Section';
import { Building6Timeline } from '@/components/Building6Timeline';
import { Building6Overview } from '@/components/Building6Overview';
import { Building6Units } from '@/components/Building6Units';
import FAQ from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

const Building6Page = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Page Header - No hero image, just title */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-white via-brand-light to-brand-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 leading-tight">
            Building <span className="text-brand-gradient">6</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Modern Apartments for Sale in Próspera ZEDE
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById('units');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Browse Available Units
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('mailto:ivan@darienvillage.com?subject=Building%206%20Purchase%20Call', '_blank')}
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Schedule Purchase Call
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Section id="timeline">
        <Building6Timeline />
      </Section>

      {/* Overview Section */}
      <Section id="overview" className="bg-white">
        <Building6Overview />
      </Section>

      {/* Units Section */}
      <Section id="units">
        <Building6Units />
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Building 6 <span className="text-brand-gradient">FAQ</span>
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed max-w-2xl mx-auto">
            Common questions about purchasing and managing Building 6 units
          </p>
        </div>
        <FAQ />
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <ContactForm />
      </Section>

      <SiteFooter />
    </div>
  );
};

export default Building6Page;