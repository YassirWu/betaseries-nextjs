import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { fetchPopularShows, IPopularShow } from '../services/services'
import { GetStaticProps } from 'next';

interface IHomeProps {
  populars: IPopularShow[];
}

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const populars = await fetchPopularShows();

  return {
    props: {
      populars,
    }
  }
}

const Home: React.FunctionComponent<IHomeProps> = ({ populars }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to BetaSeries NextJs Web Application</h1>
      </main>

      <h2>Popular Series</h2>
      <ul>
        {populars.map(show => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
      <Link href="populars">Show all popular shows</Link>
    </div>
  )
}

export default Home;
