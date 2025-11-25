'use client';

import { motion } from 'framer-motion';
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
import Title from './title';
import Section from './section';
import Container from './container';
import Icon from './icon';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <Section className='relative bg-background overflow-hidden'>
      {/* Background grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-size-[80px_80px] opacity-30' />

      <Container className='relative'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-8 md:mb-12 md:text-center'
        >
          <Title className='text-foreground'>
            Business Recovery &{' '}
            <span className='relative inline-block'>
              <span className='relative z-10'>Turnaround Services</span>
              <span className='absolute bottom-0 md:bottom-2 left-0 w-full h-3 bg-accent/20 -rotate-1' />
            </span>
          </Title>
          <p className='text-base md:text-lg text-foreground max-w-4xl mx-auto pt-4 leading-relaxed mb-4'>
            Catalyst Executive Group specialises in business recovery services
            and business turnaround services for small to medium Australian
            businesses. We help stabilise, recover, and revive struggling
            businesses through hands-on partnership and strategic execution.
          </p>
          <p className='text-base md:text-lg text-foreground max-w-4xl mx-auto leading-relaxed'>
            Our approach combines immediate crisis stabilisation with long-term
            business restructuring. Whether you need to save my business or
            improve business performance, we provide the expertise and
            leadership to get your business back on track.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='group relative h-full'
            >
              <div className='group relative h-full p-6 md:p-8 border border-border bg-card hover:border-accent/30 transition-all duration-500 hover:shadow-xl overflow-hidden rounded-lg'>
                {/* Subtle corner accent */}
                <div className='absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-accent/5 rounded-bl-full transition-all duration-500 group-hover:w-28 opacity-50 group-hover:h-28' />

                {/* Number badge */}
                <div className='absolute top-3 right-3 text-4xl md:text-5xl font-bold text-accent/10 transition-all duration-500 group-hover:text-accent/20 group-hover:scale-110 font-heading'>
                  0{index + 1}
                </div>

                <div className='relative'>
                  {/* Icon */}
                  <Icon icon={service.icon} />

                  {/* Content */}
                  <h3 className='text-xl font-bold text-foreground mb-2 leading-tight'>
                    {service.title}
                  </h3>
                  <p className='text-base text-foreground leading-relaxed'>
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Approach Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='max-w-4xl mx-auto'
        >
          <div className='relative bg-card border border-border p-8 md:p-12 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'>
            {/* Subtle corner accent */}
            <div className='absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-accent/5 rounded-bl-full opacity-50' />

            <div className='relative'>
              <h3 className='text-xl md:text-2xl font-heading font-bold text-foreground mb-4 text-center'>
                Our Tailored, Hands-On Approach
              </h3>
              <p className='text-base text-foreground leading-relaxed text-center'>
                Every small business turnaround Australia is unique. We
                don&apos;t offer cookie-cutter solutions. Instead, our business
                restructuring consultant team works alongside you as equity
                partners — sharing risk and reward. This alignment ensures
                we&apos;re fully committed to your success. We roll up our
                sleeves, embed in your operations, and execute the plan with
                you, not just advise from the sidelines.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default RecoveryServices;
