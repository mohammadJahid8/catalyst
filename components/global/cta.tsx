'use client';

import { usePathname } from 'next/navigation';
import CTAButton from './cta-button';

const CTA = () => {
  const pathname = usePathname();

  const isResources = pathname === '/resources';

  if (isResources) return null;

  return (
    <section className='mx-auto px-4 sm:px-6 md:px-8 max-w-7xl py-10'>
      <div className='flex flex-col items-center justify-center w-full text-center rounded-md py-14 bg-slate-100/70'>
        <h1 className='text-2xl md:text-3xl font-semibold text-slate-900 max-w-2xl my-5 font-heading'>
          Ready to find the perfect business opportunity in Australia?
        </h1>

        <CTAButton
          text='Talk to an expert'
          className='flex items-center gap-2'
        />
      </div>
    </section>
  );
};

export default CTA;
