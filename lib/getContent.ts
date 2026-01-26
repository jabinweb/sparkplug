import { prisma } from './prisma'
import { cache } from 'react'

// Cache function to prevent multiple DB calls during a single request
export const getContent = cache(async (section: string) => {
  try {
    const content = await prisma.siteContent.findUnique({
      where: { section },
      select: { content: true }
    })
    
    return content?.content || null
  } catch (error) {
    console.error(`Error fetching content for section ${section}:`, error)
    return null
  }
})

// Get all site content at once for better performance
export const getAllSiteContent = cache(async () => {
  try {
    const allContent = await prisma.siteContent.findMany({
      select: { section: true, content: true }
    })
    
    // Transform array into object for easy access
    const siteContent = allContent.reduce((acc, item) => {
      // Flatten "site" section if it contains nested data
      if (item.section === 'site' && typeof item.content === 'object') {
        Object.assign(acc, item.content)
      } else {
        acc[item.section] = item.content
      }
      return acc
    }, {} as Record<string, any>)
    
    return siteContent
  } catch (error) {
    console.error('Error fetching all site content:', error)
    return {}
  }
})
