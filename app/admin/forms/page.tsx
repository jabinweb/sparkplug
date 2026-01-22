'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface FormResponse {
  id: string
  formType: string
  data: any
  ipAddress: string
  userAgent: string
  createdAt: string
}

export default function FormResponsesPage() {
  const router = useRouter()
  const [responses, setResponses] = useState<FormResponse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedResponse, setSelectedResponse] = useState<FormResponse | null>(null)

  useEffect(() => {
    fetchResponses()
  }, [selectedType])

  const fetchResponses = async () => {
    setIsLoading(true)
    try {
      const url = selectedType === 'all' 
        ? '/api/forms' 
        : `/api/forms?formType=${selectedType}`
      
      const response = await fetch(url)
      const data = await response.json()
      setResponses(data.responses || [])
    } catch (error) {
      console.error('Error fetching responses:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const formTypes = ['all', 'contact', 'newsletter', 'volunteer', 'booking']

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
          Form Responses
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          View and manage all form submissions
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {formTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === type
                  ? 'bg-[var(--color-brand-primary)] text-[var(--color-button-text)]'
                  : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-brand-primary)]/10'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Responses List */}
      <div className="bg-[var(--color-bg-secondary)] rounded-lg shadow-md border border-[var(--color-brand-primary)]/20">
        {isLoading ? (
          <div className="p-8 text-center text-[var(--color-text-secondary)]">
            Loading responses...
          </div>
        ) : responses.length === 0 ? (
          <div className="p-8 text-center text-[var(--color-text-secondary)]">
            No responses found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[var(--color-bg-primary)] border-b border-[var(--color-brand-primary)]/20">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-brand-primary)]/10">
                {responses.map((response) => (
                  <tr key={response.id} className="hover:bg-[var(--color-bg-primary)] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)]">
                        {response.formType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-[var(--color-text-primary)] font-medium">
                        {response.data.name || response.data.email || 'Anonymous'}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">
                        {response.data.email || response.data.message?.substring(0, 50) + '...'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-text-secondary)]">
                      {formatDate(response.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedResponse(response)}
                        className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] font-medium"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Response Detail Modal */}
      {selectedResponse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedResponse(null)}>
          <div className="bg-[var(--color-bg-secondary)] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-[var(--color-brand-primary)]/20">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                  Form Response Details
                </h3>
                <button
                  onClick={() => setSelectedResponse(null)}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">Form Type</p>
                <p className="text-[var(--color-text-primary)]">{selectedResponse.formType}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">Submitted</p>
                <p className="text-[var(--color-text-primary)]">{formatDate(selectedResponse.createdAt)}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">Form Data</p>
                <div className="bg-[var(--color-bg-primary)] p-4 rounded-lg space-y-2">
                  {Object.entries(selectedResponse.data).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase">{key}</p>
                      <p className="text-[var(--color-text-primary)]">{String(value)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">IP Address</p>
                <p className="text-[var(--color-text-primary)] font-mono text-sm">{selectedResponse.ipAddress}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
