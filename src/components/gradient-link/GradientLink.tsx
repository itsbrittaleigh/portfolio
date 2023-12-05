import React from 'react';
import { Link } from 'react-router-dom';
import './gradient-link.css';

interface IGradientLinkProps {
  className?: string;
  href: string;
  isRRLink?: boolean;
  newTab?: boolean;
  text: React.ReactNode;
}

const GradientLink: React.FC<IGradientLinkProps> = ({
  className = '',
  isRRLink = false,
  href,
  newTab = false,
  text,
}) => (
  <>
    {isRRLink ? (
      <Link className={`gradient-link ${className}`} to={href}>{text}</Link>
     ) : (
      <a
        className={`gradient-link ${className}`}
        href={href}
        rel={newTab ? 'noreferrer' : ''}
        target={newTab ? '_blank' : '_self'}
      >
        {text}
      </a>
     )}
  </>
);

export default GradientLink;
