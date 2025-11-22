import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, TrendingDown, Users, Gauge, Heart } from 'lucide-react';

const IsBusinessFailing = () => {
  const warningCategories = [
    {
      title: 'Financial Red Flags',
      icon: TrendingDown,
      signs: [
        'Consistent cash flow issues and declining revenue',
        'Losing money month after month despite efforts',
        'Mounting debt and creditor pressure',
        'Unable to pay suppliers or staff on time',
      ],
    },
    {
      title: 'Operational Stress',
      icon: Gauge,
      signs: [
        'Key staff leaving or performance declining',
        'Broken systems and inefficient processes',
        'Customer complaints increasing',
        'Quality standards slipping',
      ],
    },
    {
      title: 'Market Performance',
      icon: AlertCircle,
      signs: [
        'Market share eroding to competitors',
        'Sales pipeline drying up',
        'Pricing pressure and margin compression',
        'Struggling to adapt to market changes',
      ],
    },
    {
      title: 'Personal Burnout',
      icon: Heart,
      signs: [
        'Working longer hours with worse results',
        'Constant stress affecting health and relationships',
        'Avoiding decisions or delaying action',
        'Feeling trapped with no clear path forward',
      ],
    },
  ];

  return (
    <section className='py-20 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-heading font-bold text-foreground mb-4'>
            Is My Business Failing?
          </h2>
          <p className='text-lg text-muted-foreground mb-6 max-w-3xl mx-auto'>
            Recognising the warning signs of business decline
          </p>
          <p className='text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
            Many business owners recognise something is wrong but struggle to
            admit the severity. Understanding the warning signs of a struggling
            business is the first step toward recovery. Early action
            dramatically improves your chances of turning things around before
            it's too late.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {warningCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className='border-border hover:shadow-lg transition-shadow'
              >
                <CardHeader>
                  <div className='flex items-center gap-3 mb-2'>
                    <IconComponent className='w-6 h-6 text-primary' />
                    <CardTitle className='text-xl font-heading'>
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-3'>
                    {category.signs.map((sign, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-2 text-sm text-muted-foreground'
                      >
                        <span className='text-destructive mt-1'>•</span>
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className='bg-accent/5 border-accent/20'>
          <CardContent className='p-8 text-center'>
            <h3 className='text-2xl font-heading font-semibold text-foreground mb-3'>
              Not sure how bad things are?
            </h3>
            <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
              If you're experiencing multiple warning signs, your business is in
              trouble. The good news? There are alternatives to liquidation.
              Book a confidential diagnostic call to understand what to do if my
              business is failing and explore your options.
            </p>
            <Button size='lg' className='font-semibold'>
              Book a Confidential Diagnostic Call
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IsBusinessFailing;
