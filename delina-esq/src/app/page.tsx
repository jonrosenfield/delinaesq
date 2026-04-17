import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { PhilosophyStatement } from '@/components/sections/PhilosophyStatement'
import { BentoGrid } from '@/components/services/BentoGrid'
import { WhoThisIsFor } from '@/components/sections/WhoThisIsFor'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { Footer } from '@/components/layout/Footer'
import { Eyebrow } from '@/components/ui/Eyebrow'

export const metadata: Metadata = {
  title: 'Delina Yasmeh, Esq. | California Legal Strategy',
  description:
    'Boutique legal strategy for California entrepreneurs, creators, and high-net-worth individuals. Paid intake. No templates.',
}

export default function Home() {
  return (
    <main className="bg-parchment pt-[52px]">
      <HeroSection />
      <PhilosophyStatement />
      <section id="services" className="py-24 bg-parchment">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-14">
          <Eyebrow className="text-mist">Practice Areas</Eyebrow>
          <h2 className="font-display font-light text-ink mt-3 leading-[1.05] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
            Every structure. Every strategy.<br />Built for California.
          </h2>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <BentoGrid />
        </div>
      </section>
      <WhoThisIsFor />
      <ProcessSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
