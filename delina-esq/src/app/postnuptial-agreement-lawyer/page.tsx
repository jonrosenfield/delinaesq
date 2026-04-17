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
  title: 'Postnuptial Agreement Lawyer in California | Delina Yasmeh, Esq.',
  description: 'Postnuptial agreement lawyer in California for married entrepreneurs and high earners. Protect business equity and assets built during marriage. Paid intake.',
  alternates: { canonical: 'https://delina.esq/postnuptial-agreement-lawyer/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'Postnuptial Agreement Lawyer',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/postnuptial-agreement-lawyer/',
}

const FEATURES = [
  {
    title: 'Business Protection After Marriage',
    body: 'If you started or significantly grew a business during your marriage, that equity is presumed community property. A postnup can recharacterize it as separate property going forward.',
  },
  {
    title: 'Inheritance & Gift Clarity',
    body: 'Assets received as gifts or inheritance during marriage are generally separate property — but commingling them with community funds can change that. Delina drafts agreements that protect these assets explicitly.',
  },
  {
    title: 'Income & Compensation Reallocation',
    body: 'Salary, bonuses, and investment income earned during marriage flow into community property by default. A postnup can establish different rules for how these are treated going forward.',
  },
  {
    title: 'Dispute Prevention',
    body: 'The most expensive legal disputes are the ones that could have been resolved with a clear document. A postnup converts a difficult conversation into a signed, enforceable agreement.',
  },
]

const PAA = [
  {
    q: 'How long after marriage can you get a postnuptial agreement in California?',
    a: 'There is no statutory deadline. Couples can execute a valid postnuptial agreement at any point during the marriage, as long as both parties have independent legal counsel, make full financial disclosure, and sign voluntarily. Courts look more carefully at postnups executed during periods of marital distress, so the earlier the better.',
  },
  {
    q: 'Is a postnuptial agreement legally binding in California?',
    a: 'Yes, when properly executed. California recognizes postnuptial agreements under Family Code § 721, which governs contracts between spouses. The standard for enforceability is high: both spouses must act as fiduciaries, both must have independent counsel, and there must be full disclosure of assets and liabilities.',
  },
  {
    q: 'Do you need a lawyer for a postnuptial agreement?',
    a: 'Yes. California courts scrutinize agreements between spouses closely because of the inherent trust relationship. An agreement drafted without independent counsel for both parties is vulnerable to challenge on grounds of undue influence or inadequate disclosure. This is not a situation where a template or one attorney serving both parties will hold up.',
  },
]

const RELATED = [
  { label: 'Prenuptial Agreements', href: '/prenuptial-agreement-attorney' },
  { label: 'Business Contracts', href: '/business-contract-attorney' },
  { label: 'LLC Formation', href: '/llc-attorney' },
]

export default function PostnupPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero accent="#9B1527"
        eyebrow="Postnuptial Agreement Lawyer · California"
        headline="Postnuptial Agreement Lawyer"
        subhead="Delina Yasmeh drafts postnuptial agreements for California couples who&apos;ve built something during their marriage and need legal structure to protect it."
      />
      <LandingSection eyebrow="What a Postnup Actually Does" headline="What most married entrepreneurs don&apos;t realize about California law.">
        <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>California is a community property state. Income earned during a marriage, and assets purchased with that income, are presumed to belong equally to both spouses — regardless of who earned the money or whose name is on the account.</p>
          <p>For couples where one or both partners has started a business, received significant equity grants, or seen substantial income growth during the marriage, this default can have serious financial implications. A postnuptial agreement allows married couples to modify these rules by written contract.</p>
          <p>Unlike a prenup, a postnup is executed after marriage. Both are enforceable in California when drafted properly. The legal standard is high: both spouses must have independent legal counsel, there must be full financial disclosure, and the agreement must be signed voluntarily without coercion.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="Key Protections" headline="What Delina&apos;s postnuptial agreements address.">
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
      <RelatedArticles tags={['postnup', 'marital-agreements', 'family-law', 'business-assets']} />
      <LandingCTA
        headline="Ready to put structure around what you&apos;ve built together?"
        body="A postnuptial agreement converts an uncomfortable conversation into an enforceable document. Book a paid intake with Delina to discuss your specific situation and asset structure."
      />
      <Footer />
    </main>
  )
}
