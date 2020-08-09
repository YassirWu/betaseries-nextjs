import React from 'react';

type LinkProps = {
  href: string;
  onClick: () => void;
};

const Link: React.FunctionComponent<LinkProps> = ({ href, onClick, children }) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
