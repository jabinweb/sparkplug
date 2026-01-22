import { PrismaClient } from '@prisma/client'
import fs from 'fs/promises'
import path from 'path'

const prisma = new PrismaClient()

async function syncContentToJSON() {
  console.log('🔄 Syncing database content to JSON files...')
  
  try {
    // Fetch all site content from database
    const allContent = await prisma.siteContent.findMany({
      select: { section: true, content: true }
    })
    
    // Transform into object
    const siteContent: Record<string, any> = {}
    allContent.forEach(item => {
      siteContent[item.section] = item.content
    })
    
    // Write to site-content.json
    const contentPath = path.join(process.cwd(), 'content', 'site-content.json')
    await fs.writeFile(contentPath, JSON.stringify(siteContent, null, 2), 'utf-8')
    
    console.log('✅ Site content synced successfully!')
    console.log(`📝 Updated ${allContent.length} sections`)
    
  } catch (error) {
    console.error('❌ Error syncing content:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

syncContentToJSON()
