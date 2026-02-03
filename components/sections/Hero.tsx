'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroProps {
  siteContent: any;
}

export default function Hero({ siteContent }: HeroProps) {
  // Handle both nested and flat structures
  const homepage = (siteContent as any).homepage || (siteContent as any).site?.homepage || {};

  return (
    <section className="relative bg-[var(--color-bg-primary)] py-12 sm:py-16 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--color-text-primary)] mb-4 sm:mb-6 leading-tight">
              {(homepage.hero?.title || 'Welcome').split(' ').map((word: string, wordIndex: number) => 
                word.toLowerCase() === 'people' || word.toLowerCase() === 'power' ? (
                  <span key={wordIndex} className="text-[var(--color-brand-secondary)] font-black drop-shadow-lg">{word} </span>
                ) : (
                  <span key={wordIndex}>{word} </span>
                )
              )}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[var(--color-text-secondary)] mb-4">
              {homepage.hero?.subtitle || ''}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {homepage.hero?.description || ''}
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <Button 
                size="lg" 
                className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-600)] text-[var(--color-button-text)] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Link href={homepage.hero?.buttonLink || '/contact'} className="block">
                  ⚡ {homepage.hero?.buttonText || 'Book an Experience'}
                </Link>
              </Button>
            </motion.div>

            {/* Trusted By Line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base text-[var(--color-text-tertiary)]"
            >
              {homepage.hero?.trustedBy || 'Trusted by teams at Google, Deloitte, PepsiCo & more.'}
            </motion.p>
          </motion.div>

          {/* Right Video */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first lg:order-last relative"
          >
            <div className="relative w-full  aspect-video rounded-lg shadow-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://videos.pexels.com/video-files/3253079/3253079-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
