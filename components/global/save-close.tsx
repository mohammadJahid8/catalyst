import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Lightbulb, Compass } from 'lucide-react';

const SaveOrClose = () => {
  const framework = [
    {
      icon: Search,
      title: 'Assess Reality',
      description:
        'Evaluate your financial performance, business viability, personal capacity, debt pressure, and market demand. Understand where you truly stand.',
    },
    {
      icon: Lightbulb,
      title: 'Explore Options',
      description:
        'Consider restructuring, cost reduction, pivoting your model, refinancing debt, or implementing targeted turnaround actions. There are more paths than you think.',
    },
    {
      icon: Compass,
      title: 'Choose the Path',
      description:
        'Decide whether to save the business, close strategically, pursue a sale, or wind down operations. Choose the option that serves your long-term interests.',
    },
  ];

  return (
    <section className='py-20 bg-muted/30'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-heading font-bold text-foreground mb-4'>
            Save or Close?
          </h2>
          <p className='text-lg text-muted-foreground mb-6 max-w-3xl mx-auto'>
            A decision framework for struggling businesses
          </p>
          <p className='text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
            Many business owners get stuck in analysis paralysis — should I
            close my business or keep fighting? This framework brings clarity to
            one of the hardest decisions you'll face. Understanding your
            alternatives to liquidation and business closure options helps you
            make the right choice with confidence.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 mb-16'>
          {framework.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-shadow'
              >
                <CardHeader>
                  <div className='flex justify-center mb-4'>
                    <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center'>
                      <IconComponent className='w-8 h-8 text-primary' />
                    </div>
                  </div>
                  <CardTitle className='text-xl font-heading'>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className='bg-primary/5 border-primary/20'>
          <CardContent className='p-8 text-center'>
            <h3 className='text-2xl font-heading font-semibold text-foreground mb-3'>
              Need clarity on your options?
            </h3>
            <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
              Whether you're considering business restructure, business survival
              strategies, or exploring alternatives with a business turnaround
              consultant — we'll help you see your situation clearly and choose
              the right path forward.
            </p>
            <Button size='lg' className='font-semibold'>
              Book a Strategy Session
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SaveOrClose;
