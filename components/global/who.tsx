import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const WhoWeHelp = () => {
  const industries = [
    'Manufacturing & Trades',
    'Professional Services',
    'E-commerce & Wholesale',
    'Automotive',
    'Health & Wellness',
    'Import & Distribution',
    'Construction & Allied Services',
  ];

  return (
    <section
      className='py-24 bg-secondary'
      aria-labelledby='who-we-help-heading'
    >
      <div className='container mx-auto px-6'>
        <header className='text-center mb-12'>
          <h2
            id='who-we-help-heading'
            className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6'
          >
            Designed for Businesses Worth Saving
          </h2>
          <p className='text-lg md:text-xl text-secondary-foreground/80 max-w-4xl mx-auto leading-relaxed'>
            We work with privately-owned companies that were once profitable but
            are now facing financial decline, operational inefficiencies,
            stalled sales, or severe cashflow pressure.
          </p>
        </header>

        <article className='mb-12'>
          <h3 className='text-2xl font-heading font-bold text-secondary-foreground mb-6 text-center'>
            Industries We Serve
          </h3>
          <div className='flex flex-wrap gap-4 justify-center'>
            {industries.map((industry, index) => (
              <Badge
                key={index}
                variant='secondary'
                className='text-base px-6 py-3 bg-background text-foreground border-2 border-accent/20 hover:border-accent transition-all duration-300'
              >
                {industry}
              </Badge>
            ))}
          </div>
        </article>

        <div className='text-center'>
          <Button
            size='lg'
            className='bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6'
          >
            Check Eligibility
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
