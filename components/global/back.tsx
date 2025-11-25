'use client';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Back = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className='cursor-pointer flex items-center text-sm text-muted-foreground gap-2 hover:underline'
    >
      <ArrowLeft className='w-4 h-4' />
      <span>Back</span>
    </div>
  );
};

export default Back;
