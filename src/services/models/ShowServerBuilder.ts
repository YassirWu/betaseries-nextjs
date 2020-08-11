import ShowServer, { GenresServer, PlatformByCategoryServer } from './ShowServer';

export default class ShowServerBuilder {
  private _showServer: ShowServer;

  constructor() {
    this._showServer = {
      id: 0,
      title: '',
      status: '',
      images: {
        poster: '',
      },
      description: '',
      genres: {},
    };
  }

  public setId(id: number): this {
    this._showServer.id = id;
    return this;
  }
  public setTitle(title: string): this {
    this._showServer.title = title;
    return this;
  }
  public setDescription(description: string): this {
    this._showServer.description = description;
    return this;
  }
  public setStatus(status: string): this {
    this._showServer.status = status;
    return this;
  }
  public setGenre(genres: GenresServer): this {
    this._showServer.genres = genres;
    return this;
  }
  public setPlatforms(platforms: PlatformByCategoryServer): this {
    this._showServer.platforms = platforms;
    return this;
  }
  public build(): ShowServer {
    return this._showServer;
  }
}
