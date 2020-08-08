import React from 'react';
import { Grid, Segment, Image, Header } from 'semantic-ui-react';
import LinkNavigation from '../LinkNavigation';

interface IShowCardItemProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ShowCardItem: React.FunctionComponent<IShowCardItemProps> = ({ id, title, description, imageUrl }) => {
  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image src={imageUrl} />
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h3">
              <LinkNavigation to="/show/[id]" as={`/show/${id}`} text={title} />
            </Header>
            <p>{description}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default ShowCardItem;
