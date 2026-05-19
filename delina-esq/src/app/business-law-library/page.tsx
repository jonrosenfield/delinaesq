import { Suspense } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { POSTS } from '@/data/posts'
import { getAllMdxPosts } from '@/lib/mdx'
import { LibraryClient, type PostMeta } from './LibraryClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Law Library | Delina Yasmeh, Esq.',
  description: 'Legal strategy articles for California entrepreneurs, creators, and founders.',
  alternates: { canonical: 'https://delina.esq/business-law-library' },
}

export default function LawLibrary() {
  // Legacy posts from posts.ts
  const legacyPosts: PostMeta[] = Object.entries(POSTS).map(([slug, p]) => ({
    slug,
    title: p.title,
    category: p.category,
    description: p.description,
    date: p.date,
    readTime: p.readTime,
    tags: p.tags,
  }))

  // MDX posts from content/blog/, server-side fs read
  const mdxPosts: PostMeta[] = getAllMdxPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    description: p.description,
    date: p.date,
    readTime: p.readTime,
    tags: p.tags,
  }))

  // MDX takes priority; merge and deduplicate by slug
  const mdxSlugs = new Set(mdxPosts.map((p) => p.slug))
  const merged = [
    ...mdxPosts,
    ...legacyPosts.filter((p) => !mdxSlugs.has(p.slug)),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Group every post by category for the server-rendered crawlable index.
  const byCategory = merged.reduce<Record<string, PostMeta[]>>((acc, p) => {
    ;(acc[p.category] ||= []).push(p)
    return acc
  }, {})
  const categories = Object.keys(byCategory).sort((a, b) => a.localeCompare(b))

  return (
    <main className="bg-parchment pt-[52px]">
      <Navbar />

      {/* Suspense required for useSearchParams inside LibraryClient */}
      <Suspense fallback={null}>
        <LibraryClient posts={merged} />
      </Suspense>

      {/*
        Server-rendered complete index. This is NOT decorative: LibraryClient
        is a client component behind <Suspense fallback={null}>, so its post
        links do not exist in the static HTML. This section guarantees every
        article has a crawlable inbound link from the hub page on the first
        (non-JS) pass — the fix for "Discovered – currently not indexed".
        Do not remove or hide it from crawlers.
      */}
      <section
        aria-label="Complete article index"
        className="bg-parchment border-t border-steel/20 py-20 px-6 lg:px-12"
      >
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-3">
            Complete Index
          </span>
          <h2
            className="font-display font-light text-ink leading-[0.95] mb-12"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Every article, by topic.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {categories.map((cat) => (
              <div key={cat}>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 border-b border-steel/30 pb-3 mb-4">
                  {cat}
                </h3>
                <ul className="space-y-2.5">
                  {byCategory[cat].map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/business-law-library/${post.slug}`}
                        className="font-sans text-[15px] text-ink/70 hover:text-ink hover:underline leading-snug transition-colors"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
