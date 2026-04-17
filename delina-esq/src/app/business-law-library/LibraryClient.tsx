'use client'

import { useState, useMemo, useRef } from 'react'
import Link from 'next/link'

export interface PostMeta {
  slug: string
  title: string
  category: string
  description: string
  date: string
  readTime: string
  tags: string[]
}

const CATEGORY_COLOR: Record<string, string> = {
  'Business Contracts':         '#2255CC',
  'Creator Economy':            '#9B1527',
  'Tax Strategy':               '#1A3A6E',
  'LLC & Entity':               '#8090A8',
  'Nonprofit':                  '#1A3A6E',
  'Prenuptial Agreements':      '#9B1527',
  'Postnuptial Agreements':     '#9B1527',
  'S-Corp Strategy':            '#8090A8',
  'Startup & Founder Advisory': '#2255CC',
  'E-Commerce Law':             '#8090A8',
  'Trademark':                  '#9B1527',
}

function cardColor(cat: string) {
  return CATEGORY_COLOR[cat] ?? '#2A2A2A'
}

/* ── CARD (shared by both views) ─────────────────────────────── */
function ArticleCard({ post }: { post: PostMeta }) {
  const [hovered, setHovered] = useState(false)
  const color = cardColor(post.category)

  return (
    <Link
      href={`/business-law-library/${post.slug}`}
      className="relative overflow-hidden flex flex-col bg-parchment"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out pointer-events-none"
        style={{ backgroundColor: color, transform: hovered ? 'translateY(0%)' : 'translateY(100%)' }}
      />
      <div className="relative z-10 p-7 flex flex-col flex-1 min-h-[190px]">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.18em] mb-4 transition-colors duration-300"
          style={{ color: hovered ? 'rgba(255,255,255,0.45)' : '#999' }}
        >
          {post.category}
        </span>
        <h2
          className="font-sans font-medium leading-[1.2] flex-1 mb-5 transition-colors duration-300"
          style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', color: hovered ? '#fff' : '#0A0A0A' }}
        >
          {post.title}
        </h2>
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
            className="font-mono text-[10px] transition-colors duration-300"
            style={{ color: hovered ? '#fff' : 'rgba(10,10,10,0.3)' }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  )
}

