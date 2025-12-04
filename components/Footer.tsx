'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      href: 'https://instagram.com/thesparkplugin',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8">
          
          {/* Company Info */}
          <div className="w-full flex flex-col space-y-6">
            <div className="">
              <Image src="/logos/sparkplug_logo.svg" alt="Sparkplug Logo" width={150} height={50} />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              High-energy audience engagement experiences for teams, corporates, and communities across India.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Pan-India Coverage</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:connect@sparkplug.in" className="hover:text-brand-primary transition-colors">connect@sparkplug.in</a>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
                <a href="https://instagram.com/thesparkplugin" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">@thesparkplugin</a>
              </div>
            </div>
            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-white">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
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
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Experiences */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-6 text-white">Experiences</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Corporate Drum Circles
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Team-Building Workshops
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Workplace Culture Sessions
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Community Experiences
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Custom Experiences
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-6 text-white">Stay Connected</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe for updates on our experiences and stories.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-primary text-white px-4 py-3 rounded-lg hover:bg-brand-primary-700 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 transition-colors duration-300 text-sm font-medium"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sparkplug. All rights reserved.
          </p>
          <div className="mt-2 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm mr-4 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm mr-4 transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
