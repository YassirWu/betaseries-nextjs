import React from 'react';
import Header from 'components/atoms/Header';
import { List } from 'semantic-ui-react';
import { Genres } from 'models/Show';

type ShowGenresProps = {
  genres: Genres;
};

const ShowGenres: React.FunctionComponent<ShowGenresProps> = ({ genres }) => {
  return (
    <>
      <Header as="h3">Genres</Header>
      <List horizontal divided>
        {Object.keys(genres).map((genre) => (
          <List.Item key={genre}>{genre}</List.Item>
        ))}
      </List>
    </>
  );
};

export default ShowGenres;
