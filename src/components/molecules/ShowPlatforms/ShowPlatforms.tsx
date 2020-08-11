import React from 'react';
import Header, { HeaderContent } from 'components/atoms/Header';
import Image from 'components/atoms/Image';
import { List } from 'semantic-ui-react';
import { PlatformByCategory } from 'models/Show';

type ShowPlatformsProps = {
  platforms: PlatformByCategory;
};

const ShowPlatforms: React.FunctionComponent<ShowPlatformsProps> = ({ platforms }) => {
  if (!platforms.svods) {
    return null;
  }

  return (
    <>
      <Header as="h3">
        <HeaderContent>Platforms:</HeaderContent>
      </Header>
      <List horizontal>
        {platforms.svods.map((platform) => (
          <List.Item key={platform.id} as="a" href={platform.link_url} target="_blank">
            <Image avatar src={platform.logo} alt={platform.name} />
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default ShowPlatforms;
