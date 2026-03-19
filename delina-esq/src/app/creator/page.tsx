import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://delina.esq/creator-attorney/' },
}

export default function CreatorRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/creator-attorney" />
      </head>
      <body />
    </html>
  )
}
