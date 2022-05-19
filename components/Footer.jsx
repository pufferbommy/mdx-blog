import { BsGithub, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'

const Footer = ({ fixed }) => {
  return (
    <footer
      className={`${
        fixed && 'fixed bottom-0 left-0 w-full'
      } py-4 flex justify-center items-center gap-3`}
    >
      <Link href="https://github.com/pufferbommy">
        <BsGithub
          className="cursor-pointer text-pink-400 hover:text-pink-500 transition-colors duration-200"
          size="1.25rem"
        />
      </Link>
      <Link href="https://twitter.com/pufferbommy">
        <BsTwitter
          className="cursor-pointer text-pink-400 hover:text-pink-500 transition-colors duration-200"
          size="1.25rem"
        />
      </Link>
    </footer>
  )
}

export default Footer
