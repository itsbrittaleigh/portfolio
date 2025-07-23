import styled, { keyframes } from "styled-components";

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

export const StyledGradientLink = styled.a`
  animation: ${gradientHover} 2s ease-in-out infinite;
  background: linear-gradient(to right, #8DA1B9, #EF959C, #95ADB6);
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 200% 200%;
  color: ${({ theme }) => theme.textPrimary};
  transition: color ${({ theme }) => theme.transition};
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  overflow: visible;

  &:hover {
    color: rgba(0, 0, 0, 0);
  }
`;
