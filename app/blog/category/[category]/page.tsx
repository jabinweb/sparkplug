import { getAllSiteContent } from '@/lib/getContent';
import { getBlogPosts } from '@/lib/getBlogPosts';
import { BlogHero, BlogPostGrid } from '@/components/blog/BlogComponents';

export const revalidate = 0;

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryName = decodeURIComponent(category);
  
  const posts = await getBlogPosts({ category: categoryName, limit: 100 });

  return (
    <div className="bg-[var(--color-bg-primary)] transition-colors duration-300">
      <BlogHero
        title={`Category: ${categoryName}`}
        subtitle={`${posts.length} post${posts.length !== 1 ? 's' : ''} found`}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogPostGrid 
            posts={posts} 
            emptyMessage="No posts found in this category."
          />
        </div>
      </section>
    </div>
  );
}
