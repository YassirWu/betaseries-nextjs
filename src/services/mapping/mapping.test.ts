import {
  mappingPopularShowServerToPopularShows,
  mappingDetailShowServerToDetailShow,
  mappingResultShowServerToResultShows,
} from './mapping';
import { PopularShowServer, DetailShowServer, ResultShowServer } from 'services/models/ShowServer';
import ShowServerBuilder from 'services/models/ShowServerBuilder';

describe('mappingPopularShowServerToPopularShows', () => {
  it('should return mapped popular show', () => {
    const popularsServer: PopularShowServer[] = [
      new ShowServerBuilder()
        .setId(1)
        .setTitle('my first title')
        .setStatus('Ended')
        .setDescription('my first description')
        .setGenre({ Comedie: 'Comedie' })
        .setPlatforms({ svods: [] })
        .build(),
      new ShowServerBuilder()
        .setId(2)
        .setTitle('my second title')
        .setStatus('Continuing')
        .setDescription('my second description')
        .setGenre({ Adventure: 'Adventure' })
        .setPlatforms({ svods: [] })
        .build(),
    ];

    const result = mappingPopularShowServerToPopularShows(popularsServer);

    expect(result).toHaveLength(2);
    expect(result[0].id).toEqual(1);
    expect(result[0].title).toEqual('my first title');
    expect(result[0].status).toEqual('Ended');
    expect(result[0].description).toEqual('my first description');
    expect(result[0].genres).toEqual({ Comedie: 'Comedie' });
    expect(result[0].platforms).toEqual({ svods: [] });

    expect(result[1].id).toEqual(2);
    expect(result[1].title).toEqual('my second title');
    expect(result[1].status).toEqual('Continuing');
    expect(result[1].description).toEqual('my second description');
    expect(result[1].genres).toEqual({ Adventure: 'Adventure' });
    expect(result[1].platforms).toEqual({ svods: [] });
  });
});

describe('mappingDetailShowServerToDetailShow', () => {
  it('should return mapped popular show', () => {
    const detailServer: DetailShowServer = new ShowServerBuilder()
      .setId(1)
      .setTitle('my first title')
      .setStatus('Ended')
      .setDescription('my first description')
      .setGenre({ Comedie: 'Comedie' })
      .setPlatforms({ svods: [] })
      .build();

    const result = mappingDetailShowServerToDetailShow(detailServer);

    expect(result.id).toEqual(1);
    expect(result.title).toEqual('my first title');
    expect(result.status).toEqual('Ended');
    expect(result.description).toEqual('my first description');
    expect(result.genres).toEqual({ Comedie: 'Comedie' });
    expect(result.platforms).toEqual({ svods: [] });
  });
});

describe('mappingResultShowServerToResultShows', () => {
  it('should return mapped popular show', () => {
    const resultServer: ResultShowServer[] = [
      new ShowServerBuilder()
        .setId(1)
        .setTitle('my first title')
        .setStatus('Ended')
        .setDescription('my first description')
        .setGenre({ Comedie: 'Comedie' })
        .setPlatforms({ svods: [] })
        .build(),
      new ShowServerBuilder()
        .setId(2)
        .setTitle('my second title')
        .setStatus('Continuing')
        .setDescription('my second description')
        .setGenre({ Adventure: 'Adventure' })
        .setPlatforms({ svods: [] })
        .build(),
    ];

    const result = mappingResultShowServerToResultShows(resultServer);

    expect(result).toHaveLength(2);
    expect(result[0].id).toEqual(1);
    expect(result[0].title).toEqual('my first title');
    expect(result[0].status).toEqual('Ended');
    expect(result[0].description).toEqual('my first description');
    expect(result[0].genres).toEqual({ Comedie: 'Comedie' });
    expect(result[0].platforms).toEqual({ svods: [] });

    expect(result[1].id).toEqual(2);
    expect(result[1].title).toEqual('my second title');
    expect(result[1].status).toEqual('Continuing');
    expect(result[1].description).toEqual('my second description');
    expect(result[1].genres).toEqual({ Adventure: 'Adventure' });
    expect(result[1].platforms).toEqual({ svods: [] });
  });
});
