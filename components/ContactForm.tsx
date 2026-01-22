'use client';

import { useState } from 'react';
import { useFormSubmit } from '@/lib/hooks/useFormSubmit';

interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

interface ContactFormProps {
  title: string;
  subtitle?: string;
  fields: FormField[];
  submitText: string;
  formType: string; // 'contact', 'newsletter', 'volunteer', etc.
  successMessage?: string;
  onSubmit?: (data: { [key: string]: string }) => void;
}

export default function ContactForm({ 
  title, 
  subtitle, 
  fields, 
  submitText,
  formType,
  successMessage = 'Thank you! Your submission has been received.',
  onSubmit
}: ContactFormProps) {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const { submit, isSubmitting, error, success } = useFormSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submit(formType, formData);
      
      // Call optional onSubmit callback
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Reset form on success
      setFormData({});
    } catch (err) {
      // Error is handled by the hook
      console.error('Form submission error:', err);
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)] p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">{title}</h3>
        {subtitle && (
          <p className="text-[var(--color-text-secondary)]">{subtitle}</p>
        )}
      </div>

      {success && (
        <div className="mb-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-md">
          {successMessage}
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={4}
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full px-3 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={field.placeholder}
                required={field.required}
              />
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full px-3 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={field.required}
              >
                <option value="">Select an option</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full px-3 py-2 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? 'Submitting...' : submitText}
        </button>
      </form>
    </div>
  );
}