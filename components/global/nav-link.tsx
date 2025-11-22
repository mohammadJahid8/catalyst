'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef, ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface NavLinkCompatProps
  extends Omit<ComponentProps<typeof Link>, 'className' | 'href'> {
  href?: LinkProps['href'];
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  to?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    { className, activeClassName, pendingClassName, to, href, ...props },
    ref
  ) => {
    const pathname = usePathname();
    const target = to || href;

    // Handle string or object href
    const targetPath =
      typeof target === 'string' ? target : target?.pathname || '';

    // Exact match for active state
    const isActive = pathname === targetPath;

    return (
      <Link
        ref={ref}
        href={target || ''}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  }
);

NavLink.displayName = 'NavLink';

export { NavLink };
