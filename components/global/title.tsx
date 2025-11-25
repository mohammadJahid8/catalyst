import { cn } from '@/lib/utils';

const Title = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h1
      className={cn(
        'text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] md:leading-[1.1] tracking-tight text-white',
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
