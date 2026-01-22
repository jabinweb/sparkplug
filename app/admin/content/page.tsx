'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface SiteContent {
  id: string
  section: string
  content: any
  version: number
  updatedAt: string
  updatedBy: string | null
}

export default function ContentEditorPage() {
  const router = useRouter()
  const [section, setSection] = useState('site')
  const [content, setContent] = useState<any>(null)
  const [editedContent, setEditedContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    fetchContent()
  }, [section])

  const fetchContent = async () => {
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
  }

  const handleSave = async () => {
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
          Site Content Editor
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Edit and manage website content
        </p>
      </div>

      {/* Section Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
          Select Section
        </label>
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
        >
          <option value="site">Site Content</option>
          <option value="homepage">Homepage</option>
          <option value="about">About Page</option>
          <option value="programs">Programs Page</option>
          <option value="contact">Contact Page</option>
        </select>
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

        {message && (
          <div className={`mb-4 p-4 rounded-lg ${
            message.type === 'success' 
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
              onClick={handleSave}
              disabled={isSaving}
              className="px-6 py-2 bg-[var(--color-brand-primary)] text-[var(--color-button-text)] rounded-lg font-semibold hover:bg-[var(--color-brand-secondary)] transition-colors disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
          ℹ️ Content Editor Guide
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Edit content in JSON format</li>
          <li>• Use "Format JSON" to beautify your JSON</li>
          <li>• Click "Save Changes" to update the content</li>
          <li>• Version history is automatically tracked</li>
        </ul>
      </div>
    </div>
  )
}
