import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Slick from 'components/atoms/Slick';
import Image from 'components/atoms/Image';
import Header, { HeaderContent, HeaderSubheader } from 'components/atoms/Header';
import Bloc from 'components/atoms/Bloc';
import Link from 'components/atoms/Link';
import { fetchPopularShows, IPopularShow } from '../services/services';

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
  const router = useRouter();

  return (
    <div>
      <Bloc>
        <Header>
          <Image src="/images/logo.png" />
          <HeaderContent>
            BetaSeries NextJs App
            <HeaderSubheader>Simple website using BetaSeries api, NextJs, SWR and Semantic UI</HeaderSubheader>
          </HeaderContent>
        </Header>
      </Bloc>

      <Header as="h2" dividing>
        <HeaderContent>Popular Shows</HeaderContent>
        <HeaderSubheader>
          <Link href="/populars" onClick={() => router.push('/populars')}>
            See all popular shows
          </Link>
        </HeaderSubheader>
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
