'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface VideoReelsProps {
  siteContent: SiteContent;
}

type VideoReelStory = {
  title?: string;
  description?: string;
  thumbnail?: string;
  videoUrl?: string;
  duration?: string;
};

type VideoReelsContent = {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  items?: VideoReelStory[];
};

type HomepageContent = {
  videoReels?: VideoReelsContent;
};

type SiteContent = {
  homepage?: HomepageContent;
  site?: { homepage?: HomepageContent };
};

const getYouTubeId = (url?: string) => {
  if (!url) return '';
  const cleaned = url.split('?')[0] || url;
  const patterns = [
    /youtube\.com\/watch\/?v=([^&/]+)/i,
    /youtube\.com\/watch\?v=([^&/]+)/i,
    /youtu\.be\/([^?/]+)/i,
    /youtube\.com\/shorts\/([^?/]+)/i,
    /youtube\.com\/embed\/([^?/]+)/i,
  ];
  for (const pattern of patterns) {
    const match = cleaned.match(pattern);
    if (match?.[1]) return match[1];
  }
  return '';
};

const getYouTubeThumbnail = (url?: string) => {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
};

const normalizeText = (value?: string) => {
  if (!value) return '';
  return value.replace(/&nbsp;?/gi, ' ').replace(/\s+/g, ' ').trim();
};

const normalizeHtml = (value?: string) => {
  if (!value) return '';
  return value
    .replace(/&amp;nbsp;?/gi, '&nbsp;')
    .replace(/&nbsp;?/gi, '&nbsp;')
    .replace(/\sstyle="[^"]*"/gi, '')
    .replace(/\sstyle='[^']*'/gi, '')
    .replace(/\sclass="[^"]*"/gi, '')
    .replace(/\sclass='[^']*'/gi, '')
    .replace(/<\/?font[^>]*>/gi, '')
    .trim();
};

