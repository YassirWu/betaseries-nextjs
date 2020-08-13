import React from 'react';

type LinkProps = {
  href: string;
  onClick: () => void;
  className?: string;
};

const Link: React.FunctionComponent<LinkProps> = ({ href, onClick, className, children }) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={className}
    >
      {children}
    </a>
  );
};

export default Link;
