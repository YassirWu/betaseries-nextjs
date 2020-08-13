import React from 'react';
import Header from 'components/atoms/Header';
import Slick from 'components/molecules/Slick';
import Image from 'components/atoms/Image';
import { Movie } from 'models/Movie';

type MoviesSliderProps = {
  title: string;
  movies: Movie[];
};

const MoviesSlider: React.FunctionComponent<MoviesSliderProps> = ({ title, movies }) => {
  return (
    <>
      <Header as="h2" dividing>
        {title}
      </Header>
      <Slick>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Image src={movie.poster} alt={movie.title} />
          </div>
        ))}
      </Slick>
    </>
  );
};

export default MoviesSlider;
