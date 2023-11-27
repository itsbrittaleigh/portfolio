import React, { useState } from 'react';
import BurgerButton from '../burger-menu/BurgerButton';
import NavigationMenu from '../navigation-menu/NavigationMenu';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header>
      <BurgerButton menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <NavigationMenu isOpen={menuIsOpen} />
    </header>
  );
};

export default Header;
