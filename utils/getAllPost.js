import fs from 'fs'
import matter from 'gray-matter'
import readTime from './read-time'

const getAllPost = async () => {
  const files = fs.readdirSync('posts')

  const posts = files.map((file) => {
    const slug = file.replace('.mdx', '')
    const mdxSource = fs.readFileSync(`posts/${file}`, 'utf8')
    const { data, content } = matter(mdxSource)
    return {
      slug,
      data,
      readTimeMinutes: readTime(content),
    }
  })

  return posts
}

export default getAllPost
