import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Header from 'components/atoms/Header';
import Link from 'components/atoms/Link';
import Image from 'components/atoms/Image';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  link: {
    color: 'inherit',
    '&:hover': {
      color: 'inherit',
    },
  },
});

interface IShowCardItemProps {
  title: string;
  description: string;
  imageUrl: string;
  onClickShow: () => void;
  hrefShow?: string;
}

const ShowCardItem: React.FunctionComponent<IShowCardItemProps> = ({
  title,
  description,
  imageUrl,
  hrefShow = '#',
  onClickShow,
}) => {
  const classes = useStyle();

  return (
    <Segment>
      <Link href={hrefShow} onClick={onClickShow} className={classes.link}>
        <Grid columns={2}>
          <Grid.Column width={6}>
            <Image src={imageUrl} alt={title} />
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h2">{title}</Header>
            <p>{description}</p>
          </Grid.Column>
        </Grid>
      </Link>
    </Segment>
  );
};

export default ShowCardItem;
