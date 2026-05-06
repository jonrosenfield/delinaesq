import Link from 'next/link'
import { ConciergeBar } from './ConciergeBar'

const PRACTICE_AREAS = [
  { label: 'Prenuptial Agreement Attorney', href: '/prenuptial-agreement-attorney' },
  { label: 'Postnuptial Agreement Lawyer', href: '/postnuptial-agreement-lawyer' },
  { label: 'LLC Attorney', href: '/llc-attorney' },
  { label: 'S-Corp Attorney', href: '/s-corp-attorney' },
  { label: 'Business Contract Attorney', href: '/business-contract-attorney' },
  { label: 'Tax Attorney', href: '/tax-attorney-small-business' },
  { label: 'Business Structure Attorney', href: '/business-structure-attorney' },
  { label: 'Startup Lawyer', href: '/startup-attorney-california' },
  { label: 'Attorney for Creators & Influencers', href: '/creator-attorney' },
  { label: 'Trademark Attorney', href: '/trademark-attorney' },
  { label: 'Nonprofit Attorney', href: '/nonprofit-attorney' },
  { label: 'E-Commerce Business Attorney', href: '/ecommerce-business-attorney' },
]

export function Footer() {
  return (
    <>
      {/* Concierge strip, appears above footer on every page */}
      <ConciergeBar />

      <footer className="bg-ink border-t border-steel pt-20 pb-10 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Column 1 */}
            <div>
              <Link href="/" className="font-display text-[20px] tracking-[0.15em] text-white font-normal hover:text-silver transition-colors">
                DELINA.ESQ
              </Link>
              <p className="font-mono text-[13px] text-mist mt-2">
                A Lawyer for Every Stage of Your Business
              </p>
              <p className="font-mono text-[12px] text-mist/50 mt-6">
                California Bar Association
              </p>
              <p className="font-mono text-[12px] text-mist mt-2">
                &copy; 2026 Delina Yasmeh, Esq.
              </p>
              <p className="font-mono text-[8px] text-mist/40 mt-2 max-w-[200px] leading-relaxed">
                Attorney advertising. Past results do not guarantee future outcomes.
              </p>
            </div>

            {/* Column 2, Practice Areas */}
            <div>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-mist block mb-5">
                PRACTICE AREAS
              </span>
              {PRACTICE_AREAS.map((item) => (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className="font-sans text-[16px] text-silver hover:text-white transition-colors block mb-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Column 3, Connect */}
            <div>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-mist block mb-5">
                CONNECT
              </span>
              <a
                href="tel:818-888-6060"
                className="font-mono text-[16px] tracking-[0.05em] text-white hover:text-silver transition-colors block mb-2"
              >
                818-888-6060
              </a>
              <a
                href="mailto:info@delina.esq"
                className="font-mono text-[16px] tracking-[0.05em] text-white hover:text-silver transition-colors block mb-5"
              >
                info@delina.esq
              </a>
              <Link
                href="/book"
                className="font-sans text-[16px] text-white hover:text-silver transition-colors block mb-2"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="font-sans text-[16px] text-silver hover:text-white transition-colors block mb-2"
              >
                About Delina
              </Link>
              <Link
                href="/business-law-library"
                className="font-sans text-[16px] text-silver hover:text-white transition-colors block mb-2"
              >
                Law Library
              </Link>
              <a
                href="https://www.linkedin.com/in/delinayasmeh"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[16px] text-silver hover:text-white transition-colors block mb-2"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-steel mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="font-mono text-[12px] text-mist hover:text-silver transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="font-mono text-[12px] text-steel">·</span>
              <Link
                href="/terms"
                className="font-mono text-[12px] text-mist hover:text-silver transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <p className="font-mono text-[12px] text-mist italic">
              Structure protects what strategy builds.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
