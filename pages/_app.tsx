import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import 'normalize.css';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/Slick/slick.css';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    padding: '20px 10px',
  }
})

function MyApp({ Component, pageProps }) {
  const classes = useStyle();

  return (
    <Container>
      <div className={classes.root}>
        <Head>
          <title>BetaSeries NextJs App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </div>
    </Container>
  )
}

export default MyApp;
