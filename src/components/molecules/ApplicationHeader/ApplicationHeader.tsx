import React from 'react';
import Bloc from 'components/atoms/Bloc';
import Image from 'components/atoms/Image';
import Header, { HeaderContent, HeaderSubheader } from 'components/atoms/Header';

const ApplicationHeader: React.FunctionComponent = () => {
  return (
    <Bloc>
      <Header>
        <Image src="/images/logo.png" />
        <HeaderContent>
          BetaSeries NextJs App
          <HeaderSubheader>Simple website using BetaSeries api, NextJs, SWR and Semantic UI</HeaderSubheader>
        </HeaderContent>
      </Header>
    </Bloc>
  );
};

export default ApplicationHeader;
