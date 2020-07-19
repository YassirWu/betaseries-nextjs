import React from 'react';
import useSWR from 'swr';
import { fetchPopularShows, IPopularShow } from '../../services/services';

export default function Populars() {
  const { data: shows, mutate } = useSWR('/shows/list',() => fetchPopularShows(15), { revalidateOnFocus: false });
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  if (!shows) {
    return <p>loading</p>;
  }

  const onClickFetchMorePopularShow = () => {
    setIsLoadingMore(true);
    mutate(async (currentShows) => {
      const newShows = await fetchPopularShows(15, currentShows.length);
      setIsLoadingMore(false);
      return [
        ...currentShows,
        ...newShows,
      ]
    }, false);
  };

  return (
    <div>
      <ul>
        {shows.map(show => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
      <button
        onClick={onClickFetchMorePopularShow}
        disabled={isLoadingMore}
      >Load more popular shows</button>
    </div>
  );
};
