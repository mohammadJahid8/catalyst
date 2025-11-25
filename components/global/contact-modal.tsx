'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Form from './form';
import { useState } from 'react';

const ContactModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-3xl max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-semibold font-heading'>
            Send Us a Message
          </DialogTitle>
        </DialogHeader>
        <Form setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
