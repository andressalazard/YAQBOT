import React, { useEffect } from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import styles from './RenderTemplate.module.css';
import { useProfile } from '../../context/ProfileContext';
import { useAppSelector } from '../../../hooks/hook';

interface RenderProps {
  children: React.ReactNode;
}

const RenderTemplate: React.FC<RenderProps> = ({ children }) => {
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
    <div className={styles.page}>
      <Header
        userAvatar={
          profile?.avatar ||
          'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg'
        }
        profileMenuHeader={{
          username: user?.username || 'testUser',
          email: user?.email || 'test@email.com',
          photo:
            profile?.avatar ||
            'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg',
        }}
      />

      {children}

      <Footer />
    </div>
  );
};

export default RenderTemplate;
