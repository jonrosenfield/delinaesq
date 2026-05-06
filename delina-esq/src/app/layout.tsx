import type { Metadata } from 'next'
import Script from 'next/script'
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
import { ChatWidget } from '@/components/chat/ChatWidget'

const GA_ID = 'G-05W3SW23QP'

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
  title: 'Delina Yasmeh, Esq. | California Legal Strategy',
  description:
    'Boutique legal strategy for California entrepreneurs, creators, and high-net-worth individuals. Paid intake. No templates.',
  authors: [{ name: 'Delina Yasmeh, Esq.' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DELINA.ESQ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Delina Yasmeh, Esq. — California legal and tax strategy attorney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'ProfessionalService'],
  name: 'Delina Yasmeh, Esq.',
  url: 'https://delina.esq',
  telephone: '+1-818-888-6060',
  email: 'info@delina.esq',
  areaServed: { '@type': 'Country', name: 'United States' },
  priceRange: '$$$$',
  description:
    'Boutique legal and tax strategy for founders, creators, and high-net-worth entrepreneurs.',
  serviceType: [
    'Startup Legal Strategy',
    'Business Tax Strategy',
    'Entity Structuring',
    'LLC Formation',
    'S-Corp Election',
    'Contract Drafting',
    'Trademark & Brand Protection',
    'Prenuptial Agreements',
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <GrainOverlay />
        <Navbar />
        {children}
        <CookieBanner />
        <ChatWidget />
      </body>
    </html>
  )
}
