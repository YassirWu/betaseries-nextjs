import React from 'react';
import { Visibility as VisibilityComponent, VisibilityProps } from 'semantic-ui-react';

type VisibilityComponentProps = VisibilityProps;

const Visibility: React.FunctionComponent<VisibilityComponentProps> = ({ children, ...otherProps }) => {
  return <VisibilityComponent {...otherProps}>{children}</VisibilityComponent>;
};

export default Visibility;
