import { Container } from '@material-ui/core';
import Head from 'next/head';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Head>
        <title>BetaSeries NextJs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp;
