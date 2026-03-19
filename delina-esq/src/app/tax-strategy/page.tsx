import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://delina.esq/tax-attorney-small-business/' },
}

export default function TaxStrategyRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/tax-attorney-small-business" />
      </head>
      <body />
    </html>
  )
}
