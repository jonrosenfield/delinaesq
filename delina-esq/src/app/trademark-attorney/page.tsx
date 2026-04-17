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
  title: 'Trademark Attorney & Brand Protection Lawyer in California | Delina Yasmeh, Esq.',
  description: 'California trademark attorney for entrepreneurs, creators, and brands. Federal trademark registration, brand protection strategy, and IP counsel. Paid intake.',
  alternates: { canonical: 'https://delina.esq/trademark-attorney/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'Trademark Attorney',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/trademark-attorney/',
}

const FEATURES = [
  {
    title: 'Federal Trademark Search & Clearance',
    body: 'Before you file, or invest further in a brand name, Delina conducts a comprehensive clearance search to assess registration risk and identify potential conflicts.',
  },
  {
    title: 'USPTO Application & Prosecution',
    body: 'Trademark applications require choosing the right filing basis, identifying the correct goods and services classes, and responding to USPTO office actions. Delina handles the full prosecution process.',
  },
  {
    title: 'Brand Protection Strategy',
    body: 'A registered trademark is the foundation of brand protection, but the strategy extends to monitoring for infringement, licensing properly, and maintaining registration through continued use and renewal filings.',
  },
  {
    title: 'IP Assignment & Licensing',
    body: 'If you are building a brand that will be licensed, sold, or used by multiple entities, the IP ownership structure matters from the start. Delina structures IP assignment agreements so ownership is clear and enforceable.',
  },
]

const PAA = [
  {
    q: 'How much does a trademark attorney cost?',
    a: 'Federal trademark application fees start at $250 per class through TEAS Plus. Attorney fees for a comprehensive search, application preparation, and prosecution through registration typically range from $1,500–$3,500 for a straightforward mark. Office action responses and multi-class applications cost more. Delina structures engagement through a tailored engagement model.',
  },
  {
    q: 'Can I file a trademark application without an attorney?',
    a: 'Yes, but the USPTO\'s rejection rate for pro se applicants is significantly higher than for attorney-filed applications. The most common errors are incorrect identification of goods and services, wrong filing basis, and failure to respond to office actions correctly. A rejected application still costs the filing fee. Delina recommends filing with counsel the first time.',
  },
  {
    q: 'How long does it take to get a trademark registered?',
    a: 'USPTO processing times currently average 12–18 months from filing to registration for straightforward applications. Applications that receive office actions take longer. Priority rights date back to the filing date, so filing early, even before the mark is in commercial use, can protect your position.',
  },
]

const RELATED = [
  { label: 'Business Contracts', href: '/business-contract-attorney' },
  { label: 'LLC Formation', href: '/llc-attorney' },
  { label: 'Creator Economy', href: '/creator-attorney' },
]

export default function TrademarkPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero accent="#9B1527"
        eyebrow="Trademark Attorney · Brand Protection · California"
        headline="Trademark Attorney"
        subhead="Delina Yasmeh handles federal trademark registration and brand protection strategy for California entrepreneurs, creators, and businesses building something worth protecting."
      />
      <LandingSection eyebrow="Why Trademark Registration Matters" headline="Using a name is not the same as owning it.">
        <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>Common law trademark rights arise from use, but they are limited to the geographic area where you actually operate. A federal trademark registration with the USPTO gives you nationwide priority and the legal presumption of ownership across all fifty states.</p>
          <p>For brands operating online, selling on Amazon, or licensing content to national partners, the geographic limitation of common law rights is a significant vulnerability. A competitor in another state can use your brand name legally, until you have a federal registration that establishes your priority.</p>
          <p>The registration process takes 12–18 months. Rights, however, date back to your filing date. Waiting until your brand is established means giving competitors a head start on the same filing timeline.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="What Delina Covers" headline="Trademark strategy from clearance through registration.">
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
      <RelatedArticles category="Trademark" tags={['trademark']} />
      <LandingCTA
        headline="Ready to protect the brand you&apos;re building?"
        body="Trademark registration is a one-time investment that protects a long-term asset. Tell us your situation, your brand, your filing strategy, and what protection looks like for your specific situation."
      />
      <Footer />
    </main>
  )
}
