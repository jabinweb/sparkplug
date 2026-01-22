import { PrismaClient } from '@prisma/client'
import { cache } from 'react'
import siteContent from '../content/site-content.json'

const prisma = new PrismaClient()

// Cache function to prevent multiple DB calls during a single request
export const getContent = cache(async (section: string) => {
  try {
    const content = await prisma.siteContent.findUnique({
      where: { section },
      select: { content: true }
    })
    
    // Fallback to static JSON if DB is empty
    return content?.content || (siteContent as any)[section] || null
  } catch (error) {
    console.error(`Error fetching content for section ${section}:`, error)
    // Fallback to static JSON on error
    return (siteContent as any)[section] || null
  }
})

// Get all site content at once for better performance
export const getAllSiteContent = cache(async () => {
  try {
    const allContent = await prisma.siteContent.findMany({
      select: { section: true, content: true }
    })
    
    // Transform array into object for easy access
    const dbContent = allContent.reduce((acc, item) => {
      acc[item.section] = item.content
      return acc
    }, {} as Record<string, any>)
    
    // Merge with static JSON as fallback
    return { ...siteContent, ...dbContent }
  } catch (error) {
    console.error('Error fetching all site content:', error)
    return siteContent
  }
})
