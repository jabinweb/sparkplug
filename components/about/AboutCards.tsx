"use client";

import { motion } from 'framer-motion';

interface ValueCardProps {
  title: string;
  description: string;
  index: number;
}

export function ValueCard({ title, description, index }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-[var(--color-bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 h-full">
        <div className="flex items-start gap-4 mb-4">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
            whileHover={{ rotate: 5 }}
          >
            <span className="text-white text-xl font-bold">{index + 1}</span>
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-secondary)] transition-colors mb-2">
              {title}
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface VisionMissionCardProps {
  type: 'vision' | 'mission';
  title: string;
  content: string;
}

export function VisionMissionCard({ type, title, content }: VisionMissionCardProps) {
  const isVision = type === 'vision';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className={`${isVision ? 'bg-gradient-to-br from-[var(--color-brand-primary)]/5 to-[var(--color-brand-accent)]/20' : 'bg-gradient-to-br from-blue-50 to-purple-50'} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 h-full`}>
        <div className="flex items-center mb-6">
          <motion.div 
            className={`w-16 h-16 ${isVision ? 'bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)]' : 'bg-gradient-to-br from-blue-500 to-purple-600'} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 5 }}
          >
            {isVision ? (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )}
          </motion.div>
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-secondary)] transition-colors">{title}</h3>
        </div>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          {content}
        </p>
      </div>
    </motion.div>
  );
}
