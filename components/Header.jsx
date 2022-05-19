import Link from 'next/link'
import Container from './Container'

const Header = () => {
  return (
    <div className="border-b border-b-black/10">
      <Container>
        <div className="flex h-[60px] justify-between items-center">
          <Link href="/">
            <h1 className="font-semibold cursor-pointer hover:text-pink-400 transition-colors duration-200">
              Pufferbommy
            </h1>
          </Link>
          <ul className="flex gap-6 font-medium">
            <li className="hover:text-pink-400 transition-colors duration-200">
              <Link href="/">Blog</Link>
            </li>
            <li className="hover:text-pink-400 transition-colors duration-200">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Header
