import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@sparkplug.in'
  const adminPassword = process.env.ADMIN_PASSWORD || 'changeme123'
  const passwordHash = await bcrypt.hash(adminPassword, 10)

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      passwordHash,
      name: 'Admin User',
      role: 'admin',
    },
  })

  console.log('Admin user created:', admin.email)

  // Seed initial site content from existing JSON files
  const fs = require('fs')
  const path = require('path')
  
  const siteContentPath = path.join(process.cwd(), 'content', 'site-content.json')
  if (fs.existsSync(siteContentPath)) {
    const siteContentData = JSON.parse(fs.readFileSync(siteContentPath, 'utf-8'))
    
    await prisma.siteContent.upsert({
      where: { section: 'site' },
      update: {
        content: siteContentData,
        version: { increment: 1 },
      },
      create: {
        section: 'site',
        content: siteContentData,
      },
    })
    console.log('Site content seeded')
  }

  const blogPostsPath = path.join(process.cwd(), 'content', 'blog-posts.json')
  if (fs.existsSync(blogPostsPath)) {
    const blogPostsData = JSON.parse(fs.readFileSync(blogPostsPath, 'utf-8'))
    
    for (const post of blogPostsData) {
      const slug = `post-${post.id}`
      await prisma.blogPost.upsert({
        where: { slug },
        update: {},
        create: {
          title: post.title,
          slug,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          author: post.author,
          publishDate: new Date(post.publishDate),
          featured: post.featured || false,
          tags: post.tags || [],
          published: true,
        },
      })
    }
    console.log('Blog posts seeded')
  }

  console.log('Database seed completed!')
}

main()
  .catch((e) => {
    console.error('Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
