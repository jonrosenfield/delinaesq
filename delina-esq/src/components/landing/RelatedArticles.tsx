import Link from 'next/link'
import { POSTS } from '@/data/posts'

interface RelatedArticlesProps {
  tags: string[]
  currentSlug?: string
}

export function RelatedArticles({ tags, currentSlug }: RelatedArticlesProps) {
  const related = Object.entries(POSTS)
    .filter(([slug, post]) => {
      if (slug === currentSlug) return false
      return post.tags.some((t) => tags.includes(t))
    })
    .slice(0, 3)

  if (related.length === 0) return null

  const formatted = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

  return (
    <section className="bg-ivory border-t border-steel/20 py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-mist block mb-2">
              From The Brief
            </span>
            <h2
              className="font-display font-light text-ink leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
            >
              Related Reading
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/50 hover:text-ink transition-colors hidden md:block"
          >
            All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {related.map(([slug, post]) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group border border-steel/20 bg-white p-7 hover:border-ink/20 transition-all duration-300 block"
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist block mb-3">
                {post.category} · {post.readTime} read
              </span>
              <h3
                className="font-display font-light text-ink leading-snug group-hover:text-ink/70 transition-colors"
                style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
              >
                {post.title}
              </h3>
              <p className="font-sans text-[12px] text-ink/45 leading-relaxed mt-3 line-clamp-2">
                {post.description}
              </p>
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink/35 mt-5 block">
                {formatted(post.date)}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/50 hover:text-ink transition-colors mt-8 block md:hidden"
        >
          All Articles →
        </Link>
      </div>
    </section>
  )
}
