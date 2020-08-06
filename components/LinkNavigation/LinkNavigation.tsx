import React from 'react';
import LinkNext from 'next/link';
import { Typography, Link } from '@material-ui/core';

function CustomLink({ href, children }) {
  return (
    <LinkNext href={href}>
      <a>{children}</a>
    </LinkNext>
  )
}

interface ILinkNavigationProps {
  to: string;
  text: string;
}

const LinkNavigation: React.FunctionComponent<ILinkNavigationProps> = ({ to, text }) => {
  return (
    <Typography>
      <Link component={CustomLink} href={to}>{text}</Link>
    </Typography>
  );
};

export default LinkNavigation;
