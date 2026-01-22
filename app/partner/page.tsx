'use client';

import Link from 'next/link';
import siteContent from '../../content/site-content.json';

export default function GetInvolvedPage() {
  const { getInvolved } = siteContent;

  const handleBookingClick = (packageName: string) => {
    // Redirect to contact page with package pre-selected
    window.location.href = `/contact?package=${encodeURIComponent(packageName)}`;
  };

  return (
    <div className="bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <section className="bg-[var(--color-brand-primary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {getInvolved.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              {getInvolved.hero.subtitle}
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              {getInvolved.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              {getInvolved.booking.title}
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              {getInvolved.booking.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {getInvolved.booking.packages.map((pkg, index) => (
              <div key={index} className="bg-[var(--color-bg-primary)] border-2 border-[var(--color-brand-primary)]/20 rounded-xl p-8 text-center hover:border-[var(--color-brand-accent)] hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-accent)] bg-opacity-10 rounded-full mb-6">
                  {index === 0 && (
                    <svg className="w-8 h-8 text-[var(--color-brand-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8 text-[var(--color-brand-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-8 h-8 text-[var(--color-brand-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                  {pkg.name}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6 min-h-[3rem] flex items-center justify-center">{pkg.description}</p>
                <button
                  onClick={() => handleBookingClick(pkg.name)}
                  className="w-full bg-[var(--color-brand-accent)] text-[var(--color-text-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-brand-secondary)] transition-colors shadow-md hover:shadow-lg"
                >
                  Get a Quote
                </button>
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

      {/* Volunteer Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              {getInvolved.volunteer.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {getInvolved.volunteer.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {getInvolved.volunteer.opportunities.map((opportunity, index) => (
              <div key={index} className="bg-[var(--color-bg-primary)] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-[var(--color-brand-primary)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {index === 0 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                      {opportunity.role}
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium text-[var(--color-text-primary)]">Commitment:</span>
                        </p>
                        <p className="text-sm text-gray-700">{opportunity.commitment}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium text-[var(--color-text-primary)]">Skills Needed:</span>
                        </p>
                        <p className="text-sm text-gray-700">{opportunity.skills}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/volunteer/${opportunity.role.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full bg-[var(--color-brand-primary)] text-[var(--color-button-text)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-brand-secondary)] transition-colors block text-center"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Work With Us Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getInvolved.workWithUs.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              {getInvolved.workWithUs.description}
            </p>
          </div>

          <div className="bg-brand-primary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Current Openings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getInvolved.workWithUs.currentOpenings.map((position, index) => (
                <div key={index} className="bg-[var(--color-bg-primary)] p-6 rounded-lg shadow-md text-center">
                  <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                    {position}
                  </h4>
                  <Link
                    href={`/careers/${position.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-brand-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-secondary-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/careers"
                className="bg-brand-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-secondary-700 transition-colors"
              >
                View All Openings
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Partnership Section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary-50 to-brand-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Partner With Us
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Collaborate with School of Social Change to create systemic impact in addressing education mortality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-bg-primary)] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--color-brand-primary)] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Educational Institutions
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4 text-center">
                Transform your school or institution through our three-pillar approach
              </p>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--color-brand-primary)] rounded-full mr-3"></span>
                  Comprehensive transformation projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--color-brand-primary)] rounded-full mr-3"></span>
                  Teacher capacity building programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--color-brand-primary)] rounded-full mr-3"></span>
                  Student mental health initiatives
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-bg-primary)] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--color-brand-secondary)] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Government & NGOs
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4 text-center">
                Policy collaboration and systemic change initiatives
              </p>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--color-brand-secondary)] rounded-full mr-3"></span>
                  Policy research and advocacy
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                  Community engagement programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></span>
                  Impact measurement frameworks
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-bg-primary)] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--color-brand-primary)] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Corporate Partners
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4 text-center">
                CSR partnerships for sustainable education impact
              </p>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--color-brand-primary)] rounded-full mr-3"></span>
                  Innovation lab collaborations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-primary-700 rounded-full mr-3"></span>
                  Employee volunteer programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-primary-700 rounded-full mr-3"></span>
                  Technology and resource support
                </li>
              </ul>
            </div>
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
