import Link from 'next/link'

interface LandingCTAProps {
  headline: string
  body: string
  ctaHref?: string
}

export function LandingCTA({ headline, body, ctaHref = '/book' }: LandingCTAProps) {
  return (
    <section className="bg-ink py-24 px-6">
      <div className="max-w-[700px] mx-auto text-center">
        <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/60 block mb-5">
          By Appointment · Boutique Practice
        </span>
        <h2
          className="font-display font-light text-white leading-[0.92] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
        >
          {headline}
        </h2>
        <p className="font-sans font-light text-[19px] text-white/75 max-w-[460px] mx-auto mt-5 leading-relaxed">
          {body}
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 px-10 py-4 mt-9 border border-white/50 text-white font-mono text-[13px] uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all duration-200"
        >
          Get Started →
        </Link>
      </div>
    </section>
  )
}
