'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';
import siteContent from '../../content/site-content.json';

export default function ClientLogos() {
  const { homepage } = siteContent;
  
  const clients = homepage.clients?.logos || ['Google', 'Deloitte', 'PepsiCo', 'EY', 'PwC', 'Microsoft', 'Flipkart', 'ICICI', 'Nestlé', 'IPL'];
  const cities = homepage.clients?.cities || ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Goa'];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            🇮🇳 Taking Energy Nationwide
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Across Brands. Across Cities. Across <span className="text-brand-primary">India.</span>
          </h2>
        </motion.div>

        {/* Clients Marquee */}
        <div className="mb-12">
          <p className="text-center text-gray-600 mb-6 font-medium">Trusted by teams at</p>
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            
            {/* Scrolling logos */}
            <motion.div 
              className="flex gap-8 items-center"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className="text-gray-700 font-bold text-lg whitespace-nowrap">{client}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Cities Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-600 mb-6 font-medium">Delivering experiences across</p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city, index) => (
              <motion.span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm border border-gray-100 hover:bg-brand-primary hover:text-white transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ scale: 1.1 }}
              >
                📍 {city}
              </motion.span>
            ))}
            <motion.span
              className="bg-brand-primary text-white px-4 py-2 rounded-full font-bold shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              + Many More!
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
