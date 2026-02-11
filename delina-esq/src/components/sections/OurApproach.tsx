'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { motion } from 'framer-motion'

const credentials = [
  { label: 'JD', color: 'hot-pink', rotate: '-2deg' },
  { label: 'LL.M. TAXATION', color: 'electric', rotate: '1.5deg' },
  { label: 'ACCOUNTING', color: 'cyber-violet', rotate: '-1deg' },
  { label: 'DELOITTE', color: 'hot-pink', rotate: '2deg' },
  { label: 'PWC', color: 'electric', rotate: '-1.5deg' },
  { label: '150+ CASES', color: 'slime', rotate: '1deg' },
]

const colorMap: Record<string, string> = {
  'hot-pink': 'border-hot-pink/40 text-hot-pink bg-hot-pink/5',
  'electric': 'border-electric/40 text-electric bg-electric/5',
  'cyber-violet': 'border-cyber-violet/40 text-cyber-violet bg-cyber-violet/5',
  'slime': 'border-slime/40 text-slime bg-slime/5',
}

export function OurApproach() {
  return (
    <section id="approach" className="relative py-32 md:py-40 overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute bottom-12 left-8 w-32 h-32 border-b-2 border-l-2 border-cyber-violet/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Right-aligned header — breaks the left-aligned pattern */}
        <div className="text-right mb-16">
          <ScrollReveal>
            <SectionTag text="OUR APPROACH" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-display-lg font-bold mt-8 mb-4 text-cream italic">
              Legal and Tax<br />
              <span className="font-pixel not-italic text-hot-pink uppercase text-display-md">Aligned From the Start</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-void-300 text-xl max-w-2xl leading-relaxed ml-auto font-body">
              Most professionals focus on one side: legal or tax.
              <br />
              This firm handles both — and aligns them from the start.
            </p>
          </ScrollReveal>
        </div>

        {/* Credentials Card — tilted glass with bevel */}
        <ScrollReveal delay={0.3}>
          <motion.div
            className="glass-card p-8 md:p-12 max-w-3xl border-2 border-void-700"
            whileHover={{ scale: 1.01 }}
            style={{ boxShadow: '5px 5px 0px #000' }}
          >
            <p className="text-void-300 leading-relaxed mb-4 font-body">
              Delina Yasmeh holds a JD, an LL.M. in Taxation, and a degree in accounting. She began at Deloitte and PwC advising on complex M&amp;A, cross-border structuring, and high-value transactions. She later managed 150+ litigation cases at a high-volume trial firm.
            </p>
            <p className="text-void-300 leading-relaxed font-body">
              This combination of tax, legal, financial, and litigation experience is built into every engagement.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Sticker-style credential badges */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap gap-3 mt-10 mb-16 max-w-3xl">
            {credentials.map((cred) => (
              <span
                key={cred.label}
                className={`sticker ${colorMap[cred.color]}`}
                style={{ '--sticker-rotate': cred.rotate } as React.CSSProperties}
              >
                {cred.label}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="max-w-3xl">
            <div className="editorial-divider mb-8" />
            <p className="text-cream text-lg leading-relaxed font-serif italic">
              This isn&apos;t general counsel or outsourced compliance. This is structural legal strategy with tax precision.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
