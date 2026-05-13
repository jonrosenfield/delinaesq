import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Delina Yasmeh, Esq. | California Attorney & Tax Strategist',
  description: 'Delina Yasmeh holds a JD, LL.M. in Taxation, and a degree in accounting. Former SingerLewak, Deloitte M&A, and PwC. Boutique practice for founders and entrepreneurs.',
  alternates: { canonical: 'https://delina.esq/about' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Delina Yasmeh',
  jobTitle: 'Attorney',
  description: 'California attorney specializing in legal and tax strategy for entrepreneurs, founders, and high-net-worth individuals.',
  url: 'https://delina.esq/about/',
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Juris Doctor (JD)' },
    { '@type': 'EducationalOrganization', name: 'Master of Laws in Taxation (LL.M.)' },
  ],
  worksFor: {
    '@type': 'LegalService',
    name: 'Delina Yasmeh Law',
    url: 'https://delina.esq',
  },
}

const CAREER = [
  {
    number: '01',
    firm: 'SingerLewak',
    role: 'Specialty Tax Advisory',
    description: 'Began her career at SingerLewak, one of the largest accounting and advisory firms on the West Coast. Advised on complex partnership structures, multi-entity operations, and high-level tax issues across jurisdictions.',
  },
  {
    number: '02',
    firm: 'Deloitte',
    role: 'M&A Tax Group, Los Angeles',
    description: 'Recruited to Deloitte\'s Mergers & Acquisitions Tax Group to advise private equity firms and corporate buyers on transactions valued in the hundreds of millions, covering tax due diligence, risk identification, and structural planning.',
  },
  {
    number: '03',
    firm: 'PwC',
    role: 'Silicon Valley',
    description: 'Focused on tech transactions, IP-heavy acquisitions, and venture-backed deals. Worked closely with investors, founders, and legal teams on cross-border structuring and multi-jurisdictional tax strategy.',
  },
  {
    number: '04',
    firm: 'Litigation Practice',
    role: 'Trial Firm',
    description: 'After Big Four tenure, transitioned into litigation, managing over 150 active cases at a high-volume trial firm. Work included hearings, settlement negotiations, and procedural motion practice.',
  },
]

export default function AboutPage() {
  return (
    <main className="bg-parchment pt-[52px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      {/* Hero */}
      <header className="bg-ink py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-8">
            About · Delina Yasmeh, Esq.
          </span>
          <h1
            className="font-display font-light text-white leading-[0.92] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            Delina Yasmeh
          </h1>
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-mist/60 mt-4">
            JD · LL.M. Taxation · California Attorney
          </p>
        </div>
      </header>

      {/* Photo + Bio */}
      <section className="py-20 px-6 bg-parchment">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-14 items-start">

          {/* Photo */}
          <div className="aspect-[3/4] relative overflow-hidden">
            <Image
              src="/delina-yasmeh-attorney.png"
              alt="Delina Yasmeh, Esq., California Attorney and Tax Strategist"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>

          {/* Bio */}
          <div className="pt-2">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-6">
              Background
            </span>
            <div className="space-y-5 font-sans text-[19px] text-ink/65 leading-[1.8] max-w-[620px]">
              <p>
                Delina Yasmeh is the founder and principal attorney of Delina Yasmeh Law, a boutique legal practice delivering high-level legal and tax counsel to founders, operators, and entrepreneurs across industries and jurisdictions.
              </p>
              <p>
                She holds a Juris Doctor (JD), a Master of Laws in Taxation (LL.M.), the most advanced academic credential in U.S. tax law, and a degree in accounting. This multidisciplinary background allows her to advise with precision across legal, tax, and financial dimensions simultaneously.
              </p>
              <p>
                Most attorneys know law. Most accountants know tax. Delina knows both, and understands how they intersect in ways that change the outcome for clients who are building real businesses.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { label: 'Juris Doctor', sub: 'JD' },
                { label: 'Master of Laws', sub: 'LL.M. Taxation' },
                { label: 'Accounting', sub: 'B.S.' },
              ].map((cred) => (
                <div key={cred.sub} className="border border-steel/20 bg-white p-5">
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-mist block mb-1">{cred.sub}</span>
                  <span className="font-sans font-medium text-ink text-[1.1rem] leading-snug">{cred.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-10">
            Philosophy
          </span>
          <blockquote
            className="font-display italic font-light text-ivory leading-[1.3]"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.75rem)' }}
          >
            &ldquo;Lawyers don&apos;t know tax. Accountants don&apos;t know law. My clients shouldn&apos;t have to pay for that gap.&rdquo;
          </blockquote>
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist/60 mt-8">
           , Delina Yasmeh, Esq.
          </p>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="bg-parchment py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-12">
            Career
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CAREER.map((item) => (
              <div
                key={item.number}
                className="bg-white border border-steel/20 p-8"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
              >
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-mist/60 block mb-4">
                  {item.number}
                </span>
                <h3 className="font-sans font-medium text-ink text-[1.4rem] leading-tight mb-1">
                  {item.firm}
                </h3>
                <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-mist mb-4">
                  {item.role}
                </p>
                <p className="font-sans text-[16px] text-ink/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current practice */}
      <section className="bg-ivory border-t border-steel/15 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[55fr_45fr] gap-14 items-center">
          <div>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-6">
              Today
            </span>
            <h2
              className="font-display font-light text-ink leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
            >
              Delina Yasmeh Law
            </h2>
            <div className="space-y-4 font-sans text-[19px] text-ink/65 leading-[1.8] max-w-[560px]">
              <p>
                She founded Delina Yasmeh Law to offer a rare combination of legal, tax, financial, and litigation expertise under one roof. The practice is built around a simple premise: most businesses are paying for fragmentation, separate attorneys, CPAs, and advisors who don&apos;t talk to each other.
              </p>
              <p>
                Her clients are founders, operators, and entrepreneurs who want one attorney who understands all of it, entity structure, tax strategy, contracts, and the decisions that compound over time.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 border border-ink/30 text-ink font-mono text-[13px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-ink hover:text-white transition-all duration-200 self-start"
            >
              Get Started →
            </Link>
            <p className="font-mono text-[12px] text-ink/35 uppercase tracking-[0.15em]">
              By appointment
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
