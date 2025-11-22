import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const faqs = [
    {
      question: 'How does the equity model work?',
      answer:
        'We take an agreed equity stake in your business in exchange for our turnaround services. This aligns our interests completely—we only succeed when your business recovers. The exact equity percentage depends on the business size, complexity, and required involvement.',
    },
    {
      question: 'Will my information remain confidential?',
      answer:
        'Absolutely. We operate under strict confidentiality agreements. All discussions, financial data, and operational details remain completely private. We understand the sensitive nature of business distress and maintain complete discretion.',
    },
    {
      question: 'How long does a typical turnaround take?',
      answer:
        'Most turnarounds show initial stabilisation within 60-90 days. Full recovery typically takes 12-24 months depending on the severity of issues and market conditions. We establish clear milestones and provide regular progress reporting throughout the engagement.',
    },
    {
      question: 'What decision rights do you take?',
      answer:
        'Decision rights are negotiated case-by-case. Typically, we take operational control in critical areas like financial management, restructuring, and sales strategy, while founders retain ownership of strategic direction. Our goal is collaboration, not takeover.',
    },
    {
      question: 'What can founders expect during the process?',
      answer:
        "Expect transparency, direct communication, and hands-on partnership. We'll work closely with you to rebuild the business, implement new systems, and restore financial health. This is an intensive process requiring commitment from both parties.",
    },
    {
      question: 'How do you manage risk?',
      answer:
        'We conduct thorough due diligence before engagement, establish clear exit criteria if recovery proves unfeasible, and maintain strong financial controls throughout. We only partner with businesses we believe have genuine recovery potential.',
    },
    {
      question: 'What metrics define success?',
      answer:
        'Success is measured through restored positive cashflow, return to profitability, improved operational efficiency, strengthened sales performance, and sustainable business systems. We establish specific KPIs at the outset of each engagement.',
    },
  ];

  return (
    <section className='py-24 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6'>
            Frequently Asked Questions
          </h2>
        </div>

        <div className='max-w-4xl mx-auto mb-12'>
          <Accordion type='single' collapsible className='space-y-4'>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-2 border-border rounded-md px-6'
              >
                <AccordionTrigger className='text-lg font-heading font-semibold text-foreground hover:text-accent hover:no-underline'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground leading-relaxed'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className='text-center'>
          <Button
            size='lg'
            className='bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6'
          >
            Apply for a Confidential Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
