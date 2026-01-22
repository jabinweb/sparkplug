'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Stats {
  totalForms: number
  totalBlogPosts: number
  recentForms: number
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalForms: 0,
    totalBlogPosts: 0,
    recentForms: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [formsRes, blogsRes] = await Promise.all([
        fetch('/api/forms?limit=1'),
        fetch('/api/blog?limit=1'),
      ])

      const formsData = await formsRes.json()
      const blogsData = await blogsRes.json()

      setStats({
        totalForms: formsData.total || 0,
        totalBlogPosts: blogsData.total || 0,
        recentForms: formsData.responses?.length || 0,
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const quickActions = [
    {
      title: 'View Form Submissions',
      description: 'Check recent contact forms and inquiries',
      href: '/admin/forms',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'blue',
    },
    {
      title: 'Create Blog Post',
      description: 'Write and publish a new blog article',
      href: '/admin/blog/new',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      color: 'green',
    },
    {
      title: 'Edit Site Content',
      description: 'Update homepage and section content',
      href: '/admin/content',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: 'purple',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">
          Dashboard
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Welcome to your Sparkplug admin panel
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[var(--color-bg-secondary)] p-6 rounded-lg shadow-md border border-[var(--color-brand-primary)]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[var(--color-text-secondary)]">
              Total Form Submissions
            </h3>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-[var(--color-text-primary)]">
            {isLoading ? '...' : stats.totalForms}
          </p>
          <Link href="/admin/forms" className="text-sm text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] mt-2 inline-block">
            View all →
          </Link>
        </div>

        <div className="bg-[var(--color-bg-secondary)] p-6 rounded-lg shadow-md border border-[var(--color-brand-primary)]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[var(--color-text-secondary)]">
              Blog Posts
            </h3>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-[var(--color-text-primary)]">
            {isLoading ? '...' : stats.totalBlogPosts}
          </p>
          <Link href="/admin/blog" className="text-sm text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] mt-2 inline-block">
            Manage posts →
          </Link>
        </div>

        <div className="bg-[var(--color-bg-secondary)] p-6 rounded-lg shadow-md border border-[var(--color-brand-primary)]/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[var(--color-text-secondary)]">
              Quick Access
            </h3>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <p className="text-lg text-[var(--color-text-primary)] mb-1">
            Content Management
          </p>
          <Link href="/admin/content" className="text-sm text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] inline-block">
            Edit site content →
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="bg-[var(--color-bg-secondary)] p-6 rounded-lg shadow-md border border-[var(--color-brand-primary)]/20 hover:border-[var(--color-brand-primary)] transition-all hover:shadow-lg group"
            >
              <div className={`p-3 bg-${action.color}-100 dark:bg-${action.color}-900/30 rounded-lg inline-block mb-4`}>
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-brand-primary)]">
                {action.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm">
                {action.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-[var(--color-bg-secondary)] p-6 rounded-lg shadow-md border border-[var(--color-brand-primary)]/20">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
          Getting Started
        </h2>
        <div className="space-y-3 text-[var(--color-text-secondary)]">
          <p className="flex items-start">
            <svg className="w-5 h-5 text-[var(--color-brand-primary)] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>View and respond to form submissions from the Forms page</span>
          </p>
          <p className="flex items-start">
            <svg className="w-5 h-5 text-[var(--color-brand-primary)] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Create and manage blog posts to keep your audience engaged</span>
          </p>
          <p className="flex items-start">
            <svg className="w-5 h-5 text-[var(--color-brand-primary)] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Update site content directly without touching code</span>
          </p>
        </div>
      </div>
    </div>
  )
}

