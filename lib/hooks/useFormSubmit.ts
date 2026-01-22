'use client'

import { useState } from 'react'

interface FormData {
  [key: string]: any
}

interface UseFormSubmitResult {
  submit: (formType: string, data: FormData) => Promise<void>
  isSubmitting: boolean
  error: string | null
  success: boolean
}

export function useFormSubmit(): UseFormSubmitResult {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submit = async (formType: string, data: FormData) => {
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType,
          ...data,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit form')
      }

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setIsSubmitting(false)
    }
  }

  return { submit, isSubmitting, error, success }
}