export default function VideoReels({ siteContent }: VideoReelsProps) {
  const homepage = siteContent.homepage || siteContent.site?.homepage || {};
  const reelsContent = homepage.videoReels || {};
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(364);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  const videoStories = Array.isArray(reelsContent.items) ? reelsContent.items : [];

  const totalSlides = videoStories.length;

  // Auto-scroll on wheel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!dragRef.current?.contains(e.target as Node)) return;
      
      e.preventDefault();
      if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
        dragRef.current.scrollTo({
          left: (currentSlide + 1) * slideWidth,
          behavior: 'smooth'
        });
      } else if (e.deltaY < 0 && currentSlide > 0) {
        dragRef.current.scrollTo({
          left: (currentSlide - 1) * slideWidth,
          behavior: 'smooth'
        });
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
  }, [currentSlide, totalSlides, slideWidth]);

  useEffect(() => {
    const measure = () => {
      if (!sliderRef.current || !firstCardRef.current || !dragRef.current) return;
      const gap = parseFloat(getComputedStyle(sliderRef.current).columnGap || '0');
      const width = firstCardRef.current.offsetWidth || 0;
      if (width > 0) {
        setSlideWidth(width + (Number.isNaN(gap) ? 0 : gap));
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const el = dragRef.current;
    if (!el) return;
    const onScroll = () => {
      if (slideWidth <= 0) return;
      const nextIndex = Math.round(el.scrollLeft / slideWidth);
      setCurrentSlide(Math.max(0, Math.min(nextIndex, totalSlides - 1)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [slideWidth, totalSlides]);

  const nextReel = () => {
    if (activeReelIndex !== null && activeReelIndex < videoStories.length - 1) {
      setActiveReelIndex(activeReelIndex + 1);
    }
  };

  const prevReel = () => {
    if (activeReelIndex !== null && activeReelIndex > 0) {
      setActiveReelIndex(activeReelIndex - 1);
    }
  };

  if (videoStories.length === 0) {
    return null;
  }

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
          {reelsContent.badge && (
            <motion.div
              className="inline-flex items-center gap-2 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span>{reelsContent.badge}</span>
            </motion.div>
          )}
          <h2 className="text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-4 tracking-tight">
            {reelsContent.title || ""}
          </h2>
          <p className="text-lg text-[var(--color-text-primary)] font-medium opacity-70">
            {reelsContent.subtitle || reelsContent.description || ""}
          </p>
        </motion.div>
        
        {/* Reels Slider */}
        <div className="relative" ref={constraintsRef}>
          <div
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing scrollbar-hide select-none"
            ref={dragRef}
            onMouseDown={(e) => {
              if (!dragRef.current) return;
              isDraggingRef.current = true;
              dragStartXRef.current = e.pageX;
              dragStartScrollRef.current = dragRef.current.scrollLeft;
            }}
            onMouseLeave={() => {
              isDraggingRef.current = false;
            }}
            onMouseUp={() => {
              isDraggingRef.current = false;
            }}
            onMouseMove={(e) => {
              if (!isDraggingRef.current || !dragRef.current) return;
              e.preventDefault();
              const walk = e.pageX - dragStartXRef.current;
              dragRef.current.scrollLeft = dragStartScrollRef.current - walk;
            }}
          >
            <div
              ref={sliderRef}
              className="flex gap-6"
            >
              {videoStories.map((story: VideoReelStory, index: number) => {
                const title = normalizeText(story.title) || 'Video reel';
                const description = normalizeHtml(story.description);
                const thumbnail = story.thumbnail || getYouTubeThumbnail(story.videoUrl);

                return (
                <motion.div
                  ref={index === 0 ? firstCardRef : null}
                  key={index}
                  className="flex-shrink-0 w-[340px] snap-start"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div 
                    onClick={() => setActiveReelIndex(index)}
                    className="relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer group bg-[var(--color-bg-tertiary)]"
                  >
                    {/* Thumbnail */}
                    {thumbnail ? (
                      <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[var(--color-bg-tertiary)]" />
                    )}
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/40 group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Duration badge */}
                    {story.duration && (
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {story.duration}
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-[var(--color-bg-primary)]/95 backdrop-blur-md rounded-2xl p-4 border border-[var(--color-brand-primary)]/20 shadow-lg">
                        <h3 className="text-[var(--color-text-primary)] font-bold text-lg mb-2 line-clamp-2">
                          {title}
                        </h3>
                        {description && (
                          <p
                            className="text-[var(--color-text-secondary)] dark:text-white/90 text-sm line-clamp-2 [&_*]:text-[var(--color-text-secondary)] dark:[&_*]:text-white/90"
                            dangerouslySetInnerHTML={{ __html: description }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )})}
            </div>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {videoStories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!dragRef.current) return;
                dragRef.current.scrollTo({
                  left: index * slideWidth,
                  behavior: 'smooth'
                });
              }}
              className={`transition-all duration-300 rounded-full h-2 ${
                index === currentSlide 
                  ? 'w-8 bg-[var(--color-brand-primary)]' 
                  : 'w-2 bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-bg-secondary)]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Reel Modal Player */}
      <AnimatePresence>
        {activeReelIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveReelIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-12 pointer-events-none">
              <button
                disabled={activeReelIndex === 0}
                onClick={(e) => { e.stopPropagation(); prevReel(); }}
                className="pointer-events-auto p-4 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-full text-white transition-all hover:scale-110"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                disabled={activeReelIndex === videoStories.length - 1}
                onClick={(e) => { e.stopPropagation(); nextReel(); }}
                className="pointer-events-auto p-4 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-full text-white transition-all hover:scale-110"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Video Container */}
            <motion.div 
              layoutId={`reel-${activeReelIndex}`}
              className="relative w-full max-w-[450px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              {(() => {
                const story = videoStories[activeReelIndex];
                const ytId = getYouTubeId(story.videoUrl);
                
                if (ytId) {
                  return (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                      title={story.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  );
                }
                
                return (
                  <video
                    src={story.videoUrl}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                  />
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}


