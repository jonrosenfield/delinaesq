import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { POSTS } from '@/data/posts'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Brief | Legal Strategy for California Entrepreneurs | Delina Yasmeh, Esq.',
  description: 'Legal strategy for California entrepreneurs, creators, and business owners. No templates. No generic advice.',
  alternates: { canonical: 'https://delina.esq/blog/' },
}

const SORTED = Object.entries(POSTS).sort(
  ([, a], [, b]) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function BlogIndex() {
  return (
    <main className="bg-parchment pt-[52px]">
      <Navbar />

      {/* Header */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-6">
            Legal Strategy · California
          </span>
          <h1
            className="font-display font-light text-white leading-[0.92] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            The Brief.
          </h1>
          <p className="font-sans font-light text-[21px] text-silver max-w-[480px] mt-6 leading-relaxed">
            Legal strategy for California entrepreneurs, creators, and business owners who have already
            Googled the basics and found them unhelpful.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {SORTED.map(([slug, post], i) => {
              const formatted = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric',
              })
              return (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className={`
                    bg-parchment p-8 hover:bg-white transition-colors duration-200 group border-b border-steel/20
                    ${i % 2 === 0 ? 'md:border-r md:border-steel/20' : ''}
                  `}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist">
                      {post.category}
                    </span>
                    <span className="text-steel/40">·</span>
                    <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist">
                      {post.readTime} read
                    </span>
                  </div>
                  <h2
                    className="font-sans font-medium text-ink leading-[1.15] group-hover:text-ink/60 transition-colors mb-3"
                    style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                  >
                    {post.title}
                  </h2>
                  <p className="font-sans text-[16px] text-ink/50 leading-relaxed mb-5">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-ink/35">
                      {formatted}
                    </span>
                    <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-ink/50 group-hover:text-ink transition-colors">
                      Read →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
