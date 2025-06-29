import styles from '../Header/Header.module.css';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>Logo</div>
      <NavMenu />
    </header>
  );
};

export default Header;
