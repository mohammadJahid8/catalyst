import { FileText } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';
import Back from '@/components/global/back';

export const metadata: Metadata = {
  title: '10 Reasons Your Business Is Losing Money (and How to Fix Them)',
  description:
    'Discover the most common profit leaks in struggling businesses and learn how to identify which ones are affecting your bottom line.',
  openGraph: {
    title: '10 Reasons Your Business Is Losing Money (and How to Fix Them)',
    description:
      'Discover the most common profit leaks in struggling businesses and learn how to identify which ones are affecting your bottom line.',
    url: 'https://catalystexecutivegroup.com/resources/10-reasons-business-losing-money',
    images: [
      {
        url: '/losing-money.webp',
        width: 1200,
        height: 630,
        alt: '10 Reasons Your Business Is Losing Money (and How to Fix Them)',
      },
    ],
    type: 'article',
    publishedTime: '2025-11-15',
    authors: ['Catalyst Executive Group'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Reasons Your Business Is Losing Money (and How to Fix Them)',
    description:
      'Discover the most common profit leaks in struggling businesses and learn how to identify which ones are affecting your bottom line.',
    images: ['/losing-money.webp'],
  },
};

export default function BlogDetailPage() {
  const post = {
    title: '10 Reasons Your Business Is Losing Money (and How to Fix Them)',
    by: 'By Catalyst Executive Group — Business Turnaround & Recovery Specialists',
    readTime: '8 min read',
    publishedAt: '2025-11-15',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description:
      'Discover the most common profit leaks in struggling businesses and learn how to identify which ones are affecting your bottom line.',
    image: 'https://catalystexecutivegroup.com/losing-money.webp',
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
            src='/losing-money.webp'
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
            Businesses rarely decline due to a single event. Financial
            underperformance is typically the result of multiple structural,
            operational, and market-driven factors converging over time. For
            small and mid-sized enterprises (SMEs), sustained losses can create
            liquidity pressure, erode strategic optionality, and accelerate the
            pathway toward insolvency.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Understanding the root causes behind declining profitability is
            essential for restoring financial health. This article outlines the
            ten most common drivers of loss-making performance, supported by
            practical actions management teams can implement to stabilise
            operations and improve cash flow.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            1. Revenue Decline and Weak Demand Generation
          </h2>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            A sustained reduction in sales is one of the primary indicators of
            business decline. This typically arises from one or more of the
            following:
          </p>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Reduced customer demand
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Ineffective marketing or sales processes
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Increased competitive intensity
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Outdated products or services
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Failure to maintain customer relationships
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Diagnostic indicators:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Year-on-year revenue contraction
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Declining customer acquisition rates
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Fewer inbound leads and sales opportunities
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Lower market share relative to competitors
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Corrective actions:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Conduct a market repositioning analysis
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Strengthen lead generation via targeted digital channels
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Review pricing architecture and customer value propositions
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Implement a structured sales pipeline management process
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            A stabilised revenue base is foundational for any turnaround
            initiative
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            2. Gross Margin Erosion
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Falling gross margins signal cost inefficiencies or pricing
            pressures that may not be visible from top-line revenue alone.
          </p>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Common causes:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Rising input costs
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Discounts used to compensate for weak sales
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Inefficient procurement processes
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Excessive wastage or production inefficiencies
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Diagnostic indicators:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Declining gross profit percentage
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Cost-of-goods-sold rising faster than revenue
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Supplier concentration or price volatility
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Corrective actions:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Re-negotiate supplier contracts
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Consolidate procurement volumes
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Optimise pricing and remove unprofitable products
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Implement cost-control frameworks
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Gross margin restoration is one of the highest-impact levers in
            financial recovery.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            3. Excessive Operating Expenses (OPEX)
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Businesses frequently grow their cost base faster than their
            revenue, leading to structural inefficiencies.
          </p>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Common causes:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Overspending on non-essential roles or departments
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Underutilised office space or assets
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Legacy contracts and subscriptions
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              High overheads misaligned with current scale
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Diagnostic indicators:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Rising OPEX-to-revenue ratio
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Redundant roles or duplicated activities
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Declining EBITDA margins
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Corrective actions:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Implement zero-based budgeting
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Conduct a full expense audit
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Reconfigure organisational structure
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Eliminate low-ROI marketing and discretionary spend
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            A cost structure that reflects the business’s current scale not its
            historical state, is essential for achieving breakeven and sustained
            profitability.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            4. Cash Flow Mismanagement
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Many loss-making businesses fail not because they are unprofitable,
            but because they run out of cash. Poor cash management is one of the
            most common root causes of insolvency.
          </p>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Common causes:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Inadequate cash flow forecasting
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Slow receivables collection
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Overreliance on short-term credit
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Financing growth with working capital instead of capital funding
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Diagnostic indicators:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Frequent overdraft use
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Inability to pay suppliers or taxes on time
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              High debtor days
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Negative operating cash flow despite strong revenue
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Corrective actions:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Introduce rolling 13-week cash flow forecasts
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Implement strict credit terms and debtor procedures
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Negotiate extended supplier terms
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Prioritise cash-positive activities
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Effective cash governance is one of the first steps in any
            turnaround strategy
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            5. Operational Inefficiency
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Inefficient processes can significantly increase costs and reduce
            productivity
          </p>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Common causes:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Manual, labour-intensive workflows
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Lack of standard operating procedures (SOPs)
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Poor capacity planning
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Ineffective use of technology
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Diagnostic indicators:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Excessive labour costs
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              High error rates or rework
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Long lead times
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Inconsistent output quality
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Corrective actions:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Implement process mapping and optimisation
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Introduce automation tools where appropriate
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Standardise SOPs
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Conduct productivity benchmarking
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Smaller businesses often grow organically without redesigning
            processes; operational restructuring corrects this imbalance.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            6. Weak Leadership and Strategic Direction
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Many businesses suffer financially due to a lack of strategic
            clarity.
          </p>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Common causes:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              No documented business plan
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Reactive decision-making
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Misaligned leadership responsibilities
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Lack of performance measurement or accountability
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Diagnostic indicators:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Staff confusion about priorities
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Frequent shifts in strategic direction
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Poor interdepartmental communication
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Underperformance that goes unaddressed
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Corrective actions:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Create a clear strategic roadmap
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Establish governance frameworks and KPIs
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Strengthen leadership capability
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Align roles with strategic objectives
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Successful turnarounds often begin with leadership stabilisation.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            7. Pricing Misalignment
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Underpricing is a hidden cause of poor profitability, especially for
            service-based businesses.
          </p>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Common causes:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Fear of losing customers
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Inaccurate cost-to-serve analysis
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Competitors influencing pricing decisions
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Discounting without strategic rationale
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Diagnostic indicators:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Customers buying volume but margins shrinking
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Revenue increasing but profits stagnant
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Pricing lower than industry benchmarks
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Corrective actions:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Rebuild pricing architecture around delivered value
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Conduct customer willingness-to-pay analysis
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Remove unnecessary discounting
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Adjust pricing gradually with communication plans
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            A disciplined pricing strategy often yields rapid financial
            improvement.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            8. Debt Pressure and High Financial Costs
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Excessive debt can erode profitability and impair cash flow
          </p>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Common causes:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              High-interest loans
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Overuse of credit cards, overdrafts, or merchant cash advances
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Debt used to cover operating losses
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Inability to refinance
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Diagnostic indicators:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Rising interest expense
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Breaches of loan covenants
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Declining credit capacity
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Increasing reliance on short-term funding
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Corrective actions:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Restructure debt
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Negotiate better terms with lenders
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Replace short-term debt with sustainable long-term facilities
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Prioritise repayment of high-interest liabilities
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Debt stabilisation is essential for preventing insolvency
            escalation.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            9. Cultural and Workforce Issues
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Employee performance and organisational culture strongly influence
            financial outcomes
          </p>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Common causes:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Low morale or disengagement
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              High turnover
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Poor internal communication
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Misaligned incentives
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Diagnostic indicators:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Declining productivity
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Customer complaints increasing
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Frequent operational errors
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Staff resistance to change
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Corrective actions:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Redesign workforce structure
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Improve training and capability development
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Establish performance management frameworks
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Create clear expectations and accountability
            </li>
          </ul>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            A stable, high-performance culture supports sustainable recovery.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            10. Failure to Adapt to Market Changes
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Many businesses lose money because they do not respond quickly to
            evolving market conditions.
          </p>

          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Common causes:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Technology shifts
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Consumer behaviour changes
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              New entrants disrupting traditional models
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Overreliance on legacy products
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Diagnostic indicators:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Declining relevance of the product offering
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Slower customer acquisition despite promotions
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Reduced competitiveness
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Stagnant innovation pipeline
            </li>
          </ul>
          <h3 className='text-lg md:text-xl font-semibold mt-4 md:mt-8 mb-4 text-foreground'>
            Corrective actions:
          </h3>
          <ul className='space-y-2 md:space-y-3 mb-4 md:mb-8 ml-6 list-disc marker:text-primary'>
            <li className='text-base leading-relaxed text-foreground/90'>
              Conduct a strategic market review
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Invest in innovation and capability development
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Diversify revenue streams
            </li>
            <li className='text-base leading-relaxed text-foreground/90'>
              Rebuild the value proposition
            </li>
          </ul>

          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            A business’s ability to evolve is a core determinant of long-term
            survival.
          </p>

          <h2 className='text-xl md:text-3xl font-bold mt-6 md:mt-12 mb-3 md:mb-6 text-foreground'>
            Conclusion
          </h2>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Loss-making performance is rarely caused by a single factor.
            Instead, it is the cumulative effect of structural inefficiencies,
            market pressures, and internal decision-making challenges.
            Addressing decline requires a systematic review of revenue, margins,
            costs, cash flow, leadership, culture, and market alignment.
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            Businesses that act early significantly increase the probability of
            successful turnaround. Those that delay often face accelerated
            liquidity pressure and reduced strategic optionality
          </p>
          <p className='text-base leading-relaxed mb-3 md:mb-6 text-foreground/90'>
            If your business is experiencing sustained losses, early
            intervention, supported by experienced turnaround specialists, can
            restore stability and position the company for renewed growth.
          </p>
        </div>
      </article>
    </div>
  );
}
