import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[12rem] md:text-[16rem] font-black text-[var(--color-brand-primary)] leading-none opacity-20">
            404
          </h1>
        </div>
        
        {/* Content */}
        <div className="relative -mt-32 md:-mt-40">
          <div className="inline-flex items-center px-6 py-3 bg-[var(--color-brand-primary)]/10 rounded-full text-[var(--color-brand-primary)] text-sm font-semibold mb-6">
            🔍 Page Not Found
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] mb-6">
            Oops! This beat got lost
          </h2>
          
          <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on rhythm.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="bg-[var(--color-brand-primary)] text-[var(--color-button-text)] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Go to Homepage
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] font-bold text-lg rounded-full hover:bg-[var(--color-brand-primary)] hover:text-[var(--color-button-text)] transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-[var(--color-brand-primary)]/20">
            <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
              You might be looking for:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/about" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors">
                About Us
              </Link>
              <span className="text-[var(--color-text-tertiary)]">•</span>
              <Link href="/programs" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors">
                Our Programs
              </Link>
              <span className="text-[var(--color-text-tertiary)]">•</span>
              <Link href="/blog" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors">
                Blog
              </Link>
              <span className="text-[var(--color-text-tertiary)]">•</span>
              <Link href="/partner" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
