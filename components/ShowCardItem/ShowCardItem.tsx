import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Segment } from 'semantic-ui-react';

const useStyles = makeStyles({
  image: {
    maxWidth: '100%',
  },
});

interface IShowCardItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ShowCardItem: React.FunctionComponent<IShowCardItemProps> = ({ title, description, imageUrl }) => {
  const classes = useStyles();

  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={6}>
            <img src={imageUrl} alt={title} className={classes.image} />
          </Grid.Column>
          <Grid.Column width={10}>
            <h3>{title}</h3>
            <p>{description}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default ShowCardItem;
