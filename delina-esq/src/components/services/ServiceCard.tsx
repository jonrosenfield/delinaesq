'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServiceCardProps {
  eyebrow: string
  title: string
  body: string
  href: string
  size?: 'small' | 'large'
}

export function ServiceCard({ eyebrow, title, body, href, size = 'small' }: ServiceCardProps) {
  const padding = size === 'small' ? 'p-8' : 'p-10'

  return (
    <Link href={href} className="block h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`bg-white border border-steel/20 hover:border-ink/25 relative overflow-hidden group cursor-pointer ${padding} flex flex-col justify-between min-h-[260px] h-full transition-all duration-300`}
        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
      >
        {/* Top content */}
        <div>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-mist block">
            {eyebrow}
          </span>
          <h3
            className="font-display font-light text-ink mt-4 leading-tight"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)' }}
          >
            {title}
          </h3>
          <p className="font-sans text-[13px] text-ink/55 leading-relaxed mt-3">
            {body}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-end mt-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/40 group-hover:text-ink transition-colors">
            Learn more →
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-ink/15 group-hover:bg-ink transition-colors duration-300" />
        </div>
      </motion.div>
    </Link>
  )
}
