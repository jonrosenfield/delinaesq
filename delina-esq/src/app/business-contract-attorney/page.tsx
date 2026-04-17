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
  title: 'Business Contract Attorney in California | Delina Yasmeh, Esq.',
  description: 'California business contract attorney for entrepreneurs, creators, and founders. Custom agreements drafted to hold — not templates. Paid intake only.',
  alternates: { canonical: 'https://delina.esq/business-contract-attorney/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'Business Contract Attorney',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/business-contract-attorney/',
}

const FEATURES = [
  {
    title: 'Partnership & Operating Agreements',
    body: 'Who owns what, who decides what, and what happens when a partner wants out. These questions have a right answer and a wrong answer. Delina drafts the document that gives you the right one.',
  },
  {
    title: 'Brand Deal & Creator Contracts',
    body: 'Sponsorship agreements, licensing deals, and brand partnerships involve IP rights, payment terms, exclusivity clauses, and termination provisions. A template from the internet does not protect you when any of these go sideways.',
  },
  {
    title: 'Service & Vendor Agreements',
    body: 'Every business relationship that involves money or deliverables should have a written agreement. Delina drafts service agreements, vendor contracts, and independent contractor agreements that actually reflect the deal.',
  },
  {
    title: 'Licensing & IP Agreements',
    body: 'Licensing your content, your brand, or your software requires clear documentation of scope, duration, exclusivity, and payment. Delina drafts licensing agreements that protect the asset being licensed.',
  },
]

const PAA = [
  {
    q: 'Do I need a business contract attorney for a small business?',
    a: 'Every business relationship that involves money, deliverables, or intellectual property should have a written contract. The question is not whether you need a contract — it is whether the contract you have actually protects you. Templates are better than nothing. Attorney-drafted contracts are better than templates.',
  },
  {
    q: 'What is the difference between a business attorney and a contract attorney?',
    a: 'A business attorney advises on the full legal picture: entity structure, tax strategy, contracts, and compliance. A contract attorney focuses specifically on drafting and reviewing agreements. Delina does both — she understands how your contracts fit into your broader business and tax strategy.',
  },
  {
    q: 'How much does it cost to have a contract drafted in California?',
    a: 'Contract drafting fees vary based on complexity. A straightforward service agreement may be $500 to $1,500. A licensing agreement or partnership agreement involving IP rights, revenue sharing, or equity will cost more. Delina structures all engagements through a paid intake model.',
  },
]

const RELATED = [
  { label: 'LLC Formation', href: '/llc-attorney' },
  { label: 'Startup Advisory', href: '/startup-attorney-california' },
  { label: 'Creator Economy', href: '/creator-attorney' },
]

export default function BusinessContractAttorneyPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero accent="#2255CC"
        eyebrow="Business Contract Attorney · California"
        headline="Business Contract Attorney"
        subhead="Delina Yasmeh drafts and reviews business contracts for California entrepreneurs, creators, and founders &mdash; written to protect you, not just to document the deal."
      />
      <LandingSection eyebrow="Why Business Contracts Matter" headline="The contract you sign determines what you can enforce.">
        <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>Most business disputes are not about what happened &mdash; they are about what was written down. A contract without clear payment terms, intellectual property ownership language, and termination provisions is not a contract. It is a handshake with more words.</p>
          <p>California courts enforce contracts based on what the document says, not what you intended. If your contract is silent on a term, California&apos;s Commercial Code fills in the gap with a default rule &mdash; which may not be the rule you would have chosen. Delina drafts contracts that address these gaps explicitly.</p>
          <p>Creators and digital entrepreneurs face specific contract issues that generic business templates do not address: content licensing rights, exclusivity windows, approval rights over how their name and likeness are used, and kill fees. These are not minor details. They determine whether a brand deal is profitable or a liability.</p>
          <p>If your business involves partnerships or co-founders, a proper <Link href="/llc-attorney" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">LLC operating agreement</Link> is the foundational contract governing your business relationship &mdash; before any client-facing contracts come into play.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="What Delina Covers" headline="Contract drafting and review for every business relationship.">
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
      <RelatedArticles tags={['contract', 'business-contracts', 'partnership', 'startup']} />
      <LandingCTA
        headline="Ready to stop operating on handshakes?"
        body="Every business relationship that involves money or intellectual property should have a written contract that reflects the actual deal. Book a paid intake with Delina to discuss what agreements your business needs and what they should say."
      />
      <Footer />
    </main>
  )
}
