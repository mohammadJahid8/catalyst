import { cn } from '@/lib/utils';

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative mx-auto px-4 md:px-6 lg:px-8 max-w-7xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
