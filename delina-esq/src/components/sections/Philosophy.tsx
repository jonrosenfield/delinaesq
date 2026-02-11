'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { motion } from 'framer-motion'

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 md:py-40 overflow-hidden">
      {/* Overlapping decorative rectangles */}
      <div className="absolute top-20 right-12 w-48 h-48 border border-hot-pink/10 rounded-retro rotate-12 pointer-events-none hidden lg:block" />
      <div className="absolute top-28 right-20 w-48 h-48 border border-electric/10 rounded-retro rotate-6 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <SectionTag text="FIRM OVERVIEW" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-pixel text-display-md font-bold mt-8 mb-8 uppercase">
            Our <span className="gradient-text">Philosophy</span>
          </h2>
        </ScrollReveal>

        {/* The gap statement — editorial serif */}
        <div className="relative">
          <ScrollReveal delay={0.2}>
            <p className="font-serif text-display-sm text-void-400 max-w-3xl leading-snug mb-3 italic">
              Most lawyers don&apos;t understand tax.
            </p>
            <p className="font-serif text-display-sm text-void-400 max-w-3xl leading-snug italic">
              Most accountants don&apos;t understand law.
            </p>
          </ScrollReveal>

          {/* Floating sticker */}
          <div className="sticker absolute -right-4 top-0 hidden md:block" style={{ '--sticker-rotate': '-6deg' } as React.CSSProperties}>
            THE GAP
          </div>
        </div>

        {/* Editorial divider */}
        <ScrollReveal delay={0.3}>
          <div className="editorial-divider my-12 max-w-xs" />
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="text-void-300 text-lg max-w-2xl leading-relaxed mb-4 font-body">
            But tax and legal strategy affect the same decisions — entity type, compensation, contracts, and risk.
          </p>
          <p className="text-void-300 text-lg max-w-2xl leading-relaxed font-body">
            When those decisions are made separately, problems follow: inefficient tax treatment, missed elections, unenforceable terms, and inconsistent filings.
          </p>
        </ScrollReveal>

        {/* Solution Block — beveled glass */}
        <ScrollReveal delay={0.4}>
          <div className="glass-card p-8 md:p-12 mt-16 max-w-3xl border-2 border-void-700 shadow-bevel">
            <h3 className="font-pixel text-sm text-hot-pink uppercase tracking-wider mb-4">
              THIS FIRM SOLVES THAT
            </h3>
            <p className="text-void-200 text-lg leading-relaxed font-body">
              Integrated legal and tax strategy — aligning formation, contracts, and compensation so everything works together. One advisor. Full visibility. No disconnect.
            </p>
          </div>
        </ScrollReveal>

        {/* Law + Tax Cards — tilted for anti-grid feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-4xl">
          <ScrollReveal delay={0.2} direction="left">
            <motion.div
              className="glass-card p-8 h-full border-2 border-void-700 group"
              whileHover={{ scale: 1.02 }}
              style={{ boxShadow: '4px 4px 0px #00FF41' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-retro bg-hot-pink/10 border border-hot-pink/30 flex items-center justify-center">
                  <span className="text-hot-pink font-pixel text-xs font-bold">L</span>
                </div>
                <h3 className="font-pixel text-lg font-bold text-cream uppercase">LAW</h3>
              </div>
              <p className="text-void-400 leading-relaxed text-sm font-body">
                How you operate — how you structure ownership, define relationships, allocate risk, and protect your rights. You hire a lawyer to create clear agreements, defend your interests, limit liability, and build systems that hold under pressure.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <motion.div
              className="glass-card p-8 h-full border-2 border-void-700 group"
              whileHover={{ scale: 1.02 }}
              style={{ boxShadow: '4px 4px 0px #00F5FF' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-retro bg-electric/10 border border-electric/30 flex items-center justify-center">
                  <span className="text-electric font-pixel text-xs font-bold">T</span>
                </div>
                <h3 className="font-pixel text-lg font-bold text-cream uppercase">TAX</h3>
              </div>
              <p className="text-void-400 leading-relaxed text-sm font-body">
                How you keep what you earn — how your business is classified, how income is treated, and how much is lost to the system. You hire a tax strategist to reduce exposure, use the code to your advantage, and design structures that preserve wealth legally and efficiently.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <p className="mt-16 text-void-300 text-lg leading-relaxed max-w-3xl font-body">
            Together, these two forces determine whether your business is{' '}
            <span className="text-cream font-serif italic">protected, profitable, and built to last</span> — or exposed, inefficient, and vulnerable to collapse.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
