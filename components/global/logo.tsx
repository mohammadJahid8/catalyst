import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Logo = ({
  className,
  isDark,
}: {
  className?: string;
  isDark?: boolean;
}) => {
  return (
    <Link href='/' className='relative group'>
      <Image
        src={isDark ? '/logo-dark.png' : '/catalyst-logo-white.png'}
        className={cn('md:w-36 lg:w-48 h-max ', className)}
        alt='Logo'
        width={140}
        height={140}
      />
    </Link>
  );
};

export default Logo;
