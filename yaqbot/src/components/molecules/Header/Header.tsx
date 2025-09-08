import styles from '../Header/Header.module.css';
import NavMenu from '../NavMenu/NavMenu';
import Logo from '../../atoms/Logo';
import UserIconProfile from '../../atoms/UserIconProfile';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { useSettings } from '../../context/SettingsContext';

const Header = () => {
  const { menuStatus, toggleMenuStatus } = useSettings();
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <NavMenu />
      <UserIconProfile className={styles.user_logo} handleClick={toggleMenuStatus} />
      <>{menuStatus === 'on' ? <ProfileMenu /> : <></>}</>
    </header>
  );
};

export default Header;
