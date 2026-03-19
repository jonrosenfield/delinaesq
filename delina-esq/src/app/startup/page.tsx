import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://delina.esq/startup-attorney-california/' },
}

export default function StartupRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/startup-attorney-california" />
      </head>
      <body />
    </html>
  )
}
