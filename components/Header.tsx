'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { label: "Home", href: "/" },
  { label: "Experiences", href: "/programs" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" }
];

type HeaderSiteContent = {
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
};

export default function Header({ siteContent }: { siteContent: HeaderSiteContent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // ✅ LOGO NOW COMES FROM DYNAMIC PROP
  const branding =
    siteContent?.site?.branding ||
    siteContent?.branding || {
    logoDark: '/logos/logo.png',
    logoLight: '/logos/sparkplug_light.png'
  };
  const logoDark = branding.logoDark || '/logos/logo.png';
  const logoLight = branding.logoLight || '/logos/sparkplug_light.png';

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
                src={logoLight}
                alt="Sparkplug Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-105 logo-light"
                data-logo="light"
                style={{ width: 'auto', height: '3.3rem' }}
                priority
              />
              <Image
                src={logoDark}
                alt="Sparkplug Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-105 logo-dark"
                data-logo="dark"
                style={{ width: 'auto', height: '3.3rem' }}
                priority
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
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-bg-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-5 flex flex-col justify-between"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  className="w-full h-0.5 bg-current rounded-full transition-colors"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-full h-0.5 bg-current rounded-full transition-colors"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  className="w-full h-0.5 bg-current rounded-full transition-colors"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Side Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
                onClick={() => setIsMenuOpen(false)}
              />

{/* Side Panel */}
<motion.div
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  exit={{ x: '100%' }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  className="
    fixed top-0 right-0 bottom-0 w-80 max-w-[85vw]
    bg-white dark:bg-slate-900
    text-slate-900 dark:text-slate-100
    shadow-2xl border-l border-gray-200 dark:border-white/10
    lg:hidden z-50 overflow-y-auto
  "
>
  {/* Header */}
  <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/10">
    
    {/* Logo (Fixed for dark/light) */}
    <div className="flex items-center">
      <Image
        src={logoLight}
        alt="Logo"
        width={32}
        height={32}
        className="block dark:hidden"
        style={{ height: '2.5rem', width: 'auto' }}
      />
      <Image
        src={logoDark}
        alt="Logo"
        width={32}
        height={32}
        className="hidden dark:block"
        style={{ height: '2.5rem', width: 'auto' }}
      />
    </div>

    {/* Close Button */}
    <button
      onClick={() => setIsMenuOpen(false)}
      className="
        p-2 rounded-lg text-slate-800 dark:text-white
        hover:bg-gray-100 dark:hover:bg-white/10
        transition transform hover:scale-105 active:scale-95
      "
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  {/* Navigation */}
  <div className="px-4 py-6 space-y-2">
    {navigation.map((item, index) => (
      <motion.div
        key={item.href}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.08 }}
      >
        <Link
          href={item.href}
          onClick={() => setIsMenuOpen(false)}
          className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
            pathname === item.href
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'text-slate-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-white/10'
          }`}
        >
          <span>{item.label}</span>

          {pathname === item.href ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293l-8 8-4-4 1.414-1.414L8 10.586l6.293-6.293z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </Link>
      </motion.div>
    ))}
  </div>

  {/* Partner Button */}
  <div className="px-4">
    <Link
      href="/partner"
      onClick={() => setIsMenuOpen(false)}
      className="
        block w-full py-4 text-center font-semibold rounded-xl transition-all duration-200

        bg-gray-100 text-gray-800 shadow-sm
        hover:bg-gray-200 hover:shadow-md

        dark:bg-gray-800 dark:text-gray-100
        dark:hover:bg-gray-700 dark:hover:shadow-md

        focus:outline-none focus:ring-2 focus:ring-blue-500/40
      "
    >
      Partner With Us
    </Link>

    {/* Theme Toggle */}
    <div className="mt-4 flex justify-center">
      <ThemeToggle />
    </div>
  </div>

  {/* Optional Contact Section */}
  {/*
  <div className="px-4 pt-6 pb-4 border-t border-gray-200 dark:border-white/10 space-y-4">
    <a
      href={`mailto:${siteContent.contactInfo.email}`}
      className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
    >
      ✉ {siteContent.contactInfo.email}
    </a>

    <a
      href={`tel:${siteContent.contactInfo.phone?.replace(/\s/g, '')}`}
      className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
    >
      📞 {siteContent.contactInfo.phone}
    </a>
  </div>
  */}
</motion.div>
            </>
          )}
        </AnimatePresence>
        </div>
    </nav>
  );
}