/* ── EDITORIAL SECTIONS VIEW (All categories, no search) ──────── */
function EditorialView({ posts, categories, onCategoryClick }: {
  posts: PostMeta[]
  categories: string[]
  onCategoryClick: (cat: string) => void
}) {
  const sections = categories
    .filter((c) => c !== 'All')
    .map((cat) => ({
      cat,
      color: cardColor(cat),
      articles: posts.filter((p) => p.category === cat),
    }))
    .filter((s) => s.articles.length > 0)

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      {sections.map((section, i) => {
        const [featured, ...supporting] = section.articles
        const next = sections[i + 1]
        return (
          <div key={section.cat} className="pt-16 pb-2">
            {/* Section heading */}
            <div className="flex items-end justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-[3px] h-9 flex-shrink-0" style={{ backgroundColor: section.color }} />
                <h2
                  className="font-display font-light text-ink leading-none"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}
                >
                  {section.cat}
                </h2>
              </div>
              <button
                onClick={() => onCategoryClick(section.cat)}
                className="font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hidden md:block"
                style={{ color: section.color }}
              >
                View all →
              </button>
            </div>

            {/* Featured article */}
            {featured && <FeaturedCard post={featured} color={section.color} />}

            {/* 6 supporting articles, 3×2 grid */}
            {supporting.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel/15 mt-px">
                {supporting.slice(0, 6).map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>
            )}

            {/* View more, mobile + desktop */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => onCategoryClick(section.cat)}
                className="font-mono text-[10px] uppercase tracking-[0.18em] border-b pb-px transition-colors"
                style={{ color: section.color, borderColor: `${section.color}50` }}
              >
                View more in {section.cat} →
              </button>
            </div>

            {/* Bridge to next section */}
            {next ? (
              <div
                className="mt-14 pt-8 flex items-center justify-between border-t-2"
                style={{ borderColor: next.color }}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">Next</span>
                  <span
                    className="font-display font-light text-ink leading-none"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
                  >
                    {next.cat}
                  </span>
                </div>
              </div>
            ) : (
              <div className="border-t border-steel/20 mt-14" />
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ── FILTERED VIEW (specific category or search active) ───────── */
function FilteredView({ posts }: { posts: PostMeta[] }) {
  const [featured, ...rest] = posts
  if (!featured) return null
  const color = cardColor(featured.category)

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      {/* Featured */}
      <FeaturedCard post={featured} color={color} />

      {/* Grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel/15 mt-px">
          {rest.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

/* ── FEATURED CARD ───────────────────────────────────────────── */
function FeaturedCard({ post, color }: { post: PostMeta; color: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={`/business-law-library/${post.slug}`}
      className="block relative overflow-hidden border-b border-steel/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ backgroundColor: color, transform: hovered ? 'translateY(0%)' : 'translateY(100%)' }}
      />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 py-14 px-8 lg:px-10">
        <div className="lg:col-span-1 flex lg:flex-col justify-between lg:justify-start gap-4">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.2em] leading-none transition-colors duration-300"
            style={{ color: hovered ? 'rgba(255,255,255,0.55)' : '#666' }}
          >
            {post.category}
          </span>
          <span
            className="font-display font-light leading-none select-none hidden lg:block transition-colors duration-300"
            style={{ fontSize: 'clamp(5rem, 9vw, 9rem)', color: hovered ? 'rgba(255,255,255,0.1)' : 'rgba(42,42,42,0.07)' }}
          >
            01
          </span>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <h2
              className="font-display font-light leading-[1.0] transition-colors duration-300"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: hovered ? '#fff' : '#0A0A0A' }}
            >
              {post.title}
            </h2>
            <p
              className="font-sans text-[17px] leading-relaxed mt-5 max-w-[620px] transition-colors duration-300"
              style={{ color: hovered ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.48)' }}
            >
              {post.description}
            </p>
          </div>
          <div
            className="flex items-center justify-between mt-8 pt-6 border-t transition-colors duration-300"
            style={{ borderColor: hovered ? 'rgba(255,255,255,0.18)' : 'rgba(42,42,42,0.15)' }}
          >
            <span
              className="font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300"
              style={{ color: hovered ? 'rgba(255,255,255,0.45)' : '#666' }}
            >
              {post.readTime} read
            </span>
            <span
              className="font-mono text-[12px] uppercase tracking-[0.18em] transition-colors duration-300"
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

/* ── CATEGORY NAV ITEM ───────────────────────────────────────── */
function CategoryNavItem({
  cat, isActive, color, onClick, onHoverStart, onHoverEnd,
}: {
  cat: string
  isActive: boolean
  color: string
  onClick: () => void
  onHoverStart: () => void
  onHoverEnd: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => { setHovered(true); onHoverStart() }}
      onMouseLeave={() => { setHovered(false); onHoverEnd() }}
      className="flex items-center justify-between py-3 border-b text-left transition-all duration-200 group"
      style={{ borderColor: isActive ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)' }}
    >
      <span
        className="font-sans text-[14px] uppercase tracking-[0.07em] transition-all duration-200"
        style={{
          color: isActive ? '#fff' : hovered ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.55)',
          fontWeight: isActive ? 500 : 300,
          letterSpacing: hovered && !isActive ? '0.09em' : undefined,
        }}
      >
        {cat}
      </span>
      {/* Dot: colored when active, faint when hovered */}
      <div
        className="w-1.5 h-1.5 rounded-full flex-shrink-0 ml-3 transition-all duration-200"
        style={{
          backgroundColor: isActive || hovered ? color : 'transparent',
          transform: hovered && !isActive ? 'scale(1.4)' : 'scale(1)',
        }}
      />
    </button>
  )
}

/* ── MAIN ────────────────────────────────────────────────────── */
export function LibraryClient({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [searchFocused, setSearchFocused] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  // Color shown in hero: hovered wins, then active (if not "All"), then none
  const heroColor = hoveredCategory
    ? cardColor(hoveredCategory)
    : activeCategory !== 'All'
    ? cardColor(activeCategory)
    : null

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(posts.map((p) => p.category))).sort()],
    [posts]
  )

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory
      const q = query.toLowerCase()
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory, posts])

  const isDefaultView = activeCategory === 'All' && !query

  function handleCategoryClick(cat: string) {
    setActiveCategory(cat)
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* ── VIDEO HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink" style={{ minHeight: '80vh' }}>
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale"
          src="/delina-hero-test.mp4"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(10,10,10,0.80)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
        />
        {/* Reactive category color overlay, fades in/out on nav hover */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: heroColor ? 1 : 0,
            transition: 'opacity 0.5s ease, background 0.4s ease',
            background: heroColor
              ? `linear-gradient(135deg, transparent 0%, ${heroColor}20 30%, ${heroColor}55 65%, ${heroColor}90 100%)`
              : undefined,
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-16 pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">

            {/* LEFT, headline + subtitle + search */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-white/40 block mb-6">
                Legal Intelligence
              </span>
              <h1
                className="font-display font-light text-white leading-[0.9]"
                style={{ fontSize: 'clamp(3.5rem, 7.5vw, 6.5rem)' }}
              >
                Law Library.
              </h1>
              <p className="font-sans font-light text-[17px] text-white/50 max-w-[420px] mt-5 mb-8 leading-relaxed">
                Legal strategy for entrepreneurs, creators, and founders who have already Googled the basics, and found it unhelpful.
              </p>
              <div className="relative max-w-[460px]">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
                  width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder="Search by topic, question, keyword…"
                  className={`w-full border text-white placeholder:text-white/30 font-sans text-[16px] pl-11 pr-10 py-4 outline-none transition-all duration-300 ${!searchFocused && !query ? 'search-pulse' : ''}`}
                  style={{
                    backdropFilter: 'blur(12px)',
                    background: 'rgba(255,255,255,0.06)',
                    borderColor: searchFocused ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.2)',
                    boxShadow: searchFocused ? '0 0 0 3px rgba(255,255,255,0.07)' : undefined,
                  }}
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors text-xl leading-none"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT, vertical category index */}
            <nav className="lg:col-span-5 flex flex-col gap-0 lg:pb-1">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white/30 block mb-4">
                Browse by topic
              </span>
              {categories.map((cat) => {
                const isActive = activeCategory === cat
                const color = cat === 'All' ? '#fff' : cardColor(cat)
                return (
                  <CategoryNavItem
                    key={cat}
                    cat={cat}
                    isActive={isActive}
                    color={color}
                    onClick={() => handleCategoryClick(cat)}
                    onHoverStart={() => setHoveredCategory(cat === 'All' ? null : cat)}
                    onHoverEnd={() => setHoveredCategory(null)}
                  />
                )
              })}
            </nav>
          </div>
        </div>
      </section>

      {/* ── CONTENT ────────────────────────────────────────────── */}
      <section ref={gridRef} className="py-16 pb-32">
        {filtered.length === 0 ? (
          <div className="max-w-[1200px] mx-auto px-6 text-center py-32">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-mist mb-3">No results</p>
            <p className="font-sans text-[19px] text-ink/40">Try a different term or clear the filters.</p>
            <button
              onClick={() => { setQuery(''); setActiveCategory('All') }}
              className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-mist hover:text-ink transition-colors border border-steel/30 hover:border-steel px-5 py-2.5"
            >
              Clear filters
            </button>
          </div>
        ) : isDefaultView ? (
          <EditorialView posts={filtered} categories={categories} onCategoryClick={handleCategoryClick} />
        ) : (
          <FilteredView posts={filtered} />
        )}
      </section>
    </>
  )
}
