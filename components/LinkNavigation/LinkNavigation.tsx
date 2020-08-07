import React from 'react';
import Link from 'next/link';
import { Header, Icon, SemanticICONS } from 'semantic-ui-react';


interface ILinkNavigationProps {
  to: string;
  text: string;
  icon?: SemanticICONS;
}

const LinkNavigation: React.FunctionComponent<ILinkNavigationProps> = ({ to, text, icon }) => {
  return (
    <Header as={Link} href={to}>
      <a>
        {icon && <Icon name={icon} />}
        {text}
      </a>
    </Header>
  );
};

export default LinkNavigation;
