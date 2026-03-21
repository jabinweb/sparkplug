'use client'

import { useRef, useEffect } from 'react'
import { Bold, Italic, List, Type } from 'lucide-react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
}

export function RichTextEditor({ value, onChange, label, placeholder }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)

  // Initialize content
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || ''
    }
  }, []) // Only on mount to avoid cursor jumping

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-[var(--color-text-secondary)]">{label}</label>}
      <div className="border border-[var(--color-brand-primary)]/30 rounded-lg overflow-hidden bg-[var(--color-bg-primary)]">
        {/* Toolbar */}
        <div className="flex items-center gap-1 p-2 bg-[var(--color-bg-secondary)] border-b border-[var(--color-brand-primary)]/20">
          <button
            type="button"
            onClick={() => execCommand('bold')}
            className="p-1.5 hover:bg-[var(--color-brand-primary)]/10 rounded transition-colors text-[var(--color-text-primary)]"
            title="Bold"
          >
            <Bold size={16} />
          </button>
          <button
            type="button"
            onClick={() => execCommand('italic')}
            className="p-1.5 hover:bg-[var(--color-brand-primary)]/10 rounded transition-colors text-[var(--color-text-primary)]"
            title="Italic"
          >
            <Italic size={16} />
          </button>
          <div className="w-px h-4 bg-[var(--color-brand-primary)]/20 mx-1" />
          <button
            type="button"
            onClick={() => execCommand('insertUnorderedList')}
            className="p-1.5 hover:bg-[var(--color-brand-primary)]/10 rounded transition-colors text-[var(--color-text-primary)]"
            title="Bullet List"
          >
            <List size={16} />
          </button>
          <button
            type="button"
            onClick={() => execCommand('formatBlock', 'h3')}
            className="p-1.5 hover:bg-[var(--color-brand-primary)]/10 rounded transition-colors text-[var(--color-text-primary)]"
            title="Heading"
          >
            <Type size={16} />
          </button>
        </div>

        {/* Editor Area */}
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onBlur={handleInput}
          data-placeholder={placeholder}
          className="min-h-[150px] p-4 text-[var(--color-text-primary)] text-sm focus:outline-none overflow-y-auto max-h-[400px] prose prose-sm dark:prose-invert max-w-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:pointer-events-none"
        />
      </div>
      <p className="text-[10px] text-[var(--color-text-tertiary)] italic">
        Tip: Press Shift+Enter for a single line break.
      </p>
    </div>
  )
}
