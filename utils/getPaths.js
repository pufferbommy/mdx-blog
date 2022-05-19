import getAllPost from './getAllPost'

const getPaths = async () => {
  const posts = await getAllPost()
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))
  return paths
}

export default getPaths
