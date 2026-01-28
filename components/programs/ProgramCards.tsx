"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  perfectFor: string;
  idealFor: string[];
  badge: string;
  badgeColor: string;
  gradientColors: string;
  iconBg: string;
  icon: string;
  order?: string;
}

export function ProgramCard({ 
  title, 
  subtitle, 
  description, 
  perfectFor, 
  idealFor, 
  badge, 
  badgeColor,
  gradientColors,
  iconBg,
  icon,
  order = ''
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${order}`}
    >
      <div className={order.includes('order-2') ? 'order-1 lg:order-2' : ''}>
        <div className={`inline-flex items-center px-4 py-2 ${badgeColor} rounded-full text-sm font-medium mb-6`}>
          {badge}
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-4">
          {title}
        </h2>
        <p className="text-xl text-[var(--color-brand-secondary)] font-semibold mb-6">
          {subtitle}
        </p>
        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
          {description}
        </p>
        <p className="text-[var(--color-text-secondary)] font-medium mb-6">
          <span className="text-[var(--color-brand-primary)]">Perfect for:</span> {perfectFor}
        </p>
        <div className="mb-8">
          <p className="font-bold text-[var(--color-text-primary)] mb-4">Ideal for:</p>
          <ul className="grid grid-cols-2 gap-3">
            {idealFor.map((item, index) => (
              <li key={index} className="flex items-center text-[var(--color-text-secondary)]">
                <svg className="w-5 h-5 text-[var(--color-brand-primary)] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={order.includes('order-2') ? 'order-2 lg:order-1 relative' : 'relative'}>
        <div className={`${gradientColors} rounded-3xl p-8 h-80 flex items-center justify-center`}>
          <div className="text-center">
            <div className={`w-24 h-24 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl`}>
              <span className="text-5xl">{icon}</span>
            </div>
            <p className="text-[var(--color-text-secondary)] italic">&quot;{subtitle}&quot;</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface CustomExperienceProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function CustomExperience({ title, subtitle, description }: CustomExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
        🎨 Tailor-Made
      </div>
      <h2 className="text-3xl md:text-5xl font-black mb-6">
        {title || 'Custom Experiences'}
      </h2>
      <p className="text-xl text-green-400 font-semibold mb-6">
        {subtitle || 'If you can imagine it, we can build it'}
      </p>
      <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
        {description || 'Have something unique in mind? We design custom engagement experiences for corporates, communities, events, and hybrid/virtual formats. If you can imagine it, we can build it — music-led, rhythm-driven, or completely tailor-made.'}
      </p>
      <Link 
        href="/contact"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-brand-accent)] to-[var(--color-brand-secondary)] text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        Let&apos;s Create Together
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </motion.div>
  );
}
