import Head from 'next/head'
import React from 'react'
import Heading from '../components/Heading'

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="my-10">
        <Heading str="About Me" />
        <div className="mt-6">
          <span>
            I build this website for practice my english skill by translate mini post
            in other website to my native language (Thai).
          </span>
        </div>
      </div>
    </>
  )
}

export default about
