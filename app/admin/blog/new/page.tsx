'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewBlogPostPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    author: '',
    publishDate: new Date().toISOString().split('T')[0],
    featured: false,
    published: false,
    tags: '',
    thumbnail: '',
  })
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setError('')

    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
        }),
      })

      if (response.ok) {
        router.push('/admin/blog')
      } else {
        throw new Error('Failed to create post')
      }
    } catch (err) {
      setError('Failed to create blog post')
    } finally {
      setIsSaving(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">
          Create New Blog Post
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Write and publish a new article
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-[var(--color-bg-secondary)] rounded-lg shadow-md border border-[var(--color-brand-primary)]/20 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => {
                setFormData({ 
                  ...formData, 
                  title: e.target.value,
                  slug: generateSlug(e.target.value)
                })
              }}
              className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Slug *
            </label>
            <input
              type="text"
              required
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
              placeholder="post-url-slug"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            Excerpt *
          </label>
          <textarea
            required
            rows={3}
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
            placeholder="Short description of the post"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            Content *
          </label>
          <textarea
            required
            rows={12}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
            placeholder="Full post content (supports markdown)"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Category *
            </label>
            <input
              type="text"
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
              placeholder="e.g., Experiences, Insights"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Author *
            </label>
            <input
              type="text"
              required
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
              placeholder="Author name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Publish Date *
            </label>
            <input
              type="date"
              required
              value={formData.publishDate}
              onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
              placeholder="team building, engagement, etc."
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            Thumbnail URL (optional)
          </label>
          <input
            type="url"
            value={formData.thumbnail}
            onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
            className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="flex items-center gap-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 text-[var(--color-brand-primary)] border-gray-300 rounded focus:ring-[var(--color-brand-primary)]"
            />
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">
              Featured Post
            </span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              className="w-4 h-4 text-[var(--color-brand-primary)] border-gray-300 rounded focus:ring-[var(--color-brand-primary)]"
            />
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">
              Publish Immediately
            </span>
          </label>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-[var(--color-brand-primary)]/20">
          <button
            type="button"
            onClick={() => router.push('/admin/blog')}
            className="px-6 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] rounded-lg hover:text-[var(--color-text-primary)] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2 bg-[var(--color-brand-primary)] text-[var(--color-button-text)] rounded-lg font-semibold hover:bg-[var(--color-brand-secondary)] transition-colors disabled:opacity-50"
          >
            {isSaving ? 'Creating...' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  )
}
