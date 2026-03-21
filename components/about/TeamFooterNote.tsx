'use client';

import { motion } from 'framer-motion';

export function TeamFooterNote() {
  return (
    <motion.div
      className="mt-16 max-w-3xl mx-auto text-center p-8 rounded-3xl bg-[var(--color-bg-secondary)] border border-[var(--color-brand-primary)]/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
        Every Sparkplug experience is led by our core facilitators and supported by a growing network of musicians, rhythm leaders, and collaborators as needed. This allows us to scale experiences based on the event.
      </p>
    </motion.div>
  );
}
