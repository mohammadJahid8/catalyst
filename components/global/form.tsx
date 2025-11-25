'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle } from 'lucide-react';

const Form = ({
  setOpen,
}: {
  setOpen?: (open: boolean) => void;
} = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessRevenue: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear message when user starts typing
    if (message) setMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setMessage({
        type: 'success',
        text: "Thank you for reaching out. We'll contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessRevenue: '',
        message: '',
      });

      // Close modal if setOpen is provided
      if (setOpen) {
        setTimeout(() => {
          setOpen(false);
          setMessage(null);
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='grid md:grid-cols-2 gap-4 md:gap-6'>
        <div className='space-y-2'>
          <Label htmlFor='name' className='text-sm font-medium text-foreground'>
            Full Name *
          </Label>
          <Input
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='John Smith'
            className='h-11 border-border focus:border-accent transition-colors'
          />
        </div>
        <div className='space-y-2'>
          <Label
            htmlFor='email'
            className='text-sm font-medium text-foreground'
          >
            Email Address *
          </Label>
          <Input
            id='email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='john@example.com'
            className='h-11 border-border focus:border-accent transition-colors'
          />
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-4 md:gap-6'>
        <div className='space-y-2'>
          <Label
            htmlFor='phone'
            className='text-sm font-medium text-foreground'
          >
            Phone Number *
          </Label>
          <Input
            id='phone'
            name='phone'
            type='tel'
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder='+61 4XX XXX XXX'
            className='h-11 border-border focus:border-accent transition-colors'
          />
        </div>
        <div className='space-y-2'>
          <Label
            htmlFor='businessRevenue'
            className='text-sm font-medium text-foreground'
          >
            Annual Revenue Range
          </Label>
          <Input
            id='businessRevenue'
            name='businessRevenue'
            value={formData.businessRevenue}
            onChange={handleChange}
            placeholder='e.g., $2M - $5M'
            className='h-11 border-border focus:border-accent transition-colors'
          />
        </div>
      </div>

      <div className='space-y-2'>
        <Label
          htmlFor='message'
          className='text-sm font-medium text-foreground'
        >
          Tell Us About Your Situation *
        </Label>
        <Textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Briefly describe your current business challenges, cash flow situation, and what you're hoping to achieve..."
          className='resize-none border-border focus:border-accent transition-colors'
        />
      </div>

      {/* Success/Error Message */}
      {message && (
        <div
          className={`flex items-start gap-3 p-4 rounded-lg border ${
            message.type === 'success'
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-red-50 border-red-200 text-red-800'
          }`}
        >
          {message.type === 'success' ? (
            <CheckCircle2 className='w-5 h-5 mt-0.5 shrink-0' />
          ) : (
            <XCircle className='w-5 h-5 mt-0.5 shrink-0' />
          )}
          <p className='text-sm font-medium'>{message.text}</p>
        </div>
      )}

      <Button
        type='submit'
        disabled={isLoading}
        className='w-full h-12 text-base bg-accent cursor-pointer'
      >
        {isLoading ? 'Sending...' : 'Submit Inquiry'}
      </Button>

      <p className='text-xs text-muted-foreground text-center'>
        By submitting this form, you agree to our privacy policy. We will never
        share your information.
      </p>
    </form>
  );
};

export default Form;
