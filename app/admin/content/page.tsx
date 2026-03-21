'use client'

import { useState, useEffect, useCallback } from 'react'
import VisualContentEditor from '@/components/VisualContentEditor'

type JsonObject = Record<string, unknown>

export default function ContentEditorPage() {
  const [section, setSection] = useState('site')
  const [content, setContent] = useState<{ content: JsonObject; version: number; updatedAt: string; updatedBy: string | null } | null>(null)
  const [editedContent, setEditedContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [editorMode, setEditorMode] = useState<'visual' | 'json'>('visual')
  const sectionOptions = [
    { value: 'site', label: 'Website Content (Master)' },
    { value: 'blog', label: 'Blog Settings' },
  ]

  const fetchContent = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/content?section=${section}`)
      if (response.ok) {
        const data = await response.json()
        setContent(data)
        setEditedContent(JSON.stringify(data.content, null, 2))
      } else {
        setEditedContent('{}')
      }
    } catch (error) {
      console.error('Error fetching content:', error)
      setMessage({ type: 'error', text: 'Failed to load content' })
    } finally {
      setIsLoading(false)
    }
  }, [section])

  useEffect(() => {
    fetchContent()
  }, [fetchContent])

  const handleSaveJSON = async () => {
    setIsSaving(true)
    setMessage(null)

    try {
      const parsedContent = JSON.parse(editedContent)

      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section,
          content: parsedContent,
        }),
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Content saved successfully!' })
        fetchContent()
      } else {
        throw new Error('Failed to save')
      }
    } catch (error) {
      console.error('Error saving content:', error)
      setMessage({ type: 'error', text: 'Invalid JSON or save failed' })
    } finally {
      setIsSaving(false)
    }
  }

  const handleSaveVisual = async (updatedContent: JsonObject) => {
    const response = await fetch('/api/content', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        section,
        content: updatedContent,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to save')
    }

    fetchContent()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">
          Content Editor
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Edit and manage website content
        </p>
      </div>

      {/* Editor Mode Toggle */}
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => {
            setEditorMode('visual')
            setSection('site')
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${editorMode === 'visual'
              ? 'bg-[var(--color-brand-primary)] text-[var(--color-button-text)]'
              : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
        >
          📝 Visual Editor
        </button>
        <button
          onClick={() => setEditorMode('json')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${editorMode === 'json'
              ? 'bg-[var(--color-brand-primary)] text-[var(--color-button-text)]'
              : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
        >
          {'{ }'} JSON Editor
        </button>
      </div>

      {/* Section Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
          Content Section
        </label>
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          disabled={editorMode === 'visual'}
          className="w-full max-w-md px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent disabled:opacity-60"
        >
          {sectionOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {editorMode === 'visual' && (
          <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
            Visual editor works on the unified website content model.
          </p>
        )}
      </div>

      {/* Editor */}
      <div className="bg-[var(--color-bg-secondary)] rounded-lg shadow-md border border-[var(--color-brand-primary)]/20 p-6">
        {content && (
          <div className="mb-4 text-sm text-[var(--color-text-secondary)]">
            <p>Version: {content.version}</p>
            <p>Last updated: {formatDate(content.updatedAt)}</p>
            {content.updatedBy && <p>By: {content.updatedBy}</p>}
          </div>
        )}

        {editorMode === 'visual' ? (
          <div>
            {content ? (
              <VisualContentEditor
                initialContent={content.content}
                onSave={handleSaveVisual}
              />
            ) : (
              <div className="text-center py-8 text-[var(--color-text-secondary)]">
                Loading...
              </div>
            )}
          </div>
        ) : (
          <div>
            {message && (
              <div className={`mb-4 p-4 rounded-lg ${message.type === 'success'
                  ? 'bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300'
                  : 'bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300'
                }`}>
                {message.text}
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Content (JSON Format)
              </label>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                rows={20}
                className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent font-mono text-sm"
                placeholder="Enter JSON content..."
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  try {
                    const formatted = JSON.stringify(JSON.parse(editedContent), null, 2)
                    setEditedContent(formatted)
                    setMessage({ type: 'success', text: 'JSON formatted' })
                  } catch {
                    setMessage({ type: 'error', text: 'Invalid JSON' })
                  }
                }}
                className="px-4 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] rounded-lg hover:text-[var(--color-text-primary)] transition-colors"
              >
                Format JSON
              </button>

              <div className="flex gap-3">
                <button
                  onClick={fetchContent}
                  disabled={isLoading}
                  className="px-6 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] rounded-lg hover:text-[var(--color-text-primary)] transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={handleSaveJSON}
                  disabled={isSaving}
                  className="px-6 py-2 bg-[var(--color-brand-primary)] text-[var(--color-button-text)] rounded-lg font-semibold hover:bg-[var(--color-brand-secondary)] transition-colors disabled:opacity-50"
                >
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Help Section */}
      <div className="mt-6 bg-[#f8fafc] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
          <span className="text-blue-500">ℹ️</span> Content Editor Guide
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
            <span><strong className="text-slate-900 dark:text-slate-200 block mb-1">Visual Editor</strong> User-friendly interactive forms. Perfect for most updates.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
            <span><strong className="text-slate-900 dark:text-slate-200 block mb-1">JSON Editor</strong> Direct data access. Recommended for advanced structural changes.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
            <span><strong className="text-slate-900 dark:text-slate-200 block mb-1">Live Updates</strong> Changes save instantly and revalidate the entire site automatically.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
            <span><strong className="text-slate-900 dark:text-slate-200 block mb-1">Media Management</strong> Integrated uploads for logos, hero videos, and experience photos.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
