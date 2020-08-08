import React from 'react';
import Link from 'next/link';
import { Header, Icon, SemanticICONS } from 'semantic-ui-react';


interface ILinkNavigationProps {
  to: string;
  as?: string;
  text: string;
  icon?: SemanticICONS;
}

const LinkNavigation: React.FunctionComponent<ILinkNavigationProps> = ({ to, as, text, icon }) => {
  return (
    <Header>
      <Link href={to} as={as || to}>
        <a>
          {icon && <Icon name={icon} />}
          {text}
        </a>
      </Link>
    </Header>
  );
};

export default LinkNavigation;
