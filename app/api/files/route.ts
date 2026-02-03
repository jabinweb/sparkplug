import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// POST /api/files - Upload a new file
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const folder = (formData.get('folder') as string) || 'sparkplug';
    const description = formData.get('description') as string | null;
    const isPublic = formData.get('isPublic') === 'true';

    // Validate file
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate folder name (alphanumeric, hyphens, underscores only)
    if (!/^[a-zA-Z0-9_-]+$/.test(folder)) {
      return NextResponse.json(
        { error: 'Invalid folder name. Use only letters, numbers, hyphens, and underscores.' },
        { status: 400 }
      );
    }

    // Forward the file to your Hostinger PHP endpoint
    const phpUploadUrl = process.env.NEXT_PUBLIC_PHP_UPLOAD_URL || 'https://files.jabin.org/api/upload.php';
    
    const phpFormData = new FormData();
    phpFormData.append('file', file);
    phpFormData.append('folder', folder);

    const response = await fetch(phpUploadUrl, {
      method: 'POST',
      body: phpFormData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Upload failed' }));
      return NextResponse.json(
        { error: errorData.error || 'Upload failed' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Save file metadata to database
    const fileRecord = await prisma.file.create({
      data: {
        filename: data.filename || file.name,
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
        url: data.url || data.file_url,
        path: data.path || `${folder}/${data.filename || file.name}`,
        folder: folder,
        uploadedBy: session.user.id || session.user.email || 'unknown',
        isPublic: isPublic,
        description: description || null,
        metadata: {
          uploadedAt: new Date().toISOString(),
          phpResponse: data,
        },
      },
    });

    return NextResponse.json({
      success: true,
      fileId: fileRecord.id,
      filename: fileRecord.filename,
      url: fileRecord.url,
      path: fileRecord.path,
      size: fileRecord.size,
      mimeType: fileRecord.mimeType,
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET /api/files - List all files
export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : undefined;

    const where: any = {};
    
    if (folder && folder !== 'all') {
      where.folder = folder;
    }

    if (search) {
      where.OR = [
        { filename: { contains: search, mode: 'insensitive' } },
        { originalName: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [files, total] = await Promise.all([
      prisma.file.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.file.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      files,
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Error fetching files:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
