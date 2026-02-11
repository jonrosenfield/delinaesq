'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { motion } from 'framer-motion'

const targets = [
  'Business owners earning $250K+',
  'Creators and service providers scaling to multi-entity structures',
  'Founders preparing for investment, acquisition, or partnership',
  'Clients who need tax and legal aligned — not fragmented',
  'Operators working in California and other U.S. jurisdictions',
]

export function WhoThisIsFor() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <SectionTag text="WHO THIS IS FOR" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-display-md font-bold mt-8 mb-12 text-sage-100">
            This practice serves:
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl">
          {targets.map((target, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.08}>
              <motion.div
                className="flex items-start gap-4 py-4 border-b border-white/[0.04] group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-neon-pink font-mono text-sm mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-slate-300 text-lg leading-relaxed group-hover:text-sage-100 transition-colors duration-300">
                  {target}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <p className="mt-12 text-sage-200 font-body text-lg leading-relaxed max-w-xl">
            <strong className="text-sage-100">Strategic, customized engagements</strong> handled directly by an experienced attorney.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
