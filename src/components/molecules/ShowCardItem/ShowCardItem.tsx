import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Header from 'components/atoms/Header';
import Link from 'components/atoms/Link';
import Image from 'components/atoms/Image';

interface IShowCardItemProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ShowCardItem: React.FunctionComponent<IShowCardItemProps> = ({ id, title, description, imageUrl }) => {
  const router = useRouter();
  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Column width={6}>
          <Image src={imageUrl} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as="h2">
            <Link href={`/show/${id}`} onClick={() => router.push('/show/[id]', `/show/${id}`)}>
              {title}
            </Link>
          </Header>
          <p>{description}</p>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default ShowCardItem;
