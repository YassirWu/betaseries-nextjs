import React from 'react';
import { Image as ImageComponent, ImageProps } from 'semantic-ui-react';

type ImageComponentProps = ImageProps;

const Image: React.FunctionComponent<ImageComponentProps> = (props) => {
  return <ImageComponent {...props} />;
};

export default Image;
