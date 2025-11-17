import Link from 'next/link';
import Image from 'next/image';
import siteContent from '../../content/site-content.json';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  const { homepage } = siteContent;

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Left Content - Minimal Text */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
            >
                {/* Simple Headline */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {homepage.hero.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < homepage.hero.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
                </h1>

                {/* Brief Description */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {homepage.hero.description}
                </p>

                {/* Single Primary CTA - Blue Button */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                >
                <Button 
                    size="lg" 
                    className="bg-brand-primary hover:bg-brand-primary-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                    <Link href="/contact" className="block">
                    ⚡ Book an Experience
                    </Link>
                </Button>
                </motion.div>
            </motion.div>

            {/* Right Image - Clean and Simple */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-first lg:order-last"
            >
                <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                alt="Students learning together"
                width={600}
                height={450}
                className="object-cover w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] rounded-lg shadow-xl"
                />
            </motion.div>

            </div>
        </div>
    </section>
  )
}
