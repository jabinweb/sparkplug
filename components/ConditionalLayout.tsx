'use client'

import { usePathname } from 'next/navigation'
import ClientLayout from './ClientLayout'
import { ReactNode } from 'react'

export default function ConditionalLayout({
  children,
  siteContent,
}: {
  children: ReactNode
  siteContent: any
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