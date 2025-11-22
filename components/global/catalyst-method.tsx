import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CatalystMethod = () => {
  const steps = [
    {
      number: '01',
      title: 'Stabilise',
      description: 'Stop the financial bleeding and regain immediate control.',
    },
    {
      number: '02',
      title: 'Diagnose',
      description:
        'Identify root causes across financial, operational, and strategic areas.',
    },
    {
      number: '03',
      title: 'Simplify',
      description:
        'Restructure teams, expenses, processes, and product economics.',
    },
    {
      number: '04',
      title: 'Revive',
      description: 'Rebuild the sales engine and restore margin health.',
    },
    {
      number: '05',
      title: 'Systemise',
      description: 'Create repeatable processes, dashboards, and reporting.',
    },
    {
      number: '06',
      title: 'Scale or Exit',
      description:
        'Strengthen the business for growth or prepare for a profitable sale.',
    },
  ];

  return (
    <section className='py-24 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6'>
            The Catalyst Method™
          </h2>
          <p className='text-xl text-muted-foreground'>
            Our Proven Turnaround Framework
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {steps.map((step, index) => (
            <Card
              key={index}
              className='p-8 border-2 hover:border-accent transition-all duration-300 relative overflow-hidden group'
            >
              <div className='absolute top-4 right-4 text-6xl font-heading font-bold text-accent/10 group-hover:text-accent/20 transition-all duration-300'>
                {step.number}
              </div>
              <h3 className='text-2xl font-heading font-bold text-foreground mb-4 relative z-10'>
                {step.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed relative z-10'>
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <div className='text-center'>
          <Button
            size='lg'
            className='bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6'
          >
            Start Your Revival
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalystMethod;
