import ProfileMenuOption from '../../atoms/profileMenuOption';
import ProfileMenuHeader from '../ProfileMenuHeader/ProfileMenuHeader';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { useSettings } from '../../context/SettingsContext';

import { logout } from '../../../features/auth/authSlice';

import styles from './ProfileMenu.module.css';

type OptionsTypes = 'logout' | 'settings';

interface optionsProps {
  title: string;
  icon: string;
  navigateTo?: string;
  type: OptionsTypes;
}

const ProfileMenu = () => {
  const { toggleMenuStatus } = useSettings();
  const menuOptions = [
    { title: 'Configuración', icon: 'settings', navigateTo: '/settings', type: 'settings' },
    { title: 'Cerrar Sesión', icon: 'logout', type: 'logout' },
  ]<optionsProps>;

  const authenticatedUser = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toggleMenuStatus();
  };

  return (
    <div className={styles.profile_menu}>
      <ProfileMenuHeader username={authenticatedUser?.username || 'testUser'} email={authenticatedUser?.email || 'test@email.com'} />

      <section>
        <ul>
          <>
            {menuOptions.map((option, index) => (
              <li key={index}>
                <ProfileMenuOption title={option.title} icon={option.icon} className={styles.menu_option} onClick={option.type === 'logout' ? () => handleLogout() : () => {}} />
              </li>
            ))}
          </>
        </ul>
      </section>
    </div>
  );
};

export default ProfileMenu;
