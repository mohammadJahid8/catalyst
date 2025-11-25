import CatalystMethod from '@/components/global/catalyst-method';
import FinalCTA from '@/components/global/final-cta';
import HeroSection from '@/components/global/hero';
import RecoveryServices from '@/components/global/recovery-services';
import WhyChoose from '@/components/global/why';

const Services = () => {
  return (
    <main>
      <HeroSection
        title='Our Services'
        description='Comprehensive business turnaround and recovery services designed to save struggling businesses and restore them to profitability through strategic partnership and hands-on execution.'
        isHome={false}
      />
      <CatalystMethod />
      <WhyChoose />
      <RecoveryServices />
      <FinalCTA
        title='Get Your Business Back on'
        highlightedText='Track'
        description={`If you're ready to fix my business and explore business recovery
              services that actually work, let's talk. Book a confidential
              consultation to discuss your situation and discover if our
              partnership model is right for you.`}
        buttonText='Request a Turnaround Review'
      />
    </main>
  );
};

export default Services;
