interface IErrorResponseBetaSeriesApi {
  code: number;
  text: string;
}

interface IResponseBetaSeriesApi {
  errors: IErrorResponseBetaSeriesApi[];
}

type Platform = {
  id: string;
  link_url: string;
  logo: string;
  name: string;
};

type PlatformByCategory = {
  svods?: Platform[];
};

type Genres = {
  [key: string]: string;
};

type ShowServer = {
  id: number;
  title: string;
  description: string;
  genres: Genres;
  status: string;
  images: {
    poster: string;
  };
  platforms?: PlatformByCategory;
};

export type PopularShowServer = ShowServer;

export type DetailShowServer = ShowServer;

export type ResultShowServer = ShowServer;

export interface PopularShowsResponseApi extends IResponseBetaSeriesApi {
  shows: PopularShowServer[];
}
export interface DetailShowResponseApi extends IResponseBetaSeriesApi {
  show: DetailShowServer;
}
export interface SearchShowsResponseApi extends IResponseBetaSeriesApi {
  shows: ResultShowServer[];
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
