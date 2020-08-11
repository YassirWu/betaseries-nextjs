import { PopularShow, DetailShow, ResultShow } from 'models/Show';
import { PopularShowServer, DetailShowServer, ResultShowServer } from 'services/models/ShowServer';

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
