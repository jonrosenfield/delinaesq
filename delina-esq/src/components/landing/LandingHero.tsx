import Link from 'next/link'

interface LandingHeroProps {
  eyebrow: string
  headline: string
  subhead: string
  ctaHref?: string
  accent?: string // hex color matching homepage grid group
}

export function LandingHero({ eyebrow, headline, subhead, ctaHref = '/book', accent }: LandingHeroProps) {
  const background = accent
    ? `linear-gradient(135deg, #0A0A0A 0%, #0A0A0A 35%, ${accent}55 68%, ${accent}99 100%)`
    : '#0A0A0A'

  return (
    <section className="pb-24 px-6" style={{ background }}>
      <div className="max-w-[900px] mx-auto pt-20">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-white/40 block mb-8">
          {eyebrow}
        </span>
        <h1
          className="font-display font-medium text-white leading-[0.95] mb-8"
          style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)', letterSpacing: '0.02em' }}
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        <p className="font-sans font-light text-[21px] text-white/70 max-w-[560px] leading-relaxed mb-10">
          {subhead}
        </p>
        <Link
          href={ctaHref}
          className="btn-primary text-[13px] font-mono uppercase tracking-[0.2em] py-4 px-8"
        >
          Book Your Intake →
        </Link>
      </div>
    </section>
  )
}
