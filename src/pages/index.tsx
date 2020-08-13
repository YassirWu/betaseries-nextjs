import React from 'react';
import { GetStaticProps } from 'next';
import ApplicationHeader from 'components/molecules/ApplicationHeader';
import ShowsSlider from 'components/organisms/ShowsSlider';
import { PopularShow } from 'models/Show';
import { betaSeriesServices } from 'services/betaSeriesClient';
import { Movie } from 'models/Movie';
import { useRouterProject } from 'utils/router';
import MoviesSlider from 'components/organisms/MoviesSlider';
import moviesMocks from 'mocks/movies.json';

interface IHomeProps {
  popularShows: PopularShow[];
  popularMovies: Movie[];
}

async function getPopularMoviesAsMovies() {
  // With this endpoint (/movies/list) we don't have the picture for each movie, we need to call the detail api for
  // each movie to get it
  // That's why in development mode we store the results in a json file instead of making multiple
  // requests
  if (process.env.NODE_ENV === 'development') {
    return moviesMocks as Movie[];
  }

  const popularMovies = await betaSeriesServices.fetchPopularMovies();

  return Promise.all(popularMovies.map((item) => betaSeriesServices.fetchDetailMovie(item.id)));
}

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const popularShows = await betaSeriesServices.fetchPopularShows();

  const popularMovies = await getPopularMoviesAsMovies();

  return {
    props: {
      popularShows,
      popularMovies,
    },
  };
};

const Home: React.FunctionComponent<IHomeProps> = ({ popularShows, popularMovies }) => {
  const { popularShowsRouting, detailShowRouting } = useRouterProject();

  return (
    <>
      <ApplicationHeader onResultSelect={detailShowRouting.redirection} />
      <ShowsSlider
        title="Popular Shows"
        subtitle="See all popular shows"
        link={popularShowsRouting.href()}
        shows={popularShows}
        onClickAllShows={popularShowsRouting.redirection}
        onClickShow={detailShowRouting.redirection}
      />

      <MoviesSlider title="Popular Movies" movies={popularMovies} />
    </>
  );
};

export default Home;
