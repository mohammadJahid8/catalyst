import IsBusinessFailing from '@/components/global/business-failing';
import ClientCriteria from '@/components/global/client-criteria';
import FAQ from '@/components/global/faq';
import FinalCTA from '@/components/global/final-cta';
import HeroSection from '@/components/global/hero';
import SaveOrClose from '@/components/global/save-close';

const Assessment = () => {
  return (
    <main>
      <HeroSection
        title='Business Assessment'
        description='Understand where your business stands and discover whether partnership with Catalyst Executive Group is the right path forward for your situation.'
        isHome={false}
      />
      <IsBusinessFailing />
      <SaveOrClose />
      <ClientCriteria />
      <FAQ />

      <FinalCTA
        title='Your Business Is Worth'
        highlightedText='Saving'
        description={`If your business is declining but still has potential, Catalyst Executive Group can help bring it back to life through strategic, hands-on partnership.`}
        buttonText='Start Your Revival'
      />
    </main>
  );
};

export default Assessment;
