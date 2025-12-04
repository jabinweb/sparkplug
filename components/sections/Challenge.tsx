'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import siteContent from '../../content/site-content.json';


export default function Challenge() {
    const { homepage } = siteContent;
  
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <motion.div 
                className="text-center mb-10 sm:mb-12 lg:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center bg-brand-primary/10 text-brand-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                What We Do
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
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
                <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg lg:text-xl">
                    {homepage.challenge.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Button
                        asChild
                        size="lg"
                        className="bg-brand-primary hover:bg-brand-primary-700 text-white font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
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
                className="relative py-12 sm:py-16 bg-white rounded-3xl shadow-lg"
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
                                <div className="text-gray-600 font-medium text-sm sm:text-base">
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
