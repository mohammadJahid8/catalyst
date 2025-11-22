import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

const ClientCriteria = () => {
  const goodFit = [
    'Were historically profitable',
    'Have strong market demand',
    'Have solvable operational or financial issues',
    'Are privately owned',
    'Have a committed founder willing to partner',
    'Turn over $1M–$20M',
  ];

  const notFit = [
    'Businesses already in formal insolvency',
    'Legal disputes between owners',
    'Fraud or misconduct cases',
    'Founders unwilling to change',
    'Businesses with no recoverable market position',
  ];

  return (
    <section className='py-24 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6'>
            Are We the Right Fit?
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <Card className='p-8 border-2 border-accent'>
            <h3 className='text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3'>
              <CheckCircle className='w-8 h-8 text-accent' />
              We Typically Help Businesses That:
            </h3>
            <ul className='space-y-4'>
              {goodFit.map((item, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-accent flex-shrink-0 mt-1' />
                  <span className='text-foreground'>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className='p-8 border-2'>
            <h3 className='text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3'>
              <XCircle className='w-8 h-8 text-muted-foreground' />
              We Are Not a Fit For:
            </h3>
            <ul className='space-y-4'>
              {notFit.map((item, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <XCircle className='w-5 h-5 text-muted-foreground flex-shrink-0 mt-1' />
                  <span className='text-muted-foreground'>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className='text-center'>
          <Button
            size='lg'
            className='bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6'
          >
            Check Your Eligibility
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientCriteria;
