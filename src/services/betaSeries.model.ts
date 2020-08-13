import { PopularShowServer, DetailShowServer, ResultShowServer } from './models/ShowServer';
import { PopularMovieServer, MovieServer } from './models/MovieServer';

interface IErrorResponseBetaSeriesApi {
  code: number;
  text: string;
}

interface IResponseBetaSeriesApi {
  errors: IErrorResponseBetaSeriesApi[];
}

export interface PopularShowsResponseApi extends IResponseBetaSeriesApi {
  shows: PopularShowServer[];
}
export interface DetailShowResponseApi extends IResponseBetaSeriesApi {
  show: DetailShowServer;
}
export interface SearchShowsResponseApi extends IResponseBetaSeriesApi {
  shows: ResultShowServer[];
}
export interface PopularMoviesResponseApi extends IResponseBetaSeriesApi {
  movies: PopularMovieServer[];
}
export interface DetailMovieResponseApi extends IResponseBetaSeriesApi {
  movie: MovieServer;
}

type BetaSeriesParams = {
  key: string;
};

export interface FetchPopularShowsParams extends BetaSeriesParams {
  limit?: number;
  order?: 'alphabetical' | 'popularity' | 'followers';
  start?: number;
  summary?: boolean;
}
export interface FetchDetailShowParams extends BetaSeriesParams {
  id: number | string;
}
export interface SearchShowsParams extends BetaSeriesParams {
  query: string;
  limit?: number;
}
export interface FetchPopularMoviesParams extends BetaSeriesParams {
  limit?: number;
  order?: 'alphabetical' | 'popularity';
  start?: number;
}
export interface FetchDetailMovieParams extends BetaSeriesParams {
  id: number | string;
}
