import Link from 'next/link';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishDate: Date | string;
}

interface BlogPostGridProps {
  posts: BlogPost[];
  emptyMessage?: string;
}

export function BlogPostGrid({ posts, emptyMessage = "No posts found." }: BlogPostGridProps) {
  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Experiences': 'bg-yellow-100 text-yellow-800',
      'Insights': 'bg-blue-100 text-blue-700',
      'Activities': 'bg-green-100 text-green-700',
      'Innovation': 'bg-purple-100 text-purple-700',
      'Case Studies': 'bg-orange-100 text-orange-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-[var(--color-text-secondary)]">{emptyMessage}</p>
        <Link href="/blog" className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] mt-4 inline-block">
          View all posts →
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-[var(--color-bg-secondary)] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
          <div className="p-6">
            <div className="flex items-center mb-3">
              <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              <span className="ml-auto text-xs text-gray-500">
                {formatDate(post.publishDate)}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3 line-clamp-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-[var(--color-brand-secondary)] transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">By {post.author}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] font-medium transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

interface BlogHeroProps {
  title: string;
  subtitle: string;
  backLink?: string;
}

export function BlogHero({ title, subtitle, backLink = "/blog" }: BlogHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link href={backLink} className="text-white/80 hover:text-white text-sm mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl text-white/90">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
