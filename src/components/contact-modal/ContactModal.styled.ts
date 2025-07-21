import styled from "styled-components";

export const ModalSection = styled.section``;

export const ModalOverlay = styled.div<{ $isActive: boolean }>`
  background-image: linear-gradient(148deg, rgba(15, 15, 15,0.04) 0%, rgba(15, 15, 15,0.04) 35%,rgba(113, 113, 113,0.04) 35%, rgba(113, 113, 113,0.04) 42%,rgba(210, 210, 210,0.04) 42%, rgba(210, 210, 210,0.04) 100%),linear-gradient(70deg, rgba(15, 15, 15,0.04) 0%, rgba(15, 15, 15,0.04) 25%,rgba(113, 113, 113,0.04) 25%, rgba(113, 113, 113,0.04) 30%,rgba(210, 210, 210,0.04) 30%, rgba(210, 210, 210,0.04) 100%),linear-gradient(65deg, rgba(15, 15, 15,0.04) 0%, rgba(15, 15, 15,0.04) 13%,rgba(113, 113, 113,0.04) 13%, rgba(113, 113, 113,0.04) 27%,rgba(210, 210, 210,0.04) 27%, rgba(210, 210, 210,0.04) 100%),linear-gradient(90deg, rgb(18,18,18),rgb(18,18,18));
  height: 100vh;
  left: 0;
  opacity: ${({ $isActive }) => ($isActive ? 0.9 : 0)};
  pointer-events: ${({ $isActive }) => ($isActive ? 'all' : 'none')};
  position: fixed;
  top: 0;
  transition: ${({ theme }) => theme.transition};
  width: 100vw;
  z-index: 3;
`;

export const ModalCard = styled.div<{ $isActive: boolean }>`
  background: ${({ theme }) => theme.backgroundPrimary};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.25);
  left: 50%;
  max-width: 640px;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  padding: 48px 24px;
  pointer-events: ${({ $isActive }) => ($isActive ? 'all' : 'none')};
  position: fixed;
  top: ${({ $isActive }) => ($isActive ? '50%' : '70%')};
  transform: translate(-50%, -50%);
  transition: ${({ theme }) => theme.transition};
  width: 95vw;
  z-index: 4;
`;

export const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 24px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ContactModalTitle = styled.h2`
  text-align: center;
  margin: 0 0 48px;
`;

export const ErrorsContainer = styled.ul`
  margin: 0 0 48px;
  padding: 0;
  &:empty {
    margin: 0;
  }
`;

export const ErrorItem = styled.li`
  color: ${({ theme }) => theme.textError};
  list-style: none;
  text-align: center;
  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export const Success = styled.p`
  margin: 0 0 48px;
  text-align: center;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 12px;
`;

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  display: block;
  font-size: 16px;
  margin: 6px 0 24px;
  padding: 12px;
  width: 100%;
`;

export const StyledTextarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  display: block;
  font-size: 16px;
  margin: 6px 0 24px;
  padding: 12px;
  width: 100%;
  height: 150px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  border: none;
  color: ${({ theme }) => theme.backgroundPrimary};
  cursor: pointer;
  letter-spacing: 1px;
  padding: 12px 24px;
  position: relative;
  transition: ${({ theme }) => theme.transition};
  overflow: hidden;

  &:after {
    animation: gradientHover 2s ease-in-out infinite;
    background: linear-gradient(to right, #8DA1B9, #EF959C, #95ADB6);
    background-size: 200% 200%;
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &:hover {
    background: rgba(0, 0, 0, 0);
  }
`;
