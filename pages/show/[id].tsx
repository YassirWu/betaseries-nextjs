import React from 'react';
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { fetchDetailShow, fetchPopularShows, Show } from '../../services/services';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const popularShows = await fetchPopularShows(50);
  const paths = popularShows.map(show => ({
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
  initialData: Show;
}
type GetStaticPropsParams = {
  id: string;
}
export const getStaticProps: GetStaticProps<GetStaticPropsReturn, GetStaticPropsParams> = async ({ params }) => {
  console.log('getStaticProps', params.id)
  const show = await fetchDetailShow(params.id);

  return {
    props: {
      initialData: show,
    }
  }
}

export default function DetailShow({ initialData }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: show, error } = useSWR(['/shows/display', id], (url, id) => fetchDetailShow(id), { initialData });
  
  if (error) return <p>error</p>;
  if (!show) return <p>loading</p>;

  return (
    <>
      <h1>{show.title}</h1>
    </>
  )
}
