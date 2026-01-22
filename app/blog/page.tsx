import Link from 'next/link';
import siteContent from '../../content/site-content.json';
import blogPosts from '../../content/blog-posts.json';

export default function BlogPage() {
  const { blog } = siteContent;
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 6);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
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

  return (
    <div className="bg-[var(--color-bg-primary)] transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {blog.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              {blog.subtitle}
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              {blog.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-12">Featured Posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-[var(--color-bg-secondary)] rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <span className="ml-auto text-sm text-gray-500">
                        {formatDate(post.publishDate)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                      <Link href={`/blog/${post.id}`} className="hover:text-[var(--color-brand-secondary)] transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] font-medium transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Recent Posts</h2>
            <Link
              href="/blog/categories"
              className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] font-medium transition-colors"
            >
              View All Categories →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-[var(--color-bg-primary)] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                    <Link href={`/blog/${post.id}`} className="hover:text-[var(--color-brand-secondary)] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">By {post.author}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-sm text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] font-medium transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Tags */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Categories */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Categories</h3>
              <div className="space-y-3">
                {Array.from(new Set(blogPosts.map(post => post.category))).map((category) => {
                  const postCount = blogPosts.filter(post => post.category === category).length;
                  return (
                    <Link
                      key={category}
                      href={`/blog/category/${category.toLowerCase()}`}
                      className="flex items-center justify-between p-3 bg-[var(--color-bg-secondary)] rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors"
                    >
                      <span className="font-medium text-[var(--color-text-primary)]">{category}</span>
                      <span className="text-sm text-gray-500">{postCount} post{postCount !== 1 ? 's' : ''}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Popular Tags */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.replace(/\s+/g, '-')}`}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
