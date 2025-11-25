import type { Metadata } from 'next';
import { Cinzel, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';
import Lenis from '@/components/global/lenis';

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

const siteUrl = 'https://catalystexecutivegroup.com.au';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Catalyst Executive Group | Business Turnaround & Recovery Services Australia',
    template: '%s | Catalyst Executive Group',
  },
  description:
    'Results-based business turnaround and recovery services for distressed businesses in Australia. Strategic partnership approach to restore profitability and business stability.',
  keywords: [
    'business turnaround',
    'business recovery',
    'distressed business help',
    'business restructuring',
    'insolvency alternative',
    'business rescue',
    'turnaround consultant',
    'business recovery services',
    'cash flow problems',
    'business debt solutions',
  ],
  authors: [{ name: 'Catalyst Executive Group' }],
  creator: 'Catalyst Executive Group',
  publisher: 'Catalyst Executive Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteUrl,
    siteName: 'Catalyst Executive Group',
    title: 'Catalyst Executive Group | Business Turnaround & Recovery Services',
    description:
      'A results-based turnaround firm helping distressed businesses regain stability, profitability, and momentum through strategic partnership.',
    images: [
      {
        url: '/logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'Catalyst Executive Group Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catalyst Executive Group | Business Turnaround Services',
    description:
      'Results-based business turnaround and recovery services for distressed businesses in Australia.',
    images: ['/logo-dark.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Catalyst Executive Group',
    url: siteUrl,
    logo: `${siteUrl}/logo-dark.png`,
    description:
      'Results-based business turnaround and recovery services for distressed businesses in Australia.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressRegion: 'Australia',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
    sameAs: [
      // Add social media profiles when available
      // 'https://www.linkedin.com/company/catalyst-executive-group',
      // 'https://www.facebook.com/catalystexecutivegroup',
    ],
  };

  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        <Lenis>{children}</Lenis>
        <Footer />
      </body>
    </html>
  );
}
