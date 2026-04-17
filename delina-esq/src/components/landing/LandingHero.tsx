import Link from 'next/link'

interface LandingHeroProps {
  eyebrow: string
  headline: string
  subhead: string
  ctaHref?: string
  accent?: string // hex color matching homepage grid group
}

export function LandingHero({ eyebrow, headline, subhead, ctaHref = '/book', accent }: LandingHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex flex-col justify-end">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale"
        src="/delina-hero-test.mp4"
      />

      {/* Base dark blur overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(10,10,10,0.72)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      />

      {/* Accent color tint — diagonal wash from bottom-right */}
      {accent && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 0%, ${accent}25 35%, ${accent}55 65%, ${accent}88 100%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 lg:px-12 pt-32 pb-20">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-white/50 block mb-8">
          {eyebrow}
        </span>
        <h1
          className="font-display font-medium text-white leading-[0.95] mb-8 max-w-[800px]"
          style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)', letterSpacing: '0.02em' }}
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        <p className="font-sans font-light text-[21px] text-white/75 max-w-[560px] leading-relaxed mb-10">
          {subhead}
        </p>
        <Link
          href={ctaHref}
          className="btn-primary text-[13px] font-mono uppercase tracking-[0.2em] py-4 px-8"
        >
          Get Started →
        </Link>
      </div>
    </section>
  )
}
