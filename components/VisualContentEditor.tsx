'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MediaPicker } from './MediaPicker'

interface ContentEditorProps {
  initialContent: any
  onSave: (content: any) => Promise<void>
}

export default function VisualContentEditor({ initialContent, onSave }: ContentEditorProps) {
  const router = useRouter()
  const [selectedSection, setSelectedSection] = useState('homepage')
  const [content, setContent] = useState(initialContent)
  const [isSaving, setIsSaving] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const sections = {
    homepage: 'Homepage',
    about: 'About Page',
    programs: 'Programs/Experiences',
    contact: 'Contact Page',
    cta: 'Call to Action',
    site: 'Site Info & Branding',
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
      setMessage({ type: 'success', text: 'Content saved successfully! Refreshing website...' })
      
      // Refresh the router to reload all data including JSON file
      // This ensures Header/Footer get the latest logo changes
      setTimeout(() => {
        router.refresh()
      }, 500)
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

  const handleImageUpload = async (path: string[], file: File) => {
    setIsUploading(true)
    setMessage({ type: 'success', text: 'Uploading image...' })
    
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', 'images') // Organize images in their own folder
      formData.append('isPublic', 'true') // Make images publicly accessible
      formData.append('description', `Image for ${path.join(' > ')}`)

      console.log('Uploading file:', file.name, file.type)

      const response = await fetch('/api/files', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      
      if (!response.ok) {
        console.error('Upload failed:', data)
        throw new Error(data.error || 'Upload failed')
      }

      console.log('Upload successful:', data.url)
      updateField(path, data.url)
      setMessage({ type: 'success', text: `Image uploaded! Click Save to apply changes.` })
    } catch (error) {
      console.error('Upload error:', error)
      setMessage({ type: 'error', text: `Failed to upload: ${error instanceof Error ? error.message : 'Unknown error'}` })
    } finally {
      setIsUploading(false)
    }
  }

  const addArrayItem = (path: string[], itemType: 'string' | 'object') => {
    const currentArray = getField(path) as any[]
    const newItem = itemType === 'string' ? '' : {}
    updateField(path, [...currentArray, newItem])
  }

  const removeArrayItem = (path: string[], index: number) => {
    const currentArray = getField(path) as any[]
    const newArray = currentArray.filter((_, i) => i !== index)
    updateField(path, newArray)
  }

  const renderInput = (path: string[], value: any, label: string) => {
    const key = path.join('.')

    // Handle arrays
    if (Array.isArray(value)) {
      const itemType = value.length > 0 ? (typeof value[0] === 'string' ? 'string' : 'object') : 'string'
      
      return (
        <div key={key} className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
              {label} ({value.length} items)
            </label>
            <button
              onClick={() => addArrayItem(path, itemType)}
              className="px-3 py-1 text-xs bg-[var(--color-brand-primary)] text-white rounded hover:bg-[var(--color-brand-secondary)] transition-colors"
            >
              + Add Item
            </button>
          </div>
          <div className="pl-4 border-l-2 border-[var(--color-brand-primary)]/20 space-y-2">
            {value.map((item, index) => (
              <div key={`${key}.${index}`} className="relative group">
                {typeof item === 'string' ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const newArray = [...value]
                        newArray[index] = e.target.value
                        updateField(path, newArray)
                      }}
                      className="flex-1 px-3 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg text-sm"
                      placeholder={`Item ${index + 1}`}
                    />
                    <button
                      onClick={() => removeArrayItem(path, index)}
                      className="px-3 py-2 bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 rounded-lg text-sm transition-colors"
                      title="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="bg-[var(--color-bg-primary)] p-3 rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-[var(--color-text-secondary)]">
                        {label} #{index + 1}
                      </div>
                      <button
                        onClick={() => removeArrayItem(path, index)}
                        className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 rounded text-xs transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                    {renderObject([...path, index.toString()], item)}
                  </div>
                )}
              </div>
            ))}
            {value.length === 0 && (
              <div className="text-sm text-[var(--color-text-secondary)] italic">
                No items yet. Click "Add Item" to get started.
              </div>
            )}
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

    // Handle strings (check for long text or image URLs)
    if (typeof value === 'string') {
      const keyLower = key.toLowerCase()
      const pathString = path.join('.').toLowerCase()
      
      const isImage = keyLower.includes('logo') || 
                      keyLower.includes('icon') || 
                      keyLower.includes('image') || 
                      keyLower.includes('favicon') ||
                      pathString.includes('logo') ||
                      pathString.includes('icon') ||
                      pathString.includes('branding') ||
                      (value.startsWith('/') && (value.endsWith('.png') || value.endsWith('.jpg') || value.endsWith('.jpeg') || value.endsWith('.svg') || value.endsWith('.webp') || value.endsWith('.ico')))
      
      const isLongText = value.length > 100

      if (isImage) {
        return (
          <div key={key} className="space-y-2">
            <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
              {label} 📷
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => updateField(path, e.target.value)}
                  className="w-full px-3 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg text-sm"
                  placeholder="Image URL"
                />
              </div>
              <div className="flex gap-2">
                <MediaPicker
                  onSelect={(url) => updateField(path, url)}
                  selectedUrl={value}
                  folder="images"
                />
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        handleImageUpload(path, file)
                        e.target.value = '' // Reset input
                      }
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={isUploading}
                  />
                  <button
                    type="button"
                    disabled={isUploading}
                    className="px-4 py-2 bg-[var(--color-brand-primary)] text-[var(--color-button-text)] rounded-lg text-sm hover:bg-[var(--color-brand-secondary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isUploading ? 'Uploading...' : 'Upload New'}
                  </button>
                </div>
                {value && (
                  <button
                    type="button"
                    onClick={() => updateField(path, '')}
                    className="px-3 py-2 bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 rounded-lg text-sm transition-colors"
                    title="Remove image"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
            {value && (
              <div className="mt-2 p-2 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-brand-primary)]/10">
                <img 
                  src={value} 
                  alt={label} 
                  className="max-h-16 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            )}
          </div>
        )
      }
      
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
