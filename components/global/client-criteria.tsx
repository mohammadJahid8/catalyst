'use client';

import { CheckCircle, XCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Title from './title';
import Section from './section';
import Container from './container';
import CTAButton from './cta-button';

const ClientCriteria = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const goodFit = [
    'Were historically profitable',
    'Have strong market demand',
    'Have solvable operational or financial issues',
    'Are privately owned',
    'Have a committed founder willing to partner',
    'Turn over $1M–$20M',
  ];

  const notFit = [
    'Businesses already in formal insolvency',
    'Legal disputes between owners',
    'Fraud or misconduct cases',
    'Founders unwilling to change',
    'Businesses with no recoverable market position',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <Section
      ref={sectionRef}
      className='relative bg-background overflow-hidden'
    >
      {/* Background grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-size-[80px_80px] opacity-30' />

      <Container className='relative'>
        {/* Header */}
        <motion.header
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='md:text-center mb-12'
        >
          <Title className='text-foreground'>
            Are We the{' '}
            <motion.span className='relative inline-block'>
              <motion.span className='relative z-10'>Right Fit?</motion.span>
              <motion.div className='absolute bottom-0 md:bottom-2 left-0 right-0 h-3 bg-accent/20 -rotate-1' />
            </motion.span>
          </Title>
        </motion.header>

        {/* Cards Grid */}
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='grid md:grid-cols-2 gap-6 mb-12'
        >
          {/* Good Fit Card */}
          <motion.div variants={cardVariants}>
            <div className='group relative p-6 md:p-8 border-2 border-accent bg-card hover:border-accent transition-all duration-500 hover:shadow-xl overflow-hidden rounded-lg h-full'>
              {/* Subtle corner accent */}
              <div className='absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32 opacity-50' />

              <div className='relative'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center'>
                    <CheckCircle className='w-6 h-6 text-accent' />
                  </div>
                  <h3 className='text-xl md:text-2xl font-heading font-bold text-foreground leading-tight'>
                    We Typically Help Businesses That:
                  </h3>
                </div>

                <motion.ul
                  initial='hidden'
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                  className='space-y-4'
                >
                  {goodFit.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={listItemVariants}
                      className='flex items-start gap-3'
                    >
                      <CheckCircle className='w-5 h-5 text-accent shrink-0 mt-0.5' />
                      <span className='text-base text-foreground leading-relaxed'>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>

          {/* Not Fit Card */}
          <motion.div variants={cardVariants}>
            <div className='group relative p-6 md:p-8 border-2 border-border bg-card hover:border-border/80 transition-all duration-500 hover:shadow-xl overflow-hidden rounded-lg h-full'>
              {/* Subtle corner accent */}
              <div className='absolute top-0 right-0 w-24 h-24 bg-muted/10 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32 opacity-50' />

              <div className='relative'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 rounded-lg bg-muted/10 flex items-center justify-center'>
                    <XCircle className='w-6 h-6 text-muted-foreground' />
                  </div>
                  <h3 className='text-xl md:text-2xl font-heading font-bold text-foreground leading-tight'>
                    We Are Not a Fit For:
                  </h3>
                </div>

                <motion.ul
                  initial='hidden'
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                  className='space-y-4'
                >
                  {notFit.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={listItemVariants}
                      className='flex items-start gap-3'
                    >
                      <XCircle className='w-5 h-5 text-muted-foreground shrink-0 mt-0.5' />
                      <span className='text-base text-muted-foreground leading-relaxed'>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
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
          <CTAButton text='Check Your Eligibility' className='h-12 text-base' />
        </motion.div>
      </Container>
    </Section>
  );
};

export default ClientCriteria;
