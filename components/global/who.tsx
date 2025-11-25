'use client';

import { motion } from 'framer-motion';
import {
  Factory,
  Briefcase,
  ShoppingCart,
  Car,
  Heart,
  Package,
  HardHat,
} from 'lucide-react';
import Title from './title';
import Section from './section';
import Container from './container';
import CTAButton from './cta-button';
import IndustryCard from './industry-card';

const WhoWeHelp = () => {
  const industries = [
    {
      name: 'Manufacturing & Trades',
      icon: Factory,
    },
    {
      name: 'Professional Services',
      icon: Briefcase,
    },
    {
      name: 'E-commerce & Wholesale',
      icon: ShoppingCart,
    },
    {
      name: 'Automotive',
      icon: Car,
    },
    {
      name: 'Health & Wellness',
      icon: Heart,
    },
    {
      name: 'Import & Distribution',
      icon: Package,
    },
    {
      name: 'Construction & Allied Services',
      icon: HardHat,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <Section
      className='bg-foreground relative'
      aria-labelledby='who-we-help-heading'
    >
      {/* Subtle grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_80%)]' />

      {/* Accent glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 md:w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl' />

      <Container>
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='md:text-center mb-12'
        >
          <Title className='text-white'>
            Designed for Businesses{' '}
            <span className='relative inline-block'>
              <span className='relative z-10'>Worth Saving</span>
              <span className='absolute bottom-0 md:bottom-2 left-0 w-full h-3 bg-accent -rotate-1' />
            </span>
          </Title>

          <p className='text-base md:text-lg text-white max-w-3xl mx-auto leading-normal pt-4'>
            We work with privately-owned companies that were once profitable but
            are now facing financial decline, operational inefficiencies,
            stalled sales, or severe cashflow pressure.
          </p>
        </motion.header>

        <motion.article
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='mb-12'
        >
          <motion.h3
            variants={itemVariants}
            className='text-xl md:text-3xl font-semibold text-white mb-6 md:text-center'
          >
            Industries We Serve
          </motion.h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* First 4 cards */}
            {industries.slice(0, 4).map((industry, index) => (
              <IndustryCard
                key={index}
                name={industry.name}
                icon={industry.icon}
                variants={itemVariants}
                index={index}
              />
            ))}

            {/* Bottom 3 cards - centered wrapper */}
            <div className='lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:max-w-[75%] lg:mx-auto'>
              {industries.slice(4).map((industry, index) => (
                <IndustryCard
                  key={index + 4}
                  name={industry.name}
                  icon={industry.icon}
                  variants={itemVariants}
                  index={index + 4}
                />
              ))}
            </div>
          </div>
        </motion.article>

        <div className='text-center'>
          <CTAButton
            text='Check Eligibility'
            className='h-12 text-base px-10'
          />
        </div>
      </Container>
    </Section>
  );
};

export default WhoWeHelp;
