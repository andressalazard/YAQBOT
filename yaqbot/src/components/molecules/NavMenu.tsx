import React from 'react';
import MenuOption from './MenuOption/MenuOption';
import { useLocation } from 'react-router-dom';

interface NavMenuProps {
  className?: string;
  navLinks: {
    icon: string;
    title: string;
    navigateTo?: string;
  }[];
}

const NavMenu: React.FC<NavMenuProps> = ({ navLinks, className }) => {
  const location = useLocation();

  return (
    <ul className={className}>
      {navLinks.map((link, index) => (
        <MenuOption
          key={index}
          icon={link.icon}
          title={link.title}
          navigateTo={link.navigateTo}
          selected={location.pathname === link.navigateTo}
        />
      ))}
    </ul>
  );
};

export default NavMenu;
