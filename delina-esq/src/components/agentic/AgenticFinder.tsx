'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const serviceKeywords: Record<string, { section: string; label: string; description: string }> = {
  tax: { section: '#services', label: 'Tax Strategy & Planning', description: 'Tax optimization aligned with your legal structure' },
  taxes: { section: '#services', label: 'Tax Strategy & Planning', description: 'Tax optimization aligned with your legal structure' },
  'tax planning': { section: '#services', label: 'Tax Strategy & Planning', description: 'Tax optimization aligned with your legal structure' },
  's-corp': { section: '#services', label: 'Entity Structuring', description: 'Formation and restructuring for liability protection' },
  entity: { section: '#services', label: 'Entity Structuring', description: 'Formation and restructuring for liability protection' },
  llc: { section: '#services', label: 'Entity Structuring', description: 'LLCs, corporations, and S-Corps' },
  formation: { section: '#services', label: 'Entity Structuring', description: 'Formation and restructuring for liability protection' },
  contract: { section: '#services', label: 'Contract Drafting & Advisory', description: 'Legal agreements that reflect your actual business' },
  contracts: { section: '#services', label: 'Contract Drafting & Advisory', description: 'Legal agreements that reflect your actual business' },
  agreement: { section: '#services', label: 'Contract Drafting & Advisory', description: 'Operating agreements, NDAs, and more' },
  nda: { section: '#services', label: 'Contract Drafting & Advisory', description: 'NDAs, IP assignments, and disclaimers' },
  'm&a': { section: '#services', label: 'Transactions & M&A', description: 'Business sales, purchases, and exits' },
  merger: { section: '#services', label: 'Transactions & M&A', description: 'Business sales, purchases, and exits' },
  acquisition: { section: '#services', label: 'Transactions & M&A', description: 'Business sales, purchases, and exits' },
  sell: { section: '#services', label: 'Transactions & M&A', description: 'Business sales, purchases, and exits' },
  buy: { section: '#services', label: 'Transactions & M&A', description: 'Business sales, purchases, and exits' },
  exit: { section: '#services', label: 'Transactions & M&A', description: 'Business sales, purchases, and exits' },
  strategy: { section: '#services', label: 'Business Diagnostics & Strategy', description: 'Deep-dive business analysis' },
  diagnostic: { section: '#services', label: 'Business Diagnostics & Strategy', description: 'Deep-dive business analysis' },
  review: { section: '#services', label: 'Business Diagnostics & Strategy', description: 'Review formation documents and tax elections' },
  about: { section: '#about', label: 'About Delina', description: 'Learn about Delina Yasmeh\'s background' },
  delina: { section: '#about', label: 'About Delina', description: 'Attorney, Tax Strategist, Founder' },
  contact: { section: '#contact', label: 'Get in Touch', description: 'Submit an inquiry to start working together' },
  appointment: { section: '#contact', label: 'Schedule Consultation', description: 'Submit an inquiry outlining your needs' },
  call: { section: '#contact', label: 'Contact Us', description: '818-888-6060 or info@delina.esq' },
}

export function AgenticFinder() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<typeof serviceKeywords[string][]>([])
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = useCallback((value: string) => {
    setQuery(value)
    if (!value.trim()) { setResults([]); return }
    const lower = value.toLowerCase()
    const matched = new Map<string, typeof serviceKeywords[string]>()
    Object.entries(serviceKeywords).forEach(([keyword, result]) => {
      if (lower.includes(keyword) || keyword.includes(lower)) {
        matched.set(result.label, result)
      }
    })
    setResults(Array.from(matched.values()))
  }, [])

  const handleNavigate = (section: string) => {
    setQuery('')
    setResults([])
    setIsFocused(false)
    inputRef.current?.blur()
    document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      className="relative w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`relative rounded-retro border-2 transition-all duration-500 ${
          isFocused ? 'border-hot-pink shadow-glow-pink bg-void-900/80' : 'border-void-700 bg-void-900/50'
        }`}
        style={{ backdropFilter: 'blur(16px)' }}
      >
        <div className="relative flex items-center">
          <div className="pl-5 text-void-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 300)}
            placeholder="Tell us what you need — tax, contracts, entity, M&A..."
            className="w-full bg-transparent px-4 py-5 text-void-100 font-body text-base placeholder:text-void-600 outline-none"
            aria-label="Search legal services"
          />
          {query && (
            <button
              onClick={() => { setQuery(''); setResults([]) }}
              className="pr-5 text-void-500 hover:text-hot-pink transition-colors"
              aria-label="Clear search"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {results.length > 0 && isFocused && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 rounded-retro border-2 border-void-700 bg-void-900/95 backdrop-blur-heavy overflow-hidden z-50"
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ transformOrigin: 'top', boxShadow: '4px 4px 0px #222' }}
          >
            {results.map((result) => (
              <button
                key={result.label}
                onMouseDown={(e) => { e.preventDefault(); handleNavigate(result.section) }}
                className="w-full text-left px-6 py-4 hover:bg-hot-pink/[0.06] transition-colors duration-200 border-b border-void-800 last:border-b-0 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-void-200 font-body text-sm group-hover:text-hot-pink transition-colors">{result.label}</p>
                    <p className="text-void-600 text-xs mt-1 font-mono">{result.description}</p>
                  </div>
                  <span className="text-void-700 group-hover:text-hot-pink transition-colors font-pixel text-sm">&rarr;</span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        className="text-center text-void-600 text-[9px] font-pixel tracking-[0.3em] mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isFocused ? 0 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        TYPE YOUR LEGAL NEED // INSTANT ROUTING
      </motion.p>
    </motion.div>
  )
}
