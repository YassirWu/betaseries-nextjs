import React from 'react';
import { GetStaticProps } from 'next';
import ApplicationHeader from 'components/molecules/ApplicationHeader';
import ShowsSlider from 'components/organisms/ShowsSlider';
import { PopularShow } from 'models/Show';
import { betaSeriesServices } from 'services/betaSeriesClient';
import { useRouterProject } from './router';

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
  const { popularShowsRouting, detailShowRouting } = useRouterProject();

  return (
    <>
      <ApplicationHeader onResultSelect={detailShowRouting.redirection} />

      <ShowsSlider
        title="Popular Shows"
        subtitle="See all popular shows"
        link={popularShowsRouting.href()}
        shows={populars}
        onClickAllShows={popularShowsRouting.redirection}
        onClickShow={detailShowRouting.redirection}
      />
    </>
  );
};

export default Home;
