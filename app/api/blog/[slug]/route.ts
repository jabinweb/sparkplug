import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/auth'

// Get single blog post by slug (public)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    
    const post = await prisma.blogPost.findUnique({
      where: { slug, published: true },
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    )
  }
}

// Update blog post (protected)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const session = await auth()
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { slug } = await params
    const body = await request.json()

    const post = await prisma.blogPost.update({
      where: { slug },
      data: {
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        category: body.category,
        author: body.author,
        publishDate: new Date(body.publishDate),
        featured: body.featured,
        tags: body.tags,
        thumbnail: body.thumbnail,
        published: body.published,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error updating blog post:', error)
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    )
  }
}

// Delete blog post (protected)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const session = await auth()
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { slug } = await params

    await prisma.blogPost.delete({
      where: { slug },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    )
  }
}
