'use client'

import { motion } from 'framer-motion'

const quote =
  "The moment your business starts making real money, the question is no longer whether you need legal structure. The question is how long you're willing to risk everything you've built on a handshake."

const words = quote.split(' ')

export function PhilosophyStatement() {
  return (
    <section className="bg-ink py-32 px-6">
      <div className="max-w-[860px] mx-auto text-center">
        {/* Eyebrow */}
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-mist block mb-12">
          A PHILOSOPHY · NOT A PITCH
        </span>

        {/* Animated quote */}
        <blockquote
          className="font-display italic text-ivory leading-[1.3]"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
        >
          &ldquo;
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.12 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.035, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline"
            >
              {word}{' '}
            </motion.span>
          ))}
          &rdquo;
        </blockquote>

        {/* Attribution */}
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist mt-10">
          — DELINA YASMEH, ESQ. · CALIFORNIA ATTORNEY
        </p>

        {/* Divider */}
        <div className="border-b border-steel max-w-[120px] mx-auto mt-16" />
      </div>
    </section>
  )
}
