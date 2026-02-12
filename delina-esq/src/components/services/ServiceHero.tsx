'use client'

import { motion } from 'framer-motion'
import { SectionTag } from '@/components/ui/SectionTag'
import type { AccentColor } from '@/lib/services'
import { colorMap } from '@/lib/services'

interface ServiceHeroProps {
  headline: string
  subheadline: string
  tagLabel: string
  icon: string
  color: AccentColor
  trustMarker: string
}

export function ServiceHero({ headline, subheadline, tagLabel, icon, color, trustMarker }: ServiceHeroProps) {
  const colors = colorMap[color]
  const trustItems = trustMarker.split(' // ')

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden dot-pattern">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-950/60 via-void-950/30 to-void-950 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-void-950 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 section-container pb-16 pt-28 md:pb-24 md:pt-36 lg:pb-32 lg:pt-44">
        <div className="max-w-4xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <SectionTag text={tagLabel} />
          </motion.div>

          {/* Icon + Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mt-6 mb-4">
              <div className={`w-14 h-14 rounded-retro ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                <span className={`${colors.accent} text-2xl`}>{icon}</span>
              </div>
            </div>
            <h1 className="mb-4">
              <span className="block font-serif text-display-xl md:text-hero text-cream italic leading-tight">
                {headline}
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="font-serif text-lg md:text-xl text-void-400 italic max-w-2xl mb-8 md:mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#service-contact" className="btn-bevel btn-bevel-pink text-center">
              Schedule Consultation
            </a>
            <a href="tel:818-888-6060" className="btn-bevel btn-bevel-cyan text-center">
              &#9743; Call Now
            </a>
          </motion.div>

          {/* Trust marker badges */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {trustItems.map((item, i) => (
              <span
                key={i}
                className={`sticker ${colors.accent} ${colors.border} ${colors.bg}`}
                style={{ '--sticker-rotate': `${(i % 2 === 0 ? -1 : 1) * (1 + i * 0.5)}deg` } as React.CSSProperties}
              >
                {item.trim()}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className={`absolute top-24 left-6 w-20 h-20 border-l border-t ${colors.border} z-[2] hidden lg:block`} />
      <div className="absolute bottom-24 right-6 w-20 h-20 border-r border-b border-electric/10 z-[2] hidden lg:block" />
    </section>
  )
}
