import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DollarSign,
  Settings,
  Handshake,
  TrendingUp,
  Users2,
  Scissors,
  RefreshCw,
  Target,
} from 'lucide-react';

const RecoveryServices = () => {
  const services = [
    {
      icon: DollarSign,
      title: 'Cash Flow Stabilisation',
      description:
        'Immediate action to stop financial bleeding, manage creditors, and restore liquidity to your business.',
    },
    {
      icon: Settings,
      title: 'Operational Restructuring',
      description:
        'Streamline processes, eliminate inefficiencies, and rebuild operational foundations for sustainable performance.',
    },
    {
      icon: Handshake,
      title: 'Debt Negotiation & Creditor Management',
      description:
        'Expert negotiation with creditors, suppliers, and lenders to create breathing room and manageable repayment terms.',
    },
    {
      icon: TrendingUp,
      title: 'Profitability & Performance Rebuild',
      description:
        'Fix your business by identifying margin leaks, optimising pricing, and implementing performance tracking systems.',
    },
    {
      icon: Users2,
      title: 'Strategic Leadership Support',
      description:
        'Hands-on executive guidance to stabilise operations, make tough decisions, and lead your team through transition.',
    },
    {
      icon: Scissors,
      title: 'Rapid Cost Reduction Plan',
      description:
        'Strategic cost cutting that protects core operations while eliminating waste and improving business performance.',
    },
    {
      icon: RefreshCw,
      title: 'Business Model Reset',
      description:
        'Pivot or refine your business model to align with current market realities and customer demand.',
    },
    {
      icon: Target,
      title: 'Sales & Revenue Recovery',
      description:
        'Rebuild your sales engine, revive customer relationships, and restore revenue momentum with proven strategies.',
    },
  ];

  return (
    <section className='py-20 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-heading font-bold text-foreground mb-4'>
            Business Recovery & Turnaround Services
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6'>
            Catalyst Executive Group specialises in business recovery services
            and business turnaround services for small to medium Australian
            businesses. We help stabilise, recover, and revive struggling
            businesses through hands-on partnership and strategic execution.
          </p>
          <p className='text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
            Our approach combines immediate crisis stabilisation with long-term
            business restructuring. Whether you need to save my business or
            improve business performance, we provide the expertise and
            leadership to get your business back on track.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className='hover:shadow-lg transition-shadow border-border'
              >
                <CardHeader>
                  <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                    <IconComponent className='w-6 h-6 text-primary' />
                  </div>
                  <CardTitle className='text-lg font-heading'>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-sm leading-relaxed'>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className='max-w-4xl mx-auto mb-12'>
          <Card className='border-primary/20'>
            <CardContent className='p-8'>
              <h3 className='text-xl font-heading font-semibold text-foreground mb-4 text-center'>
                Our Tailored, Hands-On Approach
              </h3>
              <p className='text-muted-foreground leading-relaxed text-center'>
                Every small business turnaround Australia is unique. We don't
                offer cookie-cutter solutions. Instead, our business
                restructuring consultant team works alongside you as equity
                partners — sharing risk and reward. This alignment ensures we're
                fully committed to your success. We roll up our sleeves, embed
                in your operations, and execute the plan with you, not just
                advise from the sidelines.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className='bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30'>
          <CardContent className='p-12 text-center'>
            <h3 className='text-3xl font-heading font-bold text-foreground mb-4'>
              Get Your Business Back on Track
            </h3>
            <p className='text-muted-foreground mb-8 max-w-2xl mx-auto text-lg'>
              If you're ready to fix my business and explore business recovery
              services that actually work, let's talk. Book a confidential
              consultation to discuss your situation and discover if our
              partnership model is right for you.
            </p>
            <Button size='lg' className='font-semibold text-base px-8'>
              Request a Turnaround Review
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RecoveryServices;
