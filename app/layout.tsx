import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import MobileQuickBar from '@/components/MobileQuickBar'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  themeColor: '#060911',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark light',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://tripathiayush.in'),
  title: {
    default: 'Ayush Tripathi | Startup Founder, Chief Architect & AI Systems Engineer',
    template: '%s | Ayush Tripathi',
  },
  description: 'Official portfolio of Ayush Tripathi — Founder & Chief Architect at sitekraft.dev and devQBX.in. Engineering high-performance SaaS platforms, conversational AI copilots, and scalable web architectures. Exhibitor at India AI Convergence 2026 (CU TBI).',
  keywords: [
    'Ayush Tripathi',
    'Ayush Tripathi Founder',
    'Ayush Tripathi sitekraft',
    'Ayush Tripathi devQBX',
    'Ayush Tripathi AI Developer',
    'Ayush Tripathi Portfolio',
    'Ayush Tripathi Chandigarh University',
    'sitekraft.dev founder',
    'devQBX.in founder',
    'AI Engineer India',
    'SaaS Product Engineer',
    'Next.js 14 Developer India',
    'AyuSutra AI',
    'Luniva AI',
    'DroneClean AI',
    'Full Stack Web Architect Kanpur',
    'Full Stack Developer Bangalore',
  ],
  authors: [{ name: 'Ayush Tripathi', url: 'https://tripathiayush.in' }],
  creator: 'Ayush Tripathi',
  publisher: 'Ayush Tripathi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://tripathiayush.in',
  },
  openGraph: {
    title: 'Ayush Tripathi | Startup Founder, Chief Architect & AI Systems Engineer',
    description: 'Founder & Chief Architect at sitekraft.dev and devQBX.in. Engineering production-ready SaaS platforms, AI copilots, and high-impact digital ventures.',
    url: 'https://tripathiayush.in',
    siteName: 'Ayush Tripathi Portfolio',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: 'https://tripathiayush.in/enhanced/sitekraft-founder.png',
        width: 1254,
        height: 1254,
        alt: 'Ayush Tripathi - Startup Founder & Chief Architect at sitekraft.dev',
      },
      {
        url: 'https://tripathiayush.in/enhanced/hero-founder.jpg',
        width: 1200,
        height: 630,
        alt: 'Ayush Tripathi Keynote Speaker & Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Tripathi | Startup Founder & AI Systems Engineer',
    description: 'Founder @ sitekraft.dev & devQBX.in. Architecting scalable AI products, SaaS MVPs, and modern web systems.',
    images: ['https://tripathiayush.in/enhanced/sitekraft-founder.png'],
    creator: '@realayush00',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://tripathiayush.in/#person',
        name: 'Ayush Tripathi',
        alternateName: ['Ayush', 'ayushtripathi', 'AYUSHTRIPATHI0'],
        url: 'https://tripathiayush.in',
        image: 'https://tripathiayush.in/enhanced/sitekraft-founder.png',
        jobTitle: ['Startup Founder', 'Chief Architect', 'AI Systems Engineer'],
        description: 'Founder & Chief Architect at sitekraft.dev and devQBX.in. Full-stack software developer and AI engineer.',
        email: 'mailto:tripathiayush944@gmail.com',
        telephone: '+918009651086',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'India',
        },
        alumnusOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Chandigarh University',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Sitekraft Studio',
          url: 'https://sitekraft.dev',
        },
        founder: [
          {
            '@type': 'Organization',
            name: 'sitekraft.dev',
            url: 'https://sitekraft.dev',
          },
          {
            '@type': 'Organization',
            name: 'devQBX.in',
            url: 'https://devQBX.in',
          },
        ],
        knowsAbout: [
          'Artificial Intelligence',
          'Large Language Models (LLMs)',
          'Full-Stack Software Architecture',
          'Next.js 14 / React 19',
          'TypeScript',
          'Python Machine Learning',
          'Cloud Microservices & Edge APIs',
          'SaaS Product Engineering',
        ],
        sameAs: [
          'https://www.linkedin.com/in/ayushtripathi00/',
          'https://github.com/AYUSHTRIPATHI0',
          'https://youtube.com/@realayush00',
          'https://instagram.com/ayush_tripthi',
          'https://sitekraft.dev',
          'https://devQBX.in',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://tripathiayush.in/#website',
        url: 'https://tripathiayush.in',
        name: 'Ayush Tripathi | Official Portfolio',
        description: 'Official personal portfolio, ventures, case studies, and engineering projects of Ayush Tripathi.',
        publisher: {
          '@id': 'https://tripathiayush.in/#person',
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://tripathiayush.in/#webpage',
        url: 'https://tripathiayush.in',
        name: 'Ayush Tripathi - Founder & AI Engineer',
        isPartOf: {
          '@id': 'https://tripathiayush.in/#website',
        },
        about: {
          '@id': 'https://tripathiayush.in/#person',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://tripathiayush.in/enhanced/sitekraft-founder.png',
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://tripathiayush.in" />
        <link rel="icon" href="/favicon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-[#060911] text-gray-100 antialiased selection:bg-indigo-500/30 selection:text-white`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <MobileQuickBar />
        </ThemeProvider>
      </body>
    </html>
  )
}