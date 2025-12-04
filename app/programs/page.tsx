'use client';

import siteContent from '../../content/site-content.json';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function ExperiencesPage() {
  const { programs } = siteContent;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-gray-900 py-24 overflow-hidden">
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

      {/* Corporate Drum Circles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-6">
                🥁 Signature Experience
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                Corporate Drum Circles
              </h2>
              <p className="text-xl text-yellow-600 font-semibold mb-6">
                The fastest way to energise a room
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A high-energy, music-led experience where everyone, CEO to intern, becomes part of one rhythm. Corporate drum circles are one of the fastest ways to energise a room, break silos, and create instant connection.
              </p>
              <p className="text-gray-700 font-medium mb-6">
                <span className="text-brand-primary">Perfect for:</span> Off-sites, annual meets, R&Rs, launch events, and culture days.
              </p>
              <div className="mb-8">
                <p className="font-bold text-gray-900 mb-4">Ideal for:</p>
                <ul className="grid grid-cols-2 gap-3">
                  {['Energising burnout teams', 'Breaking silos', 'Boosting morale', 'Making events unforgettable'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <span className="text-5xl">🥁</span>
                  </div>
                  <p className="text-gray-600 italic">&quot;Everyone becomes part of the same beat&quot;</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team-Building Workshops */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1 relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <span className="text-5xl">🤝</span>
                  </div>
                  <p className="text-gray-600 italic">&quot;Without the awkward icebreakers&quot;</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                🎯 Collaboration Focused
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                Team-Building Workshops
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                Communication, trust, and creative problem-solving
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our collaboration-focused workshops help teams communicate better, build trust, and solve problems creatively. These are not typical corporate games. These are high-engagement, gamified experiences developed to bring out teamwork naturally.
              </p>
              <p className="text-gray-700 font-medium mb-6">
                <span className="text-brand-primary">Great for:</span> Onboarding, leadership development, and cross-functional collaboration.
              </p>
              <div className="mb-8">
                <p className="font-bold text-gray-900 mb-4">Ideal for:</p>
                <ul className="grid grid-cols-2 gap-3">
                  {['Freshers & new joiners', 'Leadership teams', 'Cross-functional groups', 'Creative problem-solving days'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workplace Culture Experiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                🏢 Regular Engagement
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                Workplace Culture Experiences
              </h2>
              <p className="text-xl text-purple-600 font-semibold mb-6">
                Regular engagement, not once-a-year events
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Every workplace has people who&apos;ve drifted into silos without even realising it. Our quick 45–60 minute modules are built for offices that want regular engagement, not once-a-year events. Great for energising the office, refreshing teams, and building a culture of belonging.
              </p>
              <div className="mb-8">
                <p className="font-bold text-gray-900 mb-4">Modules include:</p>
                <ul className="grid grid-cols-2 gap-3">
                  {['Rhythm Energizers', 'Creativity Boosters', 'Stress-Relief Sessions', 'Motivation & Morale Boosters'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <span className="text-5xl">✨</span>
                  </div>
                  <p className="text-gray-600 italic">&quot;Build a culture of belonging&quot;</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Experiences */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1 relative">
              <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <span className="text-5xl">🎉</span>
                  </div>
                  <p className="text-gray-600 italic">&quot;Fun, memorable experiences&quot;</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-6">
                🎊 Celebrations & Events
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                Community Experiences
              </h2>
              <p className="text-xl text-pink-600 font-semibold mb-6">
                Fun, memorable experiences for any celebration
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                From birthday parties and baby showers to weddings and large-scale fan engagement events like IPL activations, we design fun, memorable experiences that leave participants energised, connected, and fully immersed in the moment.
              </p>
              <div className="mb-8">
                <p className="font-bold text-gray-900 mb-4">Ideal for:</p>
                <ul className="grid grid-cols-2 gap-3">
                  {['Celebrations & private events', 'Brand activations', 'Fan engagement', 'Wedding & pre-wedding events', 'Community gatherings'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Experiences */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
              🎨 Tailor-Made
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Custom Experiences
            </h2>
            <p className="text-xl text-green-400 font-semibold mb-6">
              If you can imagine it, we can build it
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Have something unique in mind? We design custom engagement experiences for corporates, communities, events, and hybrid/virtual formats. If you can imagine it, we can build it — music-led, rhythm-driven, or completely tailor-made.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Let&apos;s Create Together
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
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
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Enquire Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
