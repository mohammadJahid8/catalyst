import Contact from '@/components/global/contact';
import HeroSection from '@/components/global/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Catalyst Executive Group for a confidential consultation. Discuss your business challenges and explore turnaround solutions.',
  keywords: [
    'contact business turnaround',
    'business recovery consultation',
    'turnaround consultant contact',
    'business help Australia',
  ],
  openGraph: {
    title: 'Contact Us | Catalyst Executive Group',
    description:
      'Every business turnaround begins with a conversation. Reach out for a confidential consultation.',
    url: 'https://catalystexecutivegroup.com.au/contact',
  },
};

const ContactPage = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Catalyst Executive Group',
    description:
      'Business turnaround and recovery services for distressed businesses in Australia.',
    url: 'https://catalystexecutivegroup.com.au',
    telephone: '1300 CATALYST',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressRegion: 'Australia',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
  };

  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <HeroSection
        title='Get in Touch'
        description='Every business turnaround begins with a conversation. Reach out for a confidential consultation to discuss your situation and explore how we can help.'
        isHome={false}
      />
      <Contact />
    </main>
  );
};

export default ContactPage;
