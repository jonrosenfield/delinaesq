import type { Metadata } from 'next'
import {
  Jost,
  DM_Sans,
  Inter,
  JetBrains_Mono,
} from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import { CookieBanner } from '@/components/ui/CookieBanner'

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://delina.esq'),
  title: {
    default: 'Delina Yasmeh, Esq. | California Legal Strategy',
    template: '%s | Delina Yasmeh, Esq.',
  },
  description:
    'Boutique legal strategy for California entrepreneurs, creators, and high-net-worth individuals. Paid intake. No templates.',
  authors: [{ name: 'Delina Yasmeh, Esq.' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://delina.esq',
    title: 'Delina Yasmeh, Esq. | California Legal Strategy',
    description:
      'Boutique legal strategy for California entrepreneurs, creators, and high-net-worth individuals. Paid intake. No templates.',
    siteName: 'DELINA.ESQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delina Yasmeh, Esq. | California Legal Strategy',
    description:
      'Boutique legal strategy for California entrepreneurs, creators, and high-net-worth individuals. Paid intake. No templates.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'ProfessionalService'],
  name: 'Delina Yasmeh, Esq.',
  url: 'https://delina.esq',
  areaServed: 'California',
  priceRange: '$$$$',
  description:
    'Boutique legal strategy for California entrepreneurs, creators, and high-net-worth individuals.',
  serviceType: [
    'Tax Strategy',
    'Entity Structuring',
    'LLC Formation',
    'S-Corp Election',
    'Contract Drafting',
    'Prenuptial Agreements',
    'Startup Advisory',
    'Creator Counsel',
  ],
  founder: {
    '@type': 'Person',
    name: 'Delina Yasmeh',
    jobTitle: 'Attorney',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${dmSans.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ink text-bone font-sans">
        <GrainOverlay />
        <Navbar />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
