import React from 'react';
import {
  NavigationMenuWrapper,
  NavigationMenuList,
  NavigationMenuLink
} from './NavigationMenu.styled';
import GradientLink from '../gradient-link/GradientLink';

interface INavigationMenuProps {
  isOpen: boolean;
}

const NavigationMenu: React.FC<INavigationMenuProps> = ({ isOpen }) => {
  return (
    <NavigationMenuWrapper $isOpen={isOpen}>
      <NavigationMenuList>
        <li>
          <NavigationMenuLink>
            <GradientLink
              tabIndex={isOpen ? 0 : -1}
              href="/about"
              text="About"
            />
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink>
            <GradientLink
              tabIndex={isOpen ? 0 : -1}
              href="/projects"
              text="Projects"
            />
          </NavigationMenuLink>
        </li>
        <li>
          <NavigationMenuLink>
            <GradientLink
              href="/britta-rodenbeck__resume.pdf"
              newTab
              tabIndex={isOpen ? 0 : -1}
              text="Resume"
            />
          </NavigationMenuLink>
        </li>
      </NavigationMenuList>
    </NavigationMenuWrapper>
  );
};

export default NavigationMenu;
