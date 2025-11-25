'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Handshake, Target, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CTAButton from './cta-button';
import Title from './title';
import Section from './section';
import Container from './container';
import Icon from './icon';

const CatalystModel = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const pillars = [
    {
      icon: Handshake,
      title: 'Partnership, Not Consultancy',
      description:
        'We invest in the business through equity, aligning our success with yours.',
      number: '01',
    },
    {
      icon: Target,
      title: 'Hands-On Strategic Leadership',
      description:
        'We operate inside the business to diagnose, stabilise, and rebuild.',
      number: '02',
    },
    {
      icon: TrendingUp,
      title: 'Performance-Based Outcomes',
      description:
        'Our model is built around long-term recovery, not short-term billing.',
      number: '03',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <Section
      ref={sectionRef}
      className='relative  bg-background overflow-hidden'
      aria-labelledby='catalyst-model-heading'
    >
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px)] bg-bg-size-[80px_80px] opacity-30' />
      <div className='absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-border to-transparent opacity-50' />
      <div className='absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-border to-transparent opacity-50' />

      <Container className='relative'>
        <motion.header
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='md:text-center mb-12'
        >
          <Title className='text-foreground'>
            A Turnaround Approach
            <br />
            Built on{' '}
            <motion.span className='relative inline-block'>
              <motion.span className='relative z-10'>Alignment</motion.span>
              <motion.div className='absolute bottom-0 md:bottom-2 left-0 right-0 h-3 bg-accent/20 -rotate-1' />
            </motion.span>{' '}
            and Results
          </Title>

          <motion.p
            variants={itemVariants}
            className='text-base md:text-lg text-foreground max-w-3xl mx-auto leading-normal pt-4'
          >
            Catalyst Executive Group partners with distressed businesses by
            taking equity instead of charging upfront consulting fees. We step
            into the business with hands-on leadership, restructure operations,
            revive sales, stabilise cashflow, and rebuild profitability.
          </motion.p>
        </motion.header>

        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='grid lg:grid-cols-3 gap-4 mb-10'
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className='group relative p-6 md:p-8  border border-border bg-card hover:border-accent/30 transition-all duration-500 hover:shadow-xl overflow-hidden rounded-lg'>
                {/* Subtle corner accent */}
                <div className='absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32 opacity-50' />

                <div className='relative'>
                  {/* Icon container */}
                  <Icon icon={pillar.icon} />
                  <h3 className='text-xl font-bold text-foreground mb-4 leading-tight'>
                    {pillar.title}
                  </h3>

                  <p className='text-foreground leading-relaxed'>
                    {pillar.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className='absolute -bottom-10 left-0 w-16 h-0.5 bg-accent/40 transition-all duration-500 group-hover:w-full' />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className='text-center'
        >
          <CTAButton
            text='Request a Turnaround Review'
            className='h-12 text-base'
          />
        </motion.div>
      </Container>
    </Section>
  );
};

export default CatalystModel;
