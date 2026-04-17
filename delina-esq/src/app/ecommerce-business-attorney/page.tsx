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
  title: 'E-Commerce Business Attorney in California | Delina Yasmeh, Esq.',
  description: 'California e-commerce business attorney for online store owners. LLC formation, sales tax compliance, supplier contracts, and ecommerce tax strategy. Paid intake.',
  alternates: { canonical: 'https://delina.esq/ecommerce-business-attorney/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'E-Commerce Business Attorney',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/ecommerce-business-attorney/',
}

const FEATURES = [
  {
    title: 'LLC for Online Store',
    body: 'An LLC for your e-commerce business separates personal and business liability, positions your store income as business income for deduction purposes, and gives you a formal structure that suppliers, platforms, and payment processors take more seriously.',
  },
  {
    title: 'Supplier & Vendor Contracts',
    body: 'Wholesale agreements, dropship contracts, and manufacturing agreements each carry specific liability and IP concerns. Delina reviews supplier contracts before you commit to terms that are difficult to unwind once inventory is on order.',
  },
  {
    title: 'Website Legal Documents',
    body: 'Terms of service, privacy policy, and refund policy are not just legal boilerplate , they are the contracts that govern your relationship with every customer. California&apos;s CCPA creates specific disclosure and consent requirements for businesses with California customers.',
  },
  {
    title: 'E-Commerce Tax Strategy',
    body: 'Online store owners in California must collect sales tax on California sales and may have nexus obligations in other states. Delina advises on the e-commerce tax picture and entity structure to position your store for growth without surprise tax liabilities.',
  },
]

const PAA = [
  {
    q: 'Do I need an LLC for my online store?',
    a: 'If you are selling online and generating meaningful revenue, an LLC is worth serious consideration. It separates your personal assets from business liabilities , including customer claims, product liability, and platform disputes. The California minimum franchise tax is $800 per year. For stores doing $50,000 or more in annual revenue, the liability protection alone justifies the cost.',
  },
  {
    q: 'What legal documents does an e-commerce store need?',
    a: 'At minimum: terms of service, a privacy policy that meets California CCPA requirements, a refund and return policy, and properly drafted supplier agreements. If you have employees or contractors, you need those agreements as well. Delina drafts e-commerce legal documents that address the actual issues online sellers face.',
  },
  {
    q: 'How are e-commerce businesses taxed in California?',
    a: 'E-commerce businesses in California owe state income tax on net profit, sales tax on taxable California sales, and potentially federal self-employment tax if operating as a sole proprietor. An S-Corp or LLC taxed as an S-Corp can reduce the SE tax exposure. California also requires online businesses to register with the CDTFA for sales tax collection. Delina advises on the full tax picture for online store owners.',
  },
]

const RELATED = [
  { label: 'LLC Formation', href: '/llc-attorney' },
  { label: 'Business Contracts', href: '/business-contract-attorney' },
  { label: 'Tax Strategy', href: '/tax-attorney-small-business' },
]

export default function EcommerceBusinessAttorneyPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero accent="#8090A8"
        eyebrow="E-Commerce Business Attorney · California · Online Store Legal"
        headline="E-Commerce Business Attorney"
        subhead="Delina Yasmeh advises California e-commerce business owners on LLC formation, supplier contracts, website legal documents, and the tax strategy that online sellers need but rarely get."
      />
      <LandingSection eyebrow="The Legal Picture for Online Store Owners" headline="E-commerce businesses have specific legal needs that generic advice misses.">
        <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>Operating an online store as a sole proprietor means that every customer dispute, product liability claim, and supplier disagreement is a personal liability. Your personal savings, your car, and your home are all exposed to claims against your business. An LLC changes that , for $800 per year in California franchise tax plus formation costs.</p>
          <p>California has its own e-commerce requirements that many out-of-state guides omit. The California Consumer Privacy Act (CCPA) requires businesses with California customers to provide specific disclosures and honor opt-out requests for data sharing. A generic privacy policy template is unlikely to meet this standard.</p>
          <p>Online sellers also face a tax picture more complicated than a single Schedule C. Sales tax nexus in multiple states, platform 1099-K income, and the question of whether your business income qualifies for the qualified business income deduction all affect what you owe. Delina advises on the entity structure that positions your store for <Link href="/tax-attorney-small-business" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">real tax efficiency</Link>, not just lower complexity on this year&apos;s return.</p>
          <p>If you are building a brand alongside your store, <Link href="/trademark-attorney" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">trademark registration</Link> protects your name and product brand nationally. Online sellers on Amazon and other platforms are increasingly vulnerable to brand hijacking , a registered trademark gives you legal standing to enforce your rights.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="What Delina Covers" headline="Legal strategy for California e-commerce business owners.">
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
      <RelatedArticles tags={['ecommerce', 'llc', 'contract']} />
      <LandingCTA
        headline="Ready to run your online store with real legal infrastructure?"
        body="LLC formation, supplier contracts, website legal documents, and tax strategy , Delina advises e-commerce business owners who want to build something that lasts without surprise legal and tax problems. Tell us your situation, your store and what you actually need."
      />
      <Footer />
    </main>
  )
}
