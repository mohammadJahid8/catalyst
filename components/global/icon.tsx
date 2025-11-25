import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

const Icon = ({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'md:w-12 md:h-12 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-110',
        className
      )}
    >
      <Icon className='md:w-6 md:h-6 w-5 h-5 transition-colors' />
    </div>
  );
};

export default Icon;
