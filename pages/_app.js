import Header from '../components/Header'
import Container from '../components/Container'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
