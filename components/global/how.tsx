import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Confidential Discovery Call',
      description:
        'We assess the situation and determine if the business is salvageable.',
    },
    {
      step: 'Step 2',
      title: 'The 7-Day Diagnostic Audit',
      description:
        'A comprehensive review of financial, operational, and performance data.',
    },
    {
      step: 'Step 3',
      title: 'Equity Partnership Proposal',
      description:
        'We outline equity terms, involvement, and recovery milestones.',
    },
    {
      step: 'Step 4',
      title: 'Turnaround Execution',
      description: 'We work inside the business and drive the recovery.',
    },
    {
      step: 'Step 5',
      title: 'Stabilisation & Growth',
      description: 'Once profitability returns, long-term strategy begins.',
    },
  ];

  return (
    <section className='py-24 bg-secondary'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6'>
            How It Works
          </h2>
          <p className='text-xl text-secondary-foreground/80'>
            Simple, Confidential, Effective
          </p>
        </div>

        <div className='max-w-4xl mx-auto space-y-6 mb-12'>
          {steps.map((item, index) => (
            <Card
              key={index}
              className='p-8 border-2 hover:border-accent transition-all duration-300'
            >
              <div className='flex flex-col md:flex-row gap-6 items-start'>
                <div className='flex-shrink-0'>
                  <div className='w-16 h-16 rounded-full bg-accent flex items-center justify-center'>
                    <span className='text-2xl font-heading font-bold text-accent-foreground'>
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className='flex-1'>
                  <p className='text-sm font-semibold text-accent mb-2'>
                    {item.step}
                  </p>
                  <h3 className='text-2xl font-heading font-bold text-foreground mb-3'>
                    {item.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </div>
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

export default HowItWorks;
