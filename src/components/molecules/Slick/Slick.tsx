import React from 'react';
import Slider from 'react-slick';
import Icon from 'components/atoms/Icon';
import { makeStyles } from '@material-ui/styles';

function PreviousArrow(props) {
  return <Icon {...props} name="chevron left" />;
}
function NextArrow(props) {
  return <Icon {...props} name="chevron right" />;
}

const useStyle = makeStyles({
  root: {
    '& .slick-slide': {
      padding: '0 10px',
    },
    '& .slick-arrow:before': {
      color: '#000',
      fontFamily: 'inherit',
    },
  },
});

const Slick: React.FunctionComponent = ({ children }) => {
  const classes = useStyle();
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
    className: classes.root,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Slick;
