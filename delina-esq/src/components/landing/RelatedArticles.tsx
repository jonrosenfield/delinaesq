import Link from 'next/link'
import { POSTS } from '@/data/posts'
import { getAllMdxPosts } from '@/lib/mdx'

interface RelatedArticlesProps {
  /** Primary filter — matches article category exactly */
  category: string
  /** Fallback tag filter if category yields fewer than 3 results */
  tags?: string[]
  currentSlug?: string
}

export function RelatedArticles({ category, tags = [], currentSlug }: RelatedArticlesProps) {
  // Merge MDX + legacy posts, MDX takes priority
  const mdxPosts = getAllMdxPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    description: p.description,
    readTime: p.readTime,
    tags: p.tags,
  }))

  const mdxSlugs = new Set(mdxPosts.map((p) => p.slug))

  const legacyPosts = Object.entries(POSTS)
    .filter(([slug]) => !mdxSlugs.has(slug))
    .map(([slug, p]) => ({
      slug,
      title: p.title,
      category: p.category,
      description: p.description,
      readTime: p.readTime,
      tags: p.tags,
    }))

  const allPosts = [...mdxPosts, ...legacyPosts].filter(
    (p) => p.slug !== currentSlug
  )

  // Primary: exact category match
  const byCategory = allPosts.filter((p) => p.category === category)

  // Fallback: tag match (excluding already matched)
  const categorySlugs = new Set(byCategory.map((p) => p.slug))
  const byTags =
    tags.length > 0
      ? allPosts.filter(
          (p) => !categorySlugs.has(p.slug) && p.tags.some((t) => tags.includes(t))
        )
      : []

  const results = [...byCategory, ...byTags].slice(0, 4)

  if (results.length === 0) return null

  const [featured, ...rest] = results

  return (
    <section className="bg-parchment border-t border-steel/20 py-20 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-4">
              Law Library
            </span>
            <h2
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Further reading on {category.toLowerCase()}.
            </h2>
          </div>
          <Link
            href={`/business-law-library?category=${encodeURIComponent(category)}`}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist hover:text-ink transition-colors flex-shrink-0"
          >
            All {category} articles →
          </Link>
        </div>

        {/* Featured article */}
        <FeaturedCard post={featured} />

        {/* Supporting grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-steel/15 mt-px">
            {rest.map((post) => (
              <SmallCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {/* Mobile see-all */}
        <Link
          href={`/business-law-library?category=${encodeURIComponent(category)}`}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist hover:text-ink transition-colors mt-8 block md:hidden"
        >
          All {category} articles →
        </Link>
      </div>
    </section>
  )
}

/* ── CARDS ────────────────────────────────────────────────────── */
function FeaturedCard({ post }: { post: { slug: string; title: string; description: string; readTime: string; category: string } }) {
  return (
    <Link
      href={`/business-law-library/${post.slug}`}
      className="group block border border-steel/20 bg-white hover:border-ink/20 transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 p-8 lg:p-10">
        <div className="lg:col-span-1 hidden lg:flex flex-col justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
            Featured
          </span>
          <span
            className="font-display font-light leading-none select-none text-ink/07"
            style={{ fontSize: 'clamp(4rem, 7vw, 7rem)' }}
          >
            01
          </span>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist block mb-3">
              {post.category} · {post.readTime} read
            </span>
            <h3
              className="font-display font-light text-ink leading-[1.05] group-hover:text-ink/70 transition-colors"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)' }}
            >
              {post.title}
            </h3>
            <p className="font-sans text-[16px] text-ink/50 leading-relaxed mt-3 max-w-[560px]">
              {post.description}
            </p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/30 group-hover:text-ink transition-colors">
            Read Article →
          </span>
        </div>
      </div>
    </Link>
  )
}

function SmallCard({ post }: { post: { slug: string; title: string; readTime: string; category: string } }) {
  return (
    <Link
      href={`/business-law-library/${post.slug}`}
      className="group block bg-white p-7 hover:bg-ink transition-all duration-300"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-mist group-hover:text-white/50 transition-colors block mb-4">
        {post.readTime} read
      </span>
      <h3
        className="font-sans font-medium text-ink group-hover:text-white leading-snug transition-colors flex-1"
        style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}
      >
        {post.title}
      </h3>
      <div className="flex justify-end mt-5 pt-4 border-t border-steel/20 group-hover:border-white/15 transition-colors">
        <span className="font-mono text-[10px] text-ink/25 group-hover:text-white transition-colors">→</span>
      </div>
    </Link>
  )
}
