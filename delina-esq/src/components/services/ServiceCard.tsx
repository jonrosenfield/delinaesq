'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServiceCardProps {
  eyebrow: string
  title: string
  body: string
  href: string
  accent?: string
}

export function ServiceCard({ eyebrow, title, body, href, accent }: ServiceCardProps) {
  const padding = 'p-10'

  return (
    <Link href={href} className="block h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`relative overflow-hidden group cursor-pointer ${padding} flex flex-col justify-between min-h-[300px] h-full transition-all duration-500 bg-ink border border-white/[0.07] hover:border-white/15`}
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
      >
        {/* Gradient texture, hidden by default, revealed on hover */}
        {accent && (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `linear-gradient(155deg, transparent 0%, rgba(255,255,255,0.04) 35%, rgba(255,255,255,0.10) 48%, rgba(255,255,255,0.03) 60%, transparent 100%), radial-gradient(ellipse at 70% 25%, ${accent}55 0%, ${accent}22 45%, transparent 75%)`,
            }}
          />
        )}

        {/* Grain texture, also fades in on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px',
          }}
        />

        {/* Top content */}
        <div className="relative z-10">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-white/40 block">
            {eyebrow}
          </span>
          <h3
            className="font-sans font-medium text-white mt-4 leading-tight"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)' }}
          >
            {title}
          </h3>
          <p className="font-sans text-[16px] text-white/50 leading-relaxed mt-3">
            {body}
          </p>
        </div>

        {/* Bottom */}
        <div className="relative z-10 flex justify-between items-end mt-8">
          <span
            className="font-mono text-[13px] uppercase tracking-[0.15em] text-white/30 group-hover:text-white transition-colors duration-300"
          >
            Learn more →
          </span>
          {accent && (
            <span
              className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: accent }}
            />
          )}
        </div>
      </motion.div>
    </Link>
  )
}
