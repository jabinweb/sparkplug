'use client';

import { motion, useMotionValue, animate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';


export default function VideoReels() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const dragRef = useRef<HTMLDivElement>(null);

  const videoStories = [
    {
      title: "Energized Teams",
      description: "Every Sparkplug experience leaves people energized and inspired, with high-energy workshops that reduce stress and create unforgettable fun.",
      thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.pexels.com/video/5495787/download/",
      duration: "2:30"
    },
    {
      title: "Connected Collaboration",
      description: "Teams discover fresh ways to collaborate while breaking silos. Participants feel included and engaged from start to finish, building stronger bonds.",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.pexels.com/video/3209828/download/",
      duration: "1:45"
    },
    {
      title: "Sparked Creativity",
      description: "Our sessions spark creativity and positive energy, creating a culture of engagement that continues to grow long after the event ends.",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.pexels.com/video/4427512/download/",
      duration: "3:15"
    },
    {
      title: "Drum Circle Magic",
      description: "Watch teams sync together in rhythm, creating powerful moments of unity and joy through interactive drum circle experiences.",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.pexels.com/video/7534311/download/",
      duration: "2:15"
    },
    {
      title: "Corporate Events",
      description: "From intimate team offsites to large-scale conferences, we bring energy and engagement to every corporate gathering.",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.pexels.com/video/6774274/download/",
      duration: "2:45"
    },
    {
      title: "Creator Collabs",
      description: "Partnering with top creators to deliver unique, engaging experiences that resonate with modern teams and audiences.",
      thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.pexels.com/video/5435292/download/",
      duration: "1:55"
    }
  ];

  const slideWidth = 360; // card width + gap
  const totalSlides = videoStories.length;

  // Auto-scroll on wheel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!dragRef.current?.contains(e.target as Node)) return;
      
      e.preventDefault();
      if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    const slider = dragRef.current;
    if (slider) {
      slider.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (slider) {
        slider.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSlide, totalSlides]);

  // Animate to slide position
  useEffect(() => {
    const targetX = -currentSlide * slideWidth;
    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30
    });
  }, [currentSlide, x, slideWidth]);

  // Handle drag end to snap to nearest slide
  const handleDragEnd = () => {
    const currentX = x.get();
    const slideIndex = Math.round(-currentX / slideWidth);
    const clampedIndex = Math.max(0, Math.min(slideIndex, totalSlides - 1));
    setCurrentSlide(clampedIndex);
  };

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)] relative overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-4 tracking-tight">
            Watch Our Reels
          </h2>
          <p className="text-lg text-[var(--color-text-primary)] font-medium opacity-70">
            Real moments. Real energy. Real results.
          </p>
        </motion.div>
        
        {/* Reels Slider - Draggable with wheel scroll */}
        <div className="relative" ref={constraintsRef}>
          <div className="overflow-hidden" ref={dragRef}>
            <motion.div 
              className="flex gap-6 cursor-grab active:cursor-grabbing"
              style={{ x }}
              drag="x"
              dragConstraints={{
                left: -(totalSlides - 1) * slideWidth,
                right: 0
              }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
            >
              {videoStories.map((story, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[340px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div 
                    className="relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer group bg-[var(--color-bg-tertiary)]"
                  >
                    {/* Thumbnail with gradient overlay */}
                    <Image
                      src={story.thumbnail}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    
                    {/* Play button - centered */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/40">
                        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </motion.div>
                    
                    {/* Duration badge - top right */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {story.duration}
                    </div>
                    
                    {/* Content - bottom with glassmorphism */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-[var(--color-bg-primary)]/95 backdrop-blur-md rounded-2xl p-4 border border-[var(--color-brand-primary)]/20">
                        <h3 className="text-[var(--color-text-primary)] font-bold text-lg mb-2 line-clamp-2">
                          {story.title}
                        </h3>
                        <p className="text-[var(--color-text-secondary)] text-sm line-clamp-2">
                          {story.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Accent border on hover */}
                    <div className="absolute inset-0 border-4 border-[var(--color-brand-accent)] opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {videoStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-2 bg-[var(--color-brand-primary)]' 
                  : 'w-2 h-2 bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-bg-secondary)]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-primary-600)] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[var(--color-brand-primary)]/50 transition-all hover:scale-105">
            <span>Watch Full Showreel</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button> */}
        </motion.div>
      </div>
    </section>
  )
}
