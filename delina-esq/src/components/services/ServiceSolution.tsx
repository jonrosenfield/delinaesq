'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { motion } from 'framer-motion'
import type { SolutionCard, AccentColor } from '@/lib/services'
import { colorMap } from '@/lib/services'

interface ServiceSolutionProps {
  solutionCards: SolutionCard[]
  color: AccentColor
}

export function ServiceSolution({ solutionCards, color }: ServiceSolutionProps) {
  const colors = colorMap[color]
  const [featured, ...grid] = solutionCards

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-electric/15 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <SectionTag text="HOW WE SOLVE THIS" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-display-lg font-bold mt-8 mb-4 text-cream italic">
            A better approach.
          </h2>
          <p className="text-void-400 text-lg max-w-2xl font-body mb-16">
            Integrated legal and tax strategy — not isolated advice from two different advisors.
          </p>
        </ScrollReveal>

        {/* Featured card — full width */}
        {featured && (
          <ScrollReveal delay={0.15}>
            <motion.div
              className="glass-card p-8 md:p-12 mb-10 max-w-4xl mx-auto border-2 border-void-700"
              whileHover={{ scale: 1.01 }}
              style={{ boxShadow: `4px 4px 0px ${colors.shadow}` }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-retro ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                  <span className={`${colors.accent} text-2xl`}>&#9670;</span>
                </div>
                <div>
                  <h3 className="font-pixel text-lg md:text-xl font-bold text-cream mb-3 uppercase">
                    {featured.title}
                  </h3>
                  <p className="text-void-400 mb-6 font-body">{featured.description}</p>
                  <ul className="space-y-2">
                    {featured.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-void-300 text-sm font-body">
                        <span className={`${colors.accent} mt-1.5 text-[8px]`}>&#9632;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        )}

        {/* Grid cards */}
        {grid.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {grid.map((card, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.1}>
                <motion.div
                  className="glass-card p-8 h-full border-2 border-void-700"
                  whileHover={{ scale: 1.02 }}
                  style={{ boxShadow: `3px 3px 0px ${colors.shadow}` }}
                >
                  <h3 className="font-pixel text-sm font-bold text-cream mb-3 uppercase">
                    {card.title}
                  </h3>
                  <p className="text-void-400 text-sm mb-5 font-body">{card.description}</p>
                  <ul className="space-y-2">
                    {card.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-void-400 text-xs font-body">
                        <span className={`${colors.accent} mt-1 text-[6px]`}>&#9632;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
