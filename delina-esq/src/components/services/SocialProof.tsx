'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { motion } from 'framer-motion'
import type { Metric, AccentColor } from '@/lib/services'
import { colorMap } from '@/lib/services'

interface SocialProofProps {
  metrics: Metric[]
  color: AccentColor
}

export function SocialProof({ metrics, color }: SocialProofProps) {
  const colors = colorMap[color]

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-electric/15 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <SectionTag text="BY THE NUMBERS" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-display-lg font-bold mt-8 mb-4 text-cream italic">
              Results speak.
            </h2>
            <p className="text-void-400 text-lg max-w-2xl mx-auto font-body">
              Measurable outcomes from real client engagements.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {metrics.map((metric, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.08}>
              <motion.div
                className="glass-card p-6 md:p-8 text-center border-2 border-void-700 h-full"
                whileHover={{ scale: 1.03 }}
                style={{ boxShadow: `3px 3px 0px ${colors.shadow}` }}
              >
                <span className={`block font-pixel text-2xl md:text-3xl font-bold ${colors.accent} mb-2`}>
                  {metric.value}
                </span>
                <span className="block font-pixel text-[10px] tracking-[0.15em] uppercase text-cream mb-3">
                  {metric.label}
                </span>
                <p className="text-void-500 text-xs font-body leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
