import Card from '../../atoms/Card';
import ProfileMenuOption from '../../atoms/profileMenuOption';

import styles from './ProfileMenu.module.css';

const ProfileMenu = () => {
  const menuOptions = [
    { title: 'Configuración', icon: 'settings', navigateTo: '/settings' },
    { title: 'Cerrar Sesión', icon: 'logout', navigateTo: '/login' },
  ];

  return (
    <Card className={styles.profile_menu}>
      <header>
        <span>icon</span>
        <span>nombre de usuario</span>
        <span>correo electronico</span>
      </header>

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
    </Card>
  );
};

export default ProfileMenu;
