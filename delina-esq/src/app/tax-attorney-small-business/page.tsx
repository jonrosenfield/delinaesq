import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LandingHero } from '@/components/landing/LandingHero'
import { LandingSection } from '@/components/landing/LandingSection'
import { FeatureCard } from '@/components/landing/FeatureCard'
import { PAASection } from '@/components/landing/PAASection'
import { LandingCTA } from '@/components/landing/LandingCTA'
import { RelatedArticles } from '@/components/landing/RelatedArticles'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tax Attorney for Small Business Owners in California | Delina Yasmeh, Esq.',
  description: 'California tax attorney for small business owners, creators, and founders. Tax strategy, S-Corp elections, and entity structuring to reduce what you owe legally. Paid intake.',
  alternates: { canonical: 'https://delina.esq/tax-attorney-small-business/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'Tax Attorney for Small Business',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/tax-attorney-small-business/',
}

const FEATURES = [
  {
    title: 'S-Corp Election Analysis',
    body: 'An S-Corp election can reduce self-employment tax significantly , but California adds a 1.5% franchise tax on net income. Delina models the actual breakeven for your income level before recommending the election.',
  },
  {
    title: 'Business Tax Strategy',
    body: 'Entity structure, deduction planning, retirement account strategy, and income timing decisions all affect your tax liability. Delina works with business owners who want to understand these levers before tax season, not during it.',
  },
  {
    title: 'Digital Asset & Crypto Tax',
    body: 'California taxes crypto gains at ordinary income rates , there is no capital gains preference at the state level. Creators and founders with significant crypto holdings need a strategy that accounts for California&apos;s specific treatment.',
  },
  {
    title: 'Tax Attorney vs. CPA Guidance',
    body: 'A CPA prepares your return. A tax attorney advises on strategy, structures transactions to minimize liability, and handles disputes with taxing authorities. Delina helps clients understand when they need each , and when they need both.',
  },
]

const PAA = [
  {
    q: 'What does a tax attorney for small business do?',
    a: 'A tax attorney advises on how to legally structure your business, income, and transactions to minimize your tax liability. Unlike a CPA, a tax attorney can also represent you in disputes with the IRS or California FTB, and attorney-client privilege protects your communications. Delina focuses on proactive strategy for business owners who make $250K or more annually.',
  },
  {
    q: 'When should I hire a tax attorney instead of a CPA?',
    a: 'When you are making a significant structural decision , forming an entity, electing S-Corp status, planning a business sale, or dealing with an IRS audit. CPAs are excellent for return preparation. Tax attorneys are the right choice when the decision has legal implications that go beyond the annual return.',
  },
  {
    q: 'How much can an S-Corp save on self-employment taxes in California?',
    a: 'Self-employment tax is 15.3% on the first $168,600 and 2.9% above that. An S-Corp allows you to split income between salary (subject to SE tax) and distributions (not subject to SE tax). In California, the 1.5% franchise tax on S-Corp net income offsets some of that savings. The breakeven point is typically around $80,000 to $100,000 in net business income, but Delina models this specifically for each client.',
  },
]

const RELATED = [
  { label: 'S-Corp Strategy', href: '/s-corp-attorney' },
  { label: 'LLC Formation', href: '/llc-attorney' },
  { label: 'Business Structure', href: '/business-structure-attorney' },
]

export default function TaxAttorneySmallBusinessPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero accent="#1A3A6E"
        eyebrow="Tax Attorney · Small Business · California"
        headline="Tax Attorney"
        subhead="Delina Yasmeh advises California small business owners, creators, and founders on tax strategy, entity structuring, and S-Corp elections , before tax season makes it too late to change anything."
      />
      <LandingSection eyebrow="Why Tax Strategy Matters Before April" headline="The decisions that reduce your tax bill happen before the year ends.">
        <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>Most business owners think about taxes in March. The decisions that actually affect their tax liability , entity structure, S-Corp election timing, retirement account contributions, income recognition , all happen during the year. By the time you are filing, the strategy window has closed.</p>
          <p>California is one of the highest-tax states in the country. Combined federal and California rates for high-income earners can exceed 50% on ordinary income. The legal tools that reduce that number , S-Corp elections, qualified business income deductions, properly structured retirement accounts , are available to every business owner. Most are not using them fully.</p>
          <p>Delina works with business owners who want a <Link href="/s-corp-attorney" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">tax strategy built into their entity structure</Link> from the start , not bolted on after three years of overpaying. If you have not evaluated your entity structure for tax efficiency in the last two years, that evaluation is overdue.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="What Delina Covers" headline="Tax strategy for California business owners who make real money.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FEATURES.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </LandingSection>
      <PAASection questions={PAA} />
      <section className="bg-ivory border-t border-steel/15 py-14 px-6">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-8">
            Also from Delina
          </span>
          <div className="divide-y divide-steel/15">
            {RELATED.map(r => (
              <Link
                key={r.href}
                href={r.href}
                className="flex items-center justify-between py-5 group"
              >
                <span
                  className="font-sans font-medium text-ink group-hover:text-ink/60 transition-colors"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
                >
                  {r.label}
                </span>
                <span className="font-mono text-[12px] text-ink/25 group-hover:text-ink group-hover:translate-x-1.5 transition-all duration-200">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <RelatedArticles tags={['tax', 'tax-strategy', 's-corp', 'llc']} />
      <LandingCTA
        headline="Ready to stop overpaying?"
        body="Tax strategy is not about finding loopholes. It is about using the legal tools that exist for business owners and actually using them. Tell us your situation, your entity structure, income level, and what a real strategy looks like."
      />
      <Footer />
    </main>
  )
}
