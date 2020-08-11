export type Platform = {
  id: string;
  link_url: string;
  logo: string;
  name: string;
};

export type PlatformByCategory = {
  svods?: Platform[];
};

export type Genres = {
  [key: string]: string;
};

type Show = {
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

export type PopularShow = Show;
export type DetailShow = Show;
export type ResultShow = Show;

export default Show;
