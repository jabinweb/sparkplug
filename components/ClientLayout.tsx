'use client'

import { ThemeProvider } from '@/lib/theme-provider'
import Header from './Header'
import Footer from './Footer'
import GlobalCTA from './GlobalCTA'

export default function ClientLayout({
  children,
  siteContent,
}: {
  children: React.ReactNode
  siteContent: any
}) {
  return (
    <ThemeProvider>
      <Header siteContent={siteContent} />
      <main className="min-h-screen">
        {children}
      </main>
      <GlobalCTA />
      <Footer />
    </ThemeProvider>
  )
}