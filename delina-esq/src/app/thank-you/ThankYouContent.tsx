'use client'

import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/ui/MagneticButton'

const steps = [
  'We\'ll review your inquiry carefully',
  'A member of our team will respond within 24-48 hours',
  'If applicable, we\'ll schedule a consultation to discuss your needs',
]

export function ThankYouContent() {
  return (
    <section className="min-h-screen flex items-center justify-center relative dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />

      <div className="section-container relative z-10 text-center py-32 max-w-2xl mx-auto">
        {/* Success Icon */}
        <motion.div
          className="w-20 h-20 rounded-full bg-acid-green/10 border border-acid-green/20 mx-auto mb-8 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        >
          <motion.span
            className="text-acid-green text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            &#10003;
          </motion.span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-display text-display-lg font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Thank <span className="gradient-text">You</span>
        </motion.h1>

        <motion.p
          className="text-slate-300 text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your message has been received successfully. We appreciate you reaching out and will respond within 24-48 hours.
        </motion.p>

        {/* Next Steps */}
        <motion.div
          className="glass-card p-8 text-left mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-display text-lg font-bold text-sage-100 mb-6">
            What happens next?
          </h3>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <span className="text-neon-pink font-mono text-sm mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-slate-300 text-sm">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <MagneticButton href="/" variant="primary">
            Return to Home
          </MagneticButton>
          <MagneticButton href="/#about" variant="outline">
            Learn More About Us
          </MagneticButton>
        </motion.div>

        {/* Urgent Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-slate-500 text-sm mb-2">For urgent matters, reach us directly at:</p>
          <a
            href="mailto:info@delina.esq"
            className="text-neon-pink neon-underline font-mono text-sm tracking-wider"
          >
            info@delina.esq
          </a>
        </motion.div>
      </div>
    </section>
  )
}
