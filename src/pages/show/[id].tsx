import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetchDetailShow, fetchPopularShows, Show } from 'services/services';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Grid, List } from 'semantic-ui-react';
import Header, { HeaderContent } from 'components/atoms/Header';
import Image from 'components/atoms/Image';
import Bloc from 'components/atoms/Bloc';
import Link from 'components/atoms/Link';
import Icon from 'components/atoms/Icon';

export const getStaticPaths: GetStaticPaths = async () => {
  const popularShows = await fetchPopularShows(50);
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
  initialData?: Show;
};
type GetStaticPropsParams = {
  id: string;
};
export const getStaticProps: GetStaticProps<GetStaticPropsReturn, GetStaticPropsParams> = async ({ params }) => {
  if (!params) {
    return { props: {} };
  }

  const show = await fetchDetailShow(params.id);

  return {
    props: {
      initialData: show,
    },
  };
};

type DetailShowProps = {
  initialData?: Show;
};

const DetailShow: React.FunctionComponent<DetailShowProps> = ({ initialData }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: show, error } = useSWR(['/shows/display', id], (url, id) => fetchDetailShow(id), { initialData });

  if (error) return <p>error</p>;
  if (!show) return <p>loading</p>;

  return (
    <>
      <Link href="/" onClick={() => router.push('/')}>
        <Icon name="reply" />
        Back
      </Link>
      <Bloc basic>
        <Grid stackable columns="2" divided reversed="computer tablet">
          <Grid.Column width="6">
            <Image src={show.images.poster} />
          </Grid.Column>
          <Grid.Column width="10">
            <Header as="h1">{show.title}</Header>
            <p>{show.description}</p>
            {/* Platforms */}
            {show.platforms.svods && (
              <>
                <Header as="h3">
                  <HeaderContent>Platforms:</HeaderContent>
                </Header>
                <List horizontal>
                  {show.platforms.svods.map((platform) => (
                    <List.Item key={platform.id} as="a" href={platform.link_url} target="_blank">
                      <Image avatar src={platform.logo} />
                    </List.Item>
                  ))}
                </List>
              </>
            )}
            {/* Genres */}
            <>
              <Header as="h3">Genres</Header>
              <List horizontal divided>
                {Object.keys(show.genres).map((genre) => (
                  <List.Item key={genre}>{genre}</List.Item>
                ))}
              </List>
            </>
          </Grid.Column>
        </Grid>
      </Bloc>
    </>
  );
};

export default DetailShow;
