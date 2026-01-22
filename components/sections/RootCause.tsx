'use client';

import siteContent from '../../content/site-content.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function RootCause() {
  const { homepage } = siteContent;

  const serviceIcons = [
    <span key="drum" className="text-4xl">🥁</span>,
    <span key="team" className="text-4xl">🤝</span>,
    <span key="music" className="text-4xl">🎵</span>,
    <span key="leader" className="text-4xl">🎯</span>
  ];

  const gradients = [
    'from-yellow-400 to-yellow-600',
    'from-blue-500 to-blue-700',
    'from-purple-500 to-purple-700',
    'from-green-500 to-green-700'
  ];

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
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
            className="inline-block mb-6"
          >
            <Badge className="bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] px-6 py-2 text-sm font-bold border border-[var(--color-brand-primary)]/20">
              ⚡ What We Do
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-[var(--color-text-primary)] mb-6 leading-tight">
            {homepage.causes.title}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {homepage.causes.subtitle}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {homepage.causes.items.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-[var(--color-bg-tertiary)] border border-white/10">
                <div className={`h-1 bg-gradient-to-r ${gradients[index]}`}></div>
                
                <CardHeader className="pb-4">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {serviceIcons[index]}
                  </motion.div>
                  <CardTitle className="text-xl font-black text-[var(--color-text-primary)] mb-2">
                    {service.category}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {service.causes.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className="flex items-start text-[var(--color-text-secondary)]"
                      >
                        <svg className="w-5 h-5 text-[--color-brand-primary] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Ready to energize your team?
          </p>
          <Link 
            href="/programs"
            className="inline-flex items-center gap-2 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-600)] text-[var(--color-button-text)] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore All Experiences
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
