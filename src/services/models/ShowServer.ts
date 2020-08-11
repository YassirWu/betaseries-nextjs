type Platform = {
  id: string;
  link_url: string;
  logo: string;
  name: string;
};

export type PlatformByCategoryServer = {
  svods?: Platform[];
};

export type GenresServer = {
  [key: string]: string;
};

type ShowServer = {
  id: number;
  title: string;
  description: string;
  genres: GenresServer;
  status: string;
  images: {
    poster: string;
  };
  platforms?: PlatformByCategoryServer;
};

export type PopularShowServer = ShowServer;

export type DetailShowServer = ShowServer;

export type ResultShowServer = ShowServer;

export default ShowServer;
