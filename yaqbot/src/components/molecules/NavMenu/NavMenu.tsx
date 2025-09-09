import { Link } from 'react-router-dom';
import styles from '../NavMenu/NavMenu.module.css';

const NavMenu = () => {
  const navLinks = [
    { label: 'Inicio', href: '/home' },
    { label: 'Perfil', href: '/profile' },
    { label: 'Tienda', href: '/store' },
    { label: 'Inventario', href: '/inventory' },
  ];

  return (
    <ul className={styles.navMenu}>
      {navLinks.map((link, index) => (
        <Link to={link.href} key={index}>
          <li className={styles.navItem}>{link.label}</li>
        </Link>
      ))}
    </ul>
  );
};

export default NavMenu;
