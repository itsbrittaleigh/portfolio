import styled, { keyframes } from "styled-components";

const drawDown = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`;

export const SocialLinksSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: fixed;
  right: 24px;
  top: 0;
  &:before {
    animation: ${drawDown} 3s ease-out 0s 1;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    content: '';
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    width: 1px;
    z-index: -1;
  }
`;

export const SocialLinksList = styled.ul`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  padding: 48px 0;
`;

export const SocialLinksItem = styled.li`
  list-style: none;
  margin: 0;
`;

export const SocialLink = styled.a`
  display: block;
  padding: 18px 0;
  & path {
    fill: ${({ theme }) => theme.backgroundSecondary};
    transition: ${({ theme }) => theme.transition};
  }
  &:hover path {
    fill: ${({ theme }) => theme.textAccent};
  }
`;

export const SocialButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  padding: 18px 0;
  & path {
    fill: ${({ theme }) => theme.backgroundSecondary};
    transition: ${({ theme }) => theme.transition};
  }
  &:hover path {
    fill: ${({ theme }) => theme.textAccent};
  }
`;
