import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://delina.esq/business-contract-attorney/' },
}

export default function ContractRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/business-contract-attorney" />
      </head>
      <body />
    </html>
  )
}
