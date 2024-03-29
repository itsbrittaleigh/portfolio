import React from 'react';
import './navigation-menu.css';
import GradientLink from '../gradient-link/GradientLink';

interface INavigationMenuProps {
  isOpen: boolean;
}

const NavigationMenu: React.FC<INavigationMenuProps> = ({ isOpen }) => {
  return (
    <nav
      className={`navigation-menu ${isOpen ? 'is-open' : ''}`}
    >
      <ul className="navigation-menu__list">
        <li>
          <GradientLink
      tabIndex={isOpen ? 0 : -1} className="navigation-menu__link" href="/about" text="About" />
        </li>
        <li>
          <GradientLink
      tabIndex={isOpen ? 0 : -1} className="navigation-menu__link" href="/projects" text="Projects" />
        </li>
        <li>
          <GradientLink
            className="navigation-menu__link"
            href="/britta-rodenbeck__resume.pdf"
            newTab
            tabIndex={isOpen ? 0 : -1}
            text="Resume"
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
