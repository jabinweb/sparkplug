'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer({ siteContent }: { siteContent: any }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  // ✅ Dynamic branding (same as Header)
  const branding = siteContent?.site?.branding || {
    logoDark: '/logos/logo.png',
    logoLight: '/logos/sparkplug_light.png',
  };

  useEffect(() => {
    setMounted(true);

    const isDark = document.documentElement.classList.contains('dark');
    setCurrentTheme(isDark ? 'dark' : 'light');

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setCurrentTheme(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing to our newsletter!');
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/thesparkplugin',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
        </svg>
      ),
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/company/thesparkplug/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8">

          {/* Company Info */}
          <div className="w-full flex flex-col space-y-6">
            <div>
              <Image
                src={currentTheme === 'light' ? branding.logoLight : branding.logoDark}
                alt="Sparkplug Logo"
                width={150}
                height={50}
              />
            </div>

            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              High-energy audience engagement experiences for teams, corporates, and communities across India.
            </p>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-[var(--color-text-primary)]">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[var(--color-bg-tertiary)] rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                  >
                    <div className="w-5 h-5">{social.icon}</div>
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

          {/* Experiences */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-6 text-[var(--color-text-primary)]">Experiences</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 text-base">
                  Corporate Drum Circles
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 text-base">
                  Team-Building Workshops
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 text-base">
                  Workplace Culture Sessions
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 text-base">
                  Community Experiences
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300 text-base">
                  Custom Experiences
                </Link>
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
          </p>
          <div className="mt-2 sm:mt-0">
            <Link href="/privacy" className="text-[var(--color-text-tertiary)] hover:text-white text-sm mr-4 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[var(--color-text-tertiary)] hover:text-white text-sm mr-4 transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-[var(--color-text-tertiary)] hover:text-white text-sm transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
