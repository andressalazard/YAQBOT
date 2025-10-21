import styles from '../Header/Header.module.css';
import NavMenu from '../../molecules/NavMenu';
import Logo from '../../atoms/Logo';
import ProfileMenu from '../../molecules/ProfileMenu';
import { useSettings } from '../../context/SettingsContext';
import ProfilePhoto from '../../atoms/ProfilePhoto';

interface HeaderProps {
  userAvatar: string;
  profileMenuHeader: {
    username: string;
    email: string;
    photo: string;
  };

  profileMenuOptions: {
    title: string;
    icon: string;
    navigateTo?: string;
    type: 'logout' | 'settings';
  }[];
}

const navMenu = [
  { icon: 'home', title: 'Inicio', navigateTo: '/home' },
  { icon: 'storefront', title: 'Tienda', navigateTo: '/marketplace' },
  { icon: 'notifications', title: 'Notificaciones' },
  { icon: 'account_circle', title: 'Perfil', navigateTo: '/profile' },
];
const Header: React.FC<HeaderProps> = ({ userAvatar, profileMenuHeader, profileMenuOptions }) => {
  const { menuStatus, toggleMenuStatus } = useSettings();

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <NavMenu navLinks={navMenu} className={styles.nav_menu} />
      <ProfilePhoto
        src={userAvatar}
        className={styles.profile_pic}
        handleClick={toggleMenuStatus}
      />
      <>
        {menuStatus === 'on' ? (
          <ProfileMenu
            menuHeader={{
              className: styles.profile_menu,
              username: profileMenuHeader.username,
              email: profileMenuHeader.email,
              photo: profileMenuHeader.photo,
            }}
            menuOptions={profileMenuOptions}
            optionsClassName={styles.profile_menu_option}
          />
        ) : (
          <></>
        )}
      </>
    </header>
  );
};

export default Header;
