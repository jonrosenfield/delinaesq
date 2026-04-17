'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
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
          <Link
            href="/book"
            className="font-mono text-[13px] uppercase tracking-[0.18em] px-5 py-2 border border-white/40 text-white hover:bg-white hover:text-ink transition-all duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? 'w-5 rotate-45 translate-y-[6px]' : 'w-5'
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? 'w-0 opacity-0' : 'w-4'
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? 'w-5 -rotate-45 -translate-y-[6px]' : 'w-5'
            }`}
          />
        </button>
      </nav>

      {/* Concierge Bar */}
      {showConcierge && <ConciergeBar />}

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[52px] bg-ink z-40 flex flex-col overflow-y-auto">
          <nav className="flex flex-col">
            {/* Practice Areas, expanded in mobile */}
            <div className="border-b border-steel">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist px-6 pt-4 pb-2">
                Practice Areas
              </p>
              {PRACTICE_AREAS.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-[12px] text-silver hover:text-white transition-colors py-2.5 px-6 block"
                >
                  {area.label}
                </Link>
              ))}
            </div>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-sans text-[16px] uppercase tracking-[0.12em] text-silver hover:text-white transition-colors py-4 px-6 border-b border-steel"
            >
              About
            </Link>
            <Link
              href="/business-law-library"
              onClick={() => setMenuOpen(false)}
              className="font-sans text-[16px] uppercase tracking-[0.12em] text-silver hover:text-white transition-colors py-4 px-6 border-b border-steel"
            >
              Law Library
            </Link>
            <div className="px-6 pt-6">
              <Link
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="border border-white/40 text-white font-mono text-[13px] uppercase tracking-[0.18em] py-3 w-full justify-center hover:bg-white hover:text-ink transition-all duration-200 flex items-center"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
