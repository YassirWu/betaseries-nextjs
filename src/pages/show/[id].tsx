import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'components/atoms/Link';
import Icon from 'components/atoms/Icon';
import DetailShow from 'components/organisms/DetailShow';
import { DetailShow as DetailShowType } from 'models/Show';
import { betaSeriesServices } from 'services/betaSeriesClient';

export const getStaticPaths: GetStaticPaths = async () => {
  const popularShows = await betaSeriesServices.fetchPopularShows(50);
  const paths = popularShows.map((show) => ({
    params: {
      id: show.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

type GetStaticPropsReturn = {
  initialData?: DetailShowType;
};
type GetStaticPropsParams = {
  id: string;
};
export const getStaticProps: GetStaticProps<GetStaticPropsReturn, GetStaticPropsParams> = async ({
  params,
}) => {
  if (!params) {
    return { props: {} };
  }

  const show = await betaSeriesServices.fetchDetailShow(params.id);

  return {
    props: {
      initialData: show,
    },
  };
};

type DetailShowProps = {
  initialData?: DetailShowType;
};

const DetailShowPage: React.FunctionComponent<DetailShowProps> = ({ initialData }) => {
  const router = useRouter();
  const { data: show, error } = useSWR(
    ['/shows/display', router.query.id],
    (url, id) => betaSeriesServices.fetchDetailShow(id),
    { initialData }
  );

  if (error) return <p>error</p>;
  if (!show) return <p>loading</p>;

  return (
    <>
      <Link href="/" onClick={() => router.push('/')}>
        <Icon name="reply" />
        Back
      </Link>
      <DetailShow show={show} />
    </>
  );
};

export default DetailShowPage;
