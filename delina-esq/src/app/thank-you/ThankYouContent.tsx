'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const steps = [
  'We\'ll review your inquiry carefully',
  'A member of our team will respond within 24-48 hours',
  'If applicable, we\'ll schedule a consultation to discuss your needs',
]

export function ThankYouContent() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-void-950" />

      <div className="max-w-2xl mx-auto px-6 md:px-12 relative z-10 text-center py-32">
        {/* Success Icon */}
        <motion.div
          className="w-20 h-20 rounded-retro bg-slime/10 border-2 border-slime/30 mx-auto mb-8 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          style={{ boxShadow: '3px 3px 0px #39FF14' }}
        >
          <motion.span
            className="text-slime text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            &#10003;
          </motion.span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-serif text-display-lg font-bold mb-4 text-cream italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Thank <span className="font-pixel not-italic text-hot-pink uppercase">You</span>
        </motion.h1>

        <motion.p
          className="text-void-300 text-lg mb-12 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your message has been received successfully. We appreciate you reaching out and will respond within 24-48 hours.
        </motion.p>

        {/* Next Steps */}
        <motion.div
          className="glass-card p-8 text-left mb-12 border-2 border-void-700 shadow-bevel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-pixel text-sm font-bold text-hot-pink mb-6 uppercase">
            WHAT HAPPENS NEXT?
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
                <span className="text-hot-pink font-pixel text-[10px] mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-void-300 text-sm font-body">{step}</p>
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
          <Link href="/" className="btn-bevel btn-bevel-pink">
            Return to Home
          </Link>
          <Link href="/#about" className="btn-bevel btn-bevel-white">
            Learn More About Us
          </Link>
        </motion.div>

        {/* Urgent Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-void-500 text-sm mb-2 font-body">For urgent matters, reach us directly at:</p>
          <a
            href="mailto:info@delina.esq"
            className="text-hot-pink font-pixel text-[10px] tracking-wider uppercase hover:text-electric transition-colors"
          >
            info@delina.esq
          </a>
        </motion.div>
      </div>
    </section>
  )
}
