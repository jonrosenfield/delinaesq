'use client'

import { useState } from 'react'
import Link from 'next/link'

export interface FeaturedPost {
  slug: string
  title: string
  category: string
  description: string
  readTime: string
}

export interface CategorySection {
  category: string
  headline: string
  description: string
  color: string
  practiceHref: string
  practiceLabel: string
  articles: FeaturedPost[]
}

/* ── ARTICLE CARD ─────────────────────────────────────────────── */
function ArticleCard({ post, color }: { post: FeaturedPost; color: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/business-law-library/${post.slug}`}
      className="relative overflow-hidden flex flex-col bg-parchment"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Color wash */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out pointer-events-none"
        style={{ backgroundColor: color, transform: hovered ? 'translateY(0%)' : 'translateY(100%)' }}
      />
      <div className="relative z-10 p-7 flex flex-col flex-1 min-h-[200px]">
        <h3
          className="font-sans font-medium leading-[1.2] flex-1 mb-5 transition-colors duration-300"
          style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', color: hovered ? '#fff' : '#0A0A0A' }}
        >
          {post.title}
        </h3>
        <div
          className="flex items-center justify-between pt-4 border-t transition-colors duration-300"
          style={{ borderColor: hovered ? 'rgba(255,255,255,0.18)' : 'rgba(42,42,42,0.13)' }}
        >
          <span
            className="font-mono text-[10px] uppercase tracking-[0.15em] transition-colors duration-300"
            style={{ color: hovered ? 'rgba(255,255,255,0.45)' : '#888' }}
          >
            {post.readTime} read
          </span>
          <span
            className="font-mono text-[10px] uppercase tracking-[0.15em] transition-colors duration-300"
            style={{ color: hovered ? '#fff' : 'rgba(10,10,10,0.28)' }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  )
}

/* ── FEATURED CARD (large, first article in section) ─────────── */
function FeatureCard({ post, color }: { post: FeaturedPost; color: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={`/business-law-library/${post.slug}`}
      className="relative overflow-hidden flex flex-col border-b border-steel/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ backgroundColor: color, transform: hovered ? 'translateY(0%)' : 'translateY(100%)' }}
      />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 py-12 px-8 lg:px-10">
        <div className="lg:col-span-1 hidden lg:flex flex-col justify-between">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300"
            style={{ color: hovered ? 'rgba(255,255,255,0.5)' : '#666' }}
          >
            Featured
          </span>
          <span
            className="font-display font-light leading-none select-none transition-colors duration-300"
            style={{ fontSize: 'clamp(4rem, 7vw, 7rem)', color: hovered ? 'rgba(255,255,255,0.1)' : 'rgba(42,42,42,0.07)' }}
          >
            01
          </span>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <h3
              className="font-display font-light leading-[1.02] transition-colors duration-300"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', color: hovered ? '#fff' : '#0A0A0A' }}
            >
              {post.title}
            </h3>
            <p
              className="font-sans text-[16px] leading-relaxed mt-4 max-w-[560px] transition-colors duration-300"
              style={{ color: hovered ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.48)' }}
            >
              {post.description}
            </p>
          </div>
          <div
            className="flex items-center justify-between mt-7 pt-5 border-t transition-colors duration-300"
            style={{ borderColor: hovered ? 'rgba(255,255,255,0.18)' : 'rgba(42,42,42,0.14)' }}
          >
            <span
              className="font-mono text-[10px] uppercase tracking-[0.15em] transition-colors duration-300"
              style={{ color: hovered ? 'rgba(255,255,255,0.45)' : '#666' }}
            >
              {post.readTime} read
            </span>
            <span
              className="font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-300"
              style={{ color: hovered ? '#fff' : 'rgba(10,10,10,0.3)' }}
            >
              Read Article →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

/* ── SECTION BRIDGE (transition between sections) ─────────────── */
function SectionBridge({
  next,
}: {
  next: CategorySection
}) {
  return (
    <div className="border-t-2 mt-14 pt-8 flex items-center justify-between" style={{ borderColor: next.color }}>
      <div className="flex items-center gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">Next</span>
        <h3
          className="font-display font-light text-ink leading-none"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
        >
          {next.category}
        </h3>
      </div>
      <Link
        href={`/business-law-library?category=${encodeURIComponent(next.category)}`}
        className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist hover:text-ink transition-colors hidden md:block"
      >
        View all →
      </Link>
    </div>
  )
}

/* ── ONE SECTION ──────────────────────────────────────────────── */
function CategorySectionBlock({
  section,
  nextSection,
}: {
  section: CategorySection
  nextSection?: CategorySection
}) {
  return (
    <div className="pt-20 pb-4">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          {/* Category tag */}
          <div className="inline-flex items-center gap-2 border px-3 py-1.5 mb-6" style={{ borderColor: `${section.color}50` }}>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: section.color }} />
            <span className="font-mono text-[9px] uppercase tracking-[0.28em]" style={{ color: section.color }}>
              {section.category}
            </span>
          </div>
          <h2
            className="font-display font-light text-ink leading-[0.95]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            {section.headline}
          </h2>
          <p className="font-sans text-[16px] text-ink/50 mt-3 max-w-[480px] leading-relaxed">
            {section.description}
          </p>
        </div>
        <div className="flex items-center gap-5 flex-shrink-0">
          <Link
            href={`/business-law-library?category=${encodeURIComponent(section.category)}`}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist hover:text-ink transition-colors"
          >
            All Articles →
          </Link>
          <Link
            href={section.practiceHref}
            className="font-mono text-[10px] uppercase tracking-[0.18em] transition-colors border-b pb-px"
            style={{ color: section.color, borderColor: `${section.color}40` }}
          >
            {section.practiceLabel} →
          </Link>
        </div>
      </div>

      {/* Featured article */}
      {section.articles[0] && (
        <FeatureCard post={section.articles[0]} color={section.color} />
      )}

      {/* 6 supporting articles, 3×2 grid */}
      {section.articles.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel/15 mt-px">
          {section.articles.slice(1, 7).map((post) => (
            <ArticleCard key={post.slug} post={post} color={section.color} />
          ))}
        </div>
      )}

      {/* View more link */}
      <div className="mt-8 flex items-center justify-between">
        <Link
          href={`/business-law-library?category=${encodeURIComponent(section.category)}`}
          className="font-mono text-[10px] uppercase tracking-[0.18em] border-b pb-px transition-colors"
          style={{ color: section.color, borderColor: `${section.color}50` }}
        >
          View more in {section.category} →
        </Link>
      </div>

      {/* Bridge to next section, or closing line */}
      {nextSection ? (
        <SectionBridge next={nextSection} />
      ) : (
        <div className="border-t border-steel/20 mt-14" />
      )}
    </div>
  )
}

/* ── EXPORT ───────────────────────────────────────────────────── */
export function FeaturedArticles({ sections }: { sections: CategorySection[] }) {
  if (!sections.length) return null

  return (
    <section className="px-6 lg:px-12 bg-parchment border-t border-steel/20">
      <div className="max-w-[1200px] mx-auto">

        {/* Intro */}
        <div className="pt-20 pb-4 flex items-end justify-between">
          <div>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-4">
              Law Library · Tax, Contracts & Business Structure
            </span>
            <h2
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              What you need to<br />understand right now.
            </h2>
          </div>
          <Link
            href="/business-law-library"
            className="hidden md:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist hover:text-ink transition-colors"
          >
            Full Library →
          </Link>
        </div>

        {/* Sections */}
        {sections.map((section, i) => (
          <CategorySectionBlock
            key={section.category}
            section={section}
            nextSection={sections[i + 1]}
          />
        ))}

        {/* Bottom CTA */}
        <div className="pb-8 pt-10 flex justify-center">
          <Link
            href="/business-law-library"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist hover:text-ink transition-colors border border-steel/30 hover:border-ink px-8 py-3.5"
          >
            Browse All Articles →
          </Link>
        </div>
      </div>
    </section>
  )
}
