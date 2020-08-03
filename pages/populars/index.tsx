import React from 'react';
import useSWR, { useSWRInfinite } from 'swr';
import { fetchPopularShows, IPopularShow } from '../../services/services';
import ShowCardItem from '../../components/ShowCardItem';
import { Container, Grid } from '@material-ui/core';

const getKey = (pageIndex: number, previousPageData?: IPopularShow[]) => {
  if (!previousPageData) {
    return ['/shows/list', 10];
  }
  if (previousPageData.length < 10) {
    return null;
  }
  const start = pageIndex * 10
  return ['/shows/list', 10, start];
}

export default function Populars() {
  const { data, error, size, setSize, isValidating } = useSWRInfinite<IPopularShow[]>(getKey, (url, limit, start) => fetchPopularShows(limit, start), { revalidateOnFocus: false });

  if (error) return <p>error</p>;
  if (!data) return <p>loading</p>;

  return (
    <Container>
      <Grid container spacing={2}>
        {data.map(shows => {
          return (
            <>
              {shows.map(show => (
                <Grid key={show.id} item xs={12} sm={6}>
                  <ShowCardItem
                    key={show.id}
                    title={show.title}
                    description={show.description}
                    imageUrl={show.images.poster}
                  />
                </Grid>
              ))}
            </>
          )
        })}
      </Grid>
      <button
        onClick={() => setSize(size + 1)}
        disabled={isValidating}
      >Load more popular shows</button>
    </Container>
  );
};
