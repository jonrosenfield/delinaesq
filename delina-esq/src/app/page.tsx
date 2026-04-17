import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { PhilosophyStatement } from '@/components/sections/PhilosophyStatement'
import { BentoGrid } from '@/components/services/BentoGrid'
import { WhoThisIsFor } from '@/components/sections/WhoThisIsFor'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { Footer } from '@/components/layout/Footer'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FeaturedArticles, type CategorySection } from '@/components/sections/FeaturedArticles'
import { getAllMdxPosts } from '@/lib/mdx'
import { POSTS } from '@/data/posts'

export const metadata: Metadata = {
  title: 'Delina Yasmeh, Esq. | California Legal Strategy',
  description:
    'Boutique legal strategy for California entrepreneurs, creators, and high-net-worth individuals. Paid intake. No templates.',
}

const SECTION_CONFIG: Array<{
  category: string
  headline: string
  description: string
  color: string
  practiceHref: string
  practiceLabel: string
}> = [
  {
    category: 'Tax Strategy',
    headline: 'Your tax exposure is a choice.',
    description: 'Understanding your tax exposure is the highest-leverage move you can make at your income level.',
    color: '#1A3A6E',
    practiceHref: '/tax-attorney-small-business',
    practiceLabel: 'Tax Attorney',
  },
  {
    category: 'Creator Economy',
    headline: 'Your content is a business. Build it that way.',
    description: 'Content is the business. Treat it that way before the IRS treats it for you.',
    color: '#9B1527',
    practiceHref: '/creator-attorney',
    practiceLabel: 'Creator Attorney',
  },
  {
    category: 'Business Contracts',
    headline: 'Read it before you sign it.',
    description: 'The contract you sign in a hurry is the one you spend two years trying to get out of.',
    color: '#2255CC',
    practiceHref: '/business-contract-attorney',
    practiceLabel: 'Contract Attorney',
  },
  {
    category: 'LLC & Entity',
    headline: 'Formation is just the beginning.',
    description: 'Formation is the beginning of the plan. What you do after filing is the actual plan.',
    color: '#8090A8',
    practiceHref: '/business-structure-attorney',
    practiceLabel: 'LLC Attorney',
  },
  {
    category: 'Prenuptial Agreements',
    headline: 'The conversation that protects everything else.',
    description: 'Having the conversation once, clearly, costs less than having it through attorneys later.',
    color: '#9B1527',
    practiceHref: '/prenuptial-agreement-attorney',
    practiceLabel: 'Prenup Attorney',
  },
]

export default function Home() {
  const mdxPosts = getAllMdxPosts()
  const legacyPosts = Object.entries(POSTS).map(([slug, p]) => ({
    slug, title: p.title, category: p.category,
    description: p.description, readTime: p.readTime,
  }))

  const allPosts = [
    ...mdxPosts.map((p) => ({ slug: p.slug, title: p.title, category: p.category, description: p.description, readTime: p.readTime })),
    ...legacyPosts,
  ]

  const sections: CategorySection[] = SECTION_CONFIG
    .map((cfg) => {
      const articles = allPosts.filter((p) => p.category === cfg.category).slice(0, 7)
      if (!articles.length) return null
      return { ...cfg, articles }
    })
    .filter((s): s is CategorySection => s !== null)

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
      <FeaturedArticles sections={sections} />
      <ProcessSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
