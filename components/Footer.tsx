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
      name: 'YouTube',
      href: 'https://youtube.com/@sparkplug',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/sparkplug',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/sparkplug_official',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.458 0-4.467-2.01-4.467-4.468s2.009-4.467 4.467-4.467c2.458 0 4.467 2.009 4.467 4.467S10.907 16.988 8.449 16.988zM12.017 7.056c-2.732 0-4.95 2.218-4.95 4.95s2.218 4.95 4.95 4.95s4.95-2.218 4.95-4.95S14.749 7.056 12.017 7.056zM18.448 6.394c0 .795-.646 1.441-1.441 1.441s-1.44-.646-1.44-1.441s.645-1.44 1.44-1.44S18.448 5.599 18.448 6.394z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/sparkplug.official',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8">
          
          {/* Company Info & Mission */}
          <div className="w-full flex flex-col space-y-6">
            <div className="">
              <Image src="/logos/sparkplug_logo.svg" alt="Sparkplug Logo" width={150} height={50} />
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Pan-India Coverage</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>hello@sparkplug.in</span>
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
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-primary transition-all duration-300"
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
                <Link href="/about" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Stories & Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs & Resources */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-6 text-white">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs/education" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Education Initiatives
                </Link>
              </li>
              <li>
                <Link href="/programs/community" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Community Development
                </Link>
              </li>
              <li>
                <Link href="/programs/training" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Skill Training
                </Link>
              </li>
              <li>
                <Link href="/programs/research" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Research & Policy
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-brand-primary transition-colors duration-300 text-sm">
                  Our Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-6 text-white">Stay Connected</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe for updates on our programs and impact stories.
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