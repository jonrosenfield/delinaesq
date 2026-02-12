'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { GlowInput, GlowTextarea } from '@/components/ui/GlowInput'
import type { AccentColor } from '@/lib/services'
import { colorMap } from '@/lib/services'

interface ServiceCTAProps {
  serviceTitle: string
  color: AccentColor
}

export function ServiceCTA({ serviceTitle, color }: ServiceCTAProps) {
  const colors = colorMap[color]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        window.location.href = '/thank-you'
      }
    } catch {
      window.location.href = '/thank-you'
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="service-contact" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-hot-pink/20 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-electric/20 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Info */}
          <div>
            <ScrollReveal>
              <SectionTag text="GET STARTED" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-display-md font-bold mt-8 mb-6 text-cream italic">
                Ready to{' '}
                <span className={`font-pixel not-italic ${colors.accent} uppercase`}>take action?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-void-300 text-lg leading-relaxed mb-12 font-body">
                Submit an inquiry outlining your needs. Engagements are selective and handled directly by Delina Yasmeh, Esq.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={0.3}>
                <div>
                  <h3 className="font-pixel text-[10px] tracking-[0.2em] uppercase text-hot-pink mb-2">
                    EMAIL
                  </h3>
                  <a
                    href="mailto:info@delina.esq"
                    className="text-cream text-lg font-body hover:text-hot-pink transition-colors"
                  >
                    info@delina.esq
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <div>
                  <h3 className="font-pixel text-[10px] tracking-[0.2em] uppercase text-hot-pink mb-2">
                    PHONE
                  </h3>
                  <a
                    href="tel:818-888-6060"
                    className="text-cream text-lg font-body hover:text-hot-pink transition-colors"
                  >
                    818-888-6060
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div>
                  <h3 className="font-pixel text-[10px] tracking-[0.2em] uppercase text-hot-pink mb-2">
                    SCHEDULE
                  </h3>
                  <p className="text-void-400 font-body">Submit an inquiry to get started</p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="glass-card p-8 md:p-10 border-2 border-void-700 shadow-bevel">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-retro bg-slime/10 border border-slime/30 mx-auto mb-6 flex items-center justify-center">
                      <span className="text-slime text-2xl">&#10003;</span>
                    </div>
                    <h3 className="font-pixel text-lg font-bold text-cream mb-3 uppercase">
                      Thank You
                    </h3>
                    <p className="text-void-400 mb-6 font-body">
                      Your message has been received. We&apos;ll respond within 24-48 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-bevel btn-bevel-white"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    name="service-contact"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <input type="hidden" name="form-name" value="service-contact" />
                    <input type="hidden" name="service" value={serviceTitle} />

                    <GlowInput
                      label="Your Name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                    />

                    <GlowInput
                      label="Your Email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />

                    <GlowInput
                      label="Your Company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                    />

                    <GlowTextarea
                      label="Tell Us About Your Needs"
                      name="message"
                      rows={4}
                      required
                    />

                    <button
                      type="submit"
                      className="btn-bevel btn-bevel-pink w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="inline-block"
                        >
                          &#9684;
                        </motion.span>
                      ) : (
                        'SCHEDULE CONSULTATION'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
