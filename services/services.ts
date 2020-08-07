import axios from 'axios';

const BETASERIES_API_BASEURL = 'https://api.betaseries.com';

interface IErrorResponseBetaSeriesApi {
  code: number;
  text: string;
}

interface IResponseBetaSeriesApi {
  errors: IErrorResponseBetaSeriesApi[];
}

export interface IPopularShow {
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
}

interface IPopularShowsResponseApi extends IResponseBetaSeriesApi {
  shows: IPopularShow[];
}

const client = axios.create({
  baseURL: BETASERIES_API_BASEURL,
})

export async function fetchPopularShows(limit = 20, start = 0) {
  const response = await client.get<IResponseBetaSeriesApi>('/shows/list', {
    params: {
      key: process.env.NEXT_PUBLIC_BETASERIES_KEY,
      limit,
      order: 'popularity',
      start,
      summary: false,
    },
  });

  const { shows } = response.data as IPopularShowsResponseApi;

  return shows;
}