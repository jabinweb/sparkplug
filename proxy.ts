import { auth } from "@/auth"
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  // Allow public access to auth routes (login, logout)
  if (request.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.next()
  }

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const session = await auth()
    
    // Redirect to login if not authenticated
    if (!session) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/auth/:path*'],
}
