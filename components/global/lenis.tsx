'use client';
import { ReactLenis } from 'lenis/react';
import { PropsWithChildren } from 'react';
import { Toaster } from '../ui/toaster';

const Lenis = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis options={{ duration: 1 }} root>
      {children}
      <Toaster />
    </ReactLenis>
  );
};

export default Lenis;
