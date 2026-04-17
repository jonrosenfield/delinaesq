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
  title: 'Business Structure Attorney in California | Delina Yasmeh, Esq.',
  description: 'California business structure attorney for new business owners. LLC vs S-Corp vs sole proprietorship — modeled for your income and risk. Paid intake only.',
  alternates: { canonical: 'https://delina.esq/business-structure-attorney/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'Business Structure Attorney',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/business-structure-attorney/',
}

const FEATURES = [
  {
    title: 'LLC vs. S-Corp vs. Sole Proprietorship',
    body: 'The right structure depends on your income level, liability exposure, number of owners, and plans for the business. Delina does not give generic recommendations &mdash; she models the actual numbers for your situation.',
  },
  {
    title: 'Year-One Legal Checklist',
    body: 'New business owners in California need: entity formation, an EIN, an operating agreement or bylaws, an initial Statement of Information, and a compliance calendar. Delina handles all of it or advises on what you can handle yourself.',
  },
  {
    title: 'California-Specific Requirements',
    body: 'California imposes an $800 annual minimum franchise tax on LLCs, a gross receipts fee above $250,000 in revenue, and specific registration requirements for foreign entities. None of these are optional and all of them apply from year one.',
  },
  {
    title: 'Growth Stage Planning',
    body: 'The structure that works for a $50K business may not work at $250K. Delina advises on when to re-evaluate your structure and what the transition looks like &mdash; before the wrong structure has been in place long enough to create real problems.',
  },
]

const PAA = [
  {
    q: 'What does a business structure attorney do?',
    a: 'A business structure attorney advises on which legal entity is right for your business, handles the formation documents, and makes sure the structure is set up correctly from a legal and tax perspective. The goal is not just to file paperwork &mdash; it is to make sure the entity you form does what you think it does.',
  },
  {
    q: 'Do I need a lawyer to choose a business structure?',
    a: 'You need someone who understands both the legal and tax implications for your specific situation. An LLC that is right for a solo freelancer may not be right for a two-partner business with outside investment. The structure you choose affects liability, taxes, fundraising options, and exit. A one-time consultation with an attorney who understands all of these dimensions is significantly cheaper than fixing the wrong structure after two years.',
  },
  {
    q: 'What is the best business structure for a California new business?',
    a: 'There is no universal answer. LLC is the most common starting point because of its flexibility and liability protection. S-Corp election makes sense once net income exceeds $80,000 to $100,000. C-Corp is appropriate for venture-backed startups. Sole proprietorship provides no liability protection and should generally be avoided. Delina models the actual implications before recommending anything.',
  },
]

const RELATED = [
  { label: 'LLC Formation', href: '/llc-attorney' },
  { label: 'Tax Strategy', href: '/tax-attorney-small-business' },
  { label: 'Startup Advisory', href: '/startup-attorney-california' },
]

export default function BusinessStructureAttorneyPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero accent="#8090A8"
        eyebrow="Business Structure Attorney · California · New Business"
        headline="The Structure You Choose on Day One Follows You.<br />Choose It With Someone Who Knows What It Means."
        subhead="Delina Yasmeh advises new California business owners on entity formation, LLC operating agreements, and the legal and tax implications of every structure &mdash; before the wrong choice becomes expensive to fix."
      />
      <LandingSection eyebrow="Structure Is Not a Filing. It Is a Foundation." headline="Most new business owners choose a structure without understanding it.">
        <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>The internet will tell you to &ldquo;just form an LLC.&rdquo; That is not wrong &mdash; but it is incomplete. The entity you form determines your personal liability, your tax treatment, your ability to bring in partners or investors, and your options when you eventually want to sell or transition the business. These are not abstract questions. They have dollar amounts attached to them.</p>
          <p>California adds complexity that other states do not have. Every LLC in California pays an $800 annual minimum franchise tax &mdash; regardless of whether the business made money. S-Corps pay 1.5% of net income to the state on top of federal obligations. These costs are predictable and should be part of your decision, not a surprise at year end.</p>
          <p>If you expect to be profitable quickly, the conversation also includes whether an <Link href="/s-corp-attorney" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">S-Corp election</Link> makes sense and when to evaluate it. The election has a deadline &mdash; missing it means another year in the wrong tax structure.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="What Delina Covers" headline="Entity formation and structure for California businesses at every stage.">
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
      <RelatedArticles tags={['entity-structure', 'llc', 'startup', 'tax-strategy']} />
      <LandingCTA
        headline="Ready to build your business on the right legal foundation?"
        body="Delina models the actual implications of each entity structure for your specific income, risk profile, and business plan. Book a paid intake to discuss your options before formation &mdash; or to fix a structure that was never right."
      />
      <Footer />
    </main>
  )
}
