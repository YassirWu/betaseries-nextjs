import { ApiManager } from './services';
import {
  PopularShowsResponseApi,
  DetailShowResponseApi,
  SearchShowsResponseApi,
  SearchShowsParams,
  FetchDetailShowParams,
  FetchPopularShowsParams,
  PopularMoviesResponseApi,
  FetchPopularMoviesParams,
  DetailMovieResponseApi,
  FetchDetailMovieParams,
} from './betaSeries.model';
import { PopularShow, DetailShow, ResultShow } from 'models/Show';
import {
  mappingPopularShowServerToPopularShows,
  mappingDetailShowServerToDetailShow,
  mappingResultShowServerToResultShows,
  mappingPopularMoviesServerToPopularMovies,
  mappingMovieServerToMovies,
} from './mapping/mapping';
import { PopularMovie, Movie } from 'models/Movie';

const BETASERIES_API_BASEURL = 'https://api.betaseries.com';

export class BetaSeriesClient extends ApiManager {
  constructor(baseUrl: string, keyApi: string) {
    super(baseUrl, keyApi);
  }

  public async fetchPopularShows(limit = 20, start = 0): Promise<PopularShow[]> {
    const response = await this.get<PopularShowsResponseApi, FetchPopularShowsParams>(
      '/shows/list',
      {
        key: this.keyApi,
        limit,
        order: 'popularity',
        start,
        summary: false,
      }
    );

    return mappingPopularShowServerToPopularShows(response.shows);
  }

  public async fetchDetailShow(id: number | string): Promise<DetailShow> {
    const response = await this.get<DetailShowResponseApi, FetchDetailShowParams>(
      '/shows/display',
      {
        key: this.keyApi,
        id,
      }
    );

    return mappingDetailShowServerToDetailShow(response.show);
  }

  public async searchShows(query: string): Promise<ResultShow[]> {
    const response = await this.get<SearchShowsResponseApi, SearchShowsParams>('/search/all', {
      key: this.keyApi,
      query,
      limit: 10,
    });

    return mappingResultShowServerToResultShows(response.shows);
  }

  public async fetchPopularMovies(limit = 20, start = 0): Promise<PopularMovie[]> {
    const response = await this.get<PopularMoviesResponseApi, FetchPopularMoviesParams>(
      '/movies/list',
      {
        key: this.keyApi,
        limit,
        start,
        order: 'popularity',
      }
    );

    return mappingPopularMoviesServerToPopularMovies(response.movies);
  }

  public async fetchDetailMovie(id: number): Promise<Movie> {
    const response = await this.get<DetailMovieResponseApi, FetchDetailMovieParams>(
      '/movies/movie',
      {
        key: this.keyApi,
        id,
      }
    );

    return mappingMovieServerToMovies(response.movie);
  }
}

export const betaSeriesServices = new BetaSeriesClient(
  BETASERIES_API_BASEURL,
  process.env.NEXT_PUBLIC_BETASERIES_KEY as string
);
