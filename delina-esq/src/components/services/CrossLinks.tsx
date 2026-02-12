'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { motion } from 'framer-motion'
import { services, colorMap } from '@/lib/services'

interface CrossLinksProps {
  relatedSlugs: string[]
}

export function CrossLinks({ relatedSlugs }: CrossLinksProps) {
  const related = services.filter(s => relatedSlugs.includes(s.slug))

  if (related.length === 0) return null

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-void-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <SectionTag text="RELATED SERVICES" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-display-sm font-bold mt-8 mb-12 text-cream italic">
            You might also need.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((service, i) => {
            const colors = colorMap[service.color]
            return (
              <ScrollReveal key={service.slug} delay={0.15 + i * 0.08}>
                <Link href={`/${service.slug}`} className="block group">
                  <motion.div
                    className="glass-card p-6 md:p-8 border-2 border-void-700 h-full transition-colors duration-300 group-hover:border-void-600"
                    whileHover={{ scale: 1.02 }}
                    style={{ boxShadow: `3px 3px 0px ${colors.shadow}` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-retro ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                        <span className={`${colors.accent} text-lg`}>{service.icon}</span>
                      </div>
                      <h3 className="font-pixel text-xs font-bold text-cream uppercase group-hover:text-hot-pink transition-colors">
                        {service.shortTitle}
                      </h3>
                    </div>
                    <p className="text-void-400 text-sm font-body leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className={`font-pixel text-[10px] tracking-[0.15em] uppercase ${colors.accent}`}>
                      Learn More &#8594;
                    </span>
                  </motion.div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
