import Header from '../components/Header'
import Container from '../components/Container'
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <NextNProgress color="#f472b6" />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
