'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Title from './title';
import ContactModal from './contact-modal';
function HeroSection({
  title,
  description,
  isHome,
}: {
  title: string;
  description: string;
  isHome: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Background Image with Parallax & Zoom */}
      <motion.div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(/hero-background.png)`,
          y: y,
          scale: 1.1,
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        <div className='absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-primary/60' />
        <div className='absolute inset-0 bg-linear-to-b from-transparent/40 via-transparent/40 to-background/15' />
      </motion.div>

      <div className='max-w-7xl mx-auto relative z-10 px-4 md:px-6 lg:px-8 flex flex-col items-center text-center'>
        {/* Main Title - Inspired by 'Drexler' and 'Creation Without Limitation' */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className='relative max-w-6xl mx-auto'
        >
          <Title className='lg:text-7xl'>{title}</Title>
        </motion.div>

        {/* Subtitle & CTA - Balanced spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className='mt-6 flex flex-col items-center gap-10'
        >
          <p className='text-base md:text-xl text-background/90 max-w-2xl leading-relaxed font-light tracking-wide text-balance font-body'>
            {description}
          </p>

          {isHome && (
            <div className='flex flex-col sm:flex-row items-center gap-6'>
              <ContactModal>
                <Button
                  size='lg'
                  className='group relative overflow-hidden bg-accent text-white hover:text-midnight hover:bg-white/90 rounded-md h-12 md:h-14 px-4 md:px-8 text-sm uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer'
                >
                  <span className='relative z-10'>
                    <span className='hidden md:inline-block pr-1'>
                      Apply for a
                    </span>
                    Confidential Assessment
                  </span>
                  <div className='absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0' />
                  <div className='absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-midnight pointer-events-none'>
                    <span className='hidden md:inline-block pr-1'>
                      Apply for a
                    </span>
                    Confidential Assessment
                  </div>
                </Button>
              </ContactModal>
            </div>
          )}
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator - 'Scroll to reveal' vibe */}
      <motion.div
        style={{ opacity }}
        className='absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4'
      >
        <span className='text-[10px] uppercase tracking-[0.2em] text-white/40'>
          Scroll to Explore
        </span>
        <div className='w-px h-12 bg-white/10 overflow-hidden relative'>
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
            className='absolute inset-0 w-full h-full bg-linear-to-b from-transparent via-catalyst to-transparent'
          />
        </div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className='absolute top-20 left-0 p-8 opacity-20 hidden md:block'>
        <div className='w-32 h-px bg-white'></div>
        <div className='w-px h-32 bg-white absolute top-8 left-8'></div>
      </div>
      <div className='absolute bottom-0 right-0 p-8 opacity-20 hidden md:block'>
        <div className='w-32 h-px bg-white absolute bottom-8 right-8'></div>
        <div className='w-px h-32 bg-white absolute bottom-8 right-24'></div>
      </div>
    </section>
  );
}

export default HeroSection;
