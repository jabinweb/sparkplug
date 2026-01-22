import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/auth'

// Get all blog posts (public)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = parseInt(searchParams.get('offset') || '0')

    const where: any = { published: true }
    
    if (category) {
      where.category = category
    }
    
    if (featured === 'true') {
      where.featured = true
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { publishDate: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.blogPost.count({ where }),
    ])

    return NextResponse.json({
      posts,
      total,
      limit,
      offset,
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}

// Create new blog post (protected)
export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    
    const post = await prisma.blogPost.create({
      data: {
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt,
        content: body.content,
        category: body.category,
        author: body.author,
        publishDate: new Date(body.publishDate),
        featured: body.featured || false,
        tags: body.tags || [],
        thumbnail: body.thumbnail,
        published: body.published || false,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}
