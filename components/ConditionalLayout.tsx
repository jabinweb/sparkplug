'use client'

import { usePathname } from 'next/navigation'
import ClientLayout from './ClientLayout'
import { ReactNode } from 'react'
import type { SiteContent } from '@/types/site-content'

export default function ConditionalLayout({
  children,
  siteContent,
}: {
  children: ReactNode
  siteContent: SiteContent
}) {
  const pathname = usePathname()

  const isAdminOrAuth =
    pathname?.startsWith('/admin') || pathname?.startsWith('/auth')

  if (isAdminOrAuth) {
    return <>{children}</>
  }

  return (
    <ClientLayout siteContent={siteContent}>
      {children}
    </ClientLayout>
  )
}
