'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import siteContentJson from '@/content/site-content.json';

const navigation = [
  { label: "Home", href: "/" },
  { label: "Experiences", href: "/programs" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Header({ siteContent }: { siteContent: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');
  const pathname = usePathname();

  // ✅ LOGO NOW COMES FROM DYNAMIC PROP
  const branding = siteContent?.site?.branding || {
    logoDark: '/logos/logo.png',
    logoLight: '/logos/sparkplug_light.png'
  };

  // untouched
  const contactInfo = (siteContentJson as any).contact?.info || {
    email: 'connect@sparkplug.in',
    phone: '+91 99743 70747'
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
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`bg-[var(--color-bg-tertiary)] sticky top-0 z-50 transition-all duration-300 border-b border-gray-200 dark:border-white/10 ${
      scrolled ? 'shadow-lg' : 'shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">

          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src={currentTheme === 'light' ? branding.logoLight : branding.logoDark}
                alt="Sparkplug Logo"
                width={40}
                height={40}
                className="w-auto h-10 sm:h-10 md:h-12 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center px-4">
            <div className="flex items-center space-x-1 xl:space-x-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                      pathname === item.href
                        ? 'text-[var(--color-brand-primary)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)]'
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-brand-primary)] rounded-full"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA + Theme */}
          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ThemeToggle />
            <Link
              href="/partner"
              className="bg-[var(--color-brand-primary)] text-[var(--color-button-text)] px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg text-sm xl:text-base font-semibold hover:bg-[var(--color-brand-primary-600)] hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Partner With Us
            </Link>
          </motion.div>

        </div>
      </div>
    </nav>
  );
}