import { PopularShow, DetailShow, ResultShow } from 'models/Show';
import { PopularShowServer, DetailShowServer, ResultShowServer } from 'services/models/ShowServer';
import { PopularMovieServer, MovieServer } from 'services/models/MovieServer';
import { PopularMovie, Movie } from 'models/Movie';

type MappingFunc<From, To> = (from: From) => To;

export const mappingPopularShowServerToPopularShows: MappingFunc<
  PopularShowServer[],
  PopularShow[]
> = (from) => {
  return from.map((item) => ({
    id: item.id,
    title: item.title,
    status: item.status,
    images: item.images,
    description: item.description,
    genres: item.genres,
    platforms: item.platforms,
  }));
};
export const mappingDetailShowServerToDetailShow: MappingFunc<DetailShowServer, DetailShow> = (
  from
) => {
  return {
    id: from.id,
    title: from.title,
    status: from.status,
    images: from.images,
    description: from.description,
    genres: from.genres,
    platforms: from.platforms,
  };
};
export const mappingResultShowServerToResultShows: MappingFunc<ResultShowServer[], ResultShow[]> = (
  from
) => {
  return from.map((item) => ({
    id: item.id,
    title: item.title,
    status: item.status,
    images: item.images,
    description: item.description,
    genres: item.genres,
    platforms: item.platforms,
  }));
};

export const mappingPopularMoviesServerToPopularMovies: MappingFunc<
  PopularMovieServer[],
  PopularMovie[]
> = (from) => {
  return from.map((item) => ({
    id: Number(item.id),
    title: item.title,
    tmdb_id: item.tmdb_id,
    imdb_id: item.imdb_id,
    production_year: item.production_year,
  }));
};

export const mappingMovieServerToMovies: MappingFunc<MovieServer, Movie> = (from) => {
  return {
    id: Number(from.id),
    title: from.title,
    synopsis: from.synopsis,
    poster: from.poster,
  };
};
