'use client';

import { motion } from 'framer-motion';
import { Phone, FileSearch, Handshake, Rocket, TrendingUp } from 'lucide-react';
import Icon from './icon';
import CTAButton from './cta-button';
import Title from './title';
import Section from './section';
import Container from './container';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Confidential Discovery Call',
      description:
        'We assess the situation and determine if the business is salvageable.',
      icon: Phone,
    },
    {
      number: '02',
      title: 'The 7-Day Diagnostic Audit',
      description:
        'A comprehensive review of financial, operational, and performance data.',
      icon: FileSearch,
    },
    {
      number: '03',
      title: 'Equity Partnership Proposal',
      description:
        'We outline equity terms, involvement, and recovery milestones.',
      icon: Handshake,
    },
    {
      number: '04',
      title: 'Turnaround Execution',
      description: 'We work inside the business and drive the recovery.',
      icon: Rocket,
    },
    {
      number: '05',
      title: 'Stabilisation & Growth',
      description: 'Once profitability returns, long-term strategy begins.',
      icon: TrendingUp,
    },
  ];

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
          className='mb-12 md:text-center'
        >
          <Title className='text-foreground'>
            How It{' '}
            <span className='relative inline-block'>
              <span className='relative z-10'>Works</span>
              <span className='absolute bottom-0 md:bottom-2 left-0 w-full h-3 bg-accent/20 -rotate-1' />
            </span>
          </Title>
          <p className='text-base md:text-lg text-foreground/80 max-w-2xl mx-auto pt-4'>
            Simple, Confidential, Effective
          </p>
        </motion.div>

        {/* Timeline */}
        <div className='max-w-5xl mx-auto'>
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='relative'
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 mb-4 md:mb-16 items-center ${
                    isEven ? '' : 'md:grid-flow-dense'
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`${isEven ? 'md:text-right' : 'md:col-start-2'}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className='bg-card border border-border hover:border-accent/50 backdrop-blur-sm md:p-8 p-6 group hover:shadow-lg transition-all duration-300 rounded-lg'
                    >
                      <div
                        className={`flex items-start gap-4 ${
                          isEven ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <div className='shrink-0'>
                          <Icon icon={StepIcon} />
                        </div>
                        <div
                          className={`flex-1 ${isEven ? 'md:text-right' : ''}`}
                        >
                          <h3 className='text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight'>
                            {step.title}
                          </h3>
                          <p className='text-muted-foreground leading-relaxed'>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Number Badge */}
                  <div
                    className={`hidden md:flex justify-center ${
                      isEven ? 'md:col-start-2' : 'md:col-start-1'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className='relative'
                    >
                      <div className='w-16 h-16 bg-accent/10 flex items-center justify-center border-2 border-accent rounded-lg'>
                        <span className='text-2xl font-bold text-accent'>
                          {step.number}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mt-12'
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

export default HowItWorks;
