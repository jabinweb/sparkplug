'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GlobalCTA = () => {
  const [ctaData, setCtaData] = useState({
    badge: "⚡ Let's Connect",
    title: "Ready to Sparkplug your audience?",
    description: "Let's create an unforgettable experience that gets your team talking, laughing, and collaborating.",
    buttonText: "Enquire Now",
    buttonLink: "/contact",
    secondaryButtonText: "View Experiences",
    secondaryButtonLink: "/programs"
  });

  useEffect(() => {
    // Fetch CTA data from static JSON (fallback)
    import('../content/site-content.json').then((content) => {
      const data = content.default as any;
      const cta = data.cta || data.site?.cta;
      if (cta) {
        setCtaData({
          badge: cta.badge || "⚡ Let's Connect",
          title: cta.title || "Ready to Sparkplug your audience?",
          description: cta.description || "Let's create an unforgettable experience that gets your team talking, laughing, and collaborating.",
          buttonText: cta.buttonText || "Enquire Now",
          buttonLink: cta.buttonLink || "/contact",
          secondaryButtonText: cta.secondaryButtonText || "View Experiences",
          secondaryButtonLink: cta.secondaryButtonLink || "/programs"
        });
      }
    });
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-[hsl(235,52%,45%)] to-[hsl(235,52%,55%)] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              {ctaData.badge}
            </span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight !text-white">
            {ctaData.title}
          </h2>
{/*           
          <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-3xl mx-auto">
            {ctaData.description}
          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                size="lg" 
                className="bg-white text-[hsl(235,52%,45%)] hover:bg-white/90 font-bold px-10 py-6 text-lg rounded-full"
              >
                <Link href={ctaData.buttonLink}>{ctaData.buttonText} →</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-white/50 text-white hover:bg-white hover:text-[hsl(235,52%,45%)] font-bold px-10 py-6 text-lg rounded-full bg-transparent transition-all"
              >
                <Link href={ctaData.secondaryButtonLink}>{ctaData.secondaryButtonText}</Link>
              </Button>
            </motion.div>
          </div>

          {/* Social Proof */}
          <div className="text-white/90">
            <p className="text-base mb-4 font-medium">Trusted by teams at Google, Deloitte, PepsiCo & more.</p>
            <div className="flex justify-center items-center gap-6 md:gap-10 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <span className="font-semibold text-white">200+ Activities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🎯</span>
                <span className="font-semibold text-white">70,000+ Participants</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🇮🇳</span>
                <span className="font-semibold text-white">Pan-India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCTA;
