import CatalystModel from '@/components/global/catalyst-model';
import FinalCTA from '@/components/global/final-cta';
import HeroSection from '@/components/global/hero';
import HowItWorks from '@/components/global/how';
import WhoWeHelp from '@/components/global/who';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Turnaround & Recovery Services Australia',
  description:
    'Results-based turnaround firm helping distressed businesses regain stability, profitability, and momentum. Strategic partnership approach to business recovery in Australia.',
  openGraph: {
    title: 'Catalyst Executive Group | Business Turnaround Services',
    description:
      'Reviving distressed businesses through strategic partnership. A more ethical and effective alternative to administration.',
    url: 'https://catalystexecutivegroup.com.au',
    type: 'website',
  },
};

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
