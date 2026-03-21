'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

type HomepageHero = {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  trustedBy?: string;
  videoUrl?: string;
};

type HomepageContent = {
  hero?: HomepageHero;
};

type SiteContent = {
  homepage?: HomepageContent;
  site?: { homepage?: HomepageContent };
};

interface HeroProps {
  siteContent: SiteContent;
}

export default function Hero({ siteContent }: HeroProps) {

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const enableSound = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = false;
      video.play().catch(() => { });

      window.removeEventListener("scroll", enableSound);
      window.removeEventListener("pointerdown", enableSound);
    };

    window.addEventListener("scroll", enableSound);
    window.addEventListener("pointerdown", enableSound, { once: true });

    return () => {
      window.removeEventListener("scroll", enableSound);
      window.removeEventListener("pointerdown", enableSound);
    };
  }, []);

  const homepage = siteContent.homepage || siteContent.site?.homepage || {};
  const hero = homepage.hero || {};

  const videoUrl =
    hero.videoUrl ||
    "https://videos.pexels.com/video-files/3253079/3253079-uhd_2560_1440_25fps.mp4";

  const getYouTubeId = (url: string) => {
    const patterns = [
      /youtube\.com\/watch\/?v=([^&/]+)/i,
      /youtube\.com\/watch\?v=([^&/]+)/i,
      /youtu\.be\/([^?/]+)/i,
      /youtube\.com\/shorts\/([^?/]+)/i,
      /youtube\.com\/embed\/([^?/]+)/i,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match?.[1]) return match[1];
    }
    return null;
  };

  const isVideoFile = (url: string) => {
    return /\.(mp4|webm|ogg|mov)$/i.test(url);
  };

  const ytId = getYouTubeId(videoUrl);

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
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--color-text-primary)] mb-4 sm:mb-6 leading-tight">
              {(hero.title || 'Welcome').split(' ').map((word: string, wordIndex: number) =>
                word.toLowerCase() === 'people' || word.toLowerCase() === 'power' ? (
                  <span key={wordIndex} className="text-[var(--color-brand-secondary)] font-black drop-shadow-lg">{word} </span>
                ) : (
                  <span key={wordIndex}>{word} </span>
                )
              )}
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[var(--color-text-secondary)] mb-4">
              {hero.subtitle || ''}
            </p>

            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {hero.description || ''}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <Button
                size="lg"
                asChild
                className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-600)] text-[var(--color-button-text)] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Link href={hero.buttonLink || '/contact'}>
                  ⚡ {hero.buttonText || 'Book an Experience'}
                </Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base text-[var(--color-text-tertiary)]"
            >
              {hero.trustedBy || 'Trusted by teams at Google, Deloitte, PepsiCo & more.'}
            </motion.p>
          </motion.div>

          {/* Right Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first lg:order-last relative"
          >
            <div className="relative w-full aspect-video rounded-lg shadow-xl overflow-hidden bg-black/5">

              {ytId ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${ytId}&controls=0&rel=0&modestbranding=1`}
                  title="Hero Video"
                  allow="autoplay; fullscreen"
                  loading="eager"
                />
              ) : isVideoFile(videoUrl) ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/hero-thumbnail.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source src={videoUrl} />
                  </video>

                  <button
                    onClick={() => {
                      const video = videoRef.current;
                      if (!video) return;

                      if (video.paused) {
                        video.muted = false;
                        video.play();
                        setIsPlaying(true);
                      } else {
                        video.pause();
                        setIsPlaying(false);
                      }
                    }}
                    className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-2 rounded-lg backdrop-blur hover:bg-black/80 transition"
                  >
                    {isPlaying ? "⏸" : "▶"}
                  </button>
                </>
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-500">
                  Unsupported video source
                </div>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}