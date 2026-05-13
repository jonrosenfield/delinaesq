import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { RelatedArticles } from '@/components/landing/RelatedArticles'
import { POSTS } from '@/data/posts'
import { getAllMdxSlugs, getMdxPost } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'

function AuthorBio() {
  return (
    <section className="bg-parchment px-6 pb-14">
      <div className="max-w-[680px] mx-auto border-t border-steel/20 pt-10">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="flex-shrink-0">
            <Image
              src="/delina-yasmeh-attorney.png"
              alt="Delina Yasmeh, Esq."
              width={80}
              height={80}
              className="rounded-full object-cover grayscale"
              style={{ width: 80, height: 80 }}
            />
          </div>
          <div className="flex-1">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-2">
              About the Author
            </span>
            <h3 className="font-display font-light text-ink text-[1.3rem] leading-tight mb-3">
              Delina Yasmeh, Esq.
            </h3>
            <p className="font-sans text-[15px] text-ink/60 leading-relaxed">
              Delina is a business and tax attorney who works exclusively with entrepreneurs,
              creators, and high-net-worth individuals. She advises on entity structuring,
              tax strategy, contracts, and prenuptial agreements, with a focus on getting
              ahead of problems rather than cleaning them up afterward.
            </p>
            <Link
              href="/about"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist hover:text-ink transition-colors mt-4 inline-block"
            >
              More about Delina →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

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
  const url = `https://delina.esq/business-law-library/${params.slug}`
  const mdxPost = getMdxPost(params.slug)
  if (mdxPost) {
    return {
      title: `${mdxPost.title} | Delina Yasmeh, Esq.`,
      description: mdxPost.description,
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        url,
        title: mdxPost.title,
        description: mdxPost.description,
        publishedTime: mdxPost.date,
        authors: ['Delina Yasmeh, Esq.'],
        section: mdxPost.category,
        tags: mdxPost.tags,
        images: ['/og-image.jpg'],
      },
      twitter: {
        card: 'summary_large_image',
        title: mdxPost.title,
        description: mdxPost.description,
      },
    }
  }
  const post = POSTS[params.slug]
  if (!post) return {}
  return {
    title: `${post.title} | Delina Yasmeh, Esq.`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ['Delina Yasmeh, Esq.'],
      section: post.category,
      tags: post.tags,
      images: ['/og-image.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
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
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: mdxPost.title,
      author: { '@type': 'Person', name: 'Delina Yasmeh', jobTitle: 'Attorney', url: 'https://delina.esq' },
      publisher: { '@type': 'Organization', name: 'Delina Yasmeh, Esq.', url: 'https://delina.esq' },
      datePublished: mdxPost.date,
      description: mdxPost.description,
      mainEntityOfPage: `https://delina.esq/business-law-library/${params.slug}`,
    }
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://delina.esq/' },
        { '@type': 'ListItem', position: 2, name: 'Law Library', item: 'https://delina.esq/business-law-library' },
        { '@type': 'ListItem', position: 3, name: mdxPost.title, item: `https://delina.esq/business-law-library/${params.slug}` },
      ],
    }
    return (
      <main className="bg-parchment pt-[52px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
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
              source={mdxPost.content.replace(/\[booking link placeholder\]/gi, '<BookingCTA />')}
              components={{
                h1: () => null,
                BookingCTA: () => (
                  <div className="my-8 border border-steel/30 bg-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 not-prose">
                    <p className="font-sans text-[16px] text-ink/70 leading-snug m-0">
                      Ready to put this into practice? Tell us your situation.
                    </p>
                    <Link
                      href="/book"
                      className="flex-shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] border border-ink px-6 py-3 text-ink hover:bg-ink hover:text-white transition-all duration-200 text-center"
                    >
                      Get Started →
                    </Link>
                  </div>
                ),
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

        <AuthorBio />

        <RelatedArticles category={mdxPost.category} tags={mdxPost.tags} currentSlug={params.slug} />

        <section className="relative py-28 px-6 overflow-hidden">
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/delina-hero-test.mp4"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(10,10,10,0.78)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
          />
          <div className="relative z-10 max-w-[680px] mx-auto text-center">
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/40 block mb-5">
              Tax · Contracts · Business Law · California
            </span>
            <h2
              className="font-display font-light text-white leading-[0.92]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Ready to act on what you just read?
            </h2>
            <p className="font-sans font-light text-[19px] text-white/60 max-w-[440px] mx-auto mt-5 leading-relaxed">
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
    mainEntityOfPage: `https://delina.esq/business-law-library/${params.slug}`,
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://delina.esq/' },
      { '@type': 'ListItem', position: 2, name: 'Law Library', item: 'https://delina.esq/business-law-library' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://delina.esq/business-law-library/${params.slug}` },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
      <AuthorBio />

      <RelatedArticles category={post.category} tags={post.tags} currentSlug={params.slug} />
      <section className="relative py-28 px-6 overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/delina-hero-test.mp4"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(10,10,10,0.78)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
        />
        <div className="relative z-10 max-w-[680px] mx-auto text-center">
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/40 block mb-5">
            Tax · Contracts · Business Law · California
          </span>
          <h2
            className="font-display font-light text-white leading-[0.92]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Ready to act on what you just read?
          </h2>
          <p className="font-sans font-light text-[19px] text-white/60 max-w-[440px] mx-auto mt-5 leading-relaxed">
            This is not a free consultation. It is a focused, strategic session with an attorney who has specific opinions about your situation.
          </p>
          <Link href="/book" className="inline-flex items-center gap-2 px-10 py-4 mt-8 border border-white/40 text-white font-mono text-[13px] uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all duration-200">
            Get Started →
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
