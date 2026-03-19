import Link from 'next/link'

interface LandingHeroProps {
  eyebrow: string
  headline: string
  subhead: string
  ctaHref?: string
}

export function LandingHero({ eyebrow, headline, subhead, ctaHref = '/book' }: LandingHeroProps) {
  return (
    <section className="bg-ink pb-24 px-6">
      <div className="max-w-[900px] mx-auto pt-20">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-8">
          {eyebrow}
        </span>
        <h1
          className="font-display font-light text-white leading-[0.92] tracking-[-0.03em] mb-8"
          style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)' }}
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        <p className="font-sans font-light text-[17px] text-silver max-w-[560px] leading-relaxed mb-10">
          {subhead}
        </p>
        <Link
          href={ctaHref}
          className="btn-primary text-[10px] font-mono uppercase tracking-[0.2em] py-4 px-8"
        >
          Book Your Intake →
        </Link>
      </div>
    </section>
  )
}
