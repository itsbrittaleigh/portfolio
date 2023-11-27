import React from 'react';
import './burger-button.css';

interface IBurgerButtonProps {
  menuIsOpen: boolean;
  setMenuIsOpen: (isOpen: boolean) => void;
}

const BurgerButton: React.FC<IBurgerButtonProps> = ({ menuIsOpen, setMenuIsOpen }) => {

  return (
    <div className={menuIsOpen ? 'is-open' : ''}>
      <button
        aria-label={menuIsOpen ? 'Close menu' : 'Open menu'}
        className="burger-button"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <span aria-hidden className="burger-button__line" />
        <span aria-hidden className="burger-button__line" />
        <span aria-hidden className="burger-button__line" />
        <span aria-hidden className="burger-button__line" />
        <p className="burger-button__label">{menuIsOpen ? 'Close' : 'Menu'}</p>
      </button>
    </div>
  );
};

export default BurgerButton;
