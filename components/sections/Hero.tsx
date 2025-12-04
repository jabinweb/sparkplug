'use client';

import Link from 'next/link';
import siteContent from '../../content/site-content.json';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  const { homepage } = siteContent;

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-24">
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
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {homepage.hero.title.split('\n').map((line, index) => (
                <span key={index}>
                  {line.split(' ').map((word, wordIndex) => 
                    word.toLowerCase() === 'spark' ? (
                      <span key={wordIndex} className="text-yellow-600 font-black drop-shadow-lg">{word} </span>
                    ) : (
                      <span key={wordIndex}>{word} </span>
                    )
                  )}
                  {index < homepage.hero.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
              {homepage.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {homepage.hero.description}
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
                className="bg-brand-primary hover:bg-brand-primary-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="/contact" className="block">
                  ⚡ Book an Experience
                </Link>
              </Button>
            </motion.div>

            {/* Trusted By Line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base text-gray-500"
            >
              Trusted by teams at <span className="font-semibold text-gray-700">Google</span>, <span className="font-semibold text-gray-700">Deloitte</span>, <span className="font-semibold text-gray-700">PepsiCo</span> & more.
            </motion.p>
          </motion.div>

          {/* Right Video */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first lg:order-last relative"
          >
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] rounded-lg shadow-xl overflow-hidden">
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
