import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Section } from '@/components/primitives/Section';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { WhyPlace } from '@/components/WhyPlace';
import { MasterPlan } from '@/components/MasterPlan';
import { ApartmentTypes } from '@/components/ApartmentTypes';
import { InvestmentThesis } from '@/components/InvestmentThesis';
import { Hospitality } from '@/components/Hospitality';
import { FAQBlock } from '@/components/FAQBlock';
import { ContactForm } from '@/components/ContactForm';
import { DevelopmentPhases } from '@/components/DevelopmentPhases';
import { DevelopmentTimeline } from '@/components/DevelopmentTimeline';
import { Portfolio } from '@/components/Portfolio';
import darienVillageHero from '@/assets/darien-village-hero.png';

const HomePage = () => {
  // Accommodation gallery images
  const galleryImages = [
    '/src/assets/gallery-1.png',
    '/src/assets/gallery-2.png',
    '/src/assets/gallery-3.png',
    '/src/assets/gallery-4.png',
    '/src/assets/gallery-5.png',
    '/src/assets/gallery-6.png'
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <Hero
        title="Darien Village"
        subtitle="Premium Real Estate Investment in Próspera's Special Economic Zone"
        primaryCta={{
          label: "Request Investor Kit",
          href: "mailto:ivan@darienvillage.com?subject=Investor%20Kit"
        }}
        secondaryCta={{
          label: "Browse Stays",
          href: "#hospitality"
        }}
        imageSrc={darienVillageHero}
      />

      <Section>
        <Benefits />
      </Section>

      <Section>
        <WhyPlace />
      </Section>

      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Masterplan & <span className="text-brand-gradient">Homes</span></h2>
          <p className="text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Discover our thoughtfully designed village development with 55 premium residences
          </p>
        </div>
        <div className="space-y-16">
          <MasterPlan />
          <ApartmentTypes />
        </div>
      </Section>

      <Section id="phases" className="bg-white">
        <DevelopmentPhases />
      </Section>

      <Section id="timeline">
        <DevelopmentTimeline />
      </Section>

      <Section id="portfolio" className="bg-white">
        <Portfolio />
      </Section>

      <Section id="invest">
        <InvestmentThesis />
      </Section>

      <Section id="hospitality" className="bg-white">
        <Hospitality images={galleryImages} />
      </Section>

      <Section id="faq" className="bg-white">
        <FAQBlock />
      </Section>

      <Section id="contact">
        <ContactForm />
      </Section>

      <SiteFooter />
    </div>
  );
};

export default HomePage;