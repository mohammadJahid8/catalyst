import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

const Section = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactNode;
  }
>(({ className, children }, ref) => {
  return (
    <section ref={ref} className={cn('py-16 md:py-32', className)}>
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
