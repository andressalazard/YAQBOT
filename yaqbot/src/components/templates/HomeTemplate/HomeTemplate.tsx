import { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/hook';
import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';
import styles from './HomeTemplate.module.css';
import { useProfile } from '../../context/ProfileContext';
import Toast from '../../atoms/Toast/Toast';

const HomeTemplate = () => {
  const { getUserData } = useProfile();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useAppSelector((state) => state.user.user);
  const profile = useAppSelector((state) => state.user.profile);

  useEffect(() => {
    if (isAuthenticated) {
      getUserData();
    }
  }, [isAuthenticated, getUserData]);

  return (
    <div className={styles.home}>
      <Header
        userAvatar={profile?.avatar || 'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg'}
        navMenu={[{ label: 'Tienda', href: '/store' }]}
        profileMenuHeader={{
          username: user?.username || 'testUser',
          email: user?.email || 'test@email.com',
          photo: profile?.avatar || 'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg',
        }}
        profileMenuOptions={[
          { title: 'Configuración', icon: 'settings', navigateTo: '/settings', type: 'settings' },
          { title: 'Cerrar Sesión', icon: 'logout', type: 'logout' },
        ]}
      />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
