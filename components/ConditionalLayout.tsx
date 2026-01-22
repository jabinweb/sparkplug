'use client'

import { usePathname } from 'next/navigation'
import ClientLayout from './ClientLayout'
import { ReactNode } from 'react'

export default function ConditionalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  // Don't apply ClientLayout for admin and auth routes
  const isAdminOrAuth = pathname?.startsWith('/admin') || pathname?.startsWith('/auth')

  if (isAdminOrAuth) {
    return <>{children}</>
  }

  return <ClientLayout>{children}</ClientLayout>
}
