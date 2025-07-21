import React from 'react';
import { Link } from 'react-router-dom';
import { StyledGradientLink } from './GradientLink.styled';

interface IGradientLinkProps {
  href: string;
  isRRLink?: boolean;
  newTab?: boolean;
  text: React.ReactNode;
  tabIndex?: number;
}

const GradientLink: React.FC<IGradientLinkProps> = ({
  isRRLink = false,
  href,
  newTab = false,
  tabIndex = 0,
  text,
  ...rest
}) =>
  isRRLink ? (
    <StyledGradientLink as={Link} to={href} tabIndex={tabIndex} {...rest}>
      {text}
    </StyledGradientLink>
  ) : (
    <StyledGradientLink
      href={href}
      rel={newTab ? 'noreferrer' : ''}
      tabIndex={tabIndex}
      target={newTab ? '_blank' : '_self'}
      {...rest}
    >
      {text}
    </StyledGradientLink>
  );

export default GradientLink;
