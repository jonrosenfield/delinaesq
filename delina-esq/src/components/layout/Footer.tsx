'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const navLinks = [
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#approach', label: 'Our Approach' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Delina' },
  { href: '#contact', label: 'Contact' },
  { href: '/terms', label: 'Terms & Conditions' },
]

export function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-white/[0.04]">
      <div className="section-container py-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand */}
            <div>
              <h3 className="font-display text-xl tracking-wider text-sage-100 mb-4">
                DELINA<span className="text-neon-pink">.</span>ESQ
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                Legal and tax strategy for founders, operators, and investors. Strategic, customized engagements handled directly by an experienced attorney.
              </p>
              <a
                href="https://www.linkedin.com/in/delinayasmeh"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-underline font-mono text-xs tracking-[0.15em] uppercase text-slate-500 hover:text-sage-100 transition-colors py-1"
              >
                LinkedIn
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-neon-pink mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-slate-400 text-sm hover:text-sage-100 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-slate-400 text-sm hover:text-sage-100 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-neon-pink mb-6">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@delina.esq" className="text-slate-400 text-sm hover:text-sage-100 transition-colors duration-300">
                    info@delina.esq
                  </a>
                </li>
                <li>
                  <a href="tel:818-888-6060" className="text-slate-400 text-sm hover:text-sage-100 transition-colors duration-300">
                    818-888-6060
                  </a>
                </li>
                <li className="text-slate-500 text-sm">By Appointment Only</li>
                <li className="text-slate-500 text-sm">California-Based Practice</li>
                <li className="text-slate-500 text-sm">Selective Engagements</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Legal Notice */}
        <div className="mt-16 pt-8 border-t border-white/[0.04]">
          <div className="mb-6">
            <h5 className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-600 mb-3">
              Legal Notice
            </h5>
            <p className="text-slate-600 text-xs leading-relaxed max-w-4xl">
              This website is for general informational purposes only and does not constitute legal or tax advice. Accessing this site or contacting the attorney does not create an attorney-client relationship. No confidential or time-sensitive information should be sent through this site. All content is the intellectual property of the attorney and may not be reproduced without written permission.
            </p>
            <p className="text-slate-600 text-xs leading-relaxed max-w-4xl mt-2">
              This site does not collect personal data, use cookies, or employ analytics tools. If you choose to contact the attorney via phone or email, any information you provide will be used solely to respond to your inquiry and will not be shared or sold.
            </p>
          </div>

          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Delina Yasmeh, Esq. | All rights reserved | Website by{' '}
            <a href="https://jonrosenfield.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage-100 transition-colors">
              JLR
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
