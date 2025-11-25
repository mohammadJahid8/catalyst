import FinalCTA from '@/components/global/final-cta';
import HeroSection from '@/components/global/hero';
import Resources from '@/components/global/resources';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Recovery Resources',
  description:
    'Expert insights, practical strategies, and actionable advice for business owners navigating financial challenges and business turnaround situations in Australia.',
  keywords: [
    'business recovery resources',
    'business turnaround advice',
    'cash flow management',
    'business rescue tips',
    'avoiding liquidation',
    'business restructuring guide',
  ],
  openGraph: {
    title: 'Business Recovery Resources | Catalyst Executive Group',
    description:
      'Expert insights and practical strategies for business owners facing financial challenges.',
    url: 'https://catalystexecutivegroup.com.au/resources',
  },
};

const ResourcesPage = () => {
  return (
    <main>
      <HeroSection
        title='Business Recovery Resources'
        description='Expert insights, practical strategies, and actionable advice for business owners navigating financial challenges and business turnaround situations.'
        isHome={false}
      />
      <Resources />

      <FinalCTA
        buttonText='Schedule a Consultation'
        title='Need Personalized'
        highlightedText='Guidance?'
        description='While these resources provide valuable insights, every business situation is unique. Book a confidential consultation to discuss your specific challenges.'
      />
    </main>
  );
};

export default ResourcesPage;
