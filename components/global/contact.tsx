'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Section from './section';
import Container from './container';
import Form from './form';
import Image from 'next/image';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@catalystexec.com.au',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '1300 CATALYST',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Serving businesses across Australia',
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
    },
  ];

  return (
    <Section ref={sectionRef} className='relative bg-white overflow-hidden'>
      {/* Background grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-size-[80px_80px] opacity-30' />

      <Container className='relative'>
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='grid lg:grid-cols-3 gap-6'
        >
          {/* Contact Information */}
          <div className='space-y-6'>
            {/* Contact Info Card */}
            <motion.div variants={itemVariants}>
              <Image
                src='/contact-us.webp'
                alt='Contact Information'
                width={700}
                height={700}
                className='w-full h-[370px] rounded-lg object-cover object-left'
              />
            </motion.div>

            {/* Confidentiality Card */}
            <motion.div variants={itemVariants}>
              <div className='group relative p-6 border-2 border-accent bg-accent/5 hover:border-accent transition-all duration-500 hover:shadow-xl overflow-hidden rounded-lg'>
                {/* Subtle corner accent */}
                <div className='absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full transition-all duration-500 group-hover:w-24 group-hover:h-24 opacity-50' />

                <div className='relative'>
                  <h3 className='font-heading font-bold text-foreground mb-2'>
                    Confidentiality Guaranteed
                  </h3>
                  <p className='text-sm text-foreground leading-relaxed'>
                    We understand the sensitive nature of business distress. All
                    consultations are strictly confidential and conducted with
                    the utmost discretion.
                  </p>

                  {/* Bottom accent line */}
                  <div className='absolute -bottom-10 left-0 w-16 h-0.5 bg-accent transition-all duration-500 group-hover:w-full' />
                </div>
              </div>
            </motion.div>
          </div>
          {/* Contact Form */}
          <motion.div variants={itemVariants} className='lg:col-span-2'>
            <div className='group relative p-6 md:p-8 border border-border bg-card hover:border-accent/30 transition-all duration-500 hover:shadow-xl overflow-hidden rounded-lg h-full'>
              {/* Subtle corner accent */}
              <div className='absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32 opacity-50' />

              <div className='relative'>
                <h2 className='text-2xl md:text-3xl font-heading font-bold text-foreground mb-2'>
                  Request a Consultation
                </h2>
                <p className='text-sm md:text-base text-foreground mb-6 md:mb-8'>
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours. All inquiries are strictly confidential.
                </p>

                <Form />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;
