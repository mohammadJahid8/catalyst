'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Title from './title';
import Section from './section';
import Container from './container';
import CTAButton from './cta-button';

const FAQ = () => {
  const faqs = [
    {
      question: 'How does the equity model work?',
      answer:
        'We take an agreed equity stake in your business in exchange for our turnaround services. This aligns our interests completely, we only succeed when your business recovers. The exact equity percentage depends on the business size, complexity, and required involvement.',
    },
    {
      question: 'Will my information remain confidential?',
      answer:
        'Absolutely. We operate under strict confidentiality agreements. All discussions, financial data, and operational details remain completely private. We understand the sensitive nature of business distress and maintain complete discretion.',
    },
    {
      question: 'How long does a typical turnaround take?',
      answer:
        'Most turnarounds show initial stabilisation within 60-90 days. Full recovery typically takes 12-24 months depending on the severity of issues and market conditions. We establish clear milestones and provide regular progress reporting throughout the engagement.',
    },
    {
      question: 'What decision rights do you take?',
      answer:
        'Decision rights are negotiated case-by-case. Typically, we take operational control in critical areas like financial management, restructuring, and sales strategy, while founders retain ownership of strategic direction. Our goal is collaboration, not takeover.',
    },
    {
      question: 'What can founders expect during the process?',
      answer:
        "Expect transparency, direct communication, and hands-on partnership. We'll work closely with you to rebuild the business, implement new systems, and restore financial health. This is an intensive process requiring commitment from both parties.",
    },
    {
      question: 'How do you manage risk?',
      answer:
        'We conduct thorough due diligence before engagement, establish clear exit criteria if recovery proves unfeasible, and maintain strong financial controls throughout. We only partner with businesses we believe have genuine recovery potential.',
    },
    {
      question: 'What metrics define success?',
      answer:
        'Success is measured through restored positive cashflow, return to profitability, improved operational efficiency, strengthened sales performance, and sustainable business systems. We establish specific KPIs at the outset of each engagement.',
    },
  ];

  return (
    <Section className='relative bg-white overflow-hidden'>
      <Container className='relative'>
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='md:text-center mb-12'
        >
          <Title className='text-foreground'>
            Frequently Asked{' '}
            <motion.span className='relative inline-block'>
              <motion.span className='relative z-10'>Questions</motion.span>
              <motion.div className='absolute bottom-0 md:bottom-2 left-0 right-0 h-3 bg-accent/20 -rotate-1' />
            </motion.span>
          </Title>
        </motion.header>

        {/* Two-column layout: Image + Accordions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='grid md:grid-cols-2 gap-4 mb-10'
        >
          {/* Left: Image */}
          <div className='rounded-lg overflow-hidden aspect-square sticky top-24 self-start'>
            <Image
              unoptimized
              src='/faq.webp'
              alt='Frequently asked questions'
              width={600}
              height={600}
              className='w-full max-h-[500px] h-full object-cover rounded-lg'
            />
          </div>

          {/* Right: Accordions */}
          <div>
            <Accordion type='single' collapsible className='space-y-3'>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className='border border-border rounded-lg px-6 bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-md'
                  >
                    <AccordionTrigger className='text-base md:text-lg font-heading font-semibold text-foreground hover:text-accent hover:no-underline py-4'>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-sm md:text-base text-foreground leading-relaxed pb-4'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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

export default FAQ;
