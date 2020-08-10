import React from 'react';
import Bloc from 'components/atoms/Bloc';
import Image from 'components/atoms/Image';
import { Grid } from 'semantic-ui-react';
import Header from 'components/atoms/Header';
import ShowPlatforms from 'components/molecules/ShowPlatforms';
import ShowGenres from 'components/molecules/ShowGenres';
import { Show } from 'services/services';

type DetailShowProps = {
  show: Show;
};

const DetailShow: React.FunctionComponent<DetailShowProps> = ({ show }) => {
  return (
    <Bloc basic>
      <Grid stackable columns="2" divided reversed="computer tablet">
        <Grid.Column width="6">
          <Image src={show.images.poster} alt={show.title} />
        </Grid.Column>
        <Grid.Column width="10">
          <Header as="h1">{show.title}</Header>
          <p>{show.description}</p>
          {show.platforms && <ShowPlatforms platforms={show.platforms} />}
          <ShowGenres genres={show.genres} />
        </Grid.Column>
      </Grid>
    </Bloc>
  );
};

export default DetailShow;
