'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ClientLogosProps {
  siteContent: any;
}

export default function ClientLogos({ siteContent }: ClientLogosProps) {
  const homepage = (siteContent as any).homepage || (siteContent as any).site?.homepage || {};
  
  const clients = homepage.clients?.logos || ['Google', 'Deloitte', 'PepsiCo', 'EY', 'PwC', 'Microsoft', 'Flipkart', 'ICICI', 'Nestlé', 'IPL'];
  const cities = homepage.clients?.cities || ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Goa'];

  return (
    <section className="py-20 bg-[var(--color-bg-primary)] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[var(--color-brand-primary)]/20"
          >
            🇮🇳 Taking Energy Nationwide
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            Across Brands. Across Cities. Across <span className="text-[var(--color-brand-secondary)]">India.</span>
          </h2>
        </motion.div>

        {/* Clients Marquee */}
        <div className="mb-12">
          <p className="text-center text-[var(--color-text-secondary)] mb-6 font-medium">Trusted by teams at</p>
          <div className="relative">
            {/* Gradient overlays */}
            {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent z-10"></div> */}
            
            {/* Scrolling logos */}
            <motion.div 
              className="flex gap-8 items-center"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 bg-[var(--color-bg-tertiary)] px-8 py-4 rounded-xl border border-[var(--color-brand-primary)]/10 hover:border-[var(--color-brand-primary)]/30 transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className="text-[var(--color-text-primary)] font-bold text-lg whitespace-nowrap">{client}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Cities Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[var(--color-text-secondary)] mb-6 font-medium">Delivering experiences across</p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city, index) => (
              <motion.span
                key={index}
                className="bg-[var(--color-bg-tertiary)] px-4 py-2 rounded-full text-[var(--color-text-primary)] font-medium border border-[var(--color-brand-primary)]/10 hover:bg-[var(--color-brand-primary)] hover:text-[var(--color-button-text)] transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ scale: 1.1 }}
              >
                📍 {city}
              </motion.span>
            ))}
            <motion.span
              className="bg-[var(--color-brand-primary)] text-[var(--color-button-text)] px-4 py-2 rounded-full font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              + Many More!
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
