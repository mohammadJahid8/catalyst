import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className='py-24 bg-primary'>
      <div className='container mx-auto px-6'>
        <div className='text-center'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6'>
            Your Business Is Worth Saving
          </h2>
          <p className='text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed'>
            If your business is declining but still has potential, Catalyst
            Executive Group can help bring it back to life through strategic,
            hands-on partnership.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105'
            >
              Start Your Revival
            </Button>
            <Button
              size='lg'
              variant='secondary'
              className='font-semibold text-lg px-8 py-6 transition-all duration-300'
            >
              Book a Confidential Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
