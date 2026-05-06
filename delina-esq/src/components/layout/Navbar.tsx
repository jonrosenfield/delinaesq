'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ConciergeBar } from './ConciergeBar'

function useDelayedClose(delay = 120) {
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()
  const open_ = () => { clearTimeout(timer.current); setOpen(true) }
  const close_ = () => { timer.current = setTimeout(() => setOpen(false), delay) }
  const cancel = () => clearTimeout(timer.current)
  return { open, open_, close_, cancel }
}

interface NavbarProps {
  showConcierge?: boolean
}

const DRAWER_ITEM = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const } },
}

const PRACTICE_AREAS = [
  { label: 'Prenuptial Agreement Attorney', href: '/prenuptial-agreement-attorney' },
  { label: 'Postnuptial Agreement Lawyer', href: '/postnuptial-agreement-lawyer' },
  { label: 'LLC Attorney', href: '/llc-attorney' },
  { label: 'S-Corp Attorney', href: '/s-corp-attorney' },
  { label: 'Business Contract Attorney', href: '/business-contract-attorney' },
  { label: 'Tax Attorney', href: '/tax-attorney-small-business' },
  { label: 'Business Structure Attorney', href: '/business-structure-attorney' },
  { label: 'Startup Lawyer', href: '/startup-attorney-california' },
  { label: 'Attorney for Creators & Influencers', href: '/creator-attorney' },
  { label: 'Trademark Attorney', href: '/trademark-attorney' },
  { label: 'Nonprofit Attorney', href: '/nonprofit-attorney' },
  { label: 'E-Commerce Business Attorney', href: '/ecommerce-business-attorney' },
]

export function Navbar({ showConcierge = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const services = useDelayedClose()
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        services.close_()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="w-full h-[52px] bg-ink border-b border-steel flex items-center justify-between px-6 lg:px-12"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display tracking-[0.15em] text-[19px] text-white font-normal hover:text-ivory transition-colors"
        >
          DELINA.ESQ
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          {/* Services with dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={services.open_}
            onMouseLeave={services.close_}
          >
            <button
              className="font-sans text-[15px] uppercase tracking-[0.12em] text-silver hover:text-white transition-colors flex items-center gap-1"
              onClick={() => services.open ? services.close_() : services.open_()}
            >
              Services
              <span className={`text-[8px] transition-transform duration-200 ${services.open ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {services.open && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[500px]"
                onMouseEnter={services.cancel}
                onMouseLeave={services.close_}
              >
                <div className="bg-ink border border-steel shadow-2xl py-5 px-2">
                  {/* Arrow */}
                  <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-ink border-l border-t border-steel rotate-45" />
                  <div className="grid grid-cols-2 gap-x-2">
                    {PRACTICE_AREAS.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        onClick={() => services.close_()}
                        className="font-sans text-[15px] text-silver hover:text-white hover:bg-white/5 transition-all px-4 py-2.5 block leading-snug"
                      >
                        {area.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="font-sans text-[15px] uppercase tracking-[0.12em] text-silver hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/business-law-library"
            className="font-sans text-[15px] uppercase tracking-[0.12em] text-silver hover:text-white transition-colors"
          >
            Law Library
          </Link>
          <a
            href="tel:818-888-6060"
            className="font-mono text-[13px] tracking-[0.05em] text-silver hover:text-white transition-colors flex items-center gap-2"
            aria-label="Call Delina Yasmeh, Esq. at 818-888-6060"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            818-888-6060
          </a>
          <Link
            href="/book"
            className="font-mono text-[13px] uppercase tracking-[0.18em] px-5 py-2 border border-white/40 text-white hover:bg-white hover:text-ink transition-all duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-1">
          <a
            href="tel:818-888-6060"
            className="w-10 h-10 flex items-center justify-center text-white hover:text-silver transition-colors"
            aria-label="Call Delina Yasmeh, Esq. at 818-888-6060"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-white hover:text-silver transition-colors px-3 py-2"
          >
            <span className="relative inline-block w-[44px] text-left">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                  className="inline-block"
                >
                  {menuOpen ? 'Close' : 'Menu'}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
        </div>
      </nav>

      {/* Concierge Bar */}
      {showConcierge && <ConciergeBar />}

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden fixed inset-0 top-[52px] bg-ink z-40 flex flex-col overflow-y-auto"
          >
            <motion.nav
              className="flex flex-col"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
              }}
            >
              {/* Direct contact, top of drawer for fastest access */}
              <motion.div variants={DRAWER_ITEM} className="border-b border-steel grid grid-cols-2">
                <a
                  href="tel:818-888-6060"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-5 px-6 text-white hover:bg-white/5 transition-colors border-r border-steel"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">Call</span>
                    <span className="font-mono text-[13px] tracking-[0.05em]">818-888-6060</span>
                  </div>
                </a>
                <a
                  href="mailto:info@delina.esq"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-5 px-6 text-white hover:bg-white/5 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">Email</span>
                    <span className="font-mono text-[13px] tracking-[0.05em] truncate">info@delina.esq</span>
                  </div>
                </a>
              </motion.div>
              {/* Practice Areas, expanded in mobile */}
              <motion.div variants={DRAWER_ITEM} className="border-b border-steel">
                <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist px-6 pt-4 pb-2">
                  Practice Areas
                </p>
                {PRACTICE_AREAS.map((area, i) => (
                  <motion.div
                    key={area.href}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1], delay: 0.15 + i * 0.025 }}
                  >
                    <Link
                      href={area.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-sans text-[12px] text-silver hover:text-white transition-colors py-2.5 px-6 block"
                    >
                      {area.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={DRAWER_ITEM}>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-[16px] uppercase tracking-[0.12em] text-silver hover:text-white transition-colors py-4 px-6 border-b border-steel block"
                >
                  About
                </Link>
              </motion.div>
              <motion.div variants={DRAWER_ITEM}>
                <Link
                  href="/business-law-library"
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-[16px] uppercase tracking-[0.12em] text-silver hover:text-white transition-colors py-4 px-6 border-b border-steel block"
                >
                  Law Library
                </Link>
              </motion.div>
              <motion.div variants={DRAWER_ITEM} className="px-6 pt-6">
                <Link
                  href="/book"
                  onClick={() => setMenuOpen(false)}
                  className="border border-white/40 text-white font-mono text-[13px] uppercase tracking-[0.18em] py-3 w-full justify-center hover:bg-white hover:text-ink transition-all duration-200 flex items-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
