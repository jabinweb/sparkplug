'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[var(--color-brand-primary)]/10 mb-6">
            <svg 
              className="w-16 h-16 text-[var(--color-brand-primary)]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
        </div>
        
        {/* Content */}
        <div className="inline-flex items-center px-6 py-3 bg-[var(--color-brand-primary)]/10 rounded-full text-[var(--color-brand-primary)] text-sm font-semibold mb-6">
          ⚠️ Something Went Wrong
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] mb-6">
          The rhythm broke
        </h2>
        
        <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
          We&apos;re sorry, something unexpected happened. Don&apos;t worry, we&apos;re on it! Try refreshing the page or head back home.
        </p>
        
        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-[var(--color-bg-secondary)] rounded-lg text-left max-w-lg mx-auto">
            <p className="text-xs font-mono text-[var(--color-text-tertiary)] break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs font-mono text-[var(--color-text-tertiary)] mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="bg-[var(--color-brand-primary)] text-[var(--color-button-text)] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="px-8 py-4 border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] font-bold text-lg rounded-full hover:bg-[var(--color-brand-primary)] hover:text-[var(--color-button-text)] transition-all duration-300"
          >
            Go to Homepage
          </Link>
        </div>
        
        {/* Help Text */}
        <div className="mt-12 pt-8 border-t border-[var(--color-brand-primary)]/20">
          <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
            Still experiencing issues?
          </p>
          <Link 
            href="/contact" 
            className="text-sm text-[var(--color-brand-primary)] hover:underline font-semibold"
          >
            Contact our support team →
          </Link>
        </div>
      </div>
    </div>
  );
}
