"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideInLeft' | 'slideInRight';
  viewport?: boolean;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  type = 'fadeInUp',
  viewport = false
}: AnimatedSectionProps) {
  const variants = {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
    },
    slideInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
    },
    slideInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
    }
  };

  const selected = variants[type];
  
  const props = viewport 
    ? {
        initial: selected.initial,
        whileInView: selected.animate,
        viewport: { once: true },
        transition: { duration: 0.6, delay }
      }
    : {
        initial: selected.initial,
        animate: selected.animate,
        transition: { duration: 0.6, delay }
      };

  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}

interface AnimatedGridProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function AnimatedGrid({ children, className = '', stagger = 0.1 }: AnimatedGridProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
