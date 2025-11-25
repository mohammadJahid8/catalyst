'use client';

import { motion } from 'framer-motion';
import {
  DollarSign,
  Handshake,
  Users,
  Shield,
  Target,
  TrendingUp,
  Award,
  Briefcase,
  CheckCircle,
  Quote,
} from 'lucide-react';
import Title from './title';
import Section from './section';
import Container from './container';
import CTAButton from './cta-button';
import IndustryCard from './industry-card';

const WhyChoose = () => {
  const benefits = [
    {
      icon: DollarSign,
      name: 'No Upfront Fees',
    },
    {
      icon: Users,
      name: 'Real Leadership',
    },
    {
      icon: Shield,
      name: 'Confidential & Discreet',
    },
    {
      icon: Target,
      name: 'Recovery Focused',
    },
    {
      icon: Handshake,
      name: 'Aligned Incentives',
    },
    {
      icon: Briefcase,
      name: 'Multi-Industry Expertise',
    },
    {
      icon: TrendingUp,
      name: 'Measurable Milestones',
    },
    {
      icon: Award,
      name: 'Tailored Support',
    },
    {
      icon: CheckCircle,
      name: 'Proven Track Record',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <Section
      className='bg-foreground relative'
      aria-labelledby='why-choose-heading'
    >
      {/* Subtle grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_80%)]' />

      {/* Accent glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 md:w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl' />

      <Container className='relative'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-12 md:text-center'
        >
          <Title className='text-white'>
            A More Ethical and{' '}
            <span className='relative inline-block'>
              <span className='relative z-10'>Effective</span>
              <span className='absolute bottom-0 md:bottom-2 left-0 w-full h-3 bg-accent -rotate-1' />
            </span>
            <br />
            Alternative to Administration
          </Title>
        </motion.div>

        {/* Benefits Grid */}
        <motion.article
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='mb-12'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {benefits.map((benefit, index) => (
              <IndustryCard
                key={index}
                name={benefit.name}
                icon={benefit.icon}
                variants={itemVariants}
                index={index}
              />
            ))}
          </div>
        </motion.article>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mb-12'
        >
          <div className='relative bg-white/5 border border-white/10 p-8 md:p-12 lg:p-16 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden backdrop-blur-sm'>
            {/* Decorative quote mark */}
            <div className='absolute top-2 left-2 text-6xl md:text-7xl text-accent/20 font-heading leading-none'>
              <Quote className='size-12 md:size-24 fill-accent/20 stroke-accent/20 stroke-0' />
            </div>

            {/* Subtle corner accent */}
            <div className='absolute top-0 opacity-50 right-0 w-20 h-20 md:w-24 md:h-24 bg-accent/10 rounded-bl-full' />

            <blockquote className='relative text-xl md:text-2xl lg:text-3xl font-heading italic text-white text-center leading-relaxed max-w-4xl mx-auto font-medium'>
              When a business is in crisis, you don&apos;t need a report — you
              need a partner.
            </blockquote>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center'
        >
          <CTAButton
            text='Apply for a Confidential Assessment'
            className='h-12 text-base'
          />
        </motion.div>
      </Container>
    </Section>
  );
};

export default WhyChoose;
