'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid credentials')
      } else {
        router.push('/admin/dashboard')
        router.refresh()
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)] px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold text-[var(--color-brand-primary)] mb-2">
              Sparkplug
            </h1>
          </Link>
        </div>

        <div className="bg-[var(--color-bg-secondary)] p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2 text-center">
            Admin Login
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-8">
            Sign in to access the admin panel
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
                placeholder="admin@sparkplug.in"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[var(--color-brand-primary)] text-[var(--color-button-text)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-brand-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] disabled:opacity-50 transition-colors"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)]">
              ← Back to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
