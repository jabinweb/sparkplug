'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import blogPosts from '../../content/blog-posts.json';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  featured: boolean;
}

const StoriesUpdates = () => {
  // Get featured posts and recent posts
  // const featuredPosts = blogPosts.filter((post: BlogPost) => post.featured).slice(0, 2);
  const recentPosts = blogPosts.filter((post: BlogPost) => !post.featured).slice(0, 3);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Programs': 'bg-brand-primary-100 text-brand-primary-800',
      'Research': 'bg-sosc-green-100 text-sosc-green-700',
      'Impact': 'bg-sosc-teal-100 text-sosc-teal-700',
      'Innovation': 'bg-brand-secondary-100 text-brand-secondary-700',
      'Policy': 'bg-sosc-red-100 text-sosc-red-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            📰 Stories & Updates
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Impact, Real Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Follow our journey as we work to end education mortality. From classroom transformations 
            to policy breakthroughs, every story matters.
          </p>
        </motion.div> */}

        {/* Featured Posts Grid */}
        {/* <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🌟 Featured Stories
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post: BlogPost, index: number) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group-hover:scale-[1.02]">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-brand-primary to-brand-primary-700 p-8 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)} bg-white/20 text-white`}>
                          {post.category}
                        </span>
                        <span className="text-white/80 text-sm">
                          {formatDate(post.publishDate)}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-yellow-200 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-600 text-sm">By {post.author}</span>
                        <div className="flex gap-2">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button 
                        asChild
                        variant="ghost" 
                        className="text-brand-primary hover:text-brand-primary-700 font-semibold p-0 h-auto group-hover:translate-x-2 transition-transform"
                      >
                        <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                          Read Full Story
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* Recent Updates */}
        <div className="mb-12">
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            📅 Recent Updates
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post: BlogPost, index: number) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl group-hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {formatDate(post.publishDate)}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">By {post.author}</span>
                      <Button 
                        asChild
                        variant="ghost" 
                        size="sm"
                        className="text-brand-primary hover:text-brand-primary-700 font-medium p-0 h-auto"
                      >
                        <Link href={`/blog/${post.id}`} className="flex items-center gap-1">
                          Read
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Blog CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold px-8 py-4"
          >
            <Link href="/blog" className="flex items-center gap-2">
              📚 View All Stories & Updates
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StoriesUpdates;