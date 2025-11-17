import siteContent from '../../content/site-content.json';
import { Badge } from '@/components/ui/badge';
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

export default function TheoryOfChange() {
    const { homepage } = siteContent;
  return (
          <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="inline-flex items-center bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Theory of Change
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
              {homepage.theoryOfChange.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              {homepage.theoryOfChange.description}
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {homepage.theoryOfChange.steps.map((step, index) => {
                // Define secondary colors for each step
                const secondaryColors = [
                  { bg: 'rgba(75, 183, 154, 0.08)', hover: 'rgba(75, 183, 154, 0.15)', accent: '#4BB79A' }, // Teal Green
                  { bg: 'rgba(60, 196, 207, 0.08)', hover: 'rgba(60, 196, 207, 0.15)', accent: '#3CC4CF' }, // Bright Aqua
                  { bg: 'rgba(238, 70, 35, 0.08)', hover: 'rgba(238, 70, 35, 0.15)', accent: '#EE4623' }, // Vibrant Red-Orange
                  { bg: 'rgba(253, 187, 35, 0.08)', hover: 'rgba(253, 187, 35, 0.15)', accent: '#FDBB23' }  // Golden Yellow
                ];
                
                const currentColor = secondaryColors[index % 4];
                
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative group"
                  >
                    <motion.div 
                      className="h-full border-0 shadow-lg rounded-2xl transition-all duration-500 relative overflow-hidden"
                      style={{ backgroundColor: currentColor.bg }}
                      whileHover={{ 
                        y: -8,
                        backgroundColor: currentColor.hover,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm h-full rounded-2xl">
                        <div className="pb-6 pt-8 px-6">
                          <div className="flex items-center gap-4 mb-6">
                            {/* Large prominent animated icon */}
                            <motion.div 
                              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden"
                              style={{ backgroundColor: currentColor.accent }}
                              whileHover={{ rotate: 10, scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            >
                              {/* Main visible icon */}
                              <motion.div
                                className="relative z-20"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.8, type: "spring" }}
                              >
                                {index === 0 && (
                                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
                                  </svg>
                                )}
                                {index === 1 && (
                                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z"/>
                                    <path d="M13.96,12.71L11.21,15.46L9.25,13.5L6.5,16.25L17.5,16.25L13.96,12.71Z"/>
                                  </svg>
                                )}
                                {index === 2 && (
                                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                                    <path d="M8,9H16V11H8V9M8,12H16V14H8V12M8,15H13V17H8V15Z"/>
                                  </svg>
                                )}
                                {index === 3 && (
                                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
                                  </svg>
                                )}
                              </motion.div>
                              
                              {/* Step number overlay */}
                              <motion.div
                                className="absolute top-1 right-1 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center text-xs font-bold z-30"
                                style={{ color: currentColor.accent }}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.5, type: "spring" }}
                              >
                                {step.step}
                              </motion.div>
                              
                              {/* Animated background pattern */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"
                                animate={{
                                  rotate: [0, 360],
                                }}
                                transition={{
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                              
                              {/* Floating particles */}
                              <motion.div
                                className="absolute inset-0"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                              >
                                {[...Array(4)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white rounded-full"
                                    style={{
                                      left: `${15 + i * 20}%`,
                                      top: `${15 + (i % 2) * 35}%`,
                                    }}
                                    animate={{
                                      y: [-3, -8, -3],
                                      opacity: [0.3, 1, 0.3],
                                      scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                      duration: 2.5,
                                      repeat: Infinity,
                                      delay: i * 0.3,
                                    }}
                                  />
                                ))}
                              </motion.div>
                            </motion.div>
                            
                            {/* Step indicator */}
                            <motion.div
                              className="flex flex-col"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                            >
                              <span className="text-sm font-medium text-gray-500 mb-1">Step {step.step}</span>
                              <div className="w-12 h-1 rounded-full" style={{ backgroundColor: currentColor.accent }} />
                            </motion.div>
                          </div>
                          
                          <motion.h3 
                            className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                          >
                            {step.title}
                          </motion.h3>
                        </div>
                        
                        <div className="pt-0 pb-8 px-6">
                          <motion.p 
                            className="text-gray-600 leading-relaxed text-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            {step.description}
                          </motion.p>
                        </div>
                      </div>
                      
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                        style={{
                          background: `radial-gradient(circle at 50% 0%, ${currentColor.accent}15 0%, transparent 70%)`
                        }}
                      />
                      
                      {/* Progress indicator line */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
                        style={{ backgroundColor: currentColor.accent }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 1, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
  )
}
