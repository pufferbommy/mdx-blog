import Link from 'next/link'
import Container from './Container'

const Header = () => {
  return (
    <header className="h-[60px]">
      <Container>
        <div className="flex h-full justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-semibold cursor-pointer">Pufferbommy</h1>
          </Link>
          <ul className="flex gap-6 font-medium">
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header
