'use client'

import { ThemeProvider } from '@/lib/theme-provider'
import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
