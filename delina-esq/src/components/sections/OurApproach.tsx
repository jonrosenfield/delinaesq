'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'

export function OurApproach() {
  return (
    <section id="approach" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <SectionTag text="OUR APPROACH" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-display-lg font-bold mt-8 mb-8">
            <span className="gradient-text">Legal and Tax</span>{' '}
            Aligned From the Start
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-slate-300 text-xl max-w-2xl leading-relaxed mb-8">
            Most professionals focus on one side: legal or tax.
            <br />
            This firm handles both — and aligns them from the start.
          </p>
        </ScrollReveal>

        {/* Credentials */}
        <ScrollReveal delay={0.3}>
          <div className="glass-card p-8 md:p-12 max-w-3xl mb-8">
            <p className="text-slate-300 leading-relaxed mb-4">
              Delina Yasmeh holds a JD, an LL.M. in Taxation, and a degree in accounting. She began at Deloitte and PwC advising on complex M&amp;A, cross-border structuring, and high-value transactions. She later managed 150+ litigation cases at a high-volume trial firm.
            </p>
            <p className="text-slate-300 leading-relaxed">
              This combination of tax, legal, financial, and litigation experience is built into every engagement.
            </p>
          </div>
        </ScrollReveal>

        {/* Credential Chips */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap gap-3 mb-12 max-w-3xl">
            {['JD', 'LL.M. Taxation', 'Accounting', 'Deloitte', 'PwC', '150+ Cases'].map((cred) => (
              <span
                key={cred}
                className="font-mono text-[10px] tracking-[0.15em] uppercase px-4 py-2 rounded-pill border border-cyber-violet/30 bg-cyber-violet/5 text-cyber-violet"
              >
                {cred}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="max-w-3xl">
            <div className="h-[1px] bg-gradient-to-r from-neon-pink/40 to-transparent mb-8" />
            <p className="text-sage-100 text-lg leading-relaxed font-medium">
              This isn&apos;t general counsel or outsourced compliance. This is structural legal strategy with tax precision.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
