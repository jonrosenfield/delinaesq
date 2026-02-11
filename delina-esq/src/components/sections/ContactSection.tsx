'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { GlowInput, GlowTextarea } from '@/components/ui/GlowInput'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })
      setIsSubmitted(true)
    } catch {
      // Fallback: redirect to thank-you
      window.location.href = '/thank-you'
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Info */}
          <div>
            <ScrollReveal>
              <SectionTag text="CONTACT" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-display-md font-bold mt-8 mb-6">
                Interested in{' '}
                <span className="gradient-text">working together?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-300 text-lg leading-relaxed mb-12">
                Engagements are selective and handled directly. Submit an inquiry outlining your legal and tax needs and we&apos;ll determine how we can help.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={0.3}>
                <div>
                  <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-neon-pink mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@delina.esq"
                    className="text-sage-100 text-lg neon-underline hover:text-neon-pink transition-colors"
                  >
                    info@delina.esq
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <div>
                  <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-neon-pink mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:818-888-6060"
                    className="text-sage-100 text-lg neon-underline hover:text-neon-pink transition-colors"
                  >
                    818-888-6060
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div>
                  <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-neon-pink mb-2">
                    Schedule
                  </h3>
                  <p className="text-slate-400">Submit an inquiry to get started</p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="glass-card p-8 md:p-10">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-acid-green/10 mx-auto mb-6 flex items-center justify-center">
                      <span className="text-acid-green text-2xl">&#10003;</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-sage-100 mb-3">
                      Thank You
                    </h3>
                    <p className="text-slate-400 mb-6">
                      Your message has been received. We&apos;ll respond within 24-48 hours.
                    </p>
                    <MagneticButton
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another
                    </MagneticButton>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <input type="hidden" name="form-name" value="contact" />

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
                      label="Your Legal and Tax Needs"
                      name="message"
                      rows={4}
                      required
                    />

                    <MagneticButton type="submit" variant="primary">
                      {isSubmitting ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="inline-block"
                        >
                          &#9696;
                        </motion.span>
                      ) : (
                        'Send Inquiry'
                      )}
                    </MagneticButton>
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
