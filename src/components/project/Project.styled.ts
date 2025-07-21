import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const gradientHover = keyframes`
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
`;

export const ProjectLink = styled(Link)`
  border: 0px solid ${({ theme }) => theme.divider};
  border-bottom-width: 1px;
  color: ${({ theme }) => theme.textPrimary};
  display: block;
  padding: 24px;
  position: relative;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};

  &:after {
    animation: ${gradientHover} 2s ease-in-out infinite;
    background: linear-gradient(to right, #8DA1B9, #EF959C, #95ADB6);
    background-size: 200% 200%;
    bottom: 0;
    content: '';
    height: 3px;
    left: 0;
    position: absolute;
    transition: ${({ theme }) => theme.transition};
    width: 0;
  }

  &:first-of-type {
    border-top-width: 1px;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const ProjectTitle = styled.h3`
  margin-top: 0;
`;

export const ProjectDescription = styled.p`
  margin: 0;
`;
