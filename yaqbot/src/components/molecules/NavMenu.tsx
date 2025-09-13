import React from 'react';
import { Link } from 'react-router-dom';

interface NavMenuProps {
  className?: string;
  navLinks: {
    label: string;
    href: string;
  }[];
}

const NavMenu: React.FC<NavMenuProps> = ({ navLinks, className }) => {
  return (
    <ul className={className}>
      {navLinks.map((link, index) => (
        <Link to={link.href} key={index}>
          <li>{link.label}</li>
        </Link>
      ))}
    </ul>
  );
};

export default NavMenu;
