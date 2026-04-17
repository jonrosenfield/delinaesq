import Link from 'next/link'

export function CTABanner() {
  return (
    <section id="contact" className="bg-parchment py-28 px-6 border-t border-steel/15">
      <div className="max-w-[760px] mx-auto text-center">
        {/* Eyebrow */}
        <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-ink/35 block mb-8">
          Paid Intake · California Only · By Appointment
        </span>

        {/* Headline */}
        <h2
          className="font-display font-light text-ink leading-[0.92] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
        >
          Ready to protect<br />what you&apos;ve built?
        </h2>

        {/* Rule */}
        <div className="w-12 h-px bg-ink/20 mx-auto mt-8 mb-8" />

        {/* Body */}
        <p className="font-sans font-light text-[19px] text-ink/55 max-w-[440px] mx-auto leading-relaxed">
          This is not a free consultation. It is a focused, strategic session with an attorney
          who has specific opinions about your situation.
        </p>

        {/* Button */}
        <Link
          href="/book"
          className="inline-flex items-center gap-2 border border-ink/30 text-ink font-mono text-[13px] uppercase tracking-[0.2em] px-10 py-4 mt-10 hover:bg-ink hover:text-white transition-all duration-200"
        >
          Get Started →
        </Link>
      </div>
    </section>
  )
}
