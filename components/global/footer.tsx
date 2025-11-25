'use client';
import Link from 'next/link';
import { ArrowRight, Check, Loader2, MapPin } from 'lucide-react';
import Container from './container';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Logo from './logo';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset states
    setError('');
    setIsSuccess(false);

    // Validate email
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        'https://api.nexartechnologies.com/api/v1/subscribe/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            businessUnit: 'Catalyst',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to subscribe. Please try again.');
      }

      // Success
      setIsSuccess(true);
      setEmail('');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resourceLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Assessment', href: '#assessment' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: '101 Murray Street',
      subtext: 'South Melbourne, VIC 3205',
    },
    {
      icon: MapPin,
      text: '388 George St',
      subtext: 'Sydney, NSW 2000',
    },
  ];

  return (
    <footer className='bg-foreground border-t border-border/15'>
      <Container className='py-12 md:py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          {/* Left Column - Brand & Newsletter */}
          <div className='lg:col-span-5'>
            <Logo className='lg:w-60 w-48' />
            <p className='text-secondary-foreground text-base leading-relaxed mt-8 mb-4 max-w-md'>
              Your strategic partner in buying businesses across Australia. We
              provide expert guidance from initial search through to settlement.
            </p>

            {/* Newsletter */}
            <div className='space-y-4'>
              <h4 className='font-semibold font-heading'>
                Subscribe to our newsletter
              </h4>
              <form onSubmit={handleSubscribe} className='space-y-2'>
                <div className='flex gap-2 max-w-sm'>
                  <Input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading || isSuccess}
                    className='bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary focus:ring-secondary/20 h-10'
                  />
                  <Button
                    type='submit'
                    size='icon'
                    disabled={isLoading || isSuccess}
                    className='bg-accent text-accent-foreground h-10 cursor-pointer hover:bg-secondary/90 shrink-0'
                  >
                    {isLoading ? (
                      <Loader2 className='h-4 w-4 animate-spin' />
                    ) : isSuccess ? (
                      <Check className='h-4 w-4' />
                    ) : (
                      <ArrowRight className='h-4 w-4' />
                    )}
                  </Button>
                </div>
                {error && (
                  <p className='text-red-400 text-sm font-body'>{error}</p>
                )}
                {isSuccess && (
                  <p className='text-green-400 text-sm font-body'>
                    Successfully subscribed! Thank you.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Right Column - Resources & Contact */}
          <div className='lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Resources */}
            <div>
              <h4 className='text-lg font-bold text-secondary-foreground mb-4'>
                Resources
              </h4>
              <ul className='space-y-3'>
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className='text-base text-secondary-foreground/80 hover:text-accent transition-colors duration-200'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className='text-lg font-bold text-secondary-foreground mb-4'>
                Contact Us
              </h4>
              <ul className='space-y-4'>
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <li key={index} className='flex items-start gap-3'>
                      <Icon className='w-4 h-4 text-accent shrink-0 mt-0.5' />
                      <div>
                        <p className='text-base text-secondary-foreground/80'>
                          {contact.text}
                        </p>
                        {contact.subtext && (
                          <p className='text-base text-secondary-foreground/80'>
                            {contact.subtext}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className='py-8 border-t border-border/15'>
        <p className='text-sm text-secondary-foreground/70 text-center'>
          © {new Date().getFullYear()} Catalyst Executive Group. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
