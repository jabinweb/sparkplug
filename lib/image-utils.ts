import imageCompression from 'browser-image-compression';

export async function compressImage(file: File): Promise<File> {
  const options = {
    maxSizeMB: 2,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    console.log(`[ImageUtils] Starting compression for ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
    const compressedBlob = await imageCompression(file, options);
    console.log(`[ImageUtils] Compression finished. New size: ${(compressedBlob.size / 1024 / 1024).toFixed(2)} MB`);
    // Return a new File object with the original name and type
    return new File([compressedBlob], file.name, {
      type: file.type,
      lastModified: Date.now(),
    });
  } catch (error) {
    console.error('Image compression failed:', error);
    return file; // Return original file as fallback
  }
}
