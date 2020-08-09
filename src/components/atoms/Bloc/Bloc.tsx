import React from 'react';
import { Segment, SegmentProps } from 'semantic-ui-react';

type BlocProps = SegmentProps;

const Bloc: React.FunctionComponent<BlocProps> = ({ children, ...otherProps }) => {
  return <Segment {...otherProps}>{children}</Segment>;
};

export default Bloc;
