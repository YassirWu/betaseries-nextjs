import React from 'react';
import { Icon as IconComponent, IconProps } from 'semantic-ui-react';

type IconComponentProps = IconProps;

const Icon: React.FunctionComponent<IconComponentProps> = (props) => {
  return <IconComponent {...props} />;
};

export default Icon;
