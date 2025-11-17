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
              🏛️ Who We Are
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {about.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light max-w-4xl mx-auto leading-relaxed">
              {about.hero.subtitle}
            </p>
            <p className="text-lg max-w-4xl mx-auto opacity-90 leading-relaxed">
              {about.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Aspiration */}
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
              Our Story
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
              <p className="text-gray-700 leading-relaxed text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-brand-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                {about.foundingAspiration.content}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision & Mission */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 h-full">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-brand-primary to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {about.vision}
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 h-full">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {about.mission}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-brand-secondary/10 text-brand-secondary rounded-full text-sm font-medium mb-6">
                Core Values
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full border border-gray-100">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-brand-primary via-brand-secondary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 10 }}
                    >
                      <span className="text-white font-bold text-xl">
                        {value.title.charAt(0)}
                      </span>
                    </motion.div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-6">
              Our Goals
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Objectives</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five strategic pillars driving our mission forward
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {about.objectives.map((objective, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-primary">
                  <div className="flex items-start">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mr-6 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed text-lg">{objective}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/10 text-gray-800 rounded-full text-sm font-medium mb-6">
              Leadership
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Governance Structure</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four pillars of leadership working together for systemic change
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                <motion.div 
                  className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">{about.governance.legalBoard.name}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{about.governance.legalBoard.description}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                <motion.div 
                  className="w-16 h-16 bg-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 9.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">{about.governance.advisoryPanel.name}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{about.governance.advisoryPanel.description}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                <motion.div 
                  className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">{about.governance.nextGenBoard.name}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{about.governance.nextGenBoard.description}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                <motion.div 
                  className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">{about.governance.executiveTeam.name}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{about.governance.executiveTeam.description}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-6">
              Our Roadmap
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{about.journey.title}</h3>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">{about.journey.description}</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {about.journey.quarters.map((quarter, qIndex) => (
              <motion.div 
                key={qIndex} 
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-6 text-center">
                    <h4 className="text-2xl font-bold">{quarter.quarter}</h4>
                  </div>
                  <div className="p-6">
                    {quarter.months.map((monthData, mIndex) => (
                      <div key={mIndex} className="mb-6 last:mb-0">
                        <h5 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">{monthData.month}</h5>
                        <ul className="space-y-2">
                          {monthData.priorities.map((priority, pIndex) => (
                            <li key={pIndex} className="text-sm text-gray-600 flex items-start leading-relaxed">
                              <span className="w-2 h-2 bg-brand-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {priority}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}