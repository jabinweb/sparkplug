import Link from 'next/link';
import { getAllSiteContent } from '@/lib/getContent';

export const revalidate = 0;

export default async function GetInvolvedPage() {
  const siteContent = await getAllSiteContent();
  const getInvolved = (siteContent as any).getInvolved || (siteContent as any).site?.getInvolved || {};

  return (
    <div className="bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(235,52%,27%)] to-[hsl(235,52%,35%)] text-white py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {getInvolved.hero?.title || 'Get Involved'}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              {getInvolved.hero?.subtitle || ''}
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              {getInvolved.hero?.description || ''}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              {getInvolved.booking?.title || 'Book an Experience'}
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              {getInvolved.booking?.description || ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {(getInvolved.booking?.packages || []).map((pkg: any, index: number) => (
              <div key={index} className="bg-[var(--color-bg-primary)] border-2 border-[var(--color-brand-primary)]/20 rounded-xl p-8 text-center hover:border-[var(--color-brand-accent)] hover:shadow-xl transition-all transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                  {pkg.name}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6">{pkg.description}</p>
                <Link
                  href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  className="block w-full bg-[var(--color-brand-accent)] text-[var(--color-text-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-brand-secondary)] transition-colors shadow-md hover:shadow-lg"
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center bg-[var(--color-bg-primary)] rounded-xl p-8 shadow-lg border border-[var(--color-brand-primary)]/20">
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">Need a custom experience?</h3>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Tell us about your team size, goals, and preferences. We&apos;ll design a tailored experience just for you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Contact Us for Custom Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary-50 to-brand-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Partner With Us
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Collaborate to create impactful experiences
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-[var(--color-text-secondary)] mb-6">
              Ready to create meaningful change together?
            </p>
            <a
              href="mailto:partnerships@sparkplug.in"
              className="bg-[var(--color-brand-primary)] text-[var(--color-button-text)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-brand-primary)]/80 transition-colors inline-block"
            >
              Start a Partnership
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
