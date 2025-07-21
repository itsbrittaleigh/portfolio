import styled, { css } from "styled-components";

export const BurgerButtonStyled = styled.button`
  background: ${({ theme }) => theme.backgroundPrimary};
  border: none;
  cursor: pointer;
  left: 16px;
  position: fixed;
  top: 16px;
  z-index: 3;
  padding: 0;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BurgerLine = styled.span<{
  $index: number;
  $isOpen: boolean;
}>`
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  display: block;
  height: 2px;
  left: 50%;
  opacity: 1;
  position: absolute;
  transform: translateX(-50%) rotate(0deg);
  transition: ${({ theme }) => theme.transition};
  width: 24px;
  ${({ $index }) =>
    $index === 0 &&
    css`
      top: 10px;
    `}
  ${({ $index }) =>
    ($index === 1 || $index === 2) &&
    css`
      top: 16px;
    `}
  ${({ $index }) =>
    $index === 3 &&
    css`
      top: 22px;
    `}
  ${({ $isOpen, $index }) =>
    $isOpen &&
    $index === 0 &&
    css`
      top: 10px;
      width: 0;
    `}
  ${({ $isOpen, $index }) =>
    $isOpen &&
    $index === 1 &&
    css`
      transform: translateX(-50%) rotate(45deg);
    `}
  ${({ $isOpen, $index }) =>
    $isOpen &&
    $index === 2 &&
    css`
      transform: translateX(-50%) rotate(-45deg);
    `}
  ${({ $isOpen, $index }) =>
    $isOpen &&
    $index === 3 &&
    css`
      top: 10px;
      width: 0;
    `}
`;

export const BurgerLabel = styled.p`
  font-size: 14px;
  margin: 40px 0 7px;
  text-align: center;
  position: relative;
  z-index: 2;
`;
