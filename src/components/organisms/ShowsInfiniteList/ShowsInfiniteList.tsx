import React from 'react';
import Visibility from 'semantic-ui-react/dist/commonjs/behaviors/Visibility';
import { Grid } from 'semantic-ui-react';
import { Show } from 'services/services';
import ShowCardItem from 'components/molecules/ShowCardItem';
import Bloc from 'components/atoms/Bloc';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  item: {
    marginBottom: '20px !important',
  },
  loaderInfinite: {
    height: '100px',
  },
});

type ShowsInfiniteListProps = {
  shows: Show[];
  onLoadMoreShows: () => void;
  isLoading: boolean;
};

const ShowsInfiniteList: React.FunctionComponent<ShowsInfiniteListProps> = ({
  shows,
  onLoadMoreShows,
  isLoading,
}) => {
  const classes = useStyle();

  return (
    <>
      <Visibility onBottomVisible={onLoadMoreShows} once={false}>
        <Grid columns={2} doubling>
          <Grid.Row>
            {shows.map((show) => (
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
          </Grid.Row>
        </Grid>
      </Visibility>
      <Bloc basic textAlign="center" loading={isLoading} className={classes.loaderInfinite} />
    </>
  );
};

export default ShowsInfiniteList;
