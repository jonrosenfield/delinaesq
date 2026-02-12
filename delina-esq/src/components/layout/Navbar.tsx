'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { services, colorMap } from '@/lib/services'

const sectionLinks = [
  { anchor: '#philosophy', label: 'Philosophy' },
  { anchor: '#approach', label: 'Our Approach' },
  { anchor: '#about', label: 'About Delina' },
  { anchor: '#contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  // Context-aware anchor: on homepage use #section, on other pages use /#section
  function sectionHref(anchor: string) {
    return isHomePage ? anchor : `/${anchor}`
  }

  function handleDropdownEnter() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setIsServicesOpen(true)
  }

  function handleDropdownLeave() {
    dropdownTimeout.current = setTimeout(() => setIsServicesOpen(false), 200)
  }

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
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-pixel text-sm tracking-wider text-void-100 group-hover:text-hot-pink transition-colors duration-300">
              DELINA
            </span>
            <span className="text-hot-pink font-pixel text-sm animate-glow-pulse">.</span>
            <span className="font-pixel text-sm tracking-wider text-void-100 group-hover:text-electric transition-colors duration-300">
              ESQ
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Section links */}
            {sectionLinks.slice(0, 2).map((link) => (
              <a
                key={link.anchor}
                href={sectionHref(link.anchor)}
                className="neon-underline font-mono text-[10px] tracking-[0.2em] uppercase text-void-500 hover:text-void-100 transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <a
                href={sectionHref('#services')}
                className="neon-underline font-mono text-[10px] tracking-[0.2em] uppercase text-void-500 hover:text-void-100 transition-colors duration-300 py-2 flex items-center gap-1"
              >
                Services
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-3 w-72 glass-card border border-void-700 p-3 rounded-retro"
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                    style={{ backdropFilter: 'blur(20px)' }}
                  >
                    {services.map((service) => {
                      const colors = colorMap[service.color]
                      const isActive = pathname === `/${service.slug}`
                      return (
                        <Link
                          key={service.slug}
                          href={`/${service.slug}`}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 group ${
                            isActive
                              ? 'bg-void-800'
                              : 'hover:bg-void-800/60'
                          }`}
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className={`w-7 h-7 rounded-retro ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                            <span className={`${colors.accent} text-xs`}>{service.icon}</span>
                          </div>
                          <div>
                            <span className={`font-pixel text-[10px] tracking-wider uppercase block ${isActive ? 'text-cream' : 'text-void-300 group-hover:text-cream'} transition-colors`}>
                              {service.shortTitle}
                            </span>
                          </div>
                        </Link>
                      )
                    })}
                    {/* View all link */}
                    <div className="mt-2 pt-2 border-t border-void-700">
                      <a
                        href={sectionHref('#services')}
                        className="font-mono text-[9px] tracking-[0.15em] uppercase text-void-500 hover:text-hot-pink transition-colors px-3 py-1.5 block"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View All Services &#8594;
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining section links */}
            {sectionLinks.slice(2).map((link) => (
              <a
                key={link.anchor}
                href={sectionHref(link.anchor)}
                className="neon-underline font-mono text-[10px] tracking-[0.2em] uppercase text-void-500 hover:text-void-100 transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}

            {/* CTA */}
            <a
              href={sectionHref('#contact')}
              className="btn-bevel btn-bevel-pink text-[10px] py-2 px-4"
            >
              Inquire
            </a>
          </div>

          {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-void-950/98 backdrop-blur-heavy flex items-center justify-center overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Decorative corners */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-hot-pink/40" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-electric/40" />

            <nav className="flex flex-col items-center gap-5 py-24">
              {/* Section links before services */}
              {sectionLinks.slice(0, 2).map((link, i) => (
                <motion.a
                  key={link.anchor}
                  href={sectionHref(link.anchor)}
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

              {/* Services accordion */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.12, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="font-serif text-display-md text-void-200 hover:text-hot-pink transition-colors duration-300 flex items-center gap-2"
                >
                  Services
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      className="flex flex-col items-center gap-3 mt-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {services.map((service) => {
                        const colors = colorMap[service.color]
                        return (
                          <Link
                            key={service.slug}
                            href={`/${service.slug}`}
                            onClick={() => { setIsMenuOpen(false); setMobileServicesOpen(false) }}
                            className="flex items-center gap-3 group"
                          >
                            <div className={`w-8 h-8 rounded-retro ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                              <span className={`${colors.accent} text-sm`}>{service.icon}</span>
                            </div>
                            <span className="font-pixel text-xs tracking-wider uppercase text-void-400 group-hover:text-cream transition-colors">
                              {service.shortTitle}
                            </span>
                          </Link>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Remaining section links */}
              {sectionLinks.slice(2).map((link, i) => (
                <motion.a
                  key={link.anchor}
                  href={sectionHref(link.anchor)}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-display-md text-void-200 hover:text-hot-pink transition-colors duration-300"
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.18 + i * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
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
