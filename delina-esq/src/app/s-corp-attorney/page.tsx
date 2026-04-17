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
  title: 'S-Corp Attorney in California — Election, Structuring & Tax Strategy | Delina Yasmeh, Esq.',
  description: 'California S-Corp attorney for election timing, salary structuring, and tax strategy. Understand the 1.5% California franchise tax before you elect. Paid intake.',
  alternates: { canonical: 'https://delina.esq/s-corp-attorney/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'S-Corp Attorney',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/s-corp-attorney/',
}

const FEATURES = [
  {
    title: 'S-Corp Election Timing',
    body: 'The S-Corp election must be filed by March 15 to be effective for the current tax year. Missing the deadline means another year in the wrong structure. Delina advises on timing and handles the IRS Form 2553 filing.',
  },
  {
    title: 'Reasonable Salary Analysis',
    body: 'The IRS requires S-Corp owner-employees to pay themselves a &ldquo;reasonable salary&rdquo; before taking distributions. Getting this number wrong &mdash; too low or too high &mdash; creates compliance risk. Delina helps structure the salary to minimize SE tax while withstanding IRS scrutiny.',
  },
  {
    title: 'California-Specific Tax Modeling',
    body: 'California imposes a 1.5% franchise tax on S-Corp net income in addition to federal obligations. The state breakeven point is different from the federal breakeven. Delina models the actual numbers for your income level before recommending the election.',
  },
  {
    title: 'S-Corp vs. Sole Proprietorship Analysis',
    body: 'Sole proprietors pay self-employment tax on all net income. S-Corp shareholders only pay SE tax on their salary portion. The difference at $150,000 in net income can exceed $12,000 per year &mdash; after accounting for California&apos;s franchise tax.',
  },
]

const PAA = [
  {
    q: 'Is an S-Corp worth it in California?',
    a: 'It depends on your net income. California charges a 1.5% franchise tax on S-Corp net income, which offsets some of the federal self-employment tax savings. The general breakeven in California is around $80,000 to $100,000 in net business income. Below that threshold, the administrative costs and California tax may exceed the savings. Delina models this specifically for each client before advising on the election.',
  },
  {
    q: 'What is the difference between an S-Corp and a sole proprietorship?',
    a: 'A sole proprietor pays self-employment tax (15.3%) on all net business income. An S-Corp owner-employee pays SE tax only on their salary &mdash; not on distributions. The entity structure also affects liability protection, investor eligibility, and the ability to bring in co-owners. These are not the same choice dressed up differently. They are structurally distinct with different consequences.',
  },
  {
    q: 'Do I need an attorney to elect S-Corp status?',
    a: 'The IRS Form 2553 can be filed without an attorney &mdash; but the election decision itself requires analysis of your income level, California tax treatment, reasonable salary requirements, and how the change affects your existing entity structure. Filing the form is straightforward. Knowing whether you should file it, and when, is where legal advice matters.',
  },
]

const RELATED = [
  { label: 'LLC Formation', href: '/llc-attorney' },
  { label: 'Tax Strategy', href: '/tax-attorney-small-business' },
  { label: 'Business Structure', href: '/business-structure-attorney' },
]

export default function SCorpAttorneyPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero accent="#8090A8"
        eyebrow="S-Corp Attorney · California · Election & Tax Strategy"
        headline="S-Corp Attorney"
        subhead="Delina Yasmeh advises California business owners on S-Corp elections, salary structuring, and the California-specific tax math that most &ldquo;just elect S-Corp&rdquo; advice ignores."
      />
      <LandingSection eyebrow="What the S-Corp Election Actually Does" headline="The tax savings are real. So is the California franchise tax.">
        <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>Self-employment tax is 15.3% on the first $168,600 of net income and 2.9% above that. An S-Corp allows you to split your income into two buckets: salary (subject to SE tax) and distributions (not subject to SE tax). The savings come from the distribution portion.</p>
          <p>California adds a layer that every online calculator ignores: a 1.5% franchise tax on S-Corp net income, with a minimum of $800. For lower income levels, this tax erodes a significant portion of the federal SE tax savings. The breakeven in California is higher than it is in most other states.</p>
          <p>The other factor most people overlook is the reasonable salary requirement. The IRS has successfully challenged S-Corp owner-employees who pay themselves below-market salaries to maximize distributions. Getting the salary structure right &mdash; not just filing the form &mdash; is the actual work.</p>
          <p>If you are currently operating as a <Link href="/llc-attorney" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">California LLC</Link>, the S-Corp election does not require you to change your entity &mdash; your LLC can elect to be taxed as an S-Corp while retaining its legal structure. Delina advises on this distinction regularly.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="What Delina Covers" headline="S-Corp strategy from election through ongoing compliance.">
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
      <RelatedArticles tags={['s-corp', 'tax-strategy', 'llc']} />
      <LandingCTA
        headline="Ready to know if the S-Corp election actually makes sense for you?"
        body="The internet says &ldquo;elect S-Corp and save on taxes.&rdquo; Delina gives you the actual math. Tell us your situation — model the real numbers for your income level and entity structure."
      />
      <Footer />
    </main>
  )
}
