import React from 'react';
import { makeStyles, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '10px',
  },
  image: {
    maxWidth: '100%',
  },
  descriptionBloc: {
    padding: '0 10px',
  }
});

interface IShowCardItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ShowCardItem: React.FunctionComponent<IShowCardItemProps> = ({ title, description, imageUrl }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <img src={imageUrl} alt={title} className={classes.image} />
        </Grid>
        <Grid item xs={8} className={classes.descriptionBloc}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ShowCardItem;
