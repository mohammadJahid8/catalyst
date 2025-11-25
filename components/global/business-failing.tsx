'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  AlertCircle,
  TrendingDown,
  Gauge,
  Heart,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Title from './title';
import Section from './section';
import Container from './container';
import Icon from './icon';
import { Button } from '@/components/ui/button';
import CTAButton from './cta-button';

const IsBusinessFailing = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

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

  const selectedCategoryData = warningCategories[selectedCategory];
  const SelectedIcon = selectedCategoryData.icon;

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
            Is My Business{' '}
            <span className='relative inline-block'>
              <span className='relative z-10'>Failing?</span>
              <span className='absolute bottom-0 md:bottom-2 left-0 w-full h-3 bg-accent/20 -rotate-1' />
            </span>
          </Title>
          <p className='text-base md:text-lg text-foreground max-w-4xl mx-auto pt-4 leading-relaxed mb-4'>
            Recognising the warning signs of business decline
          </p>
          <p className='text-base md:text-lg text-foreground max-w-4xl mx-auto leading-relaxed'>
            Many business owners recognise something is wrong but struggle to
            admit the severity. Understanding the warning signs of a struggling
            business is the first step toward recovery. Early action
            dramatically improves your chances of turning things around before
            it&apos;s too late.
          </p>
        </motion.div>

        {/* Desktop: Side-by-side Layout */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid md:grid-cols-[1fr,300px] lg:grid-cols-[500px_1fr] gap-4 mb-24'
        >
          {/* Right: Category Tabs */}
          <div className='md:space-y-2 flex flex-wrap justify-center gap-2 md:gap-0 md:block'>
            {warningCategories.map((category, index) => {
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onClick={() => setSelectedCategory(index)}
                  className={cn(
                    'w-auto md:w-full md:flex items-center gap-3 px-2 md:px-4 py-1.5 md:py-3 rounded-lg border transition-all text-left text-xs md:text-xl font-medium',
                    selectedCategory === index
                      ? 'bg-primary text-primary-foreground border-primary shadow-md'
                      : 'bg-card border-border hover:border-primary/50 hover:shadow-sm'
                  )}
                >
                  <Icon icon={category.icon} className='mb-0 hidden md:flex' />
                  <span className='font-heading font-semibold'>
                    {category.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
          {/* Left: Selected Category Content */}
          <motion.div
            variants={itemVariants}
            className='relative bg-card border border-border p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'
          >
            {/* Subtle corner accent */}
            <div className='absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-accent/5 rounded-bl-full opacity-50' />

            <div className='relative'>
              <div className='flex items-center gap-3 mb-6'>
                <Icon icon={SelectedIcon} className='mb-0' />
                <h3 className='text-xl md:text-2xl font-heading font-bold text-foreground'>
                  {selectedCategoryData.title}
                </h3>
              </div>
              <ul className='space-y-4 md:pl-4'>
                {selectedCategoryData.signs.map((sign, idx) => (
                  <li
                    key={idx}
                    className='flex items-center md:items-start gap-3 text-base text-foreground leading-relaxed md:text-lg'
                  >
                    <ArrowRight
                      className='text-foreground size-4 md:size-6'
                      strokeWidth={1}
                    />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='grid md:grid-cols-2 gap-6 md:gap-8 items-center'
        >
          {/* Left: Image */}
          <div className='relative rounded-lg overflow-hidden aspect-square md:aspect-auto md:h-full'>
            <Image
              src='/not-sure.webp'
              alt='Business consultation'
              width={600}
              height={600}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>

          {/* Right: Content */}
          <div className='flex flex-col justify-center'>
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4'>
              Not sure how bad things are?
            </h3>
            <p className='text-base md:text-lg text-foreground leading-relaxed mb-6'>
              If you&apos;re experiencing multiple warning signs, your business
              is in trouble. The good news? There are alternatives to
              liquidation. Book a confidential diagnostic call to understand
              what to do if my business is failing and explore your options.
            </p>

            <CTAButton
              text='Book a Confidential Diagnostic Call'
              className='w-max'
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default IsBusinessFailing;
