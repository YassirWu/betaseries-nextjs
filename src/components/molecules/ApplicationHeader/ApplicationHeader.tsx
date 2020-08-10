import React from 'react';
import Bloc from 'components/atoms/Bloc';
import Image from 'components/atoms/Image';
import Header, { HeaderContent, HeaderSubheader } from 'components/atoms/Header';
import SearchShows from '../SearchShows';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  header: {
    '@media (min-width: 768px)': {
      margin: '0 !important',
    },
  },
  search: {
    padding: '0 !important',
    margin: '0 !important',
    '@media (max-width: 768px)': {
      float: 'none !important',
    },
  },
});

type ApplicationHeaderProps = {
  onResultSelect: (id: number) => void;
};

const ApplicationHeader: React.FunctionComponent<ApplicationHeaderProps> = ({ onResultSelect }) => {
  const classes = useStyle();

  return (
    <Bloc clearing>
      <Header floated="left" className={classes.header}>
        <Image src="/images/logo.png" alt="betaseries" />
        <HeaderContent>
          BetaSeries NextJs App
          <HeaderSubheader>
            Simple website using BetaSeries api, NextJs, SWR and Semantic UI
          </HeaderSubheader>
        </HeaderContent>
      </Header>
      <Bloc floated="right" basic className={classes.search}>
        <SearchShows onResultSelect={onResultSelect} />
      </Bloc>
    </Bloc>
  );
};

export default ApplicationHeader;
