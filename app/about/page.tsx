'use client';

import siteContent from '../../content/site-content.json';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-primary text-white py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium rounded-full mb-8"
            >
              🎯 Who We Are
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {about.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light max-w-4xl mx-auto leading-relaxed">
              {about.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-6">
              Our Beginning
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {about.foundingAspiration.title}
            </h2>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                <span className="text-3xl font-bold text-brand-primary mr-2 float-left leading-none">S</span>
                parkplug was born from a simple idea: <strong>People connect best when they experience something together.</strong>
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                {about.foundingAspiration.content}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-6">
              Our Difference
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              What Makes Sparkplug Different
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {about.values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-brand-primary to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                      whileHover={{ rotate: 5 }}
                    >
                      <span className="text-white text-xl font-bold">{index + 1}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-gradient-to-br from-brand-primary/5 to-yellow-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 h-full">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-brand-primary to-yellow-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {about.vision}
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 h-full">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {about.mission}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Founder - Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-6">
              Leadership
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Meet the Founder
            </h2>
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-gray-500 text-lg italic">
                Coming soon...
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Sparkplug your audience?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s create an unforgettable experience for your team.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Enquire Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
