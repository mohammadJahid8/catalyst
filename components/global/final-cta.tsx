'use client';

import { motion } from 'framer-motion';
import Title from './title';
import Section from './section';
import Container from './container';
import CTAButton from './cta-button';

interface FinalCTAProps {
  title?: string;
  highlightedText?: string;
  description?: string;
  buttonText?: string;
}

const FinalCTA = ({
  title = 'Your Business Is',
  highlightedText = 'Worth Saving',
  description = 'If your business is declining but still has potential, Catalyst Executive Group can help bring it back to life through strategic, hands-on partnership.',
  buttonText = 'Book a Confidential Consultation',
}: FinalCTAProps) => {
  return (
    <Section className='bg-accent relative' aria-labelledby='final-cta-heading'>
      {/* Subtle grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_80%)]' />

      {/* Accent glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 md:w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl' />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='md:text-center'
        >
          <Title className='text-white'>
            {title}{' '}
            <span className='relative inline-block'>
              <span className='relative z-10'>{highlightedText}</span>
              <span className='absolute bottom-0 md:bottom-2 left-0 w-full h-3 bg-secondary -rotate-1' />
            </span>
          </Title>

          <p className='text-base md:text-lg text-white max-w-3xl mx-auto leading-normal pt-4 mb-8'>
            {description}
          </p>

          <CTAButton
            text={buttonText}
            reverseColor
            className='h-12 text-base'
          />
        </motion.div>
      </Container>
    </Section>
  );
};

export default FinalCTA;
