import React from 'react';
import './navigation-menu.css';

interface INavigationMenuProps {
  isOpen: boolean;
}

const NavigationMenu: React.FC<INavigationMenuProps> = ({ isOpen }) => {
  return (
    <nav className={`navigation-menu ${isOpen ? 'is-open' : ''}`}>
      <ul className="navigation-menu__list">
        <li className="navigation-menu__list-item">
          <a className="navigation-menu__link" href="/about">About</a>
        </li>
        <li className="navigation-menu__list-item">
          <a className="navigation-menu__link" href="/projects">Projects</a>
        </li>
        <li className="navigation-menu__list-item">
          <a
            className="navigation-menu__link"
            href="/britta-rodenbeck__resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
