import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import getPost from '../../utils/getPost'
import getPaths from '../../utils/getPaths'
import Heading from '../../components/Heading'

const PostPage = ({ data, content }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <main className="my-10">
        <div className="mb-6 max-w-[80ch] mx-auto">
          <Heading hasPinkColor str={data.title} />
          <time className="text-gray-500 italic mt-2 block text-xs md:text-sm">
            {data.date}
          </time>
        </div>
        <div className="prose max-w-[80ch] mx-auto prose-pink">
          <MDXRemote {...content} />
        </div>
      </main>
    </>
  )
}

export default PostPage

export const getStaticPaths = async () => {
  const paths = await getPaths()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const mdxSource = await serialize(post.content)
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  }
}
