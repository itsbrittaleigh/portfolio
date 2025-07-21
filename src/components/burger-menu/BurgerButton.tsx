import React from 'react';
import {
  BurgerButtonStyled,
  BurgerLine,
  BurgerLabel
} from './BurgerButton.styled';

interface IBurgerButtonProps {
  menuIsOpen: boolean;
  setMenuIsOpen: (isOpen: boolean) => void;
}

const BurgerButton: React.FC<IBurgerButtonProps> = ({ menuIsOpen, setMenuIsOpen }) => {
  return (
    <BurgerButtonStyled
      aria-label={menuIsOpen ? 'Close menu' : 'Open menu'}
      onClick={() => setMenuIsOpen(!menuIsOpen)}
    >
      {[0, 1, 2, 3].map((i) => (
        <BurgerLine
          key={i}
          $index={i}
          $isOpen={menuIsOpen}
          aria-hidden
        />
      ))}
      <BurgerLabel>{menuIsOpen ? 'Close' : 'Menu'}</BurgerLabel>
    </BurgerButtonStyled>
  );
};

export default BurgerButton;
