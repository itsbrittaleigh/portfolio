import styled from "styled-components";

export const NavigationMenuWrapper = styled.nav<{ $isOpen: boolean }>`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  height: 100vh;
  left: 0;
  position: fixed;
  top: ${({ $isOpen }) => ($isOpen ? '0' : '-100vh')};
  transition: 0.4s ease-in;
  width: 100vw;
  z-index: 2;
`;

export const NavigationMenuList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`;

export const NavigationMenuLink = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  display: block;
  margin-bottom: 8px;
  padding: 8px 0;
  text-decoration: none;
  
  * {
    font-size: 28px;
    @media only screen and (min-width: 768px) {
      font-size: 48px;
    }
  }
`;
