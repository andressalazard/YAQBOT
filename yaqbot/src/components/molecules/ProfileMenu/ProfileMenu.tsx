import ProfileMenuOption from '../../atoms/profileMenuOption';
import ProfileMenuHeader from '../ProfileMenuHeader/ProfileMenuHeader';

import styles from './ProfileMenu.module.css';

const ProfileMenu = () => {
  const menuOptions = [
    { title: 'Configuración', icon: 'settings', navigateTo: '/settings' },
    { title: 'Cerrar Sesión', icon: 'logout', navigateTo: '/login' },
  ];

  return (
    <div className={styles.profile_menu}>
      <ProfileMenuHeader username='Andrés Salazar' email='asalazar@email.com' />

      <section>
        <ul>
          <>
            {menuOptions.map((option, index) => (
              <li key={index}>
                <ProfileMenuOption title={option.title} icon={option.icon} className={styles.menu_option} />
              </li>
            ))}
          </>
        </ul>
      </section>
    </div>
  );
};

export default ProfileMenu;
