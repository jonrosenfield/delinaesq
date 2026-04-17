import Link from 'next/link'

export function CTABanner() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/delina-hero-test.mp4"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(10,10,10,0.72)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      />

      <div className="relative z-10 max-w-[760px] mx-auto text-center">
        {/* Eyebrow */}
        <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-white/40 block mb-8">
          By Appointment · Every Engagement Tailored
        </span>

        {/* Headline */}
        <h2
          className="font-display font-light text-white leading-[0.92] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
        >
          Ready to protect<br />what you&apos;ve built?
        </h2>

        {/* Rule */}
        <div className="w-12 h-px bg-white/20 mx-auto mt-8 mb-8" />

        {/* Body */}
        <p className="font-sans font-light text-[19px] text-white/60 max-w-[440px] mx-auto leading-relaxed">
          Every situation is different. Tell us yours and we&apos;ll respond with exactly how we can help.
        </p>

        {/* Button */}
        <Link
          href="/book"
          className="inline-flex items-center gap-2 border border-white/30 text-white font-mono text-[13px] uppercase tracking-[0.2em] px-10 py-4 mt-10 hover:bg-white hover:text-ink transition-all duration-200"
        >
          Get Started →
        </Link>
      </div>
    </section>
  )
}
