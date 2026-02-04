'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Drum, Users, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface SignatureExperiencesProps {
  siteContent: any;
}

const experiences = [
  {
    icon: Drum,
    title: 'Corporate Drum Circles',
    tagline: 'Where suits, interns, and senior leaders drop their roles and pick up a drum.',
    description: 'Everyone becomes part of the same beat.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    accentColor: '#f59e0b',
    images: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    ]
  },
  {
    icon: Users,
    title: 'Team-Building Workshops',
    tagline: 'Interactive sessions designed to unlock creativity, teamwork, and trust',
    description: 'Without the awkward icebreakers.',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    accentColor: '#3b82f6',
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop',
    ]
  },
  {
    icon: Sparkles,
    title: 'Culture & Engagement',
    tagline: 'High-energy modules that boost morale, belonging, and on-ground participation.',
    description: 'Build a culture of connection.',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
    accentColor: '#a855f7',
    images: [
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
    ]
  }
];

export default function SignatureExperiences({ siteContent }: SignatureExperiencesProps) {
  const homepage = (siteContent as any).homepage || (siteContent as any).site?.homepage || {};
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Use JSON data if available, otherwise fallback to hardcoded
  const jsonExperiences = homepage.signatureExperiences?.items || [];
  const experiencesData = jsonExperiences.length > 0 ? jsonExperiences.map((exp: any, idx: number) => ({
    ...experiences[idx],
    title: exp.name,
    tagline: exp.tagline,
    description: exp.description
  })) : experiences;

  const currentExperience = experiencesData[activeIndex];
  const currentImages = currentExperience.images;

  // Reset image index when experience changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeIndex]);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentImages.length, activeIndex]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <section className="pb-24 bg-[var(--color-bg-primary)] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-12 h-1 bg-[var(--color-brand-secondary)] rounded-full" />
            <span className="text-[var(--color-brand-secondary)] font-bold uppercase tracking-widest text-sm">Signature Experiences</span>
          </motion.div>
          {/* <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)]">
            Experiences That Transform
          </h2> */}
        </motion.div>

        {/* Interactive Experience Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Experience Tabs */}
          <div className="space-y-3">
            {experiencesData.map((exp: any, index: number) => {
              const IconComponent = exp.icon;
              const isActive = activeIndex === index;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border-2 ${
                    isActive 
                      ? 'bg-[var(--color-bg-tertiary)] shadow-xl border-[var(--color-brand-primary)]' 
                      : 'bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] border-transparent hover:border-[var(--color-brand-primary)]/20'
                  }`}
                  whileHover={{ x: isActive ? 0 : 8 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <div className={`flex ${isActive ? 'items-start' : 'items-center'} gap-4`}>
                    <motion.div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? `bg-gradient-to-br ${exp.color} shadow-lg` 
                          : 'bg-[var(--color-bg-tertiary)]'
                      }`}
                      animate={{ 
                        rotate: isActive ? [0, -5, 5, 0] : 0,
                        scale: isActive ? 1.1 : 1
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <IconComponent 
                        className={`w-6 h-6 ${isActive ? 'text-white' : 'text-[var(--color-text-primary)]'}`} 
                        strokeWidth={1.5} 
                      />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold text-lg transition-colors duration-300 ${
                        isActive ? 'text-[var(--color-text-secondary)]' : 'text-[var(--color-text-primary)]'
                      }`}>
                        {exp.title}
                      </h3>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-[var(--color-text-secondary)] text-sm mt-2 leading-relaxed">
                              {exp.tagline}
                            </p>
                            <p className="text-[var(--color-text-tertiary)] text-sm mt-1 italic">
                              {exp.description}
                            </p>
                            <Link 
                              href="/programs"
                              className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-600)] transition-colors"
                            >
                              Learn More
                              <ChevronRight className="w-4 h-4" />
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <motion.div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? 'bg-[var(--color-brand-primary)]' : 'bg-[hsl(235,52%,20%)]'
                      }`}
                      animate={{ scale: isActive ? 1 : 0.8 }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full ${isActive ? 'bg-[var(--color-brand-primary)]' : 'bg-[var(--color-bg-tertiary)]'}`}
                      />
                    </motion.div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Image Slider */}
          <div className="relative">
            <motion.div
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[var(--color-bg-tertiary)]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {/* Main Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeIndex}-${currentImageIndex}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={currentImages[currentImageIndex]}
                    alt={currentExperience.title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${currentExperience.accentColor}66 0%, transparent 60%)`
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <motion.button
                  onClick={prevImage}
                  className="w-10 h-10 bg-[var(--color-bg-tertiary)]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--color-bg-tertiary)] transition-colors text-[var(--color-text-primary)]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 text-[var(--color-text-primary)]" />
                </motion.button>
                <motion.button
                  onClick={nextImage}
                  className="w-10 h-10 bg-[var(--color-bg-tertiary)]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--color-bg-tertiary)] transition-colors text-[var(--color-text-primary)]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 text-[var(--color-text-primary)]" />
                </motion.button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {currentImages.length}
              </div>

              {/* Experience Badge */}
              <motion.div 
                className="absolute top-4 right-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                key={activeIndex}
              >
                <div 
                  className="px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${currentExperience.accentColor}, ${currentExperience.accentColor}dd)` }}
                >
                  {currentExperience.title}
                </div>
              </motion.div>
            </motion.div>

            {/* Thumbnail Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {currentImages.map((_: string, imgIndex: number) => (
                <motion.button
                  key={imgIndex}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentImageIndex(imgIndex);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === imgIndex 
                      ? 'w-8' 
                      : 'w-2 bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-bg-secondary)]'
                  }`}
                  style={currentImageIndex === imgIndex ? { backgroundColor: currentExperience.accentColor } : {}}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
