import Head from 'next/head'

const PostPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <div className="mt-10">asd</div>
    </>
  )
}

export default PostPage

export async function getStaticPaths() {
  return {
    paths: [],
  }
}
