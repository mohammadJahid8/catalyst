import CatalystModel from '@/components/global/catalyst-model';
import FinalCTA from '@/components/global/final-cta';
import HeroSection from '@/components/global/hero';
import HowItWorks from '@/components/global/how';
import WhoWeHelp from '@/components/global/who';

export default function Home() {
  return (
    <main>
      <HeroSection
        title='Reviving Distressed Businesses Through Strategic Partnership'
        description='A results-based turnaround firm helping once-strong businesses regain stability, profitability, and momentum.'
        isHome={true}
      />
      <CatalystModel />
      <WhoWeHelp />
      <HowItWorks />
      <FinalCTA />
    </main>
  );
}
