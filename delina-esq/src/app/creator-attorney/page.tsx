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
  title: 'Attorney for Content Creators, Influencers & Digital Entrepreneurs | Delina Yasmeh, Esq.',
  description: 'California attorney for content creators and influencers. Brand deals, LLC formation, tax write-offs, and IP protection for creators who make real money. Paid intake.',
  alternates: { canonical: 'https://delina.esq/creator-attorney/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Delina Yasmeh, Esq.',
  serviceType: 'Attorney for Content Creators and Influencers',
  areaServed: { '@type': 'State', name: 'California' },
  url: 'https://delina.esq/creator-attorney/',
}

const FEATURES = [
  {
    title: 'Brand Deal Contract Review',
    body: 'Sponsorship agreements, licensing deals, and brand partnerships include exclusivity clauses, content approval rights, kill fees, and IP ownership language. A template from a manager or brand does not protect you. Delina reviews and negotiates contracts before you sign.',
  },
  {
    title: 'Creator LLC Formation',
    body: 'An LLC separates your personal assets from your business liabilities and positions your creator income as business income , which opens up deductions unavailable to individuals. California creators with consistent brand income should be operating through an entity, not as sole proprietors.',
  },
  {
    title: 'Content Creator Tax Strategy',
    body: 'Home office deductions, equipment, travel, production costs, and platform fees are all potentially deductible for creators operating as businesses. California taxes all of this income at ordinary income rates. Delina advises on the deduction strategy and entity structure that maximizes what you keep.',
  },
  {
    title: 'Trademark & Brand Protection',
    body: 'Your name, logo, and content brand are intellectual property. A federal trademark registration gives you nationwide protection and legal standing to stop infringers. Delina advises creators on when to register and handles the filing through the USPTO.',
  },
]

const PAA = [
  {
    q: 'Do content creators need an LLC?',
    a: 'If you are earning consistent income from brand deals, sponsorships, licensing, or platform revenue, an LLC provides liability protection and access to business tax deductions that are unavailable to sole proprietors. The $800 California minimum franchise tax is the entry cost. For creators earning $50,000 or more annually, the tax and liability benefits typically outweigh the cost.',
  },
  {
    q: 'What legal documents do content creators need?',
    a: 'At minimum: an LLC operating agreement if you have one, a form brand deal contract that you control rather than signing the brand\'s template, a licensing agreement for content you license to others, and a trademark registration for your brand name if you are building something lasting. Delina drafts creator-specific documents that address the actual issues in creator contracts , not generic business agreements with your name swapped in.',
  },
  {
    q: 'What can content creators write off on taxes?',
    a: 'Equipment, software, home office space, travel for content creation, production costs, platform fees, education related to your creator business, and professional services including legal and accounting fees. The key is that deductions require business intent and documentation. Delina advises creators on building a deduction strategy , not just collecting receipts.',
  },
]

const RELATED = [
  { label: 'LLC Formation', href: '/llc-attorney' },
  { label: 'Business Contracts', href: '/business-contract-attorney' },
  { label: 'Tax Strategy', href: '/tax-attorney-small-business' },
]

export default function CreatorAttorneyPage() {
  return (
    <main className="bg-parchment">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <LandingHero accent="#9B1527"
        eyebrow="Attorney for Creators · Influencers · Digital Entrepreneurs"
        headline="Creator &amp; Influencer Attorney"
        subhead="Delina Yasmeh advises California content creators, influencers, and digital entrepreneurs on brand deal contracts, LLC formation, tax strategy, and IP protection , for creators who have outgrown the advice they&apos;re getting."
      />
      <LandingSection eyebrow="Why Creators Need Their Own Legal Strategy" headline="The creator economy is a real business. Your legal structure should reflect that.">
        <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-relaxed max-w-[720px]">
          <p>Most creators operating as sole proprietors are leaving money on the table and taking on personal liability they do not have to. Every brand deal you sign as an individual exposes your personal assets to claims arising from that deal. Every dollar you earn as a sole proprietor is subject to self-employment tax at 15.3%. Neither of these is required.</p>
          <p>California creators with $50,000 or more in annual brand income should be operating through an entity. An <Link href="/llc-attorney" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">LLC</Link> provides liability protection, access to business deductions, and the option to elect S-Corp tax treatment once income justifies it. The $800 California minimum franchise tax is not nothing , but it is not the reason to avoid forming an entity.</p>
          <p>Brand deal contracts are written by brands and their lawyers. They default to terms that favor the brand: broad content approval rights, indefinite licensing of your likeness, low kill fees, and exclusivity windows that are longer than you realize. Delina reviews these contracts before you sign , not after the brand has already used your content in a way you did not intend to authorize.</p>
          <p>If you are building a recognizable brand, <Link href="/trademark-attorney" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">federal trademark registration</Link> protects your name and logo nationwide. The registration process takes 12 to 18 months. The protection runs from your filing date, not your registration date. Waiting until your brand is established means a competitor can establish prior rights in your name in another state.</p>
        </div>
      </LandingSection>
      <LandingSection eyebrow="What Delina Covers" headline="Legal strategy for creators and digital entrepreneurs.">
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
      <RelatedArticles tags={['creator', 'influencer', 'llc', 's-corp']} />
      <LandingCTA
        headline="Ready to run your creator business like a business?"
        body="Brand deal contracts, LLC formation, tax strategy, and trademark registration , Delina advises creators who have real income and want real legal infrastructure. Tell us your situation, where you are and what you actually need."
      />
      <Footer />
    </main>
  )
}
