'use client';

import siteContent from '../../content/site-content.json';
import { motion } from 'framer-motion';

interface Program {
  name: string;
  description: string;
}

export default function ProgramsPage() {
  const { programs } = siteContent;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-gray-900 py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="inline-block mb-6"
            >
              <span className="bg-white/20 backdrop-blur-sm text-gray-900 px-6 py-2 rounded-full text-sm font-semibold">
                ⚡ High-Energy Experiences
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              {programs.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl mb-6 font-semibold text-gray-800">
              {programs.hero.subtitle}
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-900/90 leading-relaxed">
              {programs.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Services - Modern Card Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Four High-Energy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From corporate team building to drum circles, we create experiences that energize, connect, and inspire
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1 - Corporate Team Building */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient header */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">A</span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2">{programs.activatingExisting.name}</h3>
                <p className="text-sm text-yellow-600 font-bold mb-4 uppercase tracking-wide">{programs.activatingExisting.tagline}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{programs.activatingExisting.description}</p>
                
                {/* Programs list */}
                <div className="space-y-4 mb-6">
                  {programs.activatingExisting.programs.map((program: Program, index: number) => (
                    <div key={index} className="relative pl-6 border-l-4 border-yellow-400">
                      <h4 className="font-bold text-gray-900 mb-1">{program.name}</h4>
                      <p className="text-sm text-gray-600">{program.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-semibold text-gray-700">Target:</span> {programs.activatingExisting.targetAudience}
                  </p>
                  <p className="text-sm font-bold text-yellow-600">{programs.activatingExisting.callToAction}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Service 2 - Experiential Events */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient header */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">B</span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2">{programs.buildingOriginal.name}</h3>
                <p className="text-sm text-blue-600 font-bold mb-4 uppercase tracking-wide">{programs.buildingOriginal.tagline}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{programs.buildingOriginal.description}</p>
                
                {/* Programs list */}
                <div className="space-y-4 mb-6">
                  {programs.buildingOriginal.programs.map((program: Program, index: number) => (
                    <div key={index} className="relative pl-6 border-l-4 border-blue-500">
                      <h4 className="font-bold text-gray-900 mb-1">{program.name}</h4>
                      <p className="text-sm text-gray-600">{program.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-semibold text-gray-700">Target:</span> {programs.buildingOriginal.targetAudience}
                  </p>
                  <p className="text-sm font-bold text-blue-600">{programs.buildingOriginal.callToAction}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Service 3 - Music & Conversations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient header */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-purple-700"></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">C</span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2">{programs.catalysingConversations.name}</h3>
                <p className="text-sm text-purple-600 font-bold mb-4 uppercase tracking-wide">{programs.catalysingConversations.tagline}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{programs.catalysingConversations.description}</p>
                
                {/* Programs list */}
                <div className="space-y-4 mb-6">
                  {programs.catalysingConversations.programs.map((program: Program, index: number) => (
                    <div key={index} className="relative pl-6 border-l-4 border-purple-500">
                      <h4 className="font-bold text-gray-900 mb-1">{program.name}</h4>
                      <p className="text-sm text-gray-600">{program.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-semibold text-gray-700">Target:</span> {programs.catalysingConversations.targetAudience}
                  </p>
                  <p className="text-sm font-bold text-purple-600">{programs.catalysingConversations.callToAction}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Sparkplug - Modern Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose Sparkplug?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Trusted by world-class brands across India for high-energy experiences that transform teams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-700 text-lg font-medium">200+ activities delivered to 70,000+ participants across India</p>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Prestigious Clients</h3>
              <p className="text-gray-700 text-lg font-medium">Trusted by Google, Microsoft, Deloitte, EY, PwC, and many more</p>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Unique Edge</h3>
              <p className="text-gray-700 text-lg font-medium">Exclusive activities, music facilitation, and high-energy engagement</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}