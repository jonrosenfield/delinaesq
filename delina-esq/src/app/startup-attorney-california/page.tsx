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
  title: 'Startup Lawyer in California — Legal Strategy for Founders | Delina Yasmeh, Esq.',
  description: 'California startup lawyer for early-stage founders. Entity formation, co-founder agreements, IP assignment, and startup legal documents. Paid intake only.',
  alternates: { canonical: 'https://delina.esq/startup-attorney-california/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'Startup Lawyer',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/startup-attorney-california/',
}

const FEATURES = [
  {
    title: 'Entity Formation & Co-Founder Structure',
    body: 'Who owns what percentage, what happens if a co-founder leaves, and who controls the company &mdash; these decisions should be documented before the first customer. Delina structures startup entities with these questions answered explicitly.',
  },
  {
    title: 'IP Assignment & Founder Agreements',
    body: 'If you built anything before forming the entity &mdash; code, designs, content, a product &mdash; that IP needs to be formally assigned to the company. Investors and acquirers will ask. Delina handles IP assignment and advisor agreements from the start.',
  },
  {
    title: 'Startup Legal Documents',
    body: 'NDAs, term sheets, consulting agreements, offer letters, and independent contractor agreements. Delina drafts startup-specific documents that reflect how early-stage companies actually operate &mdash; not how Fortune 500 companies operate.',
  },
  {
    title: 'Equity & Vesting Structure',
    body: 'Founder equity without a vesting schedule is a risk. If a co-founder leaves after six months with 33% of the company, that is not a hypothetical &mdash; it happens regularly. Delina advises on standard vesting terms and cliff provisions before anyone has reason to dispute them.',
  },
]

const PAA = [
  {
    q: 'Does a startup need a lawyer in California?',
    a: 'Every startup with co-founders, outside investors, employees, or intellectual property needs legal counsel. The cost of fixing a bad cap table, a poorly drafted co-founder agreement, or missing IP assignment is significantly higher than the cost of getting it right at formation. Delina advises founders who want to build something institutional from the start.',
  },
  {
    q: 'What legal documents do startups need in California?',
    a: 'At minimum: Articles of Incorporation or Organization, bylaws or operating agreement, IP assignment agreements for all founders, co-founder equity and vesting agreements, a form NDA, and a consulting or contractor agreement. If you are raising money, add a SAFE or convertible note agreement. Delina provides all of these through a startup legal package.',
  },
  {
    q: 'Should a California startup be an LLC or a C-Corp?',
    a: 'If you plan to raise venture capital, you need a Delaware C-Corp. Venture funds generally will not invest in LLCs. If you are building a profitable small business without institutional investors, an LLC or S-Corp may be more tax-efficient. The choice depends entirely on your financing strategy. Delina advises on this decision early &mdash; before the wrong structure makes fundraising harder.',
  },
]

const RELATED = [
  { label: 'Business Structure', href: '/business-structure-attorney' },
  { label: 'Business Contracts', href: '/business-contract-attorney' },
  { label: 'Creator Economy', href: '/creator-attorney' },
]

export default function StartupAttorneyCaliforniaPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero
        eyebrow="Startup Lawyer · California · Founder Legal Strategy"
        headline="The Legal Problems That Kill Startups<br />Are Always the Ones Nobody Set Up a Document For."
        subhead="Delina Yasmeh advises California startup founders on entity formation, co-founder agreements, IP assignment, and the legal infrastructure that lets you build something institutional &mdash; not just fast."
      />
      <LandingSection eyebrow="Why Startup Legal Strategy Matters Early" headline="The documents you skip at formation are the ones that hurt you at Series A.">
        <div className="space-y-5 font-sans text-[15px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>Most startup legal disasters are not spectacular. They are a co-founder who owns 40% of the company with no vesting schedule, a product built on IP that was never formally assigned to the entity, or a cap table that no institutional investor will touch. These problems are invisible until they are expensive.</p>
          <p>California adds specific complications for startups. Work created by employees during the scope of employment is owned by the employer under California Labor Code &sect; 2870 &mdash; but the line between &ldquo;scope of employment&rdquo; and personal projects is contested and has been litigated. Founders who worked at other companies before starting their startup need to understand this risk explicitly.</p>
          <p>The entity decision also matters early. If you plan to raise venture capital, you almost certainly need a Delaware C-Corp &mdash; most institutional funds have restrictions on investing in LLCs. If you are building a bootstrapped profitable business, a <Link href="/llc-attorney" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">California LLC</Link> may be significantly more tax-efficient. Delina advises on this decision before formation, not after you have been operating in the wrong structure for two years.</p>
          <p>Early-stage companies also need <Link href="/business-contract-attorney" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">contracts that reflect how startups actually work</Link> &mdash; contractor agreements, advisory agreements, and NDAs that are enforceable but not so heavy that they scare off the people you need to bring in.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="What Delina Covers" headline="Legal infrastructure for California founders building something real.">
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
                  className="font-display font-light text-ink group-hover:text-ink/60 transition-colors"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
                >
                  {r.label}
                </span>
                <span className="font-mono text-[11px] text-ink/25 group-hover:text-ink group-hover:translate-x-1.5 transition-all duration-200">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <RelatedArticles tags={['startup', 'founder', 'legal-documents', 'contract']} />
      <LandingCTA
        headline="Ready to build a startup on a legal foundation that survives due diligence?"
        body="Delina works with founders who want to get the structure right from day one &mdash; not clean it up when an investor asks why the IP was never assigned. Book a paid intake to discuss your entity, your co-founder structure, and your legal document needs."
      />
      <Footer />
    </main>
  )
}
