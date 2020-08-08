import React from 'react';
import { useSWRInfinite } from 'swr';
import { fetchPopularShows, IPopularShow } from '../../services/services';
import ShowCardItem from '../../components/ShowCardItem';
import { Grid, Segment, Header, Visibility } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/styles';
import LinkNavigation from '../../components/LinkNavigation';

const useStyle = makeStyles({
  item: {
    marginBottom: '20px !important',
  },
  loaderInfinite: {
    height: '100px'
  }
});

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
  const classes = useStyle();
  const { data, error, size, setSize, isValidating } = useSWRInfinite<IPopularShow[]>(getKey, (url, limit, start) => fetchPopularShows(limit, start), { revalidateOnFocus: false });

  if (error) return <p>error</p>;
  if (!data) return <p>loading</p>;

  return (
    <>
      <LinkNavigation to="/" text="Back" icon="reply" />
    
      <Segment basic>
        <Header as="h1">
          <Header.Content>Popular shows</Header.Content>
        </Header>
      </Segment>
      
      <Visibility
        onBottomVisible={() => setSize(size + 1)}
        once={false}
      >
        <Grid columns={2} doubling>
          <Grid.Row>
            {data.map(shows => {
              return (
                <>
                  {shows.map(show => (
                    <Grid.Column key={show.id} className={classes.item}>
                      <ShowCardItem
                        key={show.id}
                        id={show.id}
                        title={show.title}
                        description={show.description}
                        imageUrl={show.images.poster}
                      />
                    </Grid.Column>
                  ))}
                </>
              )
            })}
          </Grid.Row>
        </Grid>
      </Visibility>
      <Segment basic textAlign="center" loading={isValidating} className={classes.loaderInfinite} />
    </>
  );
};
