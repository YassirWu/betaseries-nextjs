import React from 'react';
import { Search } from 'semantic-ui-react';
import debounce from 'lodash.debounce';
import useSWR from 'swr';
import { searchShows, Show } from 'services/services';

type SearchResultData = {
  title: string;
  data: Show;
};

function mapShowsToSearchResultData(shows?: Show[]): SearchResultData[] {
  if (!shows) {
    return [];
  }
  return shows.map(
    (show): SearchResultData => ({
      title: show.title,
      data: { ...show },
    })
  );
}

type SearchShowsProps = {
  onResultSelect: (id: number) => void;
};

const SearchShows: React.FunctionComponent<SearchShowsProps> = ({ onResultSelect }) => {
  const [valueSearch, setValueSearch] = React.useState<string | undefined>(undefined);
  const { data: shows, error } = useSWR(
    valueSearch ? ['/search/all', valueSearch] : null,
    (url, value) => searchShows(value)
  );

  return (
    <Search
      loading={!!(valueSearch && !shows)}
      results={mapShowsToSearchResultData(shows)}
      onSearchChange={debounce((e, { value }) => setValueSearch(value), 500)}
      resultRenderer={({ title }) => <div>{title}</div>}
      onResultSelect={(e, data) => onResultSelect(data.result.data.id)}
      showNoResults={false}
      placeholder="Search a show"
    />
  );
};

export default SearchShows;
