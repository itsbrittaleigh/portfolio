import React from 'react';
import {
  NavigationMenuWrapper,
  NavigationMenuList,
  NavigationMenuLink
} from './NavigationMenu.styled';
import GradientLink from '../gradient-link/GradientLink';
import { useTheme } from '../../ThemeContext';

interface INavigationMenuProps {
  isOpen: boolean;
}

const NavigationMenu: React.FC<INavigationMenuProps> = ({ isOpen }) => {
  const { toggleTheme, themeMode } = useTheme();

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
        <li>
          <NavigationMenuLink>
            <GradientLink
              onClick={toggleTheme}
              tabIndex={isOpen ? 0 : -1}
              text={themeMode === 'light' ? '🌜 Dark mode' : '☀️ Light mode'}
              asButton
            />
          </NavigationMenuLink>
        </li>
      </NavigationMenuList>
    </NavigationMenuWrapper>
  );
};

export default NavigationMenu;
