import Contact from '@/components/global/contact';
import HeroSection from '@/components/global/hero';

const ContactPage = () => {
  return (
    <main>
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
