import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const metadataDefault = {
  title: 'Adarsh Dubey',
  description: 'QA Engineer'
}

export const metadata = {
  ...metadataDefault,
  authors: [{ name: 'Ahmed Tokyo', url: 'https://ahmedtokyo.com' }],
  openGraph: {
    ...metadataDefault,
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: `${metadataDefault.title} - ${metadataDefault.description}`,
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    ...metadataDefault,
    images: ['/images/og.png'],
    creator: '@adarsh',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
