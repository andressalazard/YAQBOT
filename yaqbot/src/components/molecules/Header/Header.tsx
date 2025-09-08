import styles from '../Header/Header.module.css';
import NavMenu from '../NavMenu/NavMenu';
import Logo from '../../atoms/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavMenu />
    </header>
  );
};

export default Header;
