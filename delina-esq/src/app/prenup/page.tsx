import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://delina.esq/prenuptial-agreement-attorney/' },
}

export default function PrenupRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/prenuptial-agreement-attorney" />
      </head>
      <body />
    </html>
  )
}
