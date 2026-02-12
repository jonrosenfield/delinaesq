'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { motion } from 'framer-motion'
import type { PainPoint, AccentColor } from '@/lib/services'
import { colorMap } from '@/lib/services'

interface PainPointsProps {
  painPoints: PainPoint[]
  color: AccentColor
}

export function PainPoints({ painPoints, color }: PainPointsProps) {
  const colors = colorMap[color]

  function highlightPhrase(text: string, phrase: string) {
    const idx = text.toLowerCase().indexOf(phrase.toLowerCase())
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <span className={colors.accent}>{text.slice(idx, idx + phrase.length)}</span>
        {text.slice(idx + phrase.length)}
      </>
    )
  }

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-hot-pink/15 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <SectionTag text="THE PROBLEM" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-display-lg font-bold mt-8 mb-4 text-cream italic">
            This is costing you.
          </h2>
          <p className="text-void-400 text-lg max-w-2xl font-body mb-16">
            Most business owners do not realize how much they are losing until someone maps it out.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.1}>
              <motion.div
                className="glass-card p-8 h-full border-2 border-void-700"
                whileHover={{ scale: 1.02 }}
                style={{ boxShadow: `3px 3px 0px ${colors.shadow}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-pixel text-[10px] tracking-[0.2em] px-3 py-1 rounded-retro border ${colors.accent} ${colors.border} ${colors.bg}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-pixel text-sm font-bold text-cream uppercase">
                    {point.title}
                  </h3>
                </div>
                <p className="text-void-400 text-sm leading-relaxed font-body">
                  {highlightPhrase(point.description, point.accentPhrase)}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
