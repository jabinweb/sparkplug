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

    console.log('[API/Files] POST request received');
    const formData = await request.formData();
    
    // Check if this is a direct record (metadata only) or a proxy upload
    const directUrl = formData.get('url') as string | null;
    const directFilename = formData.get('filename') as string | null;
    const directSize = formData.get('size') as string | null;
    const directMimeType = formData.get('mimeType') as string | null;
    const directPath = formData.get('path') as string | null;

    const file = formData.get('file') as File | null;
    const folder = (formData.get('folder') as string) || 'sparkplug';
    const description = formData.get('description') as string | null;
    const isPublic = formData.get('isPublic') === 'true';

    // If we have a direct URL, just record it in the database
    if (directUrl) {
      console.log(`[API/Files] Recording direct upload: ${directUrl}`);
      const fileRecord = await prisma.file.create({
        data: {
          filename: directFilename || directUrl.split('/').pop() || 'file',
          originalName: directFilename || 'file',
          mimeType: directMimeType || 'image/jpeg',
          size: directSize ? parseInt(directSize) : 0,
          url: directUrl,
          path: directPath || `${folder}/${directFilename || 'file'}`,
          folder: folder,
          uploadedBy: session.user.id || session.user.email || 'unknown',
          isPublic: isPublic,
          description: description || null,
          metadata: {
            uploadedAt: new Date().toISOString(),
            isDirect: true,
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
    }

    // Validate file for proxy upload
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
    
    // Add API key if present
    const apiKey = process.env.NEXT_PUBLIC_FILE_MANAGER_API_KEY;
    if (apiKey) {
      phpFormData.append('api_key', apiKey);
      console.log('[API/Files] API key appended');
    }
    
    console.log(`[API/Files] Forwarding to PHP: ${phpUploadUrl}. File size: ${file.size} bytes`);
    
    const startTime = Date.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 600000); // 10 minute timeout
    
    try {
      const response = await fetch(phpUploadUrl, {
        method: 'POST',
        body: phpFormData,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      
      console.log(`[API/Files] PHP response received in ${Date.now() - startTime}ms. Status: ${response.status}`);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Upload failed' }));
        return NextResponse.json(
          { error: errorData.error || 'Upload failed' },
          { status: response.status }
        );
      }
      
      const data = await response.json();
      
      console.log(`[API/Files] Upload recorded for ${file.name}`);
      
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
      if ((error as any).name === 'AbortError') {
        console.error('[API/Files] Upload to PHP timed out after 10 minutes');
        return NextResponse.json(
          { error: 'Upload timed out. The server is taking too long to respond.' },
          { status: 504 }
        );
      }
      console.error('[API/Files] Proxy upload error:', error);
      throw error; // Let the outer catch handle it
    } finally {
      clearTimeout(timeoutId);
    }

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
