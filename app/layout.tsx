import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Drainmates | Professional Plumbing Services',
  description: 'Fast, reliable plumbing services in Miami-Dade, Broward & Palm Beach County. 24/7 emergency plumbing, drain cleaning, leak repair, water heaters. Licensed & insured. Free estimates!',
  keywords: 'plumber, plumbing, drain cleaning, emergency plumber, water heater, leak repair, Miami plumber, Fort Lauderdale plumber, South Florida plumbing',
  authors: [{ name: 'Drainmates' }],
  creator: 'Drainmates',
  publisher: 'Drainmates',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://drainmates.com',
    siteName: 'Drainmates',
    title: 'Drainmates | Professional Plumbing Services',
    description: 'Fast, reliable plumbing services in Miami-Dade, Broward & Palm Beach County. 24/7 emergency plumbing, drain cleaning, leak repair, water heaters.',
    images: [
      {
        url: 'https://drainmates.com/images/plumber-hero.png',
        width: 1200,
        height: 630,
        alt: 'Drainmates Professional Plumber',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drainmates | Professional Plumbing Services',
    description: 'Fast, reliable plumbing services in Miami-Dade, Broward & Palm Beach County. 24/7 emergency plumbing, drain cleaning, leak repair, water heaters.',
    images: ['https://drainmates.com/images/plumber-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-black text-white antialiased">
        <JsonLd />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

