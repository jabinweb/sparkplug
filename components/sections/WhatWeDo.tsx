'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import siteContent from '../../content/site-content.json';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Drum, Users, Music, Rocket, Monitor } from 'lucide-react';

const specializations = [
  {
    title: "Corporate Drum Circles",
    shortTitle: "Drum Circles",
    description: "High-energy music-led experiences where everyone becomes part of the beat. Unite your team through rhythm.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
    icon: Drum,
    gradient: "from-amber-500 via-orange-500 to-yellow-400",
    gradientStyle: "linear-gradient(135deg, #f59e0b 0%, #ea580c 50%, #fbbf24 100%)",
    stats: "Most Popular"
  },
  {
    title: "Team-Building Workshops",
    shortTitle: "Workshops",
    description: "Interactive sessions designed for teamwork, creativity, and trust — without the awkward icebreakers.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    icon: Users,
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    gradientStyle: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #6366f1 100%)",
    stats: "500+ Sessions"
  },
  {
    title: "Musical Therapy",
    shortTitle: "Therapy",
    description: "Stress-relief sessions, rhythm energizers, and creativity boosters that transform workplace wellness.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
    icon: Music,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    gradientStyle: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #d946ef 100%)",
    stats: "Wellness Focus"
  },
  {
    title: "Leadership Retreats",
    shortTitle: "Retreats",
    description: "Strategic team alignment and high-energy leadership sessions that inspire and motivate.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop",
    icon: Rocket,
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    gradientStyle: "linear-gradient(135deg, #34d399 0%, #14b8a6 50%, #06b6d4 100%)",
    stats: "Executive Level"
  },
  {
    title: "Virtual Sessions",
    shortTitle: "Virtual",
    description: "Remote team engagement through interactive virtual experiences that bridge distances.",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop",
    icon: Monitor,
    gradient: "from-pink-400 via-rose-500 to-red-500",
    gradientStyle: "linear-gradient(135deg, #f472b6 0%, #f43f5e 50%, #ef4444 100%)",
    stats: "Remote Ready"
  }
];

// Horizontal Scroll Card
function HorizontalCard({ item, index, isActive, onClick }: { 
  item: typeof specializations[0]; 
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className={`relative flex-shrink-0 cursor-pointer transition-all duration-500 ${
        isActive ? 'w-[500px]' : 'w-[100px] md:w-[170px]'
      }`}
      onClick={onClick}
      layout
    >
      <motion.div 
        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
        
        {/* Gradient Overlay - Vibrant Multi-tone */}
        <div 
          className="absolute inset-0 transition-all duration-500"
          style={{ 
            background: isActive 
              ? `linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%), ${item.gradientStyle.replace('100%)', '100%)').replace(/100\)/g, '95)')}`
              : item.gradientStyle,
            opacity: isActive ? 0.85 : 0.75,
            mixBlendMode: 'normal'
          }}
        />
        
        {/* Extra shine overlay for depth */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
            opacity: isActive ? 0.6 : 0.3
          }}
        />

        {/* Collapsed State - Vertical Text */}
        <AnimatePresence>
          {!isActive && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span 
                className="text-white font-bold text-xl tracking-wider whitespace-nowrap drop-shadow-lg"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)'
                }}
              >
                {item.shortTitle}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded State - Full Content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute inset-0 p-8 flex flex-col justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Badge */}
              <motion.span
                className="inline-block self-start px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-4 border border-white/30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {item.stats}
              </motion.span>

              {/* Icon */}
              <motion.div
                className="mb-4 drop-shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 200 }}
              >
                <item.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
              </motion.div>

              {/* Title */}
              <motion.h4
                className="text-3xl font-black text-white mb-3 drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                {item.title}
              </motion.h4>

              {/* Description */}
              <motion.p
                className="text-white/90 text-base leading-relaxed mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {item.description}
              </motion.p>

              {/* Learn More Link */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                <Link 
                  href="/programs" 
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-6 py-3 rounded-full transition-all duration-300 border border-white/30"
                >
                  Learn More 
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Number Indicator */}
        <div className="absolute top-6 left-6">
          <span 
            className="text-8xl font-black text-white/10"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Stats icons using Lucide
