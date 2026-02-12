'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { services } from '@/lib/services'

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
    <footer className="relative bg-void-950 border-t-2 border-void-700">
      {/* Retro texture strip */}
      <div className="h-1 w-full bg-gradient-to-r from-hot-pink via-cyber-violet to-electric" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {/* Brand */}
            <div>
              <h3 className="font-pixel text-lg tracking-wider text-cream mb-4">
                DELINA<span className="text-hot-pink">.</span>ESQ
              </h3>
              <p className="text-void-400 text-sm leading-relaxed mb-6 max-w-xs font-body">
                Legal and tax strategy for founders, operators, and investors. Strategic, customized engagements handled directly by an experienced attorney.
              </p>
              <a
                href="https://www.linkedin.com/in/delinayasmeh"
                target="_blank"
                rel="noopener noreferrer"
                className="font-pixel text-[10px] tracking-[0.15em] uppercase text-void-500 hover:text-hot-pink transition-colors py-1 border-b border-void-700 hover:border-hot-pink"
              >
                LINKEDIN &#8594;
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-pixel text-[10px] tracking-[0.2em] uppercase text-hot-pink mb-6">
                NAVIGATION
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-void-400 text-sm font-body hover:text-cream transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-void-400 text-sm font-body hover:text-cream transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-pixel text-[10px] tracking-[0.2em] uppercase text-hot-pink mb-6">
                SERVICES
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.slug}`}
                      className="text-void-400 text-sm font-body hover:text-cream transition-colors duration-300"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-pixel text-[10px] tracking-[0.2em] uppercase text-hot-pink mb-6">
                CONTACT
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@delina.esq" className="text-void-400 text-sm font-body hover:text-cream transition-colors duration-300">
                    info@delina.esq
                  </a>
                </li>
                <li>
                  <a href="tel:818-888-6060" className="text-void-400 text-sm font-body hover:text-cream transition-colors duration-300">
                    818-888-6060
                  </a>
                </li>
                <li className="text-void-500 text-sm font-body">By Appointment Only</li>
                <li className="text-void-500 text-sm font-body">California-Based Practice</li>
                <li className="text-void-500 text-sm font-body">Selective Engagements</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Legal Notice */}
        <div className="mt-16 pt-8 border-t border-void-700">
          <div className="mb-6">
            <h5 className="font-pixel text-[9px] tracking-[0.2em] uppercase text-void-600 mb-3">
              LEGAL NOTICE
            </h5>
            <p className="text-void-600 text-xs leading-relaxed max-w-4xl font-body">
              This website is for general informational purposes only and does not constitute legal or tax advice. Accessing this site or contacting the attorney does not create an attorney-client relationship. No confidential or time-sensitive information should be sent through this site. All content is the intellectual property of the attorney and may not be reproduced without written permission.
            </p>
            <p className="text-void-600 text-xs leading-relaxed max-w-4xl mt-2 font-body">
              This site does not collect personal data, use cookies, or employ analytics tools. If you choose to contact the attorney via phone or email, any information you provide will be used solely to respond to your inquiry and will not be shared or sold.
            </p>
          </div>

          <p className="text-void-600 text-xs font-body">
            &copy; {new Date().getFullYear()} Delina Yasmeh, Esq. | All rights reserved | Website by{' '}
            <a href="https://jonrosenfield.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
              JLR
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
