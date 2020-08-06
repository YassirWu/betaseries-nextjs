import React from 'react';
import { fetchPopularShows, IPopularShow } from '../services/services'
import { GetStaticProps } from 'next';
import { Typography } from '@material-ui/core';
import LinkNavigation from '../components/LinkNavigation';

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
      <Typography variant="h1">BetaSeries NextJs App</Typography>

      <Typography variant="h2">Popular Shows</Typography>
      <ul>
        {populars.map(show => (
          <li key={show.id}>{show.title}</li>
          ))}
      </ul>
      <LinkNavigation to="populars" text="See all popular shows" />
    </div>
  )
}

export default Home;
