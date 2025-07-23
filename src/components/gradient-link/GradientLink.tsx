import React from 'react';
import { Link } from 'react-router-dom';
import { StyledGradientLink } from './GradientLink.styled';

interface IGradientLinkProps {
  href?: string;
  isRRLink?: boolean;
  newTab?: boolean;
  text: React.ReactNode;
  tabIndex?: number;
  asButton?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}


const GradientLink: React.FC<IGradientLinkProps> = ({
  isRRLink = false,
  asButton = false,
  href = '',
  newTab = false,
  tabIndex = 0,
  text,
  onClick,
  disabled = false,
  ...rest
}) => {
  if (asButton) {
    return (
      <StyledGradientLink
        as="button"
        type="button"
        tabIndex={tabIndex}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {text}
      </StyledGradientLink>
    );
  }
  if (isRRLink) {
    return (
      <StyledGradientLink as={Link} to={href} tabIndex={tabIndex} {...rest}>
        {text}
      </StyledGradientLink>
    );
  }
  return (
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
};

export default GradientLink;
