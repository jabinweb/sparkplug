'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

type FooterSiteContent = {
  branding?: {
    logoDark?: string;
    logoLight?: string;
  };
  site?: {
    branding?: {
      logoDark?: string;
      logoLight?: string;
    };
  };
  contact?: {
    info?: {
      email?: string;
      phone?: string;
      location?: string;
      instagramUrl?: string;
      linkedinurl?: string;
    };
  };
};

export default function Footer({ siteContent }: { siteContent: FooterSiteContent }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Dynamic branding (same as Header)
  const branding =
    siteContent?.site?.branding ||
    siteContent?.branding || {
    logoDark: '/logos/logo.png',
    logoLight: '/logos/sparkplug_light.png',
  };
  const logoDark = branding.logoDark || '/logos/logo.png';
  const logoLight = branding.logoLight || '/logos/sparkplug_light.png';
  const contactInfo = siteContent?.contact?.info || {};
  const contactEmail = contactInfo.email || 'hello@thesparkplug.in';
  const contactPhone = contactInfo.phone || '+91 98450 12345';
  const contactLocation = contactInfo.location || 'Bangalore, India';
  const instagramUrl = contactInfo.instagramUrl || 'https://instagram.com/thesparkplugin';
  const linkedinUrl = contactInfo.linkedinurl || 'https://www.linkedin.com/company/thesparkplug/';

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Newsletter signup logic would go here
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing to our newsletter!');
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: instagramUrl,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
       {
      name: 'Linkedin',
      href: linkedinUrl,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
      )
    }
  ];

  return (
    <footer className="bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8">
          
          {/* Company Info */}
          <div className="w-full flex flex-col space-y-6">
            <div>
              <Image
                src={logoLight}
                alt="Sparkplug Logo"
                width={180}
                height={60}
                className="w-auto logo-light"
                data-logo="light"
                style={{ width: 'auto', height: '4rem' }}
              />
              <Image
                src={logoDark}
                alt="Sparkplug Logo"
                width={180}
                height={60}
                className="w-auto logo-dark"
                data-logo="dark"
                style={{ width: 'auto', height: '4rem' }}
              />
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              High-energy audience engagement experiences for teams, corporates, and communities across India.
            </p>
            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-[var(--color-text-primary)]">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[var(--color-bg-tertiary)] rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <div className="w-5 h-5">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-6 text-[var(--color-text-primary)]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 text-base">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-6 text-[var(--color-text-primary)]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">Phone</span>
                  <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors">{contactPhone}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">Email</span>
                  <a href={`mailto:${contactEmail}`} className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors">{contactEmail}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-tertiary)]">Location</span>
                  <span className="text-[var(--color-text-secondary)]">{contactLocation}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-6 text-[var(--color-text-primary)]">Stay Connected</h3>
            <p className="text-[var(--color-text-secondary)] mb-4 text-sm">
              Subscribe for updates on our experiences and stories.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--color-brand-primary)] w-full text-[var(--color-button-text)] px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg text-xs xl:text-sm font-semibold hover:bg-[var(--color-brand-primary-600)] hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[var(--color-text-tertiary)] text-sm">
            © 2025 Sparkplug. All rights reserved.
            <span className="mx-2">•</span>
            Built with <span aria-hidden="true">❤️</span> by{' '}
            <a
              href="https://web.jabin.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-tertiary)] hover:text-[var(--color-brand-primary)] transition-colors"
            >
              Jabin Web
            </a>
          </p>
          <div className="mt-2 sm:mt-0">
            <Link href="/privacy" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-brand-primary)] text-sm mr-4 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-brand-primary)] text-sm mr-4 transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-brand-primary)] text-sm transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
