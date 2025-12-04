'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const GlobalCTA = () => {
  return (
    <section className="relative py-20 bg-blue-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      
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
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ⚡ Let&apos;s Connect
            </span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Ready to <span className="text-yellow-400">Sparkplug</span> your audience?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Let&apos;s create an unforgettable experience that gets your team talking, laughing, and collaborating.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                size="lg" 
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold px-10 py-6 text-lg shadow-xl rounded-full"
              >
                <Link href="/contact">Enquire Now →</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-10 py-6 text-lg rounded-full bg-transparent"
              >
                <Link href="/programs">View Experiences</Link>
              </Button>
            </motion.div>
          </div>

          {/* Social Proof */}
          <div className="text-blue-200">
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
