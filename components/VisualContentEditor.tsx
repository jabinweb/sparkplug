'use client'

import { useState, useEffect } from 'react'

interface ContentEditorProps {
  initialContent: any
  onSave: (content: any) => Promise<void>
}

export default function VisualContentEditor({ initialContent, onSave }: ContentEditorProps) {
  const [selectedSection, setSelectedSection] = useState('homepage')
  const [content, setContent] = useState(initialContent)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const sections = {
    homepage: 'Homepage',
    about: 'About Page',
    programs: 'Programs/Experiences',
    contact: 'Contact Page',
    cta: 'Call to Action',
    site: 'Site Info',
    navigation: 'Navigation Menu',
    getInvolved: 'Get Involved/Partner',
    blog: 'Blog Settings',
    testimonials: 'Testimonials'
  }

  const updateField = (path: string[], value: any) => {
    const newContent = JSON.parse(JSON.stringify(content))
    let current: any = newContent
    
    for (let i = 0; i < path.length - 1; i++) {
      if (!current[path[i]]) current[path[i]] = {}
      current = current[path[i]]
    }
    
    current[path[path.length - 1]] = value
    setContent(newContent)
  }

  const getField = (path: string[]) => {
    let current = content
    for (const key of path) {
      if (!current) return ''
      current = current[key]
    }
    return current || ''
  }

  const handleSave = async () => {
    setIsSaving(true)
    setMessage(null)
    try {
      await onSave(content)
      setMessage({ type: 'success', text: 'Content saved successfully!' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save content' })
    } finally {
      setIsSaving(false)
    }
  }

  const formatLabel = (key: string) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim()
  }

  const renderInput = (path: string[], value: any, label: string) => {
    const key = path.join('.')

    // Handle arrays
    if (Array.isArray(value)) {
      return (
        <div key={key} className="space-y-2">
          <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
            {label}
          </label>
          <div className="pl-4 border-l-2 border-[var(--color-brand-primary)]/20 space-y-2">
            {value.map((item, index) => (
              <div key={`${key}.${index}`}>
                {typeof item === 'string' ? (
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const newArray = [...value]
                      newArray[index] = e.target.value
                      updateField(path, newArray)
                    }}
                    className="w-full px-3 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg text-sm"
                    placeholder={`Item ${index + 1}`}
                  />
                ) : (
                  <div className="bg-[var(--color-bg-primary)] p-3 rounded-lg space-y-2">
                    <div className="text-xs font-semibold text-[var(--color-text-secondary)]">
                      {label} #{index + 1}
                    </div>
                    {renderObject([...path, index.toString()], item)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )
    }

    // Handle objects
    if (typeof value === 'object' && value !== null) {
      return (
        <div key={key} className="space-y-3">
          <label className="block text-sm font-semibold text-[var(--color-text-primary)]">
            {label}
          </label>
          <div className="pl-4 border-l-2 border-[var(--color-brand-primary)]/30 space-y-3">
            {renderObject(path, value)}
          </div>
        </div>
      )
    }

    // Handle strings (check for long text)
    if (typeof value === 'string') {
      const isLongText = value.length > 100
      return (
        <div key={key}>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
            {label}
          </label>
          {isLongText ? (
            <textarea
              value={value}
              onChange={(e) => updateField(path, e.target.value)}
              rows={3}
              className="w-full px-3 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg text-sm"
              placeholder={`Enter ${label.toLowerCase()}`}
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => updateField(path, e.target.value)}
              className="w-full px-3 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg text-sm"
              placeholder={`Enter ${label.toLowerCase()}`}
            />
          )}
        </div>
      )
    }

    // Handle other primitives
    return (
      <div key={key}>
        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
          {label}
        </label>
        <input
          type="text"
          value={String(value)}
          onChange={(e) => updateField(path, e.target.value)}
          className="w-full px-3 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg text-sm"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      </div>
    )
  }

  const renderObject = (basePath: string[], obj: any) => {
    return Object.keys(obj).map(key => {
      const value = obj[key]
      const path = [...basePath, key]
      const label = formatLabel(key)
      return renderInput(path, value, label)
    })
  }

  const renderEditor = () => {
    const sectionData = content[selectedSection]
    
    if (!sectionData) {
      return (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <p className="text-yellow-800 dark:text-yellow-200">
            No content found for this section. Please check the JSON structure.
          </p>
        </div>
      )
    }

    return (
      <div className="space-y-4">
        {renderObject([selectedSection], sectionData)}
      </div>
    )
  }

  return (
    <div>
      {message && (
        <div className={`mb-4 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300'
            : 'bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300'
        }`}>
          {message.text}
        </div>
      )}

      {/* Section Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
          Select Section to Edit
        </label>
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          className="w-full px-4 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
        >
          {Object.entries(sections).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      {/* Dynamic Form Editor */}
      <div className="bg-[var(--color-bg-secondary)] rounded-lg p-6 max-h-[600px] overflow-y-auto">
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
          {sections[selectedSection as keyof typeof sections]}
        </h3>
        {renderEditor()}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="px-6 py-2 bg-[var(--color-brand-primary)] text-[var(--color-button-text)] rounded-lg font-semibold hover:bg-[var(--color-brand-secondary)] transition-colors disabled:opacity-50"
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  )
}
