'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { motion } from 'framer-motion'

export function Philosophy() {
  return (
    <section id="philosophy" className="section-spacing relative overflow-hidden">
      <div className="section-container relative z-10">
        <ScrollReveal>
          <SectionTag text="FIRM OVERVIEW" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-display-lg font-bold mt-8 mb-8">
            Our <span className="gradient-text">Philosophy</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-display-sm font-display text-slate-400 max-w-3xl leading-snug mb-4">
            Most lawyers don&apos;t understand tax.
          </p>
          <p className="text-display-sm font-display text-slate-400 max-w-3xl leading-snug">
            Most accountants don&apos;t understand law.
          </p>
        </ScrollReveal>

        {/* Decorative line */}
        <ScrollReveal delay={0.3}>
          <div className="my-12 h-[1px] max-w-xs bg-gradient-to-r from-neon-pink/60 via-cyber-violet/40 to-transparent" />
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-4">
            But tax and legal strategy affect the same decisions — entity type, compensation, contracts, and risk.
          </p>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            When those decisions are made separately, problems follow: inefficient tax treatment, missed elections, unenforceable terms, and inconsistent filings.
          </p>
        </ScrollReveal>

        {/* Solution Block */}
        <ScrollReveal delay={0.4}>
          <div className="glass-card p-8 md:p-12 mt-16 max-w-3xl">
            <h3 className="font-display text-display-sm font-bold text-sage-100 mb-4">
              This firm solves that.
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Integrated legal and tax strategy — aligning formation, contracts, and compensation so everything works together. One advisor. Full visibility. No disconnect.
            </p>
          </div>
        </ScrollReveal>

        {/* Law + Tax Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl">
          <ScrollReveal delay={0.2} direction="left">
            <div className="glass-card p-8 h-full group hover:shadow-neon-pink transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-neon-pink/10 flex items-center justify-center">
                  <span className="text-neon-pink font-mono text-sm font-bold">L</span>
                </div>
                <h3 className="font-display text-xl font-bold text-sage-100">LAW</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                How you operate — how you structure ownership, define relationships, allocate risk, and protect your rights. You hire a lawyer to create clear agreements, defend your interests, limit liability, and build systems that hold under pressure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <div className="glass-card p-8 h-full group hover:shadow-neon-blue transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center">
                  <span className="text-electric-blue font-mono text-sm font-bold">T</span>
                </div>
                <h3 className="font-display text-xl font-bold text-sage-100">TAX</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                How you keep what you earn — how your business is classified, how income is treated, and how much is lost to the system. You hire a tax strategist to reduce exposure, use the code to your advantage, and design structures that preserve wealth legally and efficiently.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <p className="mt-16 text-sage-200 text-lg leading-relaxed max-w-3xl font-body">
            Together, these two forces determine whether your business is{' '}
            <span className="text-sage-100 font-medium">protected, profitable, and built to last</span> — or exposed, inefficient, and vulnerable to collapse.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
