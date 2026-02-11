import { HeroSection } from '@/components/hero/HeroSection'
import { AgenticFinder } from '@/components/agentic/AgenticFinder'
import { WhoThisIsFor } from '@/components/sections/WhoThisIsFor'
import { Philosophy } from '@/components/sections/Philosophy'
import { OurApproach } from '@/components/sections/OurApproach'
import { FloatingPortals } from '@/components/spatial/FloatingPortals'
import { AboutDelina } from '@/components/sections/AboutDelina'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Delina Yasmeh, Esq.',
            alternateName: 'Delina Yasmeh Law',
            description: 'Boutique legal practice delivering high-level legal and tax counsel to founders, operators, and entrepreneurs. Specializing in tax strategy, entity structuring, contract drafting, and M&A.',
            url: 'https://delina.esq',
            telephone: '818-888-6060',
            email: 'info@delina.esq',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
            founder: {
              '@type': 'Person',
              name: 'Delina Yasmeh',
              jobTitle: 'Attorney and Tax Strategist',
              description: 'Founder and principal attorney. JD, LL.M. in Taxation, degree in accounting. Former Deloitte M&A Tax Group, PwC Silicon Valley, SingerLewak.',
            },
            areaServed: {
              '@type': 'Country',
              name: 'United States',
            },
            serviceType: [
              'Tax Strategy & Planning',
              'Entity Structuring',
              'Contract Drafting & Advisory',
              'Business Diagnostics & Strategy',
              'Transactions & M&A',
            ],
            priceRange: '$$$$',
            knowsAbout: [
              'Tax Law',
              'Entity Formation',
              'S-Corp Elections',
              'Contract Law',
              'Mergers and Acquisitions',
              'Business Structuring',
              'Tax Planning',
              'Legal Strategy',
            ],
          }),
        }}
      />

      <HeroSection />

      {/* Agentic Finder Section */}
      <section className="relative -mt-10 z-20 pb-16">
        <div className="section-container">
          <AgenticFinder />
        </div>
      </section>

      <WhoThisIsFor />
      <Philosophy />
      <OurApproach />
      <FloatingPortals />
      <AboutDelina />
      <ContactSection />
    </>
  )
}
