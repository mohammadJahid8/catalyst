import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import ContactModal from './contact-modal';

const CTAButton = ({
  text,
  className,
  onClick,
  reverseColor,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
  reverseColor?: boolean;
}) => {
  return (
    <ContactModal>
      <Button
        size='lg'
        className={cn(
          'group relative overflow-hidden rounded-md h-11 px-4 text-sm font-medium transition-all duration-300 cursor-pointer',
          reverseColor
            ? 'bg-white text-midnight hover:text-white hover:bg-accent'
            : 'bg-accent text-white hover:text-midnight hover:bg-white',
          className
        )}
        onClick={onClick}
      >
        <span className='relative z-10'>{text}</span>
        <div
          className={cn(
            'absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0',
            reverseColor ? 'bg-accent' : 'bg-white'
          )}
        />
        <div
          className={cn(
            'absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none',
            reverseColor ? 'text-white' : 'text-midnight'
          )}
        >
          {text}
        </div>
      </Button>
    </ContactModal>
  );
};

export default CTAButton;
