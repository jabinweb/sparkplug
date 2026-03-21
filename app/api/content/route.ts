import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/auth'
import { revalidatePath } from 'next/cache'

// Get content by section
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const section = searchParams.get('section')

    if (!section) {
      return NextResponse.json(
        { error: 'Section parameter is required' },
        { status: 400 }
      )
    }

    const content = await prisma.siteContent.findUnique({
      where: { section },
    })

    if (!content) {
      return NextResponse.json(
        { error: 'Content not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(content)
  } catch (error) {
    console.error('Error fetching content:', error)
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    )
  }
}

// Update content (protected - requires auth)
export async function PUT(request: NextRequest) {
  try {
    console.log('[Content API] PUT request received')
    const session = await auth()
    
    console.log('[Content API] Session:', session ? 'authenticated' : 'not authenticated')
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { section, content } = body

    console.log('[Content API] Updating section:', section)
    console.log('[Content API] Content keys:', Object.keys(content || {}))

    if (!section || !content) {
      return NextResponse.json(
        { error: 'Section and content are required' },
        { status: 400 }
      )
    }

    console.log('[Content API] Upserting to database...')
    const updatedContent = await prisma.siteContent.upsert({
      where: { section },
      update: {
        content,
        version: { increment: 1 },
        updatedBy: session.user.email,
      },
      create: {
        section,
        content,
        updatedBy: session.user.email,
      },
    })

    console.log('[Content API] Database updated, version:', updatedContent.version)

    // Revalidate all pages to show updated content immediately
    console.log('[Content API] Revalidating pages...')
    revalidatePath('/', 'layout')
    console.log('[Content API] ✅ Pages revalidated')

    return NextResponse.json(updatedContent)
  } catch (error) {
    console.error('Error updating content:', error)
    return NextResponse.json(
      { error: 'Failed to update content' },
      { status: 500 }
    )
  }
}
