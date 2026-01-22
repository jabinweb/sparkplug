'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import siteContent from '../../content/site-content.json';


export default function Challenge() {
    const { homepage } = siteContent;
  
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-[var(--color-bg-secondary)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <motion.div 
                className="text-center mb-10 sm:mb-12 lg:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-[var(--color-brand-primary)]/20">
                What We Do
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4 sm:mb-6 leading-tight px-4">
                {homepage.challenge.subtitle}
                </h2>
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center mb-12"
            >
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 text-base sm:text-lg">
                    {homepage.challenge.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Button
                        asChild
                        size="lg"
                        className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-[var(--color-button-text)] font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
                    >
                        <Link href="/contact">Book an Experience</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
                    >
                        <Link href="/programs">Explore Experiences</Link>
                    </Button>
                </div>
            </motion.div>

            {/* Impact Statistics */}
            <motion.div
                className="relative py-12 sm:py-16 bg-[var(--color-bg-tertiary)] rounded-3xl shadow-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
                        {homepage.challenge.statistics.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-primary mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-[var(--color-text-tertiary)] font-medium text-sm sm:text-base">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            </div>
        </section>
    );
}
