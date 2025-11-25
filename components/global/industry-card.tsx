'use client';

import { motion, Variants } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Icon from './icon';

interface IndustryCardProps {
  name: string;
  icon: LucideIcon;
  variants?: Variants;
  index?: number;
}

const IndustryCard = ({ name, icon, variants, index }: IndustryCardProps) => {
  return (
    <motion.div
      key={index}
      variants={variants}
      className='group relative cursor-default h-full'
    >
      {/* Main card */}
      <div className='relative h-full bg-foreground backdrop-blur border border-accent/50 overflow-hidden transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-2xl rounded-lg group-hover:shadow-accent/10'>
        {/* Diagonal top-left corner accent */}
        <div className='absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-16 -translate-y-16 rotate-45' />

        {/* Bottom-right corner accent line */}
        <div className='absolute bottom-0 right-0 w-0 h-0.5 bg-linear-to-l from-accent to-transparent group-hover:w-24 transition-all duration-500' />
        <div className='absolute bottom-0 right-0 w-0.5 h-0 bg-linear-to-t from-accent to-transparent group-hover:h-24 transition-all duration-500 delay-100' />

        {/* Content */}
        <div className='relative p-6 md:p-8'>
          {/* Icon with animated background */}
          <div className='relative md:flex justify-center'>
            <Icon icon={icon} className='text-white' />
          </div>

          <h4 className='text-xl font-semibold text-white mb-3 transition-colors leading-tight md:text-center'>
            {name}
          </h4>
        </div>

        {/* Subtle gradient overlay on hover */}
        <div className='absolute  inset-0 bg-linear-to-t from-accent/0 via-transparent to-transparent group-hover:from-accent/5 transition-all duration-500 pointer-events-none ' />
      </div>
    </motion.div>
  );
};

export default IndustryCard;
