import React from 'react';
import Slider from "react-slick";
import { Icon } from 'semantic-ui-react';

function PreviousArrow(props) {
  return <Icon {...props} name="chevron left" />;
}
function NextArrow(props) {
  return <Icon {...props} name="chevron right" />;
}

export default function Slick({ children }) {
  const settings = {
    slidesToShow: 5,
    arrows: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}
