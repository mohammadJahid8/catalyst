import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
      aria-label='Hero section'
    >
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(/hero-background.png)` }}
        role='img'
        aria-label='Professional business environment background'
      >
        <div className='absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/85' />
      </div>

      <div className='relative z-10 container mx-auto px-6 py-20 text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 tracking-tight animate-fade-in'>
          Reviving Distressed Businesses
          <br />
          Through Strategic Partnership
        </h1>

        <p className='text-lg md:text-xl font-heading font-bold text-primary-foreground/95 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in'>
          A results-based turnaround firm helping once-strong businesses regain
          stability, profitability, and momentum.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center animate-fade-in'>
          <Button
            size='lg'
            className='bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105'
          >
            Apply for a Confidential Assessment
          </Button>
          <Button
            size='lg'
            variant='secondary'
            className='font-semibold text-lg px-8 py-6 transition-all duration-300'
          >
            How Our Model Works
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce'>
        <ChevronDown
          className='w-8 h-8 text-primary-foreground/80'
          aria-label='Scroll down for more content'
        />
      </div>
    </section>
  );
};

export default HeroSection;
