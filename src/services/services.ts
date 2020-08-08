import axios from 'axios';

const BETASERIES_API_BASEURL = 'https://api.betaseries.com';

interface IErrorResponseBetaSeriesApi {
  code: number;
  text: string;
}

interface IResponseBetaSeriesApi {
  errors: IErrorResponseBetaSeriesApi[];
}

export type Show = {
  id: number;
  title: string;
  description: string;
  genres: {
    [key: string]: string;
  };
  status: string;
  images: {
    poster: string;
  };
};

export type IPopularShow = Show;

export type IDetailShow = Show;

interface IPopularShowsResponseApi extends IResponseBetaSeriesApi {
  shows: IPopularShow[];
}
interface IDetailShowResponseApi extends IResponseBetaSeriesApi {
  show: IDetailShow;
}

const client = axios.create({
  baseURL: BETASERIES_API_BASEURL,
});

export async function fetchPopularShows(limit = 20, start = 0): Promise<Show[]> {
  const response = await client.get<IPopularShowsResponseApi>('/shows/list', {
    params: {
      key: process.env.NEXT_PUBLIC_BETASERIES_KEY,
      limit,
      order: 'popularity',
      start,
      summary: false,
    },
  });

  return response.data.shows;
}

export async function fetchDetailShow(id: number | string): Promise<Show> {
  const response = await client.get<IDetailShowResponseApi>('/shows/display', {
    params: {
      key: process.env.NEXT_PUBLIC_BETASERIES_KEY,
      id,
    },
  });

  return response.data.show;
}
