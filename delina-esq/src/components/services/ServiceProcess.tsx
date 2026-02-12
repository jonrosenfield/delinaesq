'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { motion } from 'framer-motion'
import type { ProcessStep, AccentColor } from '@/lib/services'
import { colorMap } from '@/lib/services'

interface ServiceProcessProps {
  steps: ProcessStep[]
  color: AccentColor
}

export function ServiceProcess({ steps, color }: ServiceProcessProps) {
  const colors = colorMap[color]

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-cyber-violet/15 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <SectionTag text="THE PROCESS" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-display-lg font-bold mt-8 mb-4 text-cream italic">
              How it works.
            </h2>
            <p className="text-void-400 text-lg max-w-2xl mx-auto font-body">
              A structured, transparent process from first contact to delivered results.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-void-700 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                <div className="flex gap-6 md:gap-10">
                  {/* Step badge */}
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-retro ${colors.bg} border-2 ${colors.border} flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      style={{ boxShadow: `2px 2px 0px ${colors.shadow}` }}
                    >
                      <span className={`font-pixel text-xs md:text-sm font-bold ${colors.accent}`}>
                        {String(step.stepNumber).padStart(2, '0')}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="pt-1 md:pt-3">
                    <span
                      className={`sticker ${colors.accent} ${colors.border} ${colors.bg} mb-3 inline-block`}
                      style={{ '--sticker-rotate': `${i % 2 === 0 ? -1 : 1}deg` } as React.CSSProperties}
                    >
                      {step.stickerLabel}
                    </span>
                    <h3 className="font-pixel text-sm md:text-base font-bold text-cream uppercase mb-3">
                      {step.title}
                    </h3>
                    <p className="text-void-400 text-sm leading-relaxed font-body max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
