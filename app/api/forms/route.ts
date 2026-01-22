import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formType, ...formData } = body

    if (!formType) {
      return NextResponse.json(
        { error: 'Form type is required' },
        { status: 400 }
      )
    }

    // Get client information
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Save form response to database
    const formResponse = await prisma.formResponse.create({
      data: {
        formType,
        data: formData,
        ipAddress,
        userAgent,
      },
    })

    // TODO: Send email notifications based on form type
    // You can integrate with SendGrid, Resend, or other email services here

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      id: formResponse.id,
    })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}

// Get all form responses (protected - requires auth)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const formType = searchParams.get('formType')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    const where = formType ? { formType } : {}

    const [responses, total] = await Promise.all([
      prisma.formResponse.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.formResponse.count({ where }),
    ])

    return NextResponse.json({
      responses,
      total,
      limit,
      offset,
    })
  } catch (error) {
    console.error('Error fetching form responses:', error)
    return NextResponse.json(
      { error: 'Failed to fetch form responses' },
      { status: 500 }
    )
  }
}
