import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')
const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
}
const devlogDirectory = join(process.cwd(), '_devlog')
const getDevSlugs = () => {
  return fs.readdirSync(devlogDirectory)
}

export const getDevlogBySlug = (slug, fields = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(devlogDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}

export const getPostBySlug = (slug, fields = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}

export const getAllPosts = (fields = []) => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, postsDirectory))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

export const getAllDevlog = (fields = []) => {
  const slugs = getDevSlugs()
  const posts = slugs
    .map((slug) => getDevlogBySlug(slug, fields, devlogDirectory))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}
