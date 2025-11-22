import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const WhyChoose = () => {
  const benefits = [
    'No upfront consulting fees',
    'Equity-based partnership model',
    'Real operational leadership',
    'Confidential and discreet engagement',
    'Tailored support for private businesses',
    'Recovery-focused, not liquidation-focused',
    'Alignment of incentives and outcomes',
    'Multi-industry expertise',
    'Structured programs with measurable milestones',
  ];

  return (
    <section className='py-24 bg-primary'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6'>
            A More Ethical and Effective
            <br />
            Alternative to Administration
          </h2>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='flex items-start gap-3 bg-primary-foreground/5 p-6 rounded-md border border-primary-foreground/20'
            >
              <Check className='w-6 h-6 text-accent flex-shrink-0 mt-1' />
              <span className='text-primary-foreground text-lg'>{benefit}</span>
            </div>
          ))}
        </div>

        <Card className='p-12 bg-primary-foreground/10 border-2 border-accent/30 mb-12'>
          <blockquote className='text-2xl md:text-3xl lg:text-4xl font-accent italic text-primary-foreground text-center leading-relaxed'>
            "When a business is in crisis, you don't need a report — you need a
            partner."
          </blockquote>
        </Card>

        <div className='text-center'>
          <Button
            size='lg'
            className='bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6'
          >
            Apply for a Confidential Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
