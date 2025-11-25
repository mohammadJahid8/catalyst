'use client';

import { Search, Lightbulb, Compass } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Title from './title';
import Section from './section';
import Container from './container';
import Icon from './icon';
import CTAButton from './cta-button';

const SaveOrClose = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const framework = [
    {
      icon: Search,
      title: 'Assess Reality',
      description:
        'Evaluate your financial performance, business viability, personal capacity, debt pressure, and market demand. Understand where you truly stand.',
      number: '01',
    },
    {
      icon: Lightbulb,
      title: 'Explore Options',
      description:
        'Consider restructuring, cost reduction, pivoting your model, refinancing debt, or implementing targeted turnaround actions. There are more paths than you think.',
      number: '02',
    },
    {
      icon: Compass,
      title: 'Choose the Path',
      description:
        'Decide whether to save the business, close strategically, pursue a sale, or wind down operations. Choose the option that serves your long-term interests.',
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
      className='relative bg-white overflow-hidden'
      aria-labelledby='save-or-close-heading'
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
            Save or{' '}
            <motion.span className='relative inline-block'>
              <motion.span className='relative z-10'>Close?</motion.span>
              <motion.div className='absolute bottom-0 md:bottom-2 left-0 right-0 h-3 bg-accent/20 -rotate-1' />
            </motion.span>
          </Title>

          <motion.p
            variants={itemVariants}
            className='text-base md:text-lg text-foreground max-w-3xl mx-auto leading-normal pt-4 mb-4'
          >
            A decision framework for struggling businesses
          </motion.p>

          <motion.p
            variants={itemVariants}
            className='text-base md:text-lg text-foreground max-w-4xl mx-auto leading-relaxed'
          >
            Many business owners get stuck in analysis paralysis — should I
            close my business or keep fighting? This framework brings clarity to
            one of the hardest decisions you&apos;ll face. Understanding your
            alternatives to liquidation and business closure options helps you
            make the right choice with confidence.
          </motion.p>
        </motion.header>

        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='grid lg:grid-cols-3 gap-4 mb-16'
        >
          {framework.map((step, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div className='group relative p-6 md:p-8 border border-border bg-card hover:border-accent/30 transition-all duration-500 hover:shadow-xl overflow-hidden rounded-lg h-full'>
                {/* Subtle corner accent */}
                <div className='absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32 opacity-50' />

                <div className='relative'>
                  {/* Icon container */}
                  <Icon icon={step.icon} />
                  <h3 className='text-xl font-bold text-foreground mb-4 leading-tight'>
                    {step.title}
                  </h3>

                  <p className='text-foreground leading-relaxed'>
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className='absolute -bottom-10 left-0 w-16 h-0.5 bg-accent/40 transition-all duration-500 group-hover:w-full' />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='grid md:grid-cols-2 gap-6 md:gap-8 items-center'
        >
          {/* Left: Content */}
          <div className='flex flex-col justify-center order-2 md:order-1'>
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4'>
              Need clarity on your options?
            </h3>
            <p className='text-base md:text-lg text-foreground leading-relaxed mb-6'>
              Whether you&apos;re considering business restructure, business
              survival strategies, or exploring alternatives with a business
              turnaround consultant — we&apos;ll help you see your situation
              clearly and choose the right path forward.
            </p>

            <CTAButton text='Book a Strategy Session' className='w-max' />
          </div>

          {/* Right: Image */}
          <div className='relative rounded-lg overflow-hidden aspect-square md:aspect-auto md:h-full order-1 md:order-2'>
            <Image
              src='/need-clarity.webp'
              alt='Strategy consultation'
              width={600}
              height={600}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default SaveOrClose;
