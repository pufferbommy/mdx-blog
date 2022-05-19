import fs from 'fs'
import matter from 'gray-matter'

const getPost = async (slug) => {
  const mdxSource = fs.readFileSync(`posts/${slug}.mdx`)
  const { data, content } = matter(mdxSource)
  return {
    data,
    content,
  }
}

export default getPost
