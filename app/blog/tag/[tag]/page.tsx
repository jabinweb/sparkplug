import { getBlogPosts } from '@/lib/getBlogPosts';
import { BlogHero, BlogPostGrid } from '@/components/blog/BlogComponents';

export const revalidate = 0;

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const tagName = decodeURIComponent(tag).replace(/-/g, ' ');
  
  // Get posts - limit to 50 for performance
  const allPosts = await getBlogPosts({ limit: 50 });
  const posts = allPosts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tagName.toLowerCase())
  );

  return (
    <div className="bg-[var(--color-bg-primary)] transition-colors duration-300">
      <BlogHero
        title={`#${tagName}`}
        subtitle={`${posts.length} post${posts.length !== 1 ? 's' : ''} tagged with "${tagName}"`}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogPostGrid 
            posts={posts} 
            emptyMessage="No posts found with this tag."
          />
        </div>
      </section>
    </div>
  );
}
