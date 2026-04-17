import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Intake Received | Delina Yasmeh, Esq.',
  description: 'Your intake has been received. Delina will review and confirm within 1–2 business days.',
  robots: 'noindex',
}

export default function ThankYouPage() {
  return (
    <main className="bg-parchment pt-[52px] min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-28 px-6">
        <div className="max-w-[560px] w-full">

          {/* Eyebrow */}
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-mist block mb-10">
            Intake Received
          </span>

          {/* Headline */}
          <h1
            className="font-display font-light text-ink leading-[1.0] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            You&apos;re on<br />the calendar.
          </h1>

          {/* Rule */}
          <div className="w-10 h-px bg-ink/20 mb-8" />

          {/* Body */}
          <p className="font-sans text-[19px] text-ink/60 leading-[1.8] mb-12 max-w-[440px]">
            Delina will review your intake and confirm a time within 1–2 business days.
            Check your inbox, details will be sent to the email you provided.
          </p>

          {/* What happens next */}
          <div className="border-t border-steel/20 pt-10 mb-12 space-y-7">
            {[
              ['01', 'Delina reviews your situation before the session so nothing is wasted on setup.'],
              ['02', 'You receive a confirmation with logistics within 1–2 business days.'],
              ['03', 'The session is 60 minutes. Come with specifics, that is where the value is.'],
            ].map(([num, text]) => (
              <div key={num} className="flex gap-6 items-start">
                <span
                  className="font-display font-light text-ink/10 leading-none flex-shrink-0 select-none"
                  style={{ fontSize: '3.5rem', lineHeight: 1 }}
                >
                  {num}
                </span>
                <p className="font-sans text-[16px] text-ink/55 leading-relaxed pt-2">{text}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-ink/25 text-ink font-mono text-[12px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-ink hover:text-white transition-all duration-200"
            >
              Return Home →
            </Link>
            <Link
              href="/business-law-library"
              className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist hover:text-ink transition-colors"
            >
              Browse the Library →
            </Link>
          </div>

          {/* Contact fallback */}
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-mist/60">
            Questions? <a href="mailto:hello@delina.esq" className="hover:text-ink transition-colors">hello@delina.esq</a>
          </p>

        </div>
      </div>

      <Footer />
    </main>
  )
}
