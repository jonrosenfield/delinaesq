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
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Decorative corner borders */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-hot-pink/20 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-electric/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial anti-grid: 12-col layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Tag in col 1-3 */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <ScrollReveal>
              <SectionTag text="WHO THIS IS FOR" />
            </ScrollReveal>
          </div>

          {/* Header in col 4-12, offset for editorial feel */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 md:col-start-5 lg:col-start-4">
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-display-lg font-bold mt-6 md:mt-0 mb-4 text-cream italic">
                This practice serves<span className="text-hot-pink">:</span>
              </h2>
              <p className="font-pixel text-[10px] tracking-[0.2em] uppercase text-void-400 mb-12">
                {'// SELECTIVE ENGAGEMENTS ONLY'}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Target list — editorial offset */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-9 md:col-start-4 lg:col-start-4">
            {targets.map((target, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.08}>
                <motion.div
                  className="flex items-start gap-5 py-5 border-b border-void-700/60 group cursor-default"
                  whileHover={{ x: 12 }}
                  transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <span className="font-pixel text-[10px] text-hot-pink/60 mt-1.5 group-hover:text-hot-pink transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-void-300 text-lg leading-relaxed font-body group-hover:text-cream transition-colors duration-300">
                    {target}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom line + summary */}
        <div className="grid grid-cols-12 gap-4 mt-16">
          <div className="col-span-12 md:col-span-8 md:col-start-4 lg:col-start-4">
            <ScrollReveal delay={0.6}>
              <div className="editorial-divider mb-8" />
              <p className="text-void-300 font-body text-editorial leading-relaxed">
                <strong className="text-cream font-serif italic">Strategic, customized engagements</strong>{' '}
                handled directly by an experienced attorney.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
