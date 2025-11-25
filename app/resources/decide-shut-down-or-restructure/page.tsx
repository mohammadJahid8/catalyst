import { FileText } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';
import Back from '@/components/global/back';

export const metadata: Metadata = {
  title: 'How to Decide Whether to Shut Down or Restructure',
  description:
    'A practical decision-making framework for business owners facing the difficult choice between closing down or fighting to save their business.',
  openGraph: {
    title: 'How to Decide Whether to Shut Down or Restructure',
    description:
      'A practical decision-making framework for business owners facing the difficult choice between closing down or fighting to save their business.',
    url: 'https://catalystexecutivegroup.com/resources/decide-shut-down-or-restructure',
    images: [
      {
        url: '/shut-down.webp',
        width: 1200,
        height: 630,
        alt: 'How to Decide Whether to Shut Down or Restructure',
      },
    ],
    type: 'article',
    publishedTime: '2025-11-15',
    authors: ['Catalyst Executive Group'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Decide Whether to Shut Down or Restructure',
    description:
      'A practical decision-making framework for business owners facing the difficult choice between closing down or fighting to save their business.',
    images: ['/shut-down.webp'],
  },
};

export default function ShutDown() {
  const post = {
    title: 'How to Decide Whether to Shut Down or Restructure',
    by: 'By Catalyst Executive Group — Business Turnaround & Recovery Specialists',
    readTime: '10 min read',
    publishedAt: '2025-11-15',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description:
      'A practical decision-making framework for business owners facing the difficult choice between closing down or fighting to save their business.',
    image: 'https://catalystexecutivegroup.com/shut-down.webp',
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Catalyst Executive Group',
      url: 'https://catalystexecutivegroup.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Catalyst Executive Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://catalystexecutivegroup.com/logo-dark.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://catalystexecutivegroup.com/resources/10-reasons-business-losing-money',
    },
  };

  return (
    <div className='bg-background mt-16'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className='mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-7xl'>
        <div className='relative w-full aspect-21/9 rounded-md overflow-hidden mb-6 md:mb-12 bg-muted'>
          <Image
            src='/shut-down.webp'
            alt={post.title}
            width={1400}
            height={600}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='space-y-6 mb-6 md:mb-12'>
          <div className='flex items-center gap-6'>
            <Back />
            <div className='flex items-center gap-2 text-sm text-muted-foreground font-medium'>
              <FileText className='w-4 h-4' />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            {post.title}
          </h1>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90 italic'>
            {post.by}
          </p>
        </div>

        <div className='prose prose-lg max-w-none'>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Introduction
          </h3>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Every business reaches a point where the existing model, structure,
            or financial position can no longer be sustained. When pressures
            build, declining revenue, rising debt, cash flow shortages, or
            regulatory exposure, owners often find themselves weighing a
            difficult question:
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            <strong>
              “Should I shut down the business, or is it possible to restructure
              and recover?”
            </strong>
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            The right answer depends on facts, not feelings. A structured
            assessment is essential to determine whether the business has
            salvageable value or whether an orderly closure is the smarter,
            safer option.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            This guide provides a{' '}
            <strong>professional decision-making framework</strong> used across
            turnaround consulting, insolvency, and private equity to help
            business owners make an informed, strategic choice.
          </p>

          <h1 className='text-2xl md:text-4xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Section 1: Understanding the Two Possible Paths
          </h1>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Before deciding, owners must distinguish the two fundamentally
            different outcomes:
          </p>
          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Path A: Restructure the Business (Turnaround)
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            This means the business will continue operating but undergo
            significant changes.
          </p>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            What restructuring aims to achieve:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Stop losses and stabilise cash flow
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Reduce costs quickly
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Improve operational efficiency
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Renegotiate debt or ATO obligations
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Rebuild profitability
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Increase enterprise value
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Restructuring is appropriate when the core business model has value,
            but financial or operational issues have created temporary distress.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Path B: Shut Down the Business (Orderly Closure)
          </h2>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            An orderly closure means winding up operations responsibly, legally,
            and with as little collateral damage as possible.
          </p>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Closure is appropriate when:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              The business has no realistic path to profitability
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Debt levels exceed the business’s recoverable value
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              The market for the business’s products/services has structurally
              collapsed
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              The owner no longer wishes to continue
            </li>
          </ul>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Closure protects the owner from deeper debt, legal exposure, and
            personal stress.
          </p>

          <h1 className='text-2xl md:text-4xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Section 2: The Five-Factor Decision Framework
          </h1>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            To determine whether a business should shut down or restructure,
            owners should evaluate five critical areas. If{' '}
            <strong>three or more</strong> are unfavourable, closure becomes
            more likely.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            2. Financial Position (Debt, Cash, Burn Rate)
          </h2>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Questions to Assess:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Is there still demand for your product or service?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Is the business’s decline caused by temporary factors or permanent
              market shifts?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Can pricing be adjusted without losing customers?
            </li>
          </ul>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Indicators Restructuring Is Viable:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Customer demand still exists
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Competitors are still profitable
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Profitability was historically strong
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Product-market fit is still relevant
            </li>
          </ul>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Indicators Closure May Be Necessary:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Market size is in long-term decline
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Competitors are also failing
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Customer behaviour has permanently changed (e.g., technology
              displacement)
            </li>
          </ul>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            3. Operational Efficiency (People, Systems, Processes)
          </h2>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Questions to Assess:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Are internal inefficiencies causing financial decline?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Can processes be streamlined quickly?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Is performance management an issue?
            </li>
          </ul>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Indicators Restructuring Is Viable:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Issues are fixable (workflow, staffing, leadership)
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Systems can be modernised
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Roles can be restructured or outsourced
            </li>
          </ul>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Indicators Closure May Be Necessary:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Operations cannot be streamlined to profitability
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Business requires more capital than it’s worth investing
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Leadership capacity is exhausted
            </li>
          </ul>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            4. Owner Capacity and Appetite
          </h2>
          <p className='text-base leading-relaxed text-foreground/90 mb-4 md:mb-8'>
            This is often the deciding factor.
          </p>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Questions to Assess:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Do you still have the motivation to fight for the business?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Are you emotionally and mentally prepared to implement change?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Do you want the business long-term?
            </li>
          </ul>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Indicators Restructuring Is Viable:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Owner still sees a future
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Willingness to change is strong
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Owner can execute 90-day turnaround actions
            </li>
          </ul>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Indicators Closure May Be Necessary:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Owner is burnt out
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Ongoing stress is unmanageable
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Owner wants a clean exit
            </li>
          </ul>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            5. Time Sensitivity (Urgency and Risk)
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Restructuring is only viable if there is still enough time to
            execute it.
          </p>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Questions to Assess:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Do you have 60–120 days of runway?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Are creditors already taking enforcement action?
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Is insolvency risk imminent?
            </li>
          </ul>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Indicators Restructuring Is Viable:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Some time remains before insolvency
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Quick wins (e.g., cost cuts) can be implemented
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Cash flow can be stabilised immediately
            </li>
          </ul>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Indicators Closure May Be Necessary:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Creditors are moving aggressively
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Directors risk trading insolvent
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              There is no feasible time to implement change
            </li>
          </ul>

          <h1 className='text-2xl md:text-4xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Section 3: Signs That Restructuring Is the Right Path
          </h1>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Restructuring is usually appropriate when:
          </p>

          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Revenue was historically strong
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Decline was caused by a specific, identifiable issue
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Margins are still positive
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Fixed costs can be reduced
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Debt can be renegotiated
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              The business is worth more alive than dead
            </li>
          </ul>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            If the business has been profitable before, it can be profitable
            again with the right turnaround plan.
          </p>

          <h1 className='text-2xl md:text-4xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Section 4: Signs That Shutdown Is the Better Option
          </h1>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Shutdown is appropriate when:
          </p>

          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              The business model itself is no longer viable
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Market conditions have permanently changed
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Debt levels are overwhelming
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Cash flow cannot be stabilised
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Personal risk to directors is escalating
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              The business is trading insolvent
            </li>
          </ul>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            In these cases, closure protects both the owner and the creditors.
          </p>

          <h1 className='text-2xl md:text-4xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Section 5: The Restructuring Process (If You Continue)
          </h1>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            If restructuring is chosen, a structured turnaround plan should
            include:
          </p>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            1. Rapid Assessment (7 Days)
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Financial review
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Cash position
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Profitability analysis
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Identify immediate risks
            </li>
          </ul>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            2. Stabilisation Phase (30 Days)
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Cost cutting
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Cash flow fixes
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Debt negotiation
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Staff and operational adjustments
            </li>
          </ul>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            3. Strategic Rebuild (90 Days)
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Pricing optimisation
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Revamped business model
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Sales & marketing improvements
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Operational restructuring
            </li>
          </ul>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            4. Value Creation (6–12 Months)
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Growth initiatives
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Profit expansion
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Preparation for sale or exit
            </li>
          </ul>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            This is where a turnaround partner like Catalyst Executive Group
            enters using equity-based involvement to realign incentives and
            rebuild long-term value
          </p>

          <h1 className='text-2xl md:text-4xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Section 6: The Closure Process (If You Decide to Exit)
          </h1>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            An orderly closure should follow a controlled framework:
          </p>

          <ol className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-decimal marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Review liabilities and risks
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Notify employees and follow Fair Work guidelines
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Settle tax obligations where possible
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Sell or liquidate assets
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Close accounts, leases, and contracts
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Deregister the business
            </li>
          </ol>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            This prevents unnecessary legal exposure or personal liability.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Conclusion
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Deciding whether to shut down or restructure is one of the most
            consequential decisions an owner will ever make. The right path
            depends on:
          </p>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Financial reality
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Market viability
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Owner capacity
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Time
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Operational potential
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            In many cases, early intervention makes the difference between
            recovery and collapse.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Catalyst Executive Group supports distressed businesses by taking an
            equity-based partnership approach sharing risk, working inside the
            business, and building it back into a valuable, saleable asset.
          </p>
        </div>
      </article>
    </div>
  );
}
