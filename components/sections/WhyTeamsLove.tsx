'use client';

import { motion } from 'framer-motion';
import siteContent from '../../content/site-content.json';

export default function WhyTeamsLove() {
  const { homepage } = siteContent;

  const benefits = [
    { icon: '🎯', text: 'Zero skill required', color: 'bg-yellow-100 text-yellow-700' },
    { icon: '💯', text: '100% participation guaranteed', color: 'bg-green-100 text-green-700' },
    { icon: '⚡', text: 'Breaks barriers instantly', color: 'bg-blue-100 text-blue-700' },
    { icon: '🤝', text: 'Boosts collaboration and communication', color: 'bg-purple-100 text-purple-700' },
    { icon: '✨', text: 'Creates lasting memories', color: 'bg-pink-100 text-pink-700' },
    { icon: '📈', text: 'Works for groups of 10 to 5,000+', color: 'bg-orange-100 text-orange-700' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            className="inline-flex items-center bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            💛 Why Teams Love Us
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Why Teams Love <span className="text-yellow-400">Sparkplug</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What makes our experiences unforgettable
          </p>
        </motion.div>

        {/* Benefits Grid with Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <p className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {benefit.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Counter Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '200+', label: 'Activities' },
            { number: '70K+', label: 'Participants' },
            { number: '50+', label: 'Cities' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-black text-yellow-400 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  delay: 0.1 * index 
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
