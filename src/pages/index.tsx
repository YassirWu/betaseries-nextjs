import React from 'react';
import { fetchPopularShows, IPopularShow } from '../services/services';
import { GetStaticProps } from 'next';
import LinkNavigation from '../components/LinkNavigation';
import { Header, Image, Segment } from 'semantic-ui-react';
import Slick from 'components/Slick';

interface IHomeProps {
  populars: IPopularShow[];
}

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const populars = await fetchPopularShows();

  return {
    props: {
      populars,
    },
  };
};

const Home: React.FunctionComponent<IHomeProps> = ({ populars }) => {
  return (
    <div>
      <Segment>
        <Header>
          <Image src="/images/logo.png" />
          <Header.Content>
            BetaSeries NextJs App
            <Header.Subheader>Simple website using BetaSeries api, NextJs, SWR and Semantic UI</Header.Subheader>
          </Header.Content>
        </Header>
      </Segment>

      <Header as="h2" dividing>
        <Header.Content>Popular Shows</Header.Content>
        <Header.Subheader>
          <LinkNavigation to="populars" text="See all popular shows" />
        </Header.Subheader>
      </Header>
      <Slick>
        {populars.map((show) => (
          <div key={show.id}>
            <Image src={show.images.poster} />
          </div>
        ))}
      </Slick>
    </div>
  );
};

export default Home;
