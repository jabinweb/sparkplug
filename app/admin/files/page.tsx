'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trash2, 
  ExternalLink, 
  RefreshCw, 
  Search,
  FileText,
  Download,
  Upload,
  Folder,
  Eye,
  X,
  File
} from 'lucide-react';
import { toast } from 'sonner';

interface FileRecord {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  folder: string;
  isPublic: boolean;
  description: string | null;
  createdAt: string;
  uploadedBy: string | null;
  metadata?: Record<string, any>;
}

// Client-side permission check helper
function hasPermission(user: any, resource: string, action: string): boolean {
  if (!user) return false;
  if (user.role === 'admin') return true;
  return false;
}

export default function FileManagerPage() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [files, setFiles] = useState<FileRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState<string>('all');
  const [deleting, setDeleting] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [bulkDeleting, setBulkDeleting] = useState(false);
  const [previewFile, setPreviewFile] = useState<FileRecord | null>(null);

  const canRead = hasPermission(user, 'files', 'read');
  const canUpload = hasPermission(user, 'files', 'create');
  const canDelete = hasPermission(user, 'files', 'delete');
  const isLoadingAuth = status === 'loading';

  useEffect(() => {
    if (!isLoadingAuth && !canRead) {
      window.location.href = '/';
      return;
    }

    if (canRead) {
      fetchFiles();
    }
  }, [canRead, isLoadingAuth]);

  // ... (rest of the functions remain the same: fetchFiles, handleFileUpload, deleteFile, formatFileSize, formatDate)

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/files');
      const data = await response.json();
      
      if (response.ok) {
        setFiles(data.files || []);
      } else {
        toast.error('Failed to load files');
      }
    } catch (error) {
      console.error('Error fetching files:', error);
      toast.error('Error loading files');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', selectedFolder === 'all' ? 'sparkplug' : selectedFolder);
      formData.append('isPublic', 'true');

      const response = await fetch('/api/files', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (response.ok) {
        toast.success('File uploaded successfully');
        fetchFiles();
        event.target.value = '';
      } else {
        toast.error(data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file');
    } finally {
      setUploading(false);
    }
  };

  const deleteFile = async (fileId: string, filename: string) => {
    if (!confirm(`Delete ${filename}?`)) return;

    setDeleting(fileId);
    try {
      const response = await fetch(`/api/files/${fileId}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('File deleted');
        fetchFiles();
      } else {
        toast.error(data.error || 'Failed to delete file');
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      toast.error('Error deleting file');
    } finally {
      setDeleting(null);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getFileIcon = (mimeType: string, url: string) => {
    if (mimeType.startsWith('image/')) {
      return (
        <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 group-hover:border-[var(--color-brand-primary)]/50 transition-colors">
          <Image 
            src={url} 
            alt="Thumbnail" 
            fill 
            className="object-cover"
            sizes="40px"
            unoptimized
          />
        </div>
      );
    }
    if (mimeType.startsWith('video/')) {
       return <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600"><FileText className="w-5 h-5" /></div>;
    }
    if (mimeType === 'application/pdf') {
      return <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-600"><FileText className="w-5 h-5" /></div>;
    }
    return <div className="w-10 h-10 rounded-lg bg-gray-500/10 flex items-center justify-center text-gray-600"><File className="w-5 h-5" /></div>;
  };

  const folders = Array.from(new Set(files.map(f => f.folder)));
  const filteredFiles = files.filter(file => {
    const matchesSearch = file.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.originalName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFolder = selectedFolder === 'all' || file.folder === selectedFolder;
    return matchesSearch && matchesFolder;
  });

  const totalSize = filteredFiles.reduce((sum, file) => sum + file.size, 0);
  
  // Pagination
  const totalPages = Math.ceil(filteredFiles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedFiles = filteredFiles.slice(startIndex, endIndex);
  
  // Bulk selection
  const toggleFileSelection = (fileId: string) => {
    const newSelected = new Set(selectedFiles);
    if (newSelected.has(fileId)) {
      newSelected.delete(fileId);
    } else {
      newSelected.add(fileId);
    }
    setSelectedFiles(newSelected);
  };
  
  const toggleSelectAll = () => {
    if (selectedFiles.size === paginatedFiles.length && paginatedFiles.length > 0) {
      setSelectedFiles(new Set());
    } else {
      setSelectedFiles(new Set(paginatedFiles.map(f => f.id)));
    }
  };
  
  const bulkDeleteFiles = async () => {
    if (selectedFiles.size === 0) return;
    
    if (!confirm(`Delete ${selectedFiles.size} selected files?`)) return;
    
    setBulkDeleting(true);
    try {
      const deletePromises = Array.from(selectedFiles).map(fileId =>
        fetch(`/api/files/${fileId}`, { method: 'DELETE' })
      );
      
      await Promise.all(deletePromises);
      toast.success(`${selectedFiles.size} files deleted`);
      setSelectedFiles(new Set());
      fetchFiles();
    } catch (error) {
      console.error('Error bulk deleting files:', error);
      toast.error('Error deleting some files');
    } finally {
      setBulkDeleting(false);
    }
  };

  if (!canRead) {
    return null;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">
          File Manager
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Manage files across all folders
        </p>
      </div>

      {/* Upload and Refresh Actions */}
      <div className="mb-6 flex gap-2">
        {canUpload && (
          <div className="relative">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileUpload}
              disabled={uploading}
            />
            <label
              htmlFor="file-upload"
              className={`cursor-pointer px-6 py-2 bg-[var(--color-brand-primary)] text-[var(--color-button-text)] rounded-lg font-semibold hover:bg-[var(--color-brand-secondary)] transition-colors flex items-center gap-2 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Upload className="w-4 h-4" />
              {uploading ? 'Uploading...' : 'Upload File'}
            </label>
          </div>
        )}
        <button
          onClick={fetchFiles}
          disabled={loading}
          className="px-6 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] rounded-lg hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[var(--color-bg-secondary)] rounded-lg shadow-md border border-[var(--color-brand-primary)]/20 p-6">
          <div className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            Total Files
          </div>
          <div className="text-3xl font-bold text-[var(--color-text-primary)]">{filteredFiles.length}</div>
        </div>
        <div className="bg-[var(--color-bg-secondary)] rounded-lg shadow-md border border-[var(--color-brand-primary)]/20 p-6">
          <div className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            Total Size
          </div>
          <div className="text-3xl font-bold text-[var(--color-text-primary)]">{formatFileSize(totalSize)}</div>
        </div>
        <div className="bg-[var(--color-bg-secondary)] rounded-lg shadow-md border border-[var(--color-brand-primary)]/20 p-6">
          <div className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            Folders
          </div>
          <div className="text-3xl font-bold text-[var(--color-text-primary)]">{folders.length}</div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedFiles.size > 0 && (
        <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
              {selectedFiles.size} file{selectedFiles.size > 1 ? 's' : ''} selected
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedFiles(new Set())}
                className="px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] rounded-lg hover:text-[var(--color-text-primary)] transition-colors text-sm"
              >
                Clear Selection
              </button>
              {canDelete && (
                <button
                  onClick={bulkDeleteFiles}
                  disabled={bulkDeleting}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 text-sm flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  {bulkDeleting ? 'Deleting...' : 'Delete Selected'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Files Table */}
      <div className="bg-[var(--color-bg-secondary)] rounded-lg shadow-md border border-[var(--color-brand-primary)]/20 p-6">
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
              Files ({filteredFiles.length})
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--color-text-secondary)]">Show</span>
              <select
                value={itemsPerPage.toString()}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-3 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg text-sm"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          
          {/* Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-secondary)]" />
              <input
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-full px-4 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
              />
            </div>
            <div className="relative">
              <select
                value={selectedFolder}
                onChange={(e) => setSelectedFolder(e.target.value)}
                className="px-4 py-2 pr-10 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg appearance-none min-w-[200px]"
              >
                <option value="all">All Folders</option>
                {folders.map((folder) => (
                  <option key={folder} value={folder}>
                    {folder}
                  </option>
                ))}
              </select>
              <Folder className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-secondary)] pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-brand-primary)]/20">
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-secondary)] w-12">
                  <input
                    type="checkbox"
                    checked={selectedFiles.size === paginatedFiles.length && paginatedFiles.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-gray-300"
                  />
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-secondary)] w-16">Preview</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-secondary)]">Filename</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-secondary)]">Folder</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-secondary)]">Size</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--color-text-secondary)]">Uploaded</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[var(--color-text-secondary)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-[var(--color-text-secondary)]">
                    Loading files...
                  </td>
                </tr>
              ) : paginatedFiles.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-[var(--color-text-secondary)]">
                    No files found
                  </td>
                </tr>
              ) : (
                paginatedFiles.map((file) => (
                  <tr key={file.id} className="border-b border-[var(--color-brand-primary)]/10 hover:bg-[var(--color-bg-primary)]/50 transition-colors group">
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedFiles.has(file.id)}
                        onChange={() => toggleFileSelection(file.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => file.mimeType.startsWith('image/') || file.mimeType.startsWith('video/') ? setPreviewFile(file) : null}
                        className={`${(file.mimeType.startsWith('image/') || file.mimeType.startsWith('video/')) ? 'cursor-pointer hover:scale-105 active:scale-95' : 'cursor-default'} transition-transform`}
                      >
                        {getFileIcon(file.mimeType, file.url)}
                      </button>
                    </td>
                    <td className="py-3 px-4 font-medium text-[var(--color-text-primary)]">
                      <div className="flex flex-col">
                        <span>{file.originalName}</span>
                        {file.description && (
                          <span className="text-xs text-[var(--color-text-secondary)]">{file.description}</span>
                        )}
                        <span className="text-[10px] text-[var(--color-text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest mt-1">
                          {file.mimeType}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] rounded text-xs font-medium">
                        {file.folder}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[var(--color-text-secondary)] text-sm">{formatFileSize(file.size)}</td>
                    <td className="py-3 px-4 text-xs text-[var(--color-text-secondary)]">
                      {formatDate(file.createdAt)}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {(file.mimeType.startsWith('image/') || file.mimeType.startsWith('video/')) && (
                          <button
                            onClick={() => setPreviewFile(file)}
                            className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/10 rounded-lg transition-colors"
                            title="Preview"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/10 rounded-lg transition-colors"
                          title="Open"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={file.url}
                          download
                          className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/10 rounded-lg transition-colors"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                        {canDelete && (
                          <button
                            onClick={() => deleteFile(file.id, file.originalName)}
                            disabled={deleting === file.id}
                            className="p-2 text-[var(--color-text-secondary)] hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--color-brand-primary)]/20">
            <div className="text-sm text-[var(--color-text-secondary)]">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredFiles.length)} of {filteredFiles.length} files
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] rounded-lg hover:text-[var(--color-text-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === pageNum
                          ? 'bg-[var(--color-brand-primary)] text-[var(--color-button-text)]'
                          : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] rounded-lg hover:text-[var(--color-text-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewFile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewFile(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-[var(--color-bg-secondary)] rounded-2xl shadow-2xl overflow-hidden border border-[var(--color-brand-primary)]/20 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-[var(--color-brand-primary)]/10">
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] line-clamp-1">
                    {previewFile.originalName}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {previewFile.mimeType} • {formatFileSize(previewFile.size)}
                  </p>
                </div>
                <button
                  onClick={() => setPreviewFile(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-gray-50 dark:bg-gray-900/50">
                {previewFile.mimeType.startsWith('image/') ? (
                  <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                    <Image
                      src={previewFile.url}
                      alt={previewFile.originalName}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                      unoptimized
                    />
                  </div>
                ) : previewFile.mimeType.startsWith('video/') ? (
                  <video
                    src={previewFile.url}
                    controls
                    autoPlay
                    className="max-w-full max-h-[70vh] rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="text-center p-12">
                    <FileText className="w-20 h-20 text-[var(--color-text-tertiary)] mx-auto mb-4" />
                    <p className="text-[var(--color-text-secondary)]">
                      Preview not available for this file type.
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[var(--color-bg-tertiary)]/50 border-t border-[var(--color-brand-primary)]/10 flex items-center justify-between">
                <div className="text-sm text-[var(--color-text-secondary)]">
                   Uploaded on {formatDate(previewFile.createdAt)}
                </div>
                <div className="flex gap-2">
                   <a
                    href={previewFile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-bg-primary)] transition-colors text-sm flex items-center gap-2 border border-[var(--color-brand-primary)]/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open Original
                  </a>
                  <a
                    href={previewFile.url}
                    download
                    className="px-4 py-2 bg-[var(--color-brand-primary)] text-[var(--color-button-text)] rounded-lg hover:bg-[var(--color-brand-secondary)] transition-colors text-sm flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
