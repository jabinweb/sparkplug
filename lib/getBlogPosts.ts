import { cache } from 'react';
import { prisma } from './prisma';

export const getBlogPosts = cache(async (options?: {
  category?: string;
  featured?: boolean;
  limit?: number;
  offset?: number;
}) => {
  const where: any = { published: true };
  
  if (options?.category) {
    where.category = options.category;
  }
  
  if (options?.featured !== undefined) {
    where.featured = options.featured;
  }

  const posts = await prisma.blogPost.findMany({
    where,
    orderBy: { publishDate: 'desc' },
    take: options?.limit || 10,
    skip: options?.offset || 0,
  });

  return posts;
});

export const getBlogPost = cache(async (slug: string) => {
  const post = await prisma.blogPost.findUnique({
    where: { slug, published: true },
  });

  return post;
});

export const getFeaturedBlogPosts = cache(async () => {
  return getBlogPosts({ featured: true, limit: 3 });
});

export const getRecentBlogPosts = cache(async (limit = 6) => {
  return getBlogPosts({ limit });
});
