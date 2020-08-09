import React from 'react';
import { Header as HeaderComponent, HeaderProps, HeaderContentProps, HeaderSubheaderProps } from 'semantic-ui-react';

type HeaderComponentProps = HeaderProps;
type HeaderContentComponentProps = HeaderContentProps;
type HeaderSubheaderComponentProps = HeaderSubheaderProps;

const Header: React.FunctionComponent<HeaderComponentProps> = ({ children, ...otherProps }) => {
  return <HeaderComponent {...otherProps}>{children}</HeaderComponent>;
};

export const HeaderContent: React.FunctionComponent<HeaderContentComponentProps> = ({ children, ...otherProps }) => {
  return <HeaderComponent.Content {...otherProps}>{children}</HeaderComponent.Content>;
};
export const HeaderSubheader: React.FunctionComponent<HeaderSubheaderComponentProps> = ({
  children,
  ...otherProps
}) => {
  return <HeaderComponent.Subheader {...otherProps}>{children}</HeaderComponent.Subheader>;
};

export default Header;
