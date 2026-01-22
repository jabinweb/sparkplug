'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


export default function VideoReels() {

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
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)] relative overflow-hidden transition-colors duration-300">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] opacity-50"></div>
      
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
          <p className="text-base text-[var(--color-text-secondary)]">
            Real moments. Real energy. Real results.
          </p>
        </motion.div>
        
        {/* Reels Grid - Modern Instagram/TikTok style */}
        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory lg:justify-center">
          {videoStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 w-[280px] lg:w-[320px] snap-center"
            >
              <div 
                className="relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer group bg-[var(--color-bg-tertiary)]"
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
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <h3 className="text-[var(--color-text-primary)] font-bold text-lg mb-2 line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm line-clamp-2">
                      {story.description}
                    </p>
                  </div>
                </div>
                
                {/* Yellow accent on hover */}
                <div className="absolute inset-0 border-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
              </div>
            </motion.div>
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
      
      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
