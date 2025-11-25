'use client';

import { ArrowRight, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from './section';
import Container from './container';

const Resources = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const blogPosts = [
    {
      slug: '10-reasons-business-losing-money',
      title: '10 Reasons Your Business Is Losing Money (and How to Fix Them)',
      description:
        'Discover the most common profit leaks in struggling businesses and learn how to identify which ones are affecting your bottom line.',
      readTime: '8 min read',
      category: 'Financial Management',
      image: '/losing-money.webp',
    },
    {
      slug: 'decide-shut-down-or-restructure',
      title: 'How to Decide Whether to Shut Down or Restructure',
      description:
        'A practical decision-making framework for business owners facing the difficult choice between closing down or fighting to save their business.',
      readTime: '10 min read',
      category: 'Business Strategy',
      image: '/shut-down.webp',
    },
    {
      slug: 'avoid-liquidation-australia',
      title: 'How to Avoid Liquidation in Australia',
      description:
        "Explore the alternatives to liquidation available to Australian businesses and learn the steps to take before it's too late.",
      readTime: '12 min read',
      category: 'Legal & Compliance',
      image: '/avoid.webp',
    },

    {
      slug: 'fix-cash-flow-fast',
      title: '5 Ways to Fix Cash Flow Fast',
      description:
        'Immediate actions you can take today to improve cash flow and stop the financial bleeding in your struggling business.',
      readTime: '7 min read',
      category: 'Financial Management',
      image: '/cash-flow.webp',
    },
    {
      slug: 'signs-need-turnaround-consultant',
      title: 'Signs Your Business Needs a Turnaround Consultant',
      description:
        'Learn to recognize the warning signs that indicate your business problems are beyond DIY fixes and require professional intervention.',
      readTime: '8 min read',
      category: 'Business Recovery',
      image: '/turnaround.webp',
    },
    // {
    //   slug: 'cant-pay-ato',
    //   title: "What to Do If You Can't Pay the ATO",
    //   description:
    //     'Practical strategies and negotiation tactics for dealing with ATO debt, including payment plans, hardship provisions, and professional support.',
    //   readTime: '9 min read',
    //   category: 'Tax & Debt',
    //   image: '/debt.webp',
    // },
    // {
    //   slug: 'close-business-owing-money',
    //   title: 'Can You Close a Business If You Owe Money?',
    //   description:
    //     'Understanding your legal obligations, options, and potential consequences when closing a business with outstanding debts in Australia.',
    //   readTime: '11 min read',
    //   category: 'Legal & Compliance',
    //   image: '/close-business.webp',
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
    <Section ref={sectionRef} className='relative bg-white overflow-hidden'>
      {/* Background grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-size-[80px_80px] opacity-30' />

      <Container className='relative'>
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={cardVariants}>
              <Link href={`/resources/${post.slug}`}>
                <div className='group relative h-full border border-border bg-card hover:border-accent/30 transition-all duration-500 hover:shadow-xl overflow-hidden rounded-lg flex flex-col'>
                  {/* Subtle corner accent */}
                  <div className='absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-accent/5 rounded-bl-full transition-all duration-500 group-hover:w-28 group-hover:h-28 opacity-50 z-10' />

                  {/* Image */}
                  <div className='relative h-48 overflow-hidden'>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                    {/* Category badge */}
                    <div className='text-xs font-medium text-accent-foreground absolute top-3 left-3 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full'>
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className='relative p-6 grow flex flex-col'>
                    <h3 className='text-xl font-heading font-bold text-foreground mb-3 leading-tight group-hover:text-accent transition-colors'>
                      {post.title}
                    </h3>

                    <p className='text-sm text-foreground leading-relaxed mb-4 grow'>
                      {post.description}
                    </p>

                    {/* Footer */}
                    <div className='flex items-center justify-between pt-4 border-t border-border'>
                      <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                        <Clock className='w-3 h-3' />
                        <span>{post.readTime}</span>
                      </div>

                      <div className='flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all'>
                        <span>Read Article</span>
                        <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className='absolute -bottom-10 left-0 w-16 h-0.5 bg-accent/40 transition-all duration-500 group-hover:w-full' />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Resources;
