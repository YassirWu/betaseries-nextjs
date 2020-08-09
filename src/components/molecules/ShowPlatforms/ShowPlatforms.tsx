import React from 'react';
import { PlatformByCategory } from 'services/services';
import Header, { HeaderContent } from 'components/atoms/Header';
import Image from 'components/atoms/Image';
import { List } from 'semantic-ui-react';

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
            <Image avatar src={platform.logo} />
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default ShowPlatforms;
