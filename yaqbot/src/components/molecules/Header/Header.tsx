import styles from '../Header/Header.module.css';
import NavMenu from '../NavMenu/NavMenu';
import Logo from '../../atoms/Logo';
import UserIconProfile from '../../atoms/UserIconProfile';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <NavMenu />
      <UserIconProfile className={styles.user_logo} />
    </header>
  );
};

export default Header;
