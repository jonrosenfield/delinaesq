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
  title: 'Nonprofit Attorney & Nonprofit Lawyer in California | Delina Yasmeh, Esq.',
  description: 'California nonprofit attorney for 501(c)(3) formation, governance, and compliance. Paid intake. Built for founders who want their nonprofit to last.',
  alternates: { canonical: 'https://delina.esq/nonprofit-attorney/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'Nonprofit Attorney',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/nonprofit-attorney/',
}

const FEATURES = [
  {
    title: '501(c)(3) Formation & IRS Application',
    body: 'California nonprofit formation requires filing Articles of Incorporation with the Secretary of State, obtaining a federal EIN, and submitting IRS Form 1023 or 1023-EZ for tax-exempt status. Delina handles the full process.',
  },
  {
    title: 'Bylaws & Governance Documents',
    body: 'Bylaws are not boilerplate. They govern how your board makes decisions, how officers are appointed, and what happens when something goes wrong. Delina drafts bylaws built for how your organization actually operates.',
  },
  {
    title: 'Conflict of Interest & Compensation Policies',
    body: 'The IRS requires nonprofits to have documented conflict of interest policies. Executive compensation must be set through a specific process to qualify as reasonable. Delina drafts these documents so you are protected from the start.',
  },
  {
    title: 'Ongoing Compliance Counsel',
    body: 'California nonprofits must file annual reports with the Attorney General, maintain their registered agent, and file IRS Form 990 each year. Delina advises on the legal requirements that keep your tax-exempt status intact.',
  },
]

const PAA = [
  {
    q: 'Do I need a lawyer to start a nonprofit in California?',
    a: 'Technically no — but the IRS application process, California registration requirements, and governance document requirements are complex enough that most nonprofits formed without legal counsel have structural problems that surface later. Delina advises founders to engage legal counsel before filing, not after the IRS sends a rejection or a board dispute reveals that the bylaws don\'t cover what they thought they covered.',
  },
  {
    q: 'How much does it cost to set up a nonprofit in California?',
    a: 'California nonprofit formation involves a $30 filing fee for Articles of Incorporation, an $800 initial franchise tax payment, a $25 registration fee with the Attorney General, and IRS Form 1023 fees of $275 or $600 depending on which form applies. Attorney fees vary based on the complexity of the organization. Delina structures her engagement through a tailored engagement model.',
  },
  {
    q: 'What are the ongoing legal requirements for a California nonprofit?',
    a: 'California nonprofits must file a biennial Statement of Information with the Secretary of State, register annually with the Attorney General\'s Registry of Charitable Trusts, maintain required governance documents, and hold board meetings as specified in the bylaws. Federal requirements include annual Form 990 filing. These requirements begin immediately after formation — not years later.',
  },
]

const RELATED = [
  { label: 'LLC Formation', href: '/llc-attorney' },
  { label: 'Business Contracts', href: '/business-contract-attorney' },
  { label: 'Business Structure', href: '/business-structure-attorney' },
]

export default function NonprofitPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero accent="#1A3A6E"
        eyebrow="Nonprofit Attorney · California · 501(c)(3) Formation"
        headline="Nonprofit Attorney"
        subhead="Delina Yasmeh advises California nonprofit founders on 501(c)(3) formation, governance, compliance, and the ongoing legal requirements that keep tax-exempt status intact."
      />
      <LandingSection eyebrow="What Nonprofit Legal Counsel Actually Covers" headline="Formation is one day&apos;s work. Governance lasts as long as the organization does.">
        <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>Most people focus on the IRS application. The more important documents are the ones that govern how your nonprofit operates after you receive your determination letter: the bylaws, the conflict of interest policy, the executive compensation procedures, and the board committee structures.</p>
          <p>California adds its own layer of complexity. In addition to federal requirements, California nonprofits must register with the Attorney General&apos;s Registry of Charitable Trusts, file biennial statements with the Secretary of State, and comply with state-specific requirements around charitable solicitation and fundraising.</p>
          <p>Delina works with nonprofit founders who want to build a organization that can sustain audits, board changes, and growth — not just clear the initial formation hurdle.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="What Delina Covers" headline="Legal infrastructure for nonprofits built to last.">
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
      <RelatedArticles tags={['nonprofit']} />
      <LandingCTA
        headline="Ready to build your nonprofit on a legal foundation that lasts?"
        body="Delina works with nonprofit founders who want to get the governance right from the beginning — not after the first board dispute or IRS inquiry. Tell us your situation — your organization and what proper formation looks like."
      />
      <Footer />
    </main>
  )
}
