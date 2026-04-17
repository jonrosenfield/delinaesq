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
  title: 'Prenuptial Agreement Attorney in California | Delina Yasmeh, Esq.',
  description: 'California prenuptial agreement attorney for entrepreneurs and high earners. Strategic agreements built to hold under Family Code § 1615. Paid intake only.',
  alternates: { canonical: 'https://delina.esq/prenuptial-agreement-attorney/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'Prenuptial Agreement Attorney',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/prenuptial-agreement-attorney/',
}

const FEATURES = [
  {
    title: 'Business & Equity Protection',
    body: 'Vested equity, a business you founded, and future earnings from your company require specific protective language that generic templates omit entirely.',
  },
  {
    title: 'Community Property Reframe',
    body: 'California is a community property state. Without a valid agreement, income earned during the marriage is shared by default. Delina drafts agreements that address this explicitly.',
  },
  {
    title: 'Enforceability First',
    body: 'A prenup that does not hold up in court is just paper. Every agreement Delina drafts is structured to survive a challenge: proper disclosure, independent counsel, adequate time before signing.',
  },
  {
    title: 'Future Asset & Inheritance Planning',
    body: 'Assets you inherit or receive as gifts during marriage can lose their separate property character through commingling. Delina drafts specific language to protect these assets and any future inheritance.',
  },
]

const PAA = [
  {
    q: 'What type of lawyer is best for a prenuptial agreement?',
    a: 'A family law attorney with experience drafting enforceable agreements for high-asset clients. The attorney must understand both California\'s community property rules and your specific financial structure — particularly if you own a business, hold equity, or earn income from multiple sources.',
  },
  {
    q: 'Can one attorney represent both parties in a prenuptial agreement?',
    a: 'No. California requires independent legal counsel for each party. Any attempt to use one attorney will likely render the agreement unenforceable. This is not a technicality — it is how courts decide whether both parties understood what they were signing.',
  },
  {
    q: 'How much does a prenuptial agreement cost in California?',
    a: 'Prenuptial agreements for high-asset clients typically range from $3,500 to $8,000 or more for qualified legal counsel. The cost reflects the complexity of your financial picture, not the length of the document. Delina structures fees through a tailored engagement model.',
  },
]

const RELATED = [
  { label: 'Postnuptial Agreements', href: '/postnuptial-agreement-lawyer' },
  { label: 'Business Contracts', href: '/business-contract-attorney' },
  { label: 'LLC Formation', href: '/llc-attorney' },
]

export default function PrenuptialAgreementAttorneyPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero accent="#9B1527"
        eyebrow="Prenuptial Agreement Attorney · California"
        headline="Prenuptial Agreement Attorney"
        subhead="Delina Yasmeh drafts and reviews prenuptial agreements for California entrepreneurs, founders, and high earners who have something real to protect."
      />
      <LandingSection eyebrow="What a Prenup Actually Does" headline="Most people misunderstand what a prenuptial agreement is.">
        <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>A prenuptial agreement is not a plan for divorce. It is a legal document that decides, in advance, how your assets and liabilities will be treated if the marriage ends. California&apos;s community property rules mean that income earned during a marriage belongs equally to both spouses by default. A prenup changes that default.</p>
          <p>For someone who owns a business, holds unvested equity, or earns significant income from a professional practice, the absence of a prenup is a financial decision &mdash; one made by inaction rather than intention.</p>
          <p>California Family Code &sect; 1615 sets specific requirements for enforceability: independent counsel for both parties, at least seven days between receiving the agreement and signing, and full financial disclosure. A prenup that skips any of these steps is vulnerable to challenge. Delina structures every agreement to meet this standard before either party signs.</p>
          <p>Already married and need similar protections? California also recognizes <Link href="/postnuptial-agreement-lawyer" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">postnuptial agreements</Link> under the same enforceability framework. The strategy is the same &mdash; the timing is different.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="Key Protections" headline="What Delina&apos;s agreements actually cover.">
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
      <RelatedArticles tags={['prenup', 'marital-agreements', 'family-law', 'business-assets']} />
      <LandingCTA
        headline="Ready to protect what you&apos;re building toward?"
        body="A prenuptial agreement is a one-time decision that removes an entire category of financial risk. Tell us your situation — your situation and what an enforceable agreement looks like for your specific assets."
      />
      <Footer />
    </main>
  )
}
