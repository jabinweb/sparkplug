// Script to sync blog posts from JSON to database
import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function syncBlogPosts() {
  try {
    console.log('📖 Reading blog-posts.json...')
    const blogPostsPath = path.join(process.cwd(), 'content', 'blog-posts.json')
    const blogPosts = JSON.parse(fs.readFileSync(blogPostsPath, 'utf-8'))

    console.log(`Found ${blogPosts.length} blog posts to sync\n`)

    for (const post of blogPosts) {
      const slug = post.slug || post.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')

      console.log(`🔄 ${post.title}`)
      console.log(`   📎 ${slug}`)

      await prisma.blogPost.upsert({
        where: { slug },
        update: {
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          author: post.author,
          publishDate: new Date(post.publishDate),
          featured: post.featured,
          tags: post.tags,
          published: true,
        },
        create: {
          slug,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          author: post.author,
          publishDate: new Date(post.publishDate),
          featured: post.featured,
          tags: post.tags,
          published: true,
        },
      })

      console.log(`   ✅ Synced\n`)
    }

    const total = await prisma.blogPost.count()
    console.log(`✅ Database now has ${total} blog posts`)

  } catch (error) {
    console.error('❌ Error syncing blog posts:', error)
  } finally {
    await prisma.$disconnect()
  }
}

syncBlogPosts()
