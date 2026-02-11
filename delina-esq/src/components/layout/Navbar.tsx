'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#approach', label: 'Our Approach' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Delina' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-void-950/70 backdrop-blur-heavy border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="section-container flex items-center justify-between h-20">
          {/* Logo — pixel font Y2K */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-pixel text-sm tracking-wider text-void-100 group-hover:text-hot-pink transition-colors duration-300">
              DELINA
            </span>
            <span className="text-hot-pink font-pixel text-sm animate-glow-pulse">.</span>
            <span className="font-pixel text-sm tracking-wider text-void-100 group-hover:text-electric transition-colors duration-300">
              ESQ
            </span>
          </Link>

          {/* Desktop Nav — pixelated hovers */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="neon-underline font-mono text-[10px] tracking-[0.2em] uppercase text-void-500 hover:text-void-100 transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}
            {/* CTA sticker */}
            <a
              href="#contact"
              className="btn-bevel btn-bevel-pink text-[10px] py-2 px-4"
            >
              Inquire
            </a>
          </div>

          {/* Mobile Toggle — chunky */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              className="block w-6 h-[2px] bg-hot-pink"
              animate={isMenuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            />
            <motion.span
              className="block w-4 h-[2px] bg-electric"
              animate={isMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 16 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-hot-pink"
              animate={isMenuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu — retro fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-void-950/98 backdrop-blur-heavy flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Decorative corner borders */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-hot-pink/40" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-electric/40" />

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-display-md text-void-200 hover:text-hot-pink transition-colors duration-300"
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <a href="tel:818-888-6060" className="btn-bevel btn-bevel-pink">
                  818-888-6060
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
