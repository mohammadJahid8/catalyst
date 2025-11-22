import type { Metadata } from 'next';
import { Cinzel, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Catalyst Executive Group',
  description: 'A More Ethical and Effective Alternative to Administration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${cinzel.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
