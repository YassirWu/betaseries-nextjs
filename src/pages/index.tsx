import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import ApplicationHeader from 'components/molecules/ApplicationHeader';
import ShowsSlider from 'components/organisms/ShowsSlider';
import { PopularShow } from 'models/Show';
import { betaSeriesServices } from 'services/betaSeriesClient';

interface IHomeProps {
  populars: PopularShow[];
}

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const populars = await betaSeriesServices.fetchPopularShows();

  return {
    props: {
      populars,
    },
  };
};

const Home: React.FunctionComponent<IHomeProps> = ({ populars }) => {
  const router = useRouter();

  return (
    <>
      <ApplicationHeader onResultSelect={(id) => router.push('/show/[id]', `/show/${id}`)} />

      <ShowsSlider
        title="Popular Shows"
        subtitle="See all popular shows"
        link="/populars"
        shows={populars}
        onClickAllShows={() => router.push('/populars')}
        onClickShow={(id) => router.push('/show/[id]', `/show/${id}`)}
      />
    </>
  );
};

export default Home;
