import React from 'react';
import MenuOption from './MenuOption/MenuOption';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  const cartItems = useSelector((state: any) => state.productCart.products);

  return (
    <ul className={className}>
      {navLinks.slice(0, 5).map((link, index) => (
        <MenuOption
          key={index}
          icon={link.icon}
          title={link.title}
          navigateTo={link.navigateTo}
          selected={location.pathname === link.navigateTo}
        />
      ))}
      {cartItems.length > 0 && (
        <div>
          <MenuOption
            icon={navLinks[5].icon}
            title={cartItems.length.toString()}
            navigateTo={navLinks[5].navigateTo}
            selected={location.pathname === navLinks[5].navigateTo}
          />
        </div>
      )}
    </ul>
  );
};

export default NavMenu;
