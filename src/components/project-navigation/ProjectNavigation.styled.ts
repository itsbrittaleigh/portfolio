import styled from "styled-components";

export const ProjectNavigationWrapper = styled.nav`
  color: ${({ theme }) => theme.textPrimary};
  display: flex;
  justify-content: space-between;
  margin: 128px 0;
`;

export const ProjectNavigationLink = styled.div`
  max-width: 48%;
  transition: ${({ theme }) => theme.transition};
  text-align: left;

  &.right {
    text-align: right;
  }
`;
