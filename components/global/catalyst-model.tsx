import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Handshake, Target, TrendingUp } from 'lucide-react';

const CatalystModel = () => {
  const pillars = [
    {
      icon: Handshake,
      title: 'Partnership, Not Consultancy',
      description:
        'We invest in the business through equity, aligning our success with yours.',
    },
    {
      icon: Target,
      title: 'Hands-On Strategic Leadership',
      description:
        'We operate inside the business to diagnose, stabilise, and rebuild.',
    },
    {
      icon: TrendingUp,
      title: 'Performance-Based Outcomes',
      description:
        'Our model is built around long-term recovery, not short-term billing.',
    },
  ];

  return (
    <section
      className='py-24 bg-background'
      aria-labelledby='catalyst-model-heading'
    >
      <div className='container mx-auto px-6'>
        <header className='text-center mb-16'>
          <h2
            id='catalyst-model-heading'
            className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6'
          >
            A Turnaround Approach Built on
            <br />
            Alignment and Results
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
            Catalyst Executive Group partners with distressed businesses by
            taking equity instead of charging upfront consulting fees. We step
            into the business with hands-on leadership, restructure operations,
            revive sales, stabilise cashflow, and rebuild profitability. When
            the business succeeds, everyone succeeds.
          </p>
        </header>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className='p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg'
            >
              <pillar.icon className='w-12 h-12 text-accent mb-6' />
              <h3 className='text-2xl font-heading font-bold text-foreground mb-4'>
                {pillar.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>

        <div className='text-center'>
          <Button
            size='lg'
            className='bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6'
          >
            Request a Turnaround Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalystModel;
