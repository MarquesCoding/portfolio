import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marques - Personal Portfolio',
  description: 'Marques Scripps - Personal Portfolio',
  'cf-2fa-verify': 'f686deaa6c750a1'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}