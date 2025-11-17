import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import siteContent from '../../content/site-content.json';


export default function Challenge() {
    const { homepage } = siteContent;
  
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <motion.div 
                className="text-center mb-10 sm:mb-12 lg:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center bg-brand-primary/10 text-brand-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                The Challenge
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
                {homepage.challenge.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                {homepage.challenge.subtitle}
                </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-14 lg:mb-16">
                
                {/* Content */}
                <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1 text-center lg:text-left"
                >
                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl">
                    {homepage.challenge.description}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <Button
                    asChild
                    size="lg"
                    className="bg-brand-primary hover:bg-brand-primary-700 text-white font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
                    >
                    <Link href="/partner">Partner With Us</Link>
                    </Button>
                    <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
                    >
                    <Link href="/programs">Learn Our Programs</Link>
                    </Button>
                </div>
                </motion.div>

                {/* Image with Animated Blob */}
                <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2"
                >
                <div className="relative flex items-center justify-center">

                    {/* Image Container */}
                    <motion.div 
                    className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    >
                    <div className="w-full h-full rounded-lg overflow-hidden shadow-xl border-4 border-white">
                        <Image
                        src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                        alt="Students learning together - Education accessibility challenges"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        />
                        {/* Subtle overlay for better contrast */}
                        <div className="absolute inset-0 rotate-8 rounded-lg shadow-xl border-4 border-white bg-brand-primary -z-1 to-transparent"></div>
                    </div>
                    </motion.div>
                </div>
                </motion.div>
            </div>

            {/* Impact Statistics */}
            <motion.div
                className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* Subtle Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Large geometric shapes for depth */}
                    <motion.div 
                        className="absolute -top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full"
                        style={{ backgroundColor: 'rgba(75, 183, 154, 0.03)' }}
                        animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.div 
                        className="absolute top-1/3 -right-32 w-56 h-56 sm:w-80 sm:h-80 rounded-full"
                        style={{ backgroundColor: 'rgba(60, 196, 207, 0.04)' }}
                        animate={{ 
                            rotate: [360, 0],
                            scale: [1.1, 0.9, 1.1]
                        }}
                        transition={{ 
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.div 
                        className="absolute -bottom-32 left-1/3 w-48 h-48 sm:w-72 sm:h-72 rounded-full"
                        style={{ backgroundColor: 'rgba(253, 187, 35, 0.02)' }}
                        animate={{ 
                            scale: [1, 1.2, 1],
                            x: [0, 30, 0]
                        }}
                        transition={{ 
                            duration: 30,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg"
                        >
                            <span className="text-xl sm:text-2xl mr-2">⚡</span>
                            <span className="text-gray-800 font-semibold">Our Impact Across India</span>
                        </motion.div>
                        <motion.h3 
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight px-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Trusted by Leading Companies
                        </motion.h3>
                        <motion.p 
                            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Energizing teams and creating unforgettable experiences across India
                        </motion.p>
                    </div>

                    {/* Statistics Grid - Dashboard Style Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16 lg:mb-20">
                        {[
                            { 
                                title: "Activities Delivered", 
                                subtitle: "All Time", 
                                number: "200+", 
                                change: "+25%", 
                                positive: true, 
                                color: '#FFC828',
                                chartType: 'bars'
                            },
                            { 
                                title: "Participants Engaged", 
                                subtitle: "Across India", 
                                number: "70K+", 
                                change: "+40%", 
                                positive: true, 
                                color: '#2563EB',
                                chartType: 'line'
                            },
                            { 
                                title: "Corporate Clients", 
                                subtitle: "Top Companies", 
                                number: "50+", 
                                change: "+18%", 
                                positive: true, 
                                color: '#10B981',
                                chartType: 'area'
                            }
                        ].map((stat, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.1 * index,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Header */}
                                <div className="flex justify-between items-start mb-3 sm:mb-4">
                                    <div>
                                        <h4 className="text-gray-900 font-semibold text-xs sm:text-sm mb-1">{stat.title}</h4>
                                        <p className="text-gray-500 text-xs">{stat.subtitle}</p>
                                    </div>
                                    <motion.div 
                                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                                            stat.positive 
                                                ? 'bg-green-100 text-green-700' 
                                                : 'bg-red-100 text-red-700'
                                        }`}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (0.1 * index) }}
                                    >
                                        {stat.change}
                                    </motion.div>
                                </div>

                                {/* Main Number */}
                                <motion.div 
                                    className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4"
                                    style={{ color: stat.color }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 200, 
                                        delay: 0.4 + (0.1 * index),
                                        duration: 0.8
                                    }}
                                >
                                    {stat.number}
                                </motion.div>

                                {/* Mini Chart Visualization */}
                                <motion.div 
                                    className="h-12 sm:h-16 relative overflow-hidden"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + (0.1 * index) }}
                                >
                                    {stat.chartType === 'bars' && (
                                        <div className="flex items-end justify-between h-full space-x-1">
                                            {[40, 60, 45, 80, 55, 90, 70, 85].map((height, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="rounded-t-sm flex-1"
                                                    style={{ 
                                                        backgroundColor: stat.color,
                                                        opacity: 0.7
                                                    }}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${height}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ 
                                                        delay: 0.8 + (0.05 * i) + (0.1 * index),
                                                        duration: 0.5
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {stat.chartType === 'line' && (
                                        <svg className="w-full h-full" viewBox="0 0 100 40">
                                            <motion.path
                                                d="M 5,35 Q 15,25 25,28 Q 35,20 45,15 Q 55,18 65,12 Q 75,8 85,10 Q 90,7 95,5"
                                                fill="none"
                                                stroke={stat.color}
                                                strokeWidth="2"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ 
                                                    delay: 0.8 + (0.1 * index),
                                                    duration: 1.5
                                                }}
                                            />
                                            <motion.path
                                                d="M 5,35 Q 15,25 25,28 Q 35,20 45,15 Q 55,18 65,12 Q 75,8 85,10 Q 90,7 95,5 L 95,40 L 5,40 Z"
                                                fill={stat.color}
                                                fillOpacity="0.1"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ 
                                                    delay: 1.0 + (0.1 * index),
                                                    duration: 1.5
                                                }}
                                            />
                                        </svg>
                                    )}

                                    {stat.chartType === 'area' && (
                                        <svg className="w-full h-full" viewBox="0 0 100 40">
                                            <motion.path
                                                d="M 5,30 Q 20,25 35,20 Q 50,15 65,18 Q 80,12 95,8"
                                                fill="none"
                                                stroke={stat.color}
                                                strokeWidth="2"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ 
                                                    delay: 0.8 + (0.1 * index),
                                                    duration: 1.5
                                                }}
                                            />
                                        </svg>
                                    )}

                                    {stat.chartType === 'circle' && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                                    <path
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#E5E7EB"
                                                        strokeWidth="3"
                                                    />
                                                    <motion.path
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke={stat.color}
                                                        strokeWidth="3"
                                                        strokeDasharray="87, 100"
                                                        initial={{ strokeDasharray: "0, 100" }}
                                                        whileInView={{ strokeDasharray: "87, 100" }}
                                                        viewport={{ once: true }}
                                                        transition={{ 
                                                            delay: 0.8 + (0.1 * index),
                                                            duration: 1.2
                                                        }}
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-xs font-bold" style={{ color: stat.color }}>87%</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>

                                {/* Subtle background gradient on hover */}
                                <motion.div 
                                    className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                                    style={{ backgroundColor: stat.color }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action Section */}
                    <motion.div 
                        className="text-center max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100">
                            <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
                                Every statistic represents millions of children whose educational journey has been disrupted. 
                                <strong className="text-[#133E7C]"> The time for systemic change is now.</strong>
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-brand-primary text-white font-bold px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg shadow-2xl rounded-full border-0 transition-all duration-300 w-full sm:w-auto"
                                >
                                    <Link href="/partner">
                                        Partner With Us 
                                        <motion.span
                                            className="ml-2 inline-block"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            </div>
        </section>
  )
}
