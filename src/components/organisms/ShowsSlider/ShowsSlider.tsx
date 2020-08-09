import React from 'react';
import Header, { HeaderContent, HeaderSubheader } from 'components/atoms/Header';
import Link from 'components/atoms/Link';
import Slick from 'components/molecules/Slick';
import Image from 'components/atoms/Image';
import { Show } from 'services/services';

type ShowsSliderProps = {
  title: string;
  subtitle: string;
  shows: Show[];
  link: string;
  onClickAllShows: () => void;
  onClickShow: (id: number) => void;
};

const ShowsSlider: React.FunctionComponent<ShowsSliderProps> = ({
  title,
  subtitle,
  shows,
  link,
  onClickAllShows,
  onClickShow,
}) => {
  return (
    <>
      <Header as="h2" dividing>
        <HeaderContent>{title}</HeaderContent>
        <HeaderSubheader>
          <Link href={link} onClick={onClickAllShows}>
            {subtitle}
          </Link>
        </HeaderSubheader>
      </Header>
      <Slick>
        {shows.map((show) => (
          <div key={show.id}>
            <Image
              src={show.images.poster}
              as="a"
              href={`/show/${show.id}`}
              onClick={(e) => {
                e.preventDefault();
                onClickShow(show.id);
              }}
            />
          </div>
        ))}
      </Slick>
    </>
  );
};

export default ShowsSlider;
