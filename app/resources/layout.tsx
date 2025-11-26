import CTA from '@/components/global/cta';

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-white'>
      {children}
      <CTA />
    </main>
  );
}
