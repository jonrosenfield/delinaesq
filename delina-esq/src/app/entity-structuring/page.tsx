import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://delina.esq/business-structure-attorney/' },
}

export default function EntityRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/business-structure-attorney" />
      </head>
      <body />
    </html>
  )
}
