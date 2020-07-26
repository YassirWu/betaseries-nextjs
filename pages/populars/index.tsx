import React from 'react';
import useSWR from 'swr';
import { fetchPopularShows, IPopularShow } from '../../services/services';
import ShowCardItem from '../../components/ShowCardItem';
import { Container, Grid } from '@material-ui/core';

export default function Populars() {
  // TODO change useSWR to useSWRInfinite
  const { data: shows, mutate } = useSWR(['/shows/list', 10],(url, limit) => fetchPopularShows(limit), { revalidateOnFocus: false });
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  if (!shows) {
    return <p>loading</p>;
  }

  const onClickFetchMorePopularShow = async () => {
    setIsLoadingMore(true);
    const newShows = await fetchPopularShows(10, shows.length);
    mutate([...shows, ...newShows], false);
    setIsLoadingMore(false);
  };

  return (
    <Container>
      <Grid container spacing={2}>
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
      </Grid>
      <button
        onClick={onClickFetchMorePopularShow}
        disabled={isLoadingMore}
      >Load more popular shows</button>
    </Container>
  );
};
