import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export function getSortedContentData() {
  // Get file names under /content
  const fileNames = fs.readdirSync(contentDirectory)
  const allContentData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the content metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id 
    return {
      id,
      ...(matterResult.data as { priority: string; title: string; content: string })
    }
  })

  // Sort content by priority
  return allContentData.sort((a, b) => {
    if (a.priority > b.priority) {
      return 1
    } else {
      return -1
    }
  })
}