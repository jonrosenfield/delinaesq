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
  title: 'LLC Attorney in California — Formation, Structuring & Strategy | Delina Yasmeh, Esq.',
  description: 'California LLC attorney for formation, operating agreements, and entity strategy. Not just paperwork — the right structure for how you make money. Paid intake.',
  alternates: { canonical: 'https://delina.esq/llc-attorney/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'LLC Attorney',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/llc-attorney/',
}

const FEATURES = [
  {
    title: 'LLC Formation & Filing',
    body: 'California LLC formation requires Articles of Organization, a registered agent, an initial Statement of Information, and an $800 minimum franchise tax payment — regardless of whether you made money that year.',
  },
  {
    title: 'Operating Agreement Drafting',
    body: 'California law does not require an operating agreement, but operating without one means your LLC is governed by state default rules — which may not match your actual intentions. Delina drafts operating agreements that reflect how you actually run your business.',
  },
  {
    title: 'Multi-Member & Partnership Structures',
    body: 'LLCs with multiple members require explicit documentation of ownership percentages, voting rights, profit allocation, and what happens when a member wants to leave or sell. Delina structures these relationships before they become disputes.',
  },
  {
    title: 'S-Corp Election Analysis',
    body: 'If your LLC generates more than $80,000–$100,000 in net income, an S-Corp election may reduce your self-employment tax burden. California adds a 1.5% franchise tax on S-Corp net income — Delina gives you the full picture before you elect.',
  },
]

const PAA = [
  {
    q: 'Do I need a lawyer to form an LLC in California?',
    a: 'You can file the paperwork yourself — but formation is the least important part of having an LLC. The operating agreement, the ownership structure, and the decisions about taxation are where attorneys add value. A LegalZoom LLC gives you a filing confirmation. Delina gives you a structure that actually does what you think it does.',
  },
  {
    q: 'How much does it cost to form an LLC in California?',
    a: 'California charges an $800 minimum franchise tax annually — payable in the first year regardless of revenue. The Secretary of State filing fee is $70. A registered agent costs $50–$300/year. Attorney fees for formation and operating agreement drafting vary based on complexity. The $800 annual minimum is permanent and applies even in years with no income.',
  },
  {
    q: 'Should I form my LLC in California or Wyoming?',
    a: 'If you live and work in California, you will likely need to register a foreign LLC in California even if you form in Wyoming — which means paying California fees on top of Wyoming fees. The "Wyoming LLC" strategy is often more expensive and more complex than simply forming in California. Delina discusses the actual math with clients before they make this decision.',
  },
]

const RELATED = [
  { label: 'Business Structure', href: '/business-structure-attorney' },
  { label: 'Tax Strategy', href: '/tax-attorney-small-business' },
  { label: 'S-Corp Strategy', href: '/s-corp-attorney' },
]

export default function LLCPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero accent="#8090A8"
        eyebrow="LLC Attorney · California · Formation & Strategy"
        headline="LLC Attorney"
        subhead="Delina Yasmeh advises California business owners on LLC formation, operating agreements, and entity strategy — built around how you actually make money, not a generic template."
      />
      <LandingSection eyebrow="What an LLC Actually Does" headline="Formation is the beginning. The operating agreement is what matters.">
        <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>A California LLC limits your personal liability for business obligations — but only if the entity is properly maintained and your personal finances are genuinely separate from your business finances. Courts can pierce the corporate veil when owners treat the LLC as an extension of their personal accounts.</p>
          <p>The operating agreement governs how your LLC runs: who has authority to make decisions, how profits are allocated, what happens when a member wants to leave, and how disputes are resolved. Without a properly drafted operating agreement, these questions are answered by California&apos;s default rules — which may not reflect your intentions.</p>
          <p>California charges an $800 annual minimum franchise tax on all LLCs, plus a gross receipts fee once revenue exceeds $250,000. These costs are real and predictable. Delina gives you the full picture before you form.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="What Delina Covers" headline="LLC formation and strategy built for your actual business.">
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
      <RelatedArticles tags={['llc', 'entity-structure', 'tax-strategy']} />
      <LandingCTA
        headline="Ready to build your business on the right legal foundation?"
        body="Delina works with business owners who want an LLC structure that actually does what they think it does. Tell us your situation — your business model, ownership structure, and the right entity setup for your situation."
      />
      <Footer />
    </main>
  )
}
