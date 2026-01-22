'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  author: string
  publishDate: string
  published: boolean
  featured: boolean
}

export default function BlogListPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all')

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/blog?limit=100')
      const data = await response.json()
      setPosts(data.posts || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const response = await fetch(`/api/blog/${slug}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchPosts()
      }
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  const filteredPosts = posts.filter(post => {
    if (filter === 'published') return post.published
    if (filter === 'draft') return !post.published
    return true
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">
            Blog Posts
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Manage your blog content
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="px-6 py-3 bg-[var(--color-brand-primary)] text-[var(--color-button-text)] rounded-lg font-semibold hover:bg-[var(--color-brand-secondary)] transition-colors flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>New Post</span>
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <div className="flex gap-2">
          {(['all', 'published', 'draft'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                filter === f
                  ? 'bg-[var(--color-brand-primary)] text-[var(--color-button-text)]'
                  : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-brand-primary)]/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      {isLoading ? (
        <div className="text-center text-[var(--color-text-secondary)] py-12">
          Loading posts...
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-center text-[var(--color-text-secondary)] py-12">
          No posts found
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[var(--color-bg-secondary)] rounded-lg shadow-md border border-[var(--color-brand-primary)]/20 p-6 hover:border-[var(--color-brand-primary)] transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                      {post.title}
                    </h3>
                    {post.featured && (
                      <span className="px-2 py-1 text-xs font-semibold rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200">
                        Featured
                      </span>
                    )}
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      post.published
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                    }`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)]">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(post.publishDate)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Link
                    href={`/admin/blog/${post.slug}/edit`}
                    className="p-2 text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/10 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </Link>
                  <button
                    onClick={() => handleDelete(post.slug)}
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