import { Target, UsersRound, MapPin } from 'lucide-react';
const StatIcons = [Target, UsersRound, MapPin];

// Animated Stat Card
function AnimatedStat({ stat, index }: { stat: { number: string; label: string }; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = StatIcons[index];
  
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 overflow-hidden cursor-pointer"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Animated Background Glow */}
        <motion.div
          className="absolute inset-0 bg-brand-primary/20 blur-2xl"
          animate={{ 
            opacity: isHovered ? 0.4 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/30 rounded-full -translate-y-1/2 translate-x-1/2" />
        
        {/* Icon */}
        <motion.div
          className="mb-4"
          animate={{ 
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.4 }}
        >
          <IconComponent className="w-8 h-8 text-brand-primary" strokeWidth={1.5} />
        </motion.div>
        
        {/* Number */}
        <div className="relative">
          <motion.span 
            className="text-5xl md:text-6xl font-black text-white block mb-2"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {stat.number}
          </motion.span>
          
          {/* Animated Underline */}
          <motion.div
            className="h-1 bg-brand-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
          />
        </div>
        
        {/* Label */}
        <p className="text-gray-400 font-medium mt-4 text-sm uppercase tracking-wider">
          {stat.label}
        </p>
        
        {/* Hover Arrow */}
        <motion.div
          className="absolute bottom-6 right-6 w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-black font-bold">→</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function WhatWeDo() {
  const { homepage } = siteContent;
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="py-32 bg-[#FAFAFA] overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-yellow-100/80 to-transparent rounded-full opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-100/60 to-transparent rounded-full opacity-60 blur-3xl" />
      </motion.div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            {/* Left - Title */}
            <motion.div
              className="lg:max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="w-16 h-1 bg-brand-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-sm">What We Do</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 leading-[1.1]">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  We Turn
                </motion.span>
                <motion.span 
                  className="block relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="relative">
                    Ordinary Teams
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full h-4"
                      viewBox="0 0 300 12"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      <motion.path
                        d="M0 8 Q75 0 150 8 T300 8"
                        fill="none"
                        stroke="#FFC828"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Into <span className="text-brand-primary relative">
                    Extraordinary
                    <motion.span
                      className="absolute -right-6 -top-3 text-2xl"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.8 }}
                    >
                      ⚡
                    </motion.span>
                  </span>
                </motion.span>
              </h2>
            </motion.div>

            {/* Right - Description */}
            <motion.div
              className="lg:max-w-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {homepage.challenge.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {['🎯', '🎪', '🎭', '🎨'].map((emoji, i) => (
                    <motion.div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-3 border-white flex items-center justify-center text-xl shadow-lg"
                      initial={{ scale: 0, x: -20 }}
                      whileInView={{ scale: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </div>
                <motion.span 
                  className="text-sm text-gray-500 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  Join 70,000+ happy participants
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Accordion Cards */}
        <div className="mb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex gap-3 justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {specializations.map((item, index) => (
                <HorizontalCard
                  key={index}
                  item={item}
                  index={index}
                  isActive={activeCard === index}
                  onClick={() => setActiveCard(index)}
                />
              ))}
            </motion.div>
          </div>

          {/* Card Navigation Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {specializations.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  activeCard === index 
                    ? 'w-10' 
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                style={activeCard === index ? { background: item.gradientStyle } : {}}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Stats Section - Dark Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-5 py-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-full">
              Our Impact
            </span>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homepage.challenge.statistics.map((stat, index) => (
              <AnimatedStat key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.button
                className="group relative px-12 py-6 bg-gray-900 text-white font-bold text-lg rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Book an Experience
                  <motion.span
                    className="text-xl"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-brand-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>
            
            <Link href="/programs">
              <motion.button
                className="px-12 py-6 border-3 border-gray-900 text-gray-900 font-bold text-lg rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Experiences
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
