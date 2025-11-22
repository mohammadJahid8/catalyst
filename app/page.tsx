import CatalystMethod from '@/components/global/catalyst-method';
import CatalystModel from '@/components/global/catalyst-model';
import ClientCriteria from '@/components/global/client-criteria';
import FAQ from '@/components/global/faq';
import FinalCTA from '@/components/global/final-cta';
import Footer from '@/components/global/footer';
import HeroSection from '@/components/global/hero';
import HowItWorks from '@/components/global/how';
import WhoWeHelp from '@/components/global/who';
import WhyChoose from '@/components/global/why';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CatalystModel />
      <WhoWeHelp />
      <CatalystMethod />
      <WhyChoose />
      <ClientCriteria />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
