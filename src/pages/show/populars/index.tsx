import React from 'react';
import { useSWRInfinite } from 'swr';
import Header from 'components/atoms/Header';
import Link from 'components/atoms/Link';
import Icon from 'components/atoms/Icon';
import ShowsInfiniteList from 'components/organisms/ShowsInfiniteList';
import { PopularShow } from 'models/Show';
import { betaSeriesServices } from 'services/betaSeriesClient';
import { useRouterProject } from 'pages/router';

const getKey = (pageIndex: number, previousPageData: PopularShow[] | null) => {
  if (!previousPageData) {
    return ['/shows/list', 10];
  }
  if (previousPageData.length < 10) {
    return null;
  }
  const start = pageIndex * 10;
  return ['/shows/list', 10, start];
};

const Populars: React.FunctionComponent = () => {
  const { homeRouting, detailShowRouting } = useRouterProject();
  const { data, error, size, setSize, isValidating } = useSWRInfinite<PopularShow[]>(
    getKey,
    (url, limit, start) => betaSeriesServices.fetchPopularShows(limit, start),
    { revalidateOnFocus: false }
  );

  function onLoadMoreShows() {
    if (size && setSize) {
      setSize(size + 1);
    }
  }

  if (error) return <p>error</p>;
  if (!data) return <p>loading</p>;

  const shows = data.flat();

  return (
    <>
      <Link href={homeRouting.href()} onClick={homeRouting.redirection}>
        <Icon name="reply" />
        Back
      </Link>
      <Header as="h1">Popular shows</Header>
      <ShowsInfiniteList
        shows={shows}
        onLoadMoreShows={onLoadMoreShows}
        isLoading={isValidating}
        getHref={detailShowRouting.href}
        onClickShow={detailShowRouting.redirection}
      />
    </>
  );
};

export default Populars;
