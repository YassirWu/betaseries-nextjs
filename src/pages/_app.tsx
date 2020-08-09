import React from 'react';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { makeStyles } from '@material-ui/styles';
import { AppPropsType } from 'next/dist/next-server/lib/utils';

const useStyle = makeStyles({
  root: {
    padding: '20px 10px',
  },
});

const MyApp: React.FunctionComponent<AppPropsType> = ({ Component, pageProps }: AppPropsType) => {
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
  );
};

export default MyApp;
