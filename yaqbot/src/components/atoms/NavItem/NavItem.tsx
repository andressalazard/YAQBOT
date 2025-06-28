import { Link } from 'react-router-dom';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  <li className='whitespace-nowrap'>
    <Link
      to={href}
      className='text-gray-800 hover:text-red-600 transition-colors'
    >
      {label}
    </Link>
  </li>;
};

export default NavItem;
