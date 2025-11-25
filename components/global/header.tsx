'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { cn } from '@/lib/utils';
import CTAButton from './cta-button';
import Logo from './logo';
import { usePathname } from 'next/navigation';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isResourcesPage = pathname.includes('/resources');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Assessment', href: '/assessment' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        (isScrolled && !isMobileMenuOpen) || isResourcesPage
          ? 'bg-white backdrop-blur-md border-black/5 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between'>
        <Logo isDark={isScrolled || isResourcesPage} />

        {/* Middle: Navigation - Desktop */}
        <nav className='hidden md:flex items-center md:gap-4 lg:gap-8'>
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'py-2 text-base transition-colors relative group',
                  isActive
                    ? 'text-accent'
                    : (isScrolled && !isMobileMenuOpen) || isResourcesPage
                    ? 'text-black hover:text-black/50'
                    : 'text-white hover:text-white/90'
                )}
              >
                {link.name}
                <span className='absolute bottom-0 left-1/2 w-0 transform -translate-x-1/2 transition-all duration-300 group-hover:w-1/2 opacity-0 group-hover:opacity-100' />
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button - Desktop */}
        <div className='hidden md:block'>
          <CTAButton text='Get Started' />
        </div>

        {/* Mobile Menu Sheet */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              className={cn(
                'md:hidden relative z-10 text-white p-2',
                (isScrolled && !isMobileMenuOpen) || isResourcesPage
                  ? 'text-black'
                  : 'text-white'
              )}
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side='left'
            className='w-full bg-midnight border-none flex flex-col items-center justify-center gap-8 p-0'
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-2xl font-heading transition-colors',
                    isActive ? 'text-accent' : 'text-white hover:text-catalyst'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <CTAButton
              text='Get Started'
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

export default Header;
