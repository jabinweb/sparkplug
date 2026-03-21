'use client'

import { ThemeProvider } from '@/lib/theme-provider'
import Header from './Header'
import Footer from './Footer'
import GlobalCTA from './GlobalCTA'
import type { SiteContent } from '@/types/site-content'

export default function ClientLayout({
  children,
  siteContent,
}: {
  children: React.ReactNode
  siteContent: SiteContent
}) {
  return (
    <ThemeProvider>
      <Header siteContent={siteContent} />
      <main className="min-h-screen">
        {children}
      </main>
      <GlobalCTA siteContent={siteContent} />
      <Footer siteContent={siteContent} />
    </ThemeProvider>
  )
}
