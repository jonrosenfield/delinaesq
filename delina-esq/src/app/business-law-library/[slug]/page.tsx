import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { RelatedArticles } from '@/components/landing/RelatedArticles'
import { POSTS } from '@/data/posts'
import { getAllMdxSlugs, getMdxPost } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

export function generateStaticParams() {
  const legacySlugs = Object.keys(POSTS).map((slug) => ({ slug }))
  const mdxSlugs = getAllMdxSlugs().map((slug) => ({ slug }))
  // MDX takes priority if slug exists in both
  const allSlugs = [...legacySlugs]
  mdxSlugs.forEach((s) => {
    if (!allSlugs.find((l) => l.slug === s.slug)) allSlugs.push(s)
  })
  return allSlugs
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const mdxPost = getMdxPost(params.slug)
  if (mdxPost) {
    return {
      title: `${mdxPost.title} | Delina Yasmeh, Esq.`,
      description: mdxPost.description,
      alternates: { canonical: `https://delina.esq/business-law-library/${params.slug}/` },
    }
  }
  const post = POSTS[params.slug]
  if (!post) return {}
  return {
    title: `${post.title} | Delina Yasmeh, Esq.`,
    description: post.description,
    alternates: { canonical: `https://delina.esq/business-law-library/${params.slug}/` },
  }
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

function categoryColor(category: string) {
  return CATEGORY_COLOR[category] ?? '#1C1C1C'
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // MDX file takes priority over legacy posts.ts entry
  const mdxPost = getMdxPost(params.slug)

  if (mdxPost) {
    const formatted = new Date(mdxPost.date).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    })
    const color = categoryColor(mdxPost.category)
    return (
      <main className="bg-parchment pt-[52px]">
        <Navbar />
        <header className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
          {/* Category color wash, diagonal from bottom-right, same pattern as landing pages */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent 0%, ${color}28 35%, ${color}60 65%, ${color}95 100%)`,
            }}
          />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/50">{mdxPost.category}</span>
              <span className="text-white/20">·</span>
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/50">{mdxPost.readTime} read</span>
            </div>
            <h1
              className="font-display font-light text-white leading-[1.0]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
            >
              {mdxPost.title}
            </h1>
            <p className="font-sans font-light text-[16px] text-white/60 max-w-[560px] mt-6 leading-relaxed">
              {mdxPost.description}
            </p>
          </div>
        </header>

        <article className="py-16 px-6">
          <div className="max-w-[680px] mx-auto prose-styles">
            <MDXRemote
              source={mdxPost.content}
              components={{
                h2: (props) => (
                  <h2
                    className="font-sans font-medium text-ink mt-12 mb-4 leading-tight"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                    {...props}
                  />
                ),
                h3: (props) => (
                  <h3
                    className="font-sans font-medium text-ink mt-8 mb-3 leading-tight text-[1.25rem]"
                    {...props}
                  />
                ),
                p: (props) => (
                  <p className="font-sans text-[19px] text-ink/70 leading-[1.8] mb-5" {...props} />
                ),
                ul: (props) => (
                  <ul className="font-sans text-[19px] text-ink/70 leading-[1.8] mb-5 pl-6 list-disc space-y-2" {...props} />
                ),
                ol: (props) => (
                  <ol className="font-sans text-[19px] text-ink/70 leading-[1.8] mb-5 pl-6 list-decimal space-y-2" {...props} />
                ),
                a: (props) => (
                  <a className="text-ink underline underline-offset-2 hover:text-ink/60 transition-colors" {...props} />
                ),
                strong: (props) => (
                  <strong className="font-semibold text-ink" {...props} />
                ),
              }}
            />
            <div className="border-t border-steel/20 mt-14 pt-8">
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist block mb-3">
                Related Practice Area
              </span>
              <Link
                href={mdxPost.relatedPracticeArea.href}
                className="font-sans font-medium text-ink text-[1.25rem] hover:text-ink/60 transition-colors leading-snug"
              >
                {mdxPost.relatedPracticeArea.title} →
              </Link>
            </div>
          </div>
        </article>

        <RelatedArticles tags={mdxPost.tags} currentSlug={params.slug} />

        <section className="bg-ink py-20 px-6">
          <div className="max-w-[680px] mx-auto text-center">
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist block mb-5">
              By Appointment · Boutique Practice
            </span>
            <h2
              className="font-display font-light text-white leading-[0.92]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Ready to act on what you just read?
            </h2>
            <p className="font-sans font-light text-[19px] text-silver max-w-[440px] mx-auto mt-5 leading-relaxed">
              This is not a free consultation. It is a focused, strategic session with an attorney who has specific opinions about your situation.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-10 py-4 mt-8 border border-white/40 text-white font-mono text-[13px] uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all duration-200"
            >
              Get Started →
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    )
  }

  // Fall back to legacy posts.ts
  const post = POSTS[params.slug]
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: { '@type': 'Person', name: 'Delina Yasmeh', jobTitle: 'Attorney', url: 'https://delina.esq' },
    publisher: { '@type': 'Organization', name: 'Delina Yasmeh, Esq.', url: 'https://delina.esq' },
    datePublished: post.date,
    description: post.description,
  }

  const formatted = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
  const color = categoryColor(post.category)

  return (
    <main className="bg-parchment pt-[52px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <header className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 0%, ${color}28 35%, ${color}60 65%, ${color}95 100%)`,
          }}
        />
        <div className="relative z-10 max-w-[800px] mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/50">{post.category}</span>
            <span className="text-white/20">·</span>
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/50">{post.readTime} read</span>
          </div>
          <h1
            className="font-display font-light text-white leading-[1.0]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
          >
            {post.title}
          </h1>
          <p className="font-sans font-light text-[16px] text-white/60 max-w-[560px] mt-6 leading-relaxed">
            {post.description}
          </p>
        </div>
      </header>
      <article className="py-16 px-6">
        <div className="max-w-[680px] mx-auto">
          {post.body.map((block, i) =>
            block.type === 'h2' ? (
              <h2
                key={i}
                className="font-sans font-medium text-ink mt-12 mb-4 leading-tight"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
              >
                {block.text}
              </h2>
            ) : (
              <p key={i} className="font-sans text-[19px] text-ink/70 leading-[1.8] mb-5">
                {block.text}
              </p>
            )
          )}
          <div className="border-t border-steel/20 mt-14 pt-8">
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist block mb-3">
              Related Practice Area
            </span>
            <Link
              href={post.relatedPracticeArea.href}
              className="font-sans font-medium text-ink text-[1.25rem] hover:text-ink/60 transition-colors leading-snug"
            >
              {post.relatedPracticeArea.title} →
            </Link>
          </div>
        </div>
      </article>
      <RelatedArticles tags={post.tags} currentSlug={params.slug} />
      <section className="bg-ink py-20 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist block mb-5">
            By Appointment · Boutique Practice
          </span>
          <h2
            className="font-display font-light text-white leading-[0.92]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Ready to act on what you just read?
          </h2>
          <Link href="/book" className="inline-flex items-center gap-2 px-10 py-4 mt-8 border border-white/40 text-white font-mono text-[13px] uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all duration-200">
            Get Started →
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
